"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSchema = void 0;
exports.AuthSchema = {
    body: {
        type: "object",
        required: ["email", "password"],
        properties: {
            name: { type: "string" },
            email: { type: "string" },
            password: { type: "string" }
        }
    }
};
