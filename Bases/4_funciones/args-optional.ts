(()=>{

    const fullName = ( firstName:string, lastName?:string ): string => {

        return `${ firstName } ${ lastName || 'anonimo' }`;
    }
    let name = fullName('Alexis');

    console.log( {name} );

})();