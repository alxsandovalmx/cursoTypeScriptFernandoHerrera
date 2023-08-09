(()=>{

    type persona = {
        name: string;
        age: number,
        rol: number[],
        getName?: () => string
    }

    let myCustomVariable: ( string | number | persona ) = 'Alexis';

    myCustomVariable = {
        name: 'Sandoval',
        age: 27,
        rol: [3]
    }

    console.log(typeof myCustomVariable );
    console.log( myCustomVariable );


})();
