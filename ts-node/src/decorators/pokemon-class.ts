function printToConsole( constructor: Function ){
    console.log( constructor );
}

const printToConsoleConditional = ( print:boolean = false ): Function => {

    if ( print ) {
        return printToConsole
    } else{
        return () => {}
    }
}

const bloquearPrototipo = function ( constructor: Function ){
    // Object.seal( constructor );
    // Object.seal( constructor.prototype );
}

function checkValidPokemonId( ) {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ){

        const originalMethod = descriptor.value;

        descriptor.value = ( id:number ) => {
            if ( id < 1 || id > 800 ) {
                return console.error('El id del Pokemon debe estar entre 1 y 800');
            } else {
                return originalMethod( id );
            }
        }

        console.log( {target, propertyKey, descriptor});
    }
}

function readOnly( isWritable:boolean = true ): Function{
    return function( target: any, propertyKey: string ){

        const descriptor: PropertyDescriptor = {
            get(){
                console.log( this, 'getter' );
                return 'Hola mundo';
            },
            set( this, val ){
                // console.log( this, val );
                Object.defineProperty( this, propertyKey, {
                    value: val, // Es el valor que se recibie inicialmente
                    writable: !isWritable, // Para que no se pueda escribir
                    enumerable: false // Para que no se pueda ver
                })
            }

        }

        return descriptor;
    }
}

@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {

    @readOnly(true)
    public publicApi:string = 'http://pokeapi.co';

    constructor(
        public name:string
    ){

    }

    @checkValidPokemonId()
    savePokemonToDB( id:number ){
        console.log(`Pokemon guardado en la BD ${ id }`);
    }

}