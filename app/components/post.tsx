import type React from "react"
import { Heart, MessageCircle, User } from "lucide-react"

interface Comment {
  user: string
  text: string
}

interface SpotifyCardProps {
  username: string
  userImage: string
  content: string
  image?: string
  hashtags: string[]
  likes: number
  comments: Comment[]
}

const SpotifyCard: React.FC<SpotifyCardProps> = ({
  username,
  userImage,
  content,
  image,
  hashtags,
  likes,
  comments,
}) => {
  const formatComment = (text: string) => {
    return text.replace(/@(\w+)/g, '<span class="text-green-500">@$1</span>')
  }

  return (
    <div className="bg-gray-900 text-white rounded-lg p-4 max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <img src={userImage || "/placeholder.svg"} alt={username} className="w-10 h-10 rounded-full mr-3" />
        <span className="font-semibold">{username}</span>
      </div>

      <p className="mb-4">{content}</p>

      {image && (
        <img src={image || "/placeholder.svg"} alt="Post image" className="w-full h-48 object-cover rounded-md mb-4" />
      )}

      <div className="flex flex-wrap mb-4">
        {hashtags.map((tag, index) => (
          <span key={index} className="text-green-500 mr-2">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Heart className="w-5 h-5 text-green-500 mr-1" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center">
          <MessageCircle className="w-5 h-5 text-green-500 mr-1" />
          <span>{comments.length}</span>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-start mb-3">
            <User className="w-6 h-6 text-gray-400 mr-2" />
            <div>
              <span className="font-semibold mr-2">{comment.user}</span>
              <span dangerouslySetInnerHTML={{ __html: formatComment(comment.text) }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpotifyCard

