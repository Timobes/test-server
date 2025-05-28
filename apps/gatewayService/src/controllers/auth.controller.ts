import axios from 'axios';
import { IReg } from '../interfaces/gateway.interface';
import { app } from './../index';
import { FastifyReply, FastifyRequest } from "fastify";

export async function RegController(request: FastifyRequest<{ Body: IReg }>, reply: FastifyReply) {
    try {
        const auth = await axios.post(`http://localhost:8001/api/v1/reg`, request.body, {withCredentials: true})

        reply.send(auth.data)
    } catch(e) {
        app.log.error(e)
    }
}

export async function GetUsers(request: FastifyRequest, reply: FastifyReply) {
    try {
        const user = await axios.get(`http://localhost:8001/api/v1/users`, {withCredentials: true})

        reply.send(user.data)
    } catch (e) {
        app.log.error(e)
    }
}