export interface Rol {
    id: number,
    descripcion: string
}

const roles: Rol[] = [
    {
        id: 1,
        descripcion: 'Administrador'
    },
    {
        id: 2,
        descripcion: 'Anonimo'
    }
];

export default roles; 