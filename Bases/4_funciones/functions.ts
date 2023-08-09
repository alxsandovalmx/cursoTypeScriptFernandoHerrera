(
    ()=>{
        const perfiles: string = 'Admin';

        function returnPerfil (): string {
            return perfiles;
        }
        
        const isActivate = () => {
            return 'Activate';
        }

        console.log( typeof isActivate );

        const perfil = isActivate();

    }
)();