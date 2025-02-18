import React from "react";
import {
	Heart,
	MessageCircle,
	Send,
	User,
	ChevronDown,
	ChevronUp,
} from "lucide-react";
import { useState } from "react";
import ShortUserDTO from "~/services/api/DTO/ShortUserDTO";
import { useOutletContext } from "react-router";
import CommentDTO from "~/services/api/DTO/CommentDTO";
import TagDTO from "~/services/api/DTO/TagDTO";
import { setComment } from "~/services/api/PostController";

interface Comment {
	user: string;
	text: string;
}

interface CardProps {
	post : Object;
	username: string;
	userImage: string;
	content: string;
	image?: string;
	hashtags: string[];
	likes: number;
	comments: Comment[];
	hasLiked: boolean;
	onLike: () => void;
	onUnlike: () => void;
	onAddComment: (comment: string) => void;
}

type OutletContextType = {
	currentUser: ShortUserDTO;
};

const MAX_CONTENT_LENGTH = 150;
const MAX_COMMENT_LENGTH = 200;

const PostCard: React.FC<CardProps> = ({
	post,
	username,
	userImage,
	content,
	image,
	hashtags,
	likes,
	comments,
	hasLiked,
	onLike,
	onUnlike,
	onAddComment,
}) => {
	const [isPhotoOnError, setIsPhotoOnError] = useState(false);
	const [isImageError, setIsImageError] = useState(false);
	const [localLikes, setLocalLikes] = useState(likes);
	const [showCommentInput, setShowCommentInput] = useState(false);
	const { currentUser } = useOutletContext<OutletContextType>();
	const [commentText, setCommentText] = useState("");
	const [mentionedUsers, setMentionedUsers] = useState<string[]>([]);
	const [showFullContent, setShowFullContent] = useState(false);
	const [expandedComments, setExpandedComments] = useState<
		Record<number, boolean>
	>({});

	const formatComment = (text: string) => {
		return text.replace(
			/@(\w+)/g,
			'<span class="cursor-pointer text-green-500">@$1</span>'
		);
	};

	const handlePhotoOnError = () => {
		setIsPhotoOnError(true);
	};

	const handleImageError = () => {
		setIsImageError(true);
	};

	const handleLikeClick = () => {
		// PENDIENTE AQIU
		if (hasLiked) {
			setLocalLikes(localLikes - 1);
			onUnlike();
		} else {
			setLocalLikes(localLikes + 1);
			onLike();
		}
	};


	const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newText = e.target.value;
		if (newText.length <= MAX_COMMENT_LENGTH) {
			setCommentText(newText);
			const matches = newText.match(/@(\w+)/g) || [];
			setMentionedUsers(matches.map((match) => match.slice(1)));
		}
	};

	const handleCommentSubmit = async () => {
		if (commentText.trim() && commentText.length <= MAX_COMMENT_LENGTH) {
			const newComment = new CommentDTO(
				0,
				currentUser,
				mentionedUsers.map(
					(username, index) =>
						new TagDTO(
							index + 1,
							new ShortUserDTO(0, username, "", "")
						)
				),
				commentText
			);
			 try {
					await setComment(newComment);

					onAddComment(commentText);
					setCommentText("");
					setShowCommentInput(false);
					setMentionedUsers([]);
				} catch (error) {
					console.error("Error al enviar el comentario:", error);
				}
			
		}
	};

	const toggleCommentCollapse = (index: number) => {
		setExpandedComments((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	const truncatedContent =
		content.length > MAX_CONTENT_LENGTH
			? `${content.slice(0, MAX_CONTENT_LENGTH)}...`
			: content;

	return (
		<div className="bg-gray-900 text-white rounded-lg p-4 max-w-md mx-auto">
			<div className="flex items-center mb-4">
				{isPhotoOnError ? (
					<User className="w-10 h-10 text-gray-400 mr-2" />
				) : (
					<img
						src={userImage || "/placeholder.svg"}
						alt={username}
						className="w-10 h-10 rounded-full mr-2"
						onError={handlePhotoOnError}
					/>
				)}
				<span className="font-semibold">{username}</span>
			</div>

			<div className="mb-4">
				<p className="break-words">
					{showFullContent ? content : truncatedContent}
				</p>
				{content.length > MAX_CONTENT_LENGTH && (
					<button
						onClick={() => setShowFullContent(!showFullContent)}
						className="text-green-500 hover:underline focus:outline-none mt-2 flex items-center"
					>
						{showFullContent ? (
							<>
								Ver menos <ChevronUp className="w-4 h-4 ml-1" />
							</>
						) : (
							<>
								Ver más <ChevronDown className="w-4 h-4 ml-1" />
							</>
						)}
					</button>
				)}
			</div>

			{isImageError ? (
				""
			) : (
				<img
					src={image || "/placeholder.svg"}
					alt="Post image"
					className="w-full h-48 object-cover rounded-md mb-4"
					onError={handleImageError}
				/>
			)}

			<div className="flex flex-wrap mb-4">
				{hashtags.map((tag, index) => (
					<span
						key={index}
						className="cursor-pointer text-green-500 mr-2"
					>
						#{tag}
					</span>
				))}
			</div>

			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center">
					<button
						onClick={handleLikeClick}
						className="focus:outline-none"
					>
						<Heart
							className={`w-5 h-5 cursor-pointer ${
								hasLiked
									? "text-green-500 fill-current"
									: "text-green-500"
							} mr-1`}
							aria-label={
								hasLiked ? "Quitar Me Gusta" : "Dar Me Gusta"
							}
						/>
					</button>
					<span>{localLikes}</span>
				</div>
				<div className="flex items-center">
					<button
						onClick={() => setShowCommentInput(!showCommentInput)}
						className="focus:outline-none"
					>
						<MessageCircle className="w-5 h-5 cursor-pointer text-green-500 mr-1" />
					</button>
					<span>{comments.length}</span>
				</div>
			</div>

			{showCommentInput && (
				<div className="mb-4">
					<div className="flex items-start">
						<textarea
							value={commentText}
							onChange={handleCommentChange}
							placeholder="Añade un comentario..."
							className="flex-grow bg-gray-800 text-white rounded-l-md py-2 px-3 focus:outline-none resize-none h-20"
							maxLength={MAX_COMMENT_LENGTH}
						/>
						<button
							onClick={handleCommentSubmit}
							disabled={commentText.length === 0}
							className="bg-green-500 text-white rounded-r-md py-2 px-3 h-20 focus:outline-none disabled:opacity-50"
						>
							<Send className="w-5 h-5" />
						</button>
					</div>
					<div className="text-sm text-gray-400 mt-1">
						{commentText.length}/{MAX_COMMENT_LENGTH} caracteres
					</div>
					{mentionedUsers.length > 0 && (
						<div className="text-sm text-green-500 mt-1">
							Etiquetar: {mentionedUsers.join(", ")}
						</div>
					)}
				</div>
			)}

			<div className="border-t border-gray-700 pt-4">
				{comments.map((comment, index) => {
					const isExpanded = expandedComments[index] || false;
					const truncatedComment =
						comment.text.length > MAX_CONTENT_LENGTH
							? `${comment.text.slice(0, MAX_CONTENT_LENGTH)}...`
							: comment.text;

					return (
						<div key={index} className="mb-3">
							<div>
								<span className="font-semibold mr-2">
									<User className="w-6 h-6 text-gray-400 mr-2 inline" />

									{comment.user}
								</span>
								<span
									dangerouslySetInnerHTML={{
										__html: formatComment(
											isExpanded
												? comment.text
												: truncatedComment
										),
									}}
								/>
								{comment.text.length > MAX_CONTENT_LENGTH && (
									<button
										onClick={() =>
											toggleCommentCollapse(index)
										}
										className="text-green-500 hover:underline focus:outline-none"
									>
										{isExpanded ? "Ver menos" : "Ver más"}
									</button>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default React.memo(PostCard);
