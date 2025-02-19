import ShortUserDTO from "./ShortUserDTO";

export default class FollowDTO {
	public id: number;
	public rawUserFollowerId: number | undefined;
	public rawUserFollowedId: number | undefined;
	public userFollowed: ShortUserDTO; 
	public userFollower: ShortUserDTO; 
	public followdate: Date; 

	constructor(
		id: number,
		rawUserFollowerId: number | undefined,
		rawUserFollowedId: number | undefined,
		userFollowed: ShortUserDTO,
		userFollower: ShortUserDTO,
		followdate: Date
	) {
		this.id = id;
		this.rawUserFollowerId = rawUserFollowerId;
		this.rawUserFollowedId = rawUserFollowedId;
		this.userFollowed = userFollowed;
		this.userFollower = userFollower;
		this.followdate = followdate;
	}

    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

	/**
	 * Getter $rawUserFollowerId
	 * @return {number | undefined}
	 */
	public get $rawUserFollowerId(): number | undefined {
		return this.rawUserFollowerId;
	}

	/**
	 * Getter $rawUserFollowedId
	 * @return {number | undefined}
	 */
	public get $rawUserFollowedId(): number | undefined {
		return this.rawUserFollowedId;
	}

    /**
     * Getter $userFollowed
     * @return {ShortUserDTO}
     */
	public get $userFollowed(): ShortUserDTO {
		return this.userFollowed;
	}

    /**
     * Getter $userFollower
     * @return {ShortUserDTO}
     */
	public get $userFollower(): ShortUserDTO {
		return this.userFollower;
	}

    /**
     * Getter $followdate
     * @return {Date}
     */
	public get $followdate(): Date {
		return this.followdate;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $rawUserFollowerId
     * @param {number } value
     */
	public set $rawUserFollowerId(value: number ) {
		this.rawUserFollowerId = value;
	}

    /**
     * Setter $rawUserFollowedId
     * @param {number } value
     */
	public set $rawUserFollowedId(value: number ) {
		this.rawUserFollowedId = value;
	}

    /**
     * Setter $userFollowed
     * @param {ShortUserDTO} value
     */
	public set $userFollowed(value: ShortUserDTO) {
		this.userFollowed = value;
	}

    /**
     * Setter $userFollower
     * @param {ShortUserDTO} value
     */
	public set $userFollower(value: ShortUserDTO) {
		this.userFollower = value;
	}

    /**
     * Setter $followdate
     * @param {Date} value
     */
	public set $followdate(value: Date) {
		this.followdate = value;
	}

}
