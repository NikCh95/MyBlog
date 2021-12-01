

export class UserModel {
    
    userName: String | undefined;
    password: String | undefined;
    email: String | undefined;
    roles: String[] | undefined;

    constructor(userName: string, email: string, password: string, roles: string[]) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }
}