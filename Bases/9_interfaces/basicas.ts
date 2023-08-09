(()=>{

    interface persona  {
        name: string;
        age: number,
        rol: number[],
        getName?: () => string
    }

    let admin: persona = {
        name: 'Alexis',
        age: 37,
        rol: [1,2]
    }

    let user: persona = {
        name: 'Sandoval',
        age: 27,
        rol: [3],
        getName() {
            return this.name;
        },
    }


})();