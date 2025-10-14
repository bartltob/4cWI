export class Owner {
  constructor(
    private _FirstName: string,
    private _LastName: string,
    private _Age: number,
  ) {}

    getFirstName(): string {
        return this._FirstName;
    }

    setFirstName(firstname: string) {
        this._FirstName = firstname;
    }

    getLastName(): string {
        return this._LastName;
    }

    setLastName(lastname: string) {
        this._LastName = lastname;
    }

    getAge(): number {
        return this._Age;
    }

    setAge(age: number) {
        this._Age = age;
    }


}
