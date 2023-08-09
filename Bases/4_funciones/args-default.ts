(()=>{

    const fullName = ( firstName:string, lastName?:string, upper:boolean = false ): string => {

        if ( upper ) {
            return `${ firstName } ${ lastName || '---' }`.toUpperCase();
        } else {
            return `${ firstName } ${ lastName || '---' }`;
        }

    }
    let name = fullName('Alexis','Sandoval', true);

    console.log( {name} );

})()