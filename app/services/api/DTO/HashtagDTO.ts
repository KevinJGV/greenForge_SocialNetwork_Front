export default class HashtagDTO {
	public id: number | undefined;
	public name: string;

	constructor(id: number | undefined, name: string) {
		this.id = id;
		this.name = name;
	}


    /**
     * Getter $id
     * @return {number}
     */
		public get $id(): number {
			return this.id || 0;
		}

	    /**
	     * Getter $name
	     * @return {string}
	     */
		public get $name(): string {
			return this.name;
		}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

}
