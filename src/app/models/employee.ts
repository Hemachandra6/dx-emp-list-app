export class Employee {
    empId!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    department!: string;
    phoneNumber!: number;

    constructor(
        empId?: number,
        firstName?: string,
        lastName?: string,
        email?: string,
        department?: string,
        phoneNumber?: number
    ) {
        if (empId) this.empId = empId;
        if (firstName) this.firstName = firstName;
        if (lastName) this.lastName = lastName;
        if (email) this.email = email;
        if (department) this.department = department;
        if (phoneNumber) this.phoneNumber = phoneNumber;
    }
}