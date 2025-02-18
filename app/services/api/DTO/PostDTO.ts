import ShortUserDTO from "./ShortUserDTO";
import HashtagDTO from "./HashtagDTO";
import LikeDTO from "./LikeDTO";
import CommentDTO from "./CommentDTO";

export default class PostDTO {
	private id: number;
	private user: ShortUserDTO;
	private content: string;
	private imageAttached: string | null;
	private uploadDate: Date;
	private modified: boolean;
	private hashtags: HashtagDTO[];
	private rawHashtags: string[];
	private likes: LikeDTO[];
	private comments: CommentDTO[];

	constructor(
		id: number,
		user: ShortUserDTO,
		content: string,
		imageAttached: string | null,
		uploadDate: Date,
		modified: boolean,
		hashtags: HashtagDTO[],
		rawHashtags: string[],
		likes: LikeDTO[],
		comments: CommentDTO[]
	) {
		this.id = id;
		this.user = user;
		this.content = content;
		this.imageAttached = imageAttached;
		this.uploadDate = uploadDate;
		this.modified = modified;
		this.hashtags = hashtags;
		this.rawHashtags = rawHashtags;
		this.likes = likes;
		this.comments = comments;
	}


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $user
     * @return {ShortUserDTO}
     */
	public get $user(): ShortUserDTO {
		return this.user;
	}

    /**
     * Getter $content
     * @return {string}
     */
	public get $content(): string {
		return this.content;
	}

    /**
     * Getter $imageAttached
     * @return {string }
     */
	public get $imageAttached(): string  {
		if (this.imageAttached === null) {
			return "";
		}
		return this.imageAttached;
	}

    /**
     * Getter $uploadDate
     * @return {Date}
     */
	public get $uploadDate(): Date {
		return this.uploadDate;
	}

    /**
     * Getter $modified
     * @return {boolean}
     */
	public get $modified(): boolean {
		return this.modified;
	}

    /**
     * Getter $hashtags
     * @return {HashtagDTO[]}
     */
	public get $hashtags(): HashtagDTO[] {
		return this.hashtags;
	}

    /**
     * Getter $rawHashtags
     * @return {string[]}
     */
	public get $rawHashtags(): string[] {
		return this.rawHashtags;
	}

    /**
     * Getter $likes
     * @return {LikeDTO[]}
     */
	public get $likes(): LikeDTO[] {
		return this.likes;
	}

    /**
     * Getter $comments
     * @return {CommentDTO[]}
     */
	public get $comments(): CommentDTO[] {
		return this.comments;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $user
     * @param {ShortUserDTO} value
     */
	public set $user(value: ShortUserDTO) {
		this.user = value;
	}

    /**
     * Setter $content
     * @param {string} value
     */
	public set $content(value: string) {
		this.content = value;
	}

    /**
     * Setter $imageAttached
     * @param {string } value
     */
	public set $imageAttached(value: string ) {
		this.imageAttached = value;
	}

    /**
     * Setter $uploadDate
     * @param {Date} value
     */
	public set $uploadDate(value: Date) {
		this.uploadDate = value;
	}

    /**
     * Setter $modified
     * @param {boolean} value
     */
	public set $modified(value: boolean) {
		this.modified = value;
	}

    /**
     * Setter $hashtags
     * @param {HashtagDTO[]} value
     */
	public set $hashtags(value: HashtagDTO[]) {
		this.hashtags = value;
	}

    /**
     * Setter $rawHashtags
     * @param {string[]} value
     */
	public set $rawHashtags(value: string[]) {
		this.rawHashtags = value;
	}

    /**
     * Setter $likes
     * @param {LikeDTO[]} value
     */
	public set $likes(value: LikeDTO[]) {
		this.likes = value;
	}

    /**
     * Setter $comments
     * @param {CommentDTO[]} value
     */
	public set $comments(value: CommentDTO[]) {
		this.comments = value;
	}

}
