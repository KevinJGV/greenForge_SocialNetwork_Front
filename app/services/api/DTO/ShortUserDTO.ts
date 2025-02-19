export default class ShortUserDTO {
	public id: number;
	public username: string;
	public fullname: string;
	public profilephotouri: string;

	constructor(
		id: number,
		username: string,
		fullname: string,
		profilephotouri: string
	) {
		this.id = id;
		this.username = username;
		this.fullname = fullname;
		this.profilephotouri = profilephotouri;
	}


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $username
     * @return {string}
     */
	public get $username(): string {
		return this.username;
	}

    /**
     * Getter $fullname
     * @return {string}
     */
	public get $fullname(): string {
		return this.fullname;
	}

    /**
     * Getter $profilephotouri
     * @return {string}
     */
	public get $profilephotouri(): string {
		return this.profilephotouri;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $username
     * @param {string} value
     */
	public set $username(value: string) {
		this.username = value;
	}

    /**
     * Setter $fullname
     * @param {string} value
     */
	public set $fullname(value: string) {
		this.fullname = value;
	}

    /**
     * Setter $profilephotouri
     * @param {string} value
     */
	public set $profilephotouri(value: string) {
		this.profilephotouri = value;
	}

}
