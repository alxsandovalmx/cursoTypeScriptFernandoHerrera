(()=>{

    class User {

        static age: number = 35; 
        static getAge (){
            return this.name;
        }

        constructor ( 
            private name: string = 'Anonimo',
            private team: string, 
            public realName?: string
        ){ }

        public bio (){
            return `${ this.name } (${ this.team })`;
        }

    }

    const alx: User = new User('Alexis', 'Admin', 'Aris');

    // console.log( alx );
    // console.log( alx.bio() );
    // console.log( User.getAge() );

})();