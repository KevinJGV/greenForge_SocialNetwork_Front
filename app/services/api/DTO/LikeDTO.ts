import ShortUserDTO from "./ShortUserDTO";

export default class LikeDTO {
	private id: number;
	private rawPostId: number;
	private rawUserId: number;
	private user: ShortUserDTO; 

	constructor(
		id: number,
		rawPostId: number,
		rawUserId: number,
		user: ShortUserDTO
	) {
		this.id = id;
		this.rawPostId = rawPostId;
		this.rawUserId = rawUserId;
		this.user = user;
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

}
