(()=>{

    interface User {
        name: string,
        realName: string,
        isValid( id:number ): string,
    }

    interface Person {
        age: number
    }

    class Perfil implements User, Person {

        public age: number;
        public name: string;
        public realName: string;

        isValid( id: number ) {
            return this.name + ' ' + this.realName;
        }

    }

})();