"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegController = RegController;
exports.GetUsers = GetUsers;
const axios_1 = __importDefault(require("axios"));
const index_1 = require("./../index");
async function RegController(request, reply) {
    try {
        // const auth = await RegService(request.body)
        const auth = await axios_1.default.post(`localhost:8001/api/v1/reg`, request.body, { withCredentials: true });
        reply.send(auth);
    }
    catch (e) {
        index_1.app.log.error(e);
    }
}
async function GetUsers(request, reply) {
    try {
        // const user = await getUsers()
        const user = await axios_1.default.get(`localhost:8001/api/v1/users`, { withCredentials: true });
        reply.send(user);
    }
    catch (e) {
        index_1.app.log.error(e);
    }
}
