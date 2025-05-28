import { prisma } from "../config/db";
import { IReg } from "../interfaces/auth.interface";

export class AuthRepository {
    async create(body: IReg) {
        const result = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password
            }
        })

        return result
    }

    async getAll() {
        const result = await prisma.user.findMany()

        return result
    }
}