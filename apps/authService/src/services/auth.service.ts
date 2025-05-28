import { IReg } from "../interfaces/auth.interface";
import { AuthRepository } from "../repository/auth.repository";

const repo = new AuthRepository()

export async function RegService(body: IReg) {

    const action = await repo.create(body)

    return { message: action }
}

export async function getUsers() {
    const action = await repo.getAll()

    return { message: action }
}