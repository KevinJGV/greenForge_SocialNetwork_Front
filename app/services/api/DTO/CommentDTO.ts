import ShortUserDTO from "./ShortUserDTO";
import TagDTO from "./TagDTO";

export default class CommentDTO {
	private id: number;
	private rawPostId: number | undefined;
	private rawUserId: number | undefined;
	private user: ShortUserDTO;
	private tags: TagDTO[];
	private content: string;

	constructor(
		id: number,
		user: ShortUserDTO,
		tags: TagDTO[],
		content: string
	) {
		this.id = id;
		this.user = user;
		this.tags = tags;
		this.content = content;
	}

    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

	/**
	 * Getter $rawPostId
	 * @return {number | undefined}
	 */
	public get $rawPostId(): number | undefined {
		return this.rawPostId;
	}

	/**
	 * Getter $rawUserId
	 * @return {number | undefined}
	 */
	public get $rawUserId(): number | undefined {
		return this.rawUserId;
	}

    /**
     * Getter $user
     * @return {ShortUserDTO}
     */
	public get $user(): ShortUserDTO {
		return this.user;
	}

    /**
     * Getter $tags
     * @return {TagDTO[]}
     */
	public get $tags(): TagDTO[] {
		return this.tags;
	}

    /**
     * Getter $content
     * @return {string}
     */
	public get $content(): string {
		return this.content;
	}
}

