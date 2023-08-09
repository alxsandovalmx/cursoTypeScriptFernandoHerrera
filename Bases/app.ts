(() => {

    const a: number = 10;
    let b: string = 'A';
    
    let c;
    
    c = 'A';
    c = [];
    c = {};
    c = true;
    
    function sayHello ( msg: string ) { 
        console.log( msg + ' Alexis' );
        console.log( msg.length );
    }    
    sayHello('A');
})() 


