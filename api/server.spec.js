const request = require('supertest');
const auth = require ('../auth/auth-router.js');
const jokes = require ('../jokes/jokes-router.js');


describe('auth-router.js',() =>{
  describe('/login',()=>{
    it('check to see if the username and password are strings', () =>{
        request(auth).post('/login')
        .send({username: jordan, password: whatever})
        .then(res =>{expect(res.status).toBe(200);})
    })
  })
  describe('/register', () =>{
    request(auth).post('/register')
      .send({username: jordan, password: whatever})
      .then(res =>{expect(res.status).toBe(200);})
  })

})
