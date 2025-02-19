import ShortUserDTO from "./ShortUserDTO";
import HashtagDTO from "./HashtagDTO";
import LikeDTO from "./LikeDTO";
import CommentDTO from "./CommentDTO";

export default class PostDTO {
	public id: number | undefined;
	public user: ShortUserDTO | undefined;
	public content: string | undefined;
	public imageAttached: string | undefined;
	public uploadDate: Date | undefined;
	public modified: boolean | undefined;
	public hashtags: HashtagDTO[] | undefined;
	public rawHashtags: string[] | undefined;
	public likes: LikeDTO[] | undefined;
	public comments: CommentDTO[] | undefined;

	constructor() {

	}
}
