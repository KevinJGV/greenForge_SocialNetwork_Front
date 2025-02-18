import ShortUserDTO from "./ShortUserDTO";

export default class TagDTO {
	private id: number;
	private userTagged: ShortUserDTO;

	constructor(id: number, userTagged: ShortUserDTO) {
		this.id = id;
		this.userTagged = userTagged;
	}


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $userTagged
     * @return {ShortUserDTO}
     */
	public get $userTagged(): ShortUserDTO {
		return this.userTagged;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $userTagged
     * @param {ShortUserDTO} value
     */
	public set $userTagged(value: ShortUserDTO) {
		this.userTagged = value;
	}

}
