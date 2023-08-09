(()=>{

    abstract class User {

        constructor(
            public name: string,
            public realName: string
        ){

        }

    }

    class Perfil extends User{
        // Al no definir constructor, se llama el de la clase Padre
        isValid(){
            return '¡Usuario Valido!';
        }
    }

    class Anonimo extends User{
        access(){
            return 'Sin acceso';
        }
    }

    const alx = new Perfil('Alexis','Aris');
    const noName = new Anonimo('No Name','Anonimo');
    
    // console.log( alx.isValid() );
    // console.log( noName.access() );

    const printName = ( character: User )=>{
        console.log( character.realName );
    }
    
    // printName( alx );
    // printName( noName );

    

})();