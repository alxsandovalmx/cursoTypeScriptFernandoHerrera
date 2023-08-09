(()=>{

    const addNumber = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hola ${ name }`;
    const msg = () => `¡Sesión iniciada!`;

    let myFunction: (a:number, b:number) => number ;

    // myFunction = 10;
    // console.log( myFunction );

    myFunction = addNumber;
    console.log( myFunction( 1, 2 ) );

    // myFunction = greet;
    // console.log( myFunction('Alexis') );

    // myFunction = msg;
    // console.log( myFunction() );

})();