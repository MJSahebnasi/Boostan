const server = require('../index')
const request = require('supertest')
var chai = require('chai')
var expect = chai.expect;

describe('get all_courses',()=>{
    it('GET /all_courses/ returns an array of courses',async()=>{
        const response= await request(server).get('/all_courses/');
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an.instanceof(Array);
    })
})