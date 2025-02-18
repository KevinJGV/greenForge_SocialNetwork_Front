import React, { useState, useEffect } from "react";
import PostCard from "./postCard";
import { getPosts } from "~/services/api/PostController";
import type ShortUserDTO from "~/services/api/DTO/ShortUserDTO";

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
}

interface PostListProps {
	currentUser: ShortUserDTO;
}

const PostList: React.FC<PostListProps> = ({ currentUser }) => {
	const [posts, setPosts] = useState<Post[]>([]);

	
	useEffect(() => {
		getPosts().then((res: { data: Post[] }) => {
			setPosts(res.data);
			console.log(res.data);
		});
	}, []);

	
	const handleLike = (postId: string) => {
		setPosts((prevPosts) =>
			prevPosts.map((post) =>
				post.id === postId
					? { ...post, likes: { length: post.likes.length + 1 } }
					: post
			)
		);
	};

	
const handleUnlike = (postId: string) => {
    setPosts((prevPosts: Post[]) =>
        prevPosts.map((post) =>
            post.id === postId
                ? { ...post, likes: { length: post.likes.length - 1 } }
                : post
        )
    );
};


const handleAddComment = (postId: string, comment: string) => {
    setPosts((prevPosts: Post[]) =>
        prevPosts.map((post) =>
            post.id === postId
                ? {
                        ...post,
                        comments: [
                            ...post.comments,
                            {
                                user: {
                                    username: currentUser?.$username || "",
                                    profilephotouri: currentUser?.$profilephotouri || ""
                                },
                                content: comment,
                                tags: [],
                            },
                        ],
                    }
                : post
        )
    );
};
	return (
		<section className="flex flex-wrap space-y-4 place-items-center">
			{posts.map((post) => (
				<PostCard
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
					onLike={() => handleLike(post.id)}
					onUnlike={() => handleUnlike(post.id)}
					onAddComment={(comment: string) =>
						handleAddComment(post.id, comment)
					}
				/>
			))}
		</section>
	);
};

export default PostList;
