
import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu'

// charmander.savePokemonToDB( 4 );

charmander.publicApi = 'Hola';

console.log( charmander );

