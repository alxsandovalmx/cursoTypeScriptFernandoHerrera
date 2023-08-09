(()=>{

    class User {

        constructor(
            public name: string,
            public realName: string
        ){
            console.log('Constructor User llamado!');
        }

        protected getFullName (){
            return `${ this.name } ${ this.realName }`;
        }

    }

    class Admin extends User {

        constructor(
            name: string,
            realName: string,
            public isValid: boolean = true
        ){
            super( name, realName );
            console.log('Constructor Admin llamado!');
        }

        get fullName(){
            return `${ this.name } - ${ this.realName }`;
        }

        set fullName( name: string ){

            if( name.length < 3 ){
                throw new Error('El nombre debe ser mayor a 3 letras');
            }
            this.name = name;
        }

        getFullNameDesdeAdmin(){
            console.log( super.getFullName() );
        }

    }

    // const alx = new Admin('Alexis', 'Aris');
    // alx.getFullNameDesdeAdmin();

    // alx.fullName = 'Sandoval'

    // console.log( alx.fullName );

})();