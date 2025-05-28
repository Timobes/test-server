"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../index");
const vitest_1 = require("vitest");
(0, vitest_1.describe)('Test', () => {
    (0, vitest_1.test)('test GET', async () => {
        const res = await index_1.app.inject({
            method: 'GET',
            url: '/api/test',
        });
        (0, vitest_1.expect)(res.statusCode).toBe(200);
        (0, vitest_1.expect)(res.json()).toEqual({ test: 'text', message: 'work!' });
    });
    (0, vitest_1.test)('test post reg /', async () => {
        const res = await index_1.app.inject({
            method: 'POST',
            url: '/api/v1/reg',
            body: {
                name: "tim",
                email: "test@mail.ru",
                password: "1234"
            }
        });
        (0, vitest_1.expect)(res.statusCode).toBe(200);
        (0, vitest_1.expect)(res.json()).toEqual({
            "message": vitest_1.expect.objectContaining({
                id: vitest_1.expect.any(Number),
                email: "test@mail.ru",
                name: "tim",
                password: "1234",
                createdAt: vitest_1.expect.any(String)
            }),
        });
    });
});
