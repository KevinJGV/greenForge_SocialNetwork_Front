import type PostDTO from "./PostDTO";
import ShortUserDTO from "./ShortUserDTO";

export default class LikeDTO {
	public id: number | undefined;
	public rawPostId: number | undefined;
	public rawUserId: number | undefined;
	public user: ShortUserDTO | undefined;
		public post: PostDTO | undefined;

		constructor(
			$id: number | undefined,
			$rawPostId: number | undefined,
			$rawUserId: number | undefined,
			$user: ShortUserDTO | undefined,
			$post: PostDTO | undefined
		) {
			this.id = $id;
			this.rawPostId = $rawPostId;
			this.rawUserId = $rawUserId;
			this.user = $user;
			this.post = $post;
		}

	    /**
	     * Getter $id
	     * @return {number }
	     */
		public get $id(): number  {
			return this.id as number;
		}

	    /**
	     * Getter $rawPostId
	     * @return {number }
	     */
		public get $rawPostId(): number  {
			return this.rawPostId as number;
		}

	    /**
	     * Getter $rawUserId
	     * @return {number }
	     */
		public get $rawUserId(): number  {
			return this.rawUserId as number;
		}

	    /**
	     * Getter $user
	     * @return {ShortUserDTO }
	     */
		public get $user(): ShortUserDTO  {
			return this.user as ShortUserDTO;
		}

    /**
     * Getter $post
     * @return {PostDTO }
     */
	public get $post(): PostDTO | undefined {
		return this.post;
	}

    /**
     * Setter $rawPostId
     * @param {number } value
     */
	public set $rawPostId(value: number ) {
		this.rawPostId = value;
	}

    /**
     * Setter $rawUserId
     * @param {number } value
     */
	public set $rawUserId(value: number ) {
		this.rawUserId = value;
	}

    /**
     * Setter $user
     * @param {ShortUserDTO } value
     */
	public set $user(value: ShortUserDTO ) {
		this.user = value;
	}

    /**
     * Setter $post
     * @param {PostDTO } value
     */
	public set $post(value: PostDTO ) {
		this.post = value;
	}

}
