define(["require", "exports", "./generics/get-pokemon"], function (require, exports, get_pokemon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (0, get_pokemon_1.getPokemon)(4)
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
        .finally(() => console.log("Fin de getPokemon"));
});
