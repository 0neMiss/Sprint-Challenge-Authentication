// const request = require('supertest');
// const auth = require ('../auth/auth-router.js');
// const jokes = require ('../jokes/jokes-router.js');
// const server = require('./server.js');
// const db = require('../database/knex-setup.js');
// const usermodel = require('../users/users-model');
//
//
// describe('auth-router.js',() =>{
//   describe('/login',()=>{
//     it('check to see if the username and password are strings', async () =>{
//       await  request(auth).post('/login')
//         .send({username: jordan, password: whatever})
//         .then(res =>{expect(res.status).toBe(201);})
//     })
//   })
//   describe('/register', () =>{
//   it('check to see if the username and password are strings', async () =>{
//     await request(auth).post('/register')
//         .send({username: jordan, password: whatever})
//         .then(res =>{expect(res.status).toBe(201);})
//       })
//   })
//
// })
