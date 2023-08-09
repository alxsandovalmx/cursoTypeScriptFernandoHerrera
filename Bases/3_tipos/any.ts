(()=>{

    let codigo: any = 123;
    let exists;

    codigo = 'ABC';

    console.log( (codigo as string).charAt(0) );

    codigo = 123.3555;
    console.log( <number> codigo.toFixed(2) );

})()