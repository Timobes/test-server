"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const db_1 = require("../config/db");
class AuthRepository {
    async create(body) {
        const result = await db_1.prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password
            }
        });
        return result;
    }
    async getAll() {
        const result = await db_1.prisma.user.findMany();
        return result;
    }
}
exports.AuthRepository = AuthRepository;
