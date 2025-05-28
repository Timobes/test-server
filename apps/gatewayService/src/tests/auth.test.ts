import { app } from './../index';

import { test, expect, describe } from 'vitest';

describe('Test', () => {
  test('test GET', async () => {
    const res = await app.inject({
      method: 'GET',
      url: '/api/test',
    });
  
    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ test: 'text', message: 'work!' });
  });

  test('test post reg /', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/api/v1/reg',
      body: {
        name: "tim",
        email: "test@mail.ru",
        password: "1234"
      }
    });
  
    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({
        "message": expect.objectContaining({
            id: expect.any(Number),
            email: "test@mail.ru",
            name: "tim",
            password: "1234",
            createdAt: expect.any(String)
        }),
    });
  });
})