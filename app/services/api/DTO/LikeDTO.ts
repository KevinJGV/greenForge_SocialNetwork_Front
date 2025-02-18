import type PostDTO from "./PostDTO";
import ShortUserDTO from "./ShortUserDTO";

export default class LikeDTO {
	private id: number | undefined;
	private rawPostId: number | undefined;
	private rawUserId: number | undefined;
	private user: ShortUserDTO | undefined;
	private post: PostDTO | undefined;

	constructor(
		$id: number,
		$rawPostId: number,
		$rawUserId: number,
		$user: ShortUserDTO,
		$post: PostDTO
	) {
		this.id = $id;
		this.rawPostId = $rawPostId;
		this.rawUserId = $rawUserId;
		this.user = $user;
		this.post = $post;
	}

	/**
	 * Getter $id
	 * @return {number | undefined}
	 */
	public get $id(): number | undefined {
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
	 * @return {ShortUserDTO | undefined}
	 */
	public get $user(): ShortUserDTO | undefined {
		return this.user;
	}

	/**
	 * Getter $post
	 * @return {PostDTO | undefined}
	 */
	public get $post(): PostDTO | undefined {
		return this.post;
	}
}
