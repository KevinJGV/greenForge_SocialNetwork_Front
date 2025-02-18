import type React from "react"
import { Heart, MessageCircle, Send, User } from "lucide-react"
import { useState } from "react";

interface Comment {
  user: string
  text: string
}

interface CardProps {
	username: string;
	userImage: string;
	content: string;
	image?: string;
	hashtags: string[];
	likes: number;
	comments: Comment[];
  onLike: () => void;
  onUnlike: () => void;
  onAddComment: (comment: string) => void;
}

const PostCard: React.FC<CardProps> = ({
	username,
	userImage,
	content,
	image,
	hashtags,
	likes,
	comments,
	onLike,
	onUnlike,
	onAddComment,
}) => {
  const [isPhotoOnError, setIsPhotoOnError] = useState(false);
  const [isImageError, setIsImageError] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const [showCommentInput, setShowCommentInput] = useState(false);
	const [commentText, setCommentText] = useState("");
	const [mentionedUsers, setMentionedUsers] = useState<string[]>([]);

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
		if (isLiked) {
			onUnlike();
		} else {
			onLike();
		}
		setIsLiked(!isLiked);
	};

	const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newText = e.target.value;
		if (newText.length <= 200) {
			setCommentText(newText);
			const matches = newText.match(/@(\w+)/g) || [];
			setMentionedUsers(matches.map((match) => match.slice(1)));
		}
	};

	const handleCommentSubmit = () => {
		if (commentText.trim() && commentText.length <= 200) {
			onAddComment(commentText);
			setCommentText("");
			setShowCommentInput(false);
			setMentionedUsers([]);
		}
	};

	return (
		<div className="bg-gray-900 text-white rounded-lg p-4 max-w-md mx-auto">
			<div className="flex items-center mb-4">
				{isPhotoOnError ? (
					<User className="w-10 h-10 text-gray-400 mr-2" />
				) : (
					<img
						src={userImage}
						alt={username}
						className="w-10 h-10 rounded-full mr-2"
						onError={handlePhotoOnError}
					/>
				)}
				<span className="font-semibold">{username}</span>
			</div>

			<p className="mb-4">{content}</p>

			{isPhotoOnError ? "" : (
        <img
					src={image || "/placeholder.svg"}
					alt="Post image"
					className="w-full h-48 object-cover rounded-md mb-4"
				/>
      )}

			<div className="flex flex-wrap mb-4">
				{hashtags.map((tag, index) => (
					<span
						key={index}
						className="cursor-pointer text-green-500 mr-2"
					>
						{tag}
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
								isLiked
									? "text-green-500 fill-current"
									: "text-green-500"
							} mr-1`}
						/>
					</button>
					<span>{likes + (isLiked ? 0 : 0)}</span>
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
					<div className="flex items-center">
						<input
							type="text"
							value={commentText}
							onChange={handleCommentChange}
							placeholder="Añade un comentario..."
							className="flex-grow bg-gray-800 text-white rounded-l-md py-2 px-3 focus:outline-none"
							maxLength={200}
						/>
						<button
							onClick={handleCommentSubmit}
							disabled={
								commentText.length === 0 ||
								commentText.length > 200
							}
							className="bg-green-500 cursor-pointer text-white rounded-r-md py-2 px-3 focus:outline-none disabled:opacity-50 disabled:cursor-auto"
						>
							<Send className="w-5 h-5" />
						</button>
					</div>
					<div className="text-sm text-gray-400 mt-1">
						{commentText.length}/200 carácteres
					</div>
					{mentionedUsers.length > 0 && (
						<div className="text-sm text-green-500 mt-1">
							Mentioned: {mentionedUsers.join(", ")}
						</div>
					)}
				</div>
			)}

			<div className="border-t border-gray-700 pt-4">
				{comments.map((comment, index) => (
					<div key={index} className="flex items-start mb-3">
						<User className="w-6 h-6 text-gray-400 mr-2" />
						<div>
							<span className="font-semibold mr-2">
								{comment.user}
							</span>
							<span
								dangerouslySetInnerHTML={{
									__html: formatComment(comment.text),
								}}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default PostCard

