(()=>{

    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAddress( id: string ): string
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'Alexis',
        age: 25,
        address: {
            id: 18,
            zip: '22124',
            city: 'Tijuana'
        },
        getFullAddress( id: string ){
            return this.address.city;
        }
    }

    const client2: Client = {
        name:'Sandoval',
        age: 30,
        address: {
            city: 'TJ',
            id: 120,
            zip: '22456'
        },
        getFullAddress( id: string ){
            return this.address.city;
        } 
    }



})();