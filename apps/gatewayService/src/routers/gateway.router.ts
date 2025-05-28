import { FastifyInstance } from 'fastify';
import { AuthSchema } from '../schemas/gateway.schema';
import { GetUsers, RegController } from '../controllers/auth.controller';

export async function mainRouter(app: FastifyInstance) {
    app.post("/reg", {schema: AuthSchema, handler: RegController })
    app.get("/users", GetUsers)
}