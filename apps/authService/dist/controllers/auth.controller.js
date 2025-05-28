"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegController = RegController;
exports.GetUsers = GetUsers;
const auth_service_1 = require("../services/auth.service");
const index_1 = require("./../index");
async function RegController(request, reply) {
    try {
        const auth = await (0, auth_service_1.RegService)(request.body);
        reply.send(auth);
    }
    catch (e) {
        index_1.app.log.error(e);
    }
}
async function GetUsers(request, reply) {
    try {
        const user = await (0, auth_service_1.getUsers)();
        reply.send(user);
    }
    catch (e) {
        index_1.app.log.error(e);
    }
}
