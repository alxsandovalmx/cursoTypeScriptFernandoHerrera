
export const printObject = ( arg: any ) => {

    console.log( arg );

}

export function genericFunction<T > ( arg: T ): T {
   return arg;
}

export const genericFunctionArrow = <T> ( arg: T): T => {
    return arg;
}


