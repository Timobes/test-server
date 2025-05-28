import { FastifyInstance } from 'fastify';
import { AuthSchema } from '../schemas/auth.schema';
import { GetUsers, RegController } from '../controllers/auth.controller';

export async function authRouter(app: FastifyInstance) {
    app.post("/reg", {schema: AuthSchema, handler: RegController })
    app.get("/users", GetUsers)
}