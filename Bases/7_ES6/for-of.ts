(()=>{

    type User = {
        name: string,
        rol: string
    }

    const user: User = {
        name: 'Alexis',
        rol: 'User'
    }

    const admin: User = {
        name: 'Sandoval',
        rol: 'Admin'
    }

    const anonimo: User = {
        name: 'alxsandoval',
        rol: 'Anonimo'
    }

    const perfiles: User[] = [ user, admin, anonimo ];

    for (const perfil of perfiles) {
        // console.log( perfil.name.toUpperCase() );
    }


})();