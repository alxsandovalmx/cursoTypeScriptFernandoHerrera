(()=>{

    const fullName = ( firstName: string, ...restArgs: string[] ) => {
        return `${ firstName } ${ restArgs.join(' ') } `;
    }
    const perfil = fullName('Alexis', 'Sandoval', 'alxsandoval');

    console.log( {perfil} );

})();