export class UserModel {

    username!: string;
    email!: string;
    password!: string;
    role?: string;

    constructor (username?: string, email?: string, password?: string, role?: string) {
        if (username) this.username = username;
        if (email) this.email = email;
        if (password) this.password = password;
        if (role) this.role = role;
    }
}
