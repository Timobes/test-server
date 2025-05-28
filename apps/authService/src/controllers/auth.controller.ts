import { IReg } from '../interfaces/auth.interface';
import { getUsers, RegService } from '../services/auth.service';
import { app } from './../index';
import { FastifyReply, FastifyRequest } from "fastify";

export async function RegController(request: FastifyRequest<{ Body: IReg }>, reply: FastifyReply) {
    try {
        const auth = await RegService(request.body)

        reply.send(auth)
    } catch(e) {
        app.log.error(e)
    }
}

export async function GetUsers(request: FastifyRequest, reply: FastifyReply) {
    try {
        const user = await getUsers()

        reply.send(user)
    } catch (e) {
        app.log.error(e)
    }
}