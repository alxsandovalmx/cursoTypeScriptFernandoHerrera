(()=>{

    type perfil = {
        admin: string;
        user: string;
        anonimo: string;
        active: boolean;
        total: number;      
    }

    const perfiles: perfil = {
        admin: 'Alexis',
        user: 'Sandoval',
        anonimo: 'alxsandoval',
        active: true,
        total: 1000
    }

    const printPerfiles = ( { admin, user, ...resto}: perfil ) => {
        
        // console.log( admin ); // Ayuda de autocompletado
        // console.log( user.toUpperCase() ); // Ayuda con los métodos
        // console.log( resto ); // Uso del operador ...rest

    }

    printPerfiles( perfiles );

    const perfilesArr: [string, boolean, number] = ['Admin', true, 1];
    const [ admin, activo, codigo ] = perfilesArr;
    // console.log( {admin, activo, codigo} );

    

})();