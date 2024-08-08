import { app } from '../../app';
import request from 'supertest';

describe('/users', () => {
  describe('GET /users', () => {
    it('should respond with an array containing users', async () => {
      await request(app)
        .get('/users')
        //.post(route)
        .set('Accept', 'application/json')
        .send({})
        .expect('Content-Type', /json/)
        .expect(200)
        // .expect(
        //     (res) => {
        //     expect(res.body).toEqual({
        //         hello: "world"
        //     });
        //   }
        // )
    });
  });
});