( ()=>{

    let persona: { name: string, age: number, rol: number[], getName?: () => string } = {
        name: 'Alexis',
        age: 37,
        rol: [1,2]
    }

    let people: { name: string, age: number, rol: string[], getName?: () => string } = {
        name: 'Sandoval',
        age: 27,
        rol: ['User']
    }

    console.log( people );


})();