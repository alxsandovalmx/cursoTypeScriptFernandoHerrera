import roles from '../data/roles';

export class User {
    constructor(
        public name: string,
        public realName: string,
        public id: number
    ){

    }

    // Los Getters no reciben parámetros
    get rol(): string { // return string
        return roles.find( rol => rol.id === this.id )?.descripcion || 'not found';
    }
}

export class User2 { }
export class User3 { }
export class User4 { }

export const Admin = 'alexis';