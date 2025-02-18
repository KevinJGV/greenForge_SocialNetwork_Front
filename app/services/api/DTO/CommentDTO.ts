import ShortUserDTO from "./ShortUserDTO";
import TagDTO from "./TagDTO";

export default class CommentDTO {
	private id: number;
	private rawPostId: number;
	private rawUserId: number;
	private user: ShortUserDTO;
	private tags: TagDTO[];
	private content: string;

	constructor(
		id: number,
		rawPostId: number,
		rawUserId: number,
		user: ShortUserDTO,
		tags: TagDTO[],
		content: string
	) {
		this.id = id;
		this.rawPostId = rawPostId;
		this.rawUserId = rawUserId;
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
     * @return {number}
     */
	public get $rawPostId(): number {
		return this.rawPostId;
	}

    /**
     * Getter $rawUserId
     * @return {number}
     */
	public get $rawUserId(): number {
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

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $rawPostId
     * @param {number} value
     */
	public set $rawPostId(value: number) {
		this.rawPostId = value;
	}

    /**
     * Setter $rawUserId
     * @param {number} value
     */
	public set $rawUserId(value: number) {
		this.rawUserId = value;
	}

    /**
     * Setter $user
     * @param {ShortUserDTO} value
     */
	public set $user(value: ShortUserDTO) {
		this.user = value;
	}

    /**
     * Setter $tags
     * @param {TagDTO[]} value
     */
	public set $tags(value: TagDTO[]) {
		this.tags = value;
	}

    /**
     * Setter $content
     * @param {string} value
     */
	public set $content(value: string) {
		this.content = value;
	}
}

