export const AuthSchema = {
    body: {  
        type: "object",
        required: ["email", "password"],  
        properties: {
            name: { type: "string" },       
            email: { type: "string" },
            password: { type: "string" }
        }
    }
}
