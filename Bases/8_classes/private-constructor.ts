(()=>{

    class User{

        static instance: User;

        private constructor ( public name: string ){

        }

        static callUser(): User {
            // Si User.instance es null o undefined
            if ( !User.instance ){
                // Aqui es donde se crea la instancia
                User.instance = new User('¡Soy Alexis... el único usuario!');
            }

            return User.instance;
        }

        changeName( newName: string ):void {
            this.name = newName;
        }
    }

    const usuario = User.callUser();
    const usuario2 = User.callUser();
    const usuario3 = User.callUser();

    usuario.changeName('Sandoval');

    // console.log( usuario );
    // console.log( usuario2 );
    // console.log( usuario3 );


})();