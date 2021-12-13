
/**
 * Класс сущности (User); 
 */

export class UserModel {
    
    id: number | undefined;
    userName: String | undefined;
    lastName: String | undefined;
    patronymic: String | undefined;
    password: String | undefined;
    email: String | undefined;
    roles: String[] | undefined;

    // constructor(id: Number, userName: string, lastName: string, patronymic: string, email: string, password: string, roles: string[]) {
    //     this.userName = userName;
    //     this.lastName = lastName;
    //     this.patronymic = patronymic;
    //     this.email = email;
    //     this.password = password;
    //     this.roles = roles;
    // }
}