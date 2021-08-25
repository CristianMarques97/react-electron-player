export default interface Store {
    id?: number | null,
    company?: number | null,
    cnpj: string,
    name: string,
    social_name: string,
    hash: string,
    active: boolean,
    update_schedule: boolean,
}