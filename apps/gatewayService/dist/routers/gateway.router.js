"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = mainRouter;
const gateway_schema_1 = require("../schemas/gateway.schema");
const auth_controller_1 = require("../controllers/auth.controller");
async function mainRouter(app) {
    app.post("/reg", { schema: gateway_schema_1.AuthSchema, handler: auth_controller_1.RegController });
    app.get("/users", auth_controller_1.GetUsers);
}
