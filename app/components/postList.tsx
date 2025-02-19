import type React from "react";
import { useState, useEffect } from "react";
import PostCard from "./postCard";
import {
	checkUserInteractions,
	getPosts,
	setComment,
	updatePost,
} from "~/services/api/PostController";
import type ShortUserDTO from "~/services/api/DTO/ShortUserDTO";
import CommentDTO from "~/services/api/DTO/CommentDTO";
import PostDTO from "~/services/api/DTO/PostDTO";
import HashtagDTO from "~/services/api/DTO/HashtagDTO";
import NewPostForm from './newPostForm';
import { useOutletContext } from "react-router";

interface Post {
	id: string;
	user: {
		username: string;
		profilephotouri: string;
	};
	content: string;
	imageAttached: string;
	hashtags: { name: string }[];
	likes: { length: number };
	comments: {
		user: { username: string; profilephotouri: string };
		content: string;
		tags: { userTagged: { username: string } }[];
	}[];
	hasLiked: boolean;
}

type OutletContextType = {
	currentUser: ShortUserDTO | undefined;
};

const PostList: React.FC = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const { currentUser } = useOutletContext<OutletContextType>();

	console.log(currentUser);
	useEffect(() => {
		const fetchPosts = async () => {
			const res = await getPosts();
			const postsWithInteractions = await Promise.all(
				res.data.map(async (post) => {
					const data = {
						postId: post.id,
						userId: currentUser!.id, 
					};
					const interactions = await checkUserInteractions(data);
					return {
						...post,
						hasLiked: interactions.data.liked,
						hasCommented: interactions.data.commented,
					};
				})
			);
			setPosts(postsWithInteractions);
		};

		
		if (currentUser && currentUser.id) {
			fetchPosts();
		}
	}, [currentUser]);


	const handleToggleLike = (postId: string, hasLiked: boolean) => {
		setPosts((prevPosts) =>
			prevPosts.map((post) =>
				post.id === postId
					? {
							...post,
							likes: {
								length: post.likes.length + (hasLiked ? -1 : 1),
							},
							hasLiked: !hasLiked,
					  }
					: post
			)
		);
	};

	const handleEdit = async (
		postId: string,
		newContent: string,
		newImage: string,
		newHashtags: string[]
	) => {
		try {
			const editedPost = new PostDTO();
			editedPost.id = Number(postId);
			editedPost.content = newContent;
			editedPost.imageAttached = newImage;
			editedPost.hashtags = newHashtags.map(hashtag => new HashtagDTO(undefined, hashtag));
			await updatePost(editedPost);

			setPosts((prevPosts) =>
				prevPosts.map((post) =>
					post.id === postId
						? {
								...post,
								content: newContent,
								imageAttached: newImage,
								hashtags: newHashtags.map((tag) => ({
									name: tag,
								})),
						  }
						: post
				)
			);
		} catch (error) {
			console.error("Error al editar el post:", error);
		}
	};

	return (
		<section className="flex flex-wrap space-y-4 place-items-center">
			<NewPostForm onPostCreated={function (): void {
				throw new Error("Function not implemented.");
			} }/>
			{posts.map((post) => (
				<PostCard
					post={post}
					key={post.id}
					username={post.user.username}
					userImage={post.user.profilephotouri}
					content={post.content}
					image={post.imageAttached}
					hashtags={post.hashtags.map((tag) => tag.name)}
					likes={post.likes.length}
					comments={post.comments.map((comment) => {
						const tagsText = comment.tags
							.map((tag) => `@${tag.userTagged.username}`)
							.join(" ");
						return {
							user: comment.user.username,
							text: tagsText
								? `${comment.content} ${tagsText}`
								: comment.content,
						};
					})}
					hasLiked={post.hasLiked}
					onLike={() => handleToggleLike(post.id, post.hasLiked)}
					onUnlike={() => handleToggleLike(post.id, post.hasLiked)}
				/>
			))}
		</section>
	);
};

export default PostList;
