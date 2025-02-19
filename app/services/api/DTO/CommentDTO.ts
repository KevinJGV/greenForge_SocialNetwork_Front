import ShortUserDTO from "./ShortUserDTO";
import TagDTO from "./TagDTO";

export default class CommentDTO {
	public id: number | undefined;
	public rawPostId: number | undefined;
	public rawUserId: number | undefined;
	public user: ShortUserDTO | undefined;
	public tags: TagDTO[] | undefined;
	public content: string | undefined;

	constructor() {}
}

