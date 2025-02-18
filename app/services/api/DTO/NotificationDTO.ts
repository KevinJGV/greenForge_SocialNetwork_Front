
import ShortUserDTO from "./ShortUserDTO";
import LikeDTO from "./LikeDTO";
import FollowDTO from "./FollowDTO";
import TagDTO from "./TagDTO";
import CommentDTO from "./CommentDTO";

export default class NotificationDTO {
	private id: number;
	private userAction: ShortUserDTO;
	private userNotified: ShortUserDTO;
	private like: LikeDTO | undefined;
	private follow: FollowDTO | undefined;
	private tag: TagDTO | undefined;
	private comment: CommentDTO | undefined;
	private createdAt: Date;

	constructor(
		id: number,
		userAction: ShortUserDTO,
		userNotified: ShortUserDTO,
		like: LikeDTO | undefined,
		follow: FollowDTO | undefined,
		tag: TagDTO | undefined,
		comment: CommentDTO | undefined,
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
	 * @return {LikeDTO | undefined}
	 */
	public get $like(): LikeDTO | undefined {
		return this.like;
	}

	/**
	 * Getter $follow
	 * @return {FollowDTO | undefined}
	 */
	public get $follow(): FollowDTO | undefined {
		return this.follow;
	}

	/**
	 * Getter $tag
	 * @return {TagDTO | undefined}
	 */
	public get $tag(): TagDTO | undefined {
		return this.tag;
	}

	/**
	 * Getter $comment
	 * @return {CommentDTO | undefined}
	 */
	public get $comment(): CommentDTO | undefined {
		return this.comment;
	}

    /**
     * Getter $createdAt
     * @return {Date}
     */
	public get $createdAt(): Date {
		return this.createdAt;
	}

}
