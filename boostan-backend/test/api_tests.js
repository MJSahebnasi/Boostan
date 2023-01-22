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
});

describe('get my_courses',()=>{
    it('GET /my_courses/ returns an array of a student\'s registered courses',async()=>{
        const response= await request(server).get('/my_courses/972401');

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceof(Array);
        (response.body).forEach(crs => {expect(crs).to.have.property('registerars')});
        (response.body).forEach(crs => {expect(crs.registerars).to.contain('972401')});
    })
})