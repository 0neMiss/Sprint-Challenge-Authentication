const db = require("../database/knex-setup.js");
const Users = require("./users-model");
const request = require("supertest");
const server = require("../api/server");
const knex = require('knex');


describe('users-model', () =>{
  beforeEach(async () =>{
    await db('users').truncate();
  })
})
