(()=>{

    const fullName = ( firstName:string, lastName:string|undefined ): string => {

        return `${ firstName } ${ lastName }`;
    } 
    fullName('Alexis', undefined);

})();