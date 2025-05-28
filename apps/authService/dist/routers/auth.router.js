"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = authRouter;
const auth_schema_1 = require("../schemas/auth.schema");
const auth_controller_1 = require("../controllers/auth.controller");
async function authRouter(app) {
    app.post("/reg", { schema: auth_schema_1.AuthSchema, handler: auth_controller_1.RegController });
    app.get("/users", auth_controller_1.GetUsers);
}
