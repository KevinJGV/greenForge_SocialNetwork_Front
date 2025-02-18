
import ShortUserDTO from "./ShortUserDTO";
import LikeDTO from "./LikeDTO";
import FollowDTO from "./FollowDTO";
import TagDTO from "./TagDTO";
import CommentDTO from "./CommentDTO";

export default class NotificationDTO {
	private id: number;
	private userAction: ShortUserDTO;
	private userNotified: ShortUserDTO;
	private like: LikeDTO | null;
	private follow: FollowDTO | null;
	private tag: TagDTO | null;
	private comment: CommentDTO | null;
	private createdAt: Date;

	constructor(
		id: number,
		userAction: ShortUserDTO,
		userNotified: ShortUserDTO,
		like: LikeDTO | null,
		follow: FollowDTO | null,
		tag: TagDTO | null,
		comment: CommentDTO | null,
		createdAt: Date
	) {
		this.id = id;
		this.userAction = userAction;
		this.userNotified = userNotified;
		this.like = like;
		this.follow = follow;
		this.tag = tag;
		this.comment = comment;
		this.createdAt = createdAt;
	}


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $userAction
     * @return {ShortUserDTO}
     */
	public get $userAction(): ShortUserDTO {
		return this.userAction;
	}

    /**
     * Getter $userNotified
     * @return {ShortUserDTO}
     */
	public get $userNotified(): ShortUserDTO {
		return this.userNotified;
	}

    /**
     * Getter $like
     * @return {LikeDTO }
     */
	public get $like(): LikeDTO  {
		if (this.like !== null) {
			return this.like;
		}
		throw new Error("LikeDTO is null.");
	}

    /**
     * Getter $follow
     * @return {FollowDTO }
     */
	public get $follow(): FollowDTO  {
		if (this.follow !== null) {
			return this.follow;
		}
		throw new Error("FollowDTO is null.");
	}

	/**
	 * Getter $tag
	 * @return {TagDTO }
	 */
	/**
	 * Getter $tag
	 * @return {TagDTO}
	 */
	public get $tag(): TagDTO {
		if (this.tag !== null) {
			return this.tag;
		}
		throw new Error("TagDTO is null.");
	}

	/**
	 * Getter $comment
	 * @return {CommentDTO}
	 */
	public get $comment(): CommentDTO {
		if (this.comment !== null) {
			return this.comment;
			
		}
		throw new Error("CommentDTO is null.");

	}

    /**
     * Getter $createdAt
     * @return {Date}
     */
	public get $createdAt(): Date {
		return this.createdAt;
	}

}
