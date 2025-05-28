"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegService = RegService;
exports.getUsers = getUsers;
const auth_repository_1 = require("../repository/auth.repository");
const repo = new auth_repository_1.AuthRepository();
async function RegService(body) {
    const action = await repo.create(body);
    return { message: action };
}
async function getUsers() {
    const action = await repo.getAll();
    return { message: action };
}
