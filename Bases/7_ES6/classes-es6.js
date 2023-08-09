(()=>{


    class User {

        constructor( name = 'Anonimo' , rol = -1 ){
            this.name = name;
            this.rol = rol

            this.otraPropiedad = true;
        }

    }

    class Perfil extends User {

        constructor( name, rol ){
            super( name, rol );
            this.isActive = true;
        }

    }

    const alx = new User('Alexis', 1);
    const p = new Perfil('Sandoval', 2);

    console.log( alx );
    console.log( p );

})();