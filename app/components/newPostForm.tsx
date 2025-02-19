"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { User, ImageIcon, Hash, X, Send } from "lucide-react";
import { useOutletContext } from "react-router";
import type ShortUserDTO from "~/services/api/DTO/ShortUserDTO";
import { setPostForm } from "~/services/api/PostController";
import HashtagDTO from "~/services/api/DTO/HashtagDTO";
import PostDTO from "~/services/api/DTO/PostDTO";

const MAX_CONTENT_LENGTH = 500;

type OutletContextType = {
	currentUser: ShortUserDTO;
};

interface NewPostFormProps {
	onPostCreated: () => void;
}

const NewPostForm: React.FC<NewPostFormProps> = ({ onPostCreated }) => {
	const [content, setContent] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [hashtags, setHashtags] = useState<string[]>([]);
	const [currentHashtag, setCurrentHashtag] = useState("");
	const [isImageValid, setIsImageValid] = useState<boolean | null>(null);
	const { currentUser } = useOutletContext<OutletContextType>();

	const validateImageUrl = (url: string) => {
		return new Promise((resolve) => {
			const img = new Image();
			img.onload = () => resolve(true);
			img.onerror = () => resolve(false);
			img.src = url;
		});
	};

	useEffect(() => {
		const validateImage = async () => {
			if (imageUrl) {
				const isValid = await validateImageUrl(imageUrl);
				setIsImageValid(isValid as boolean);
			} else {
				setIsImageValid(null);
			}
		};
		validateImage();
	}, [imageUrl, validateImageUrl]);

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (e.target.value.length <= MAX_CONTENT_LENGTH) {
			setContent(e.target.value);
		}
	};

	const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setImageUrl(e.target.value);
	};

	const handleHashtagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentHashtag(e.target.value.replace(/\s+/g, ""));
	};

	const addHashtag = () => {
		if (currentHashtag && !hashtags.includes(currentHashtag)) {
			setHashtags([...hashtags, currentHashtag]);
			setCurrentHashtag("");
		}
	};

	const removeHashtag = (tag: string) => {
		setHashtags(hashtags.filter((t) => t !== tag));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (content.trim() && isImageValid !== false) {
			try {
				const newPost = new PostDTO();
				newPost.user = currentUser;
				newPost.imageAttached= imageUrl; 
				newPost.content = content;
				newPost.hashtags = hashtags.map(
					(hashtag) => new HashtagDTO(undefined, hashtag)
				);
				await setPostForm(newPost);
				onPostCreated();
				setContent("");
				setImageUrl("");
				setHashtags([]);
			} catch (error) {
				console.error("Error al crear el post:", error);
			}
		}
	};

	return (
		<div className="bg-gray-900 text-white rounded-lg p-4 max-w-md mx-auto mb-4">
			<div className="flex items-center mb-4">
				<User className="w-10 h-10 text-gray-400 mr-2" />
				<span className="font-semibold">{currentUser.username}</span>
			</div>
			<form onSubmit={handleSubmit}>
				<textarea
					value={content}
					onChange={handleContentChange}
					placeholder="¿Qué estás pensando?"
					className="w-full bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none resize-none h-24 mb-2"
					maxLength={MAX_CONTENT_LENGTH}
				/>
				<div className="text-sm text-gray-400 mb-2">
					{content.length}/{MAX_CONTENT_LENGTH} caracteres
				</div>
				<div className="flex mb-2">
					<input
						type="text"
						value={imageUrl}
						onChange={handleImageUrlChange}
						placeholder="URL de la imagen"
						className="flex-grow bg-gray-800 text-white rounded-l-md py-2 px-3 focus:outline-none"
					/>
					<div className="bg-gray-700 rounded-r-md px-3 flex items-center">
						<ImageIcon
							className={`w-5 h-5 ${
								isImageValid === true
									? "text-green-500"
									: isImageValid === false
									? "text-red-500"
									: "text-gray-400"
							}`}
						/>
					</div>
				</div>
				<div className="flex mb-2">
					<input
						type="text"
						value={currentHashtag}
						onChange={handleHashtagChange}
						placeholder="Añadir hashtag"
						className="flex-grow bg-gray-800 text-white rounded-l-md py-2 px-3 focus:outline-none"
					/>
					<button
						type="button"
						onClick={addHashtag}
						className="cursor-pointer  disabled:cursor-auto bg-green-500 text-white rounded-r-md px-3 py-2 focus:outline-none"
					>
						<Hash className="w-5 h-5" />
					</button>
				</div>
				<div className="flex flex-wrap mb-2">
					{hashtags.map((tag) => (
						<span
							key={tag}
							className="bg-gray-700 text-white rounded-full px-2 py-1 text-sm mr-2 mb-2 flex items-center"
						>
							#{tag}
							<button
								type="button"
								onClick={() => removeHashtag(tag)}
								className="cursor-pointer disabled:cursor-auto ml-1 focus:outline-none"
							>
								<X className="w-4 h-4" />
							</button>
						</span>
					))}
				</div>
				<button
					type="submit"
					disabled={
						!content.trim() || (imageUrl !== "" && !isImageValid)
					}
					className="cursor-pointer disabled:cursor-auto w-full bg-green-500 text-white rounded-md py-2 px-3 focus:outline-none disabled:opacity-50 flex items-center justify-center"
				>
					<Send className="w-5 h-5 mr-2" />
					Publicar
				</button>
			</form>
		</div>
	);
};

export default NewPostForm;
