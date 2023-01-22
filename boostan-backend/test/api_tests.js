const server = require('../index')
const request = require('supertest')
var chai = require('chai')
var expect = chai.expect;

describe('GET all_courses',()=>{
    it('GET /all_courses/ returns an array of courses',async()=>{
        const response= await request(server).get('/all_courses/');
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an.instanceof(Array);
    })
});

describe('GET my_courses - test #1 - not empty array',()=>{
    it('GET /my_courses/ returns an array of a student\'s registered courses',async()=>{
        const response= await request(server).get('/my_courses/972401');

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceof(Array);
        (response.body).forEach(crs => {expect(crs).to.have.property('registerars')});
        (response.body).forEach(crs => {expect(crs.registerars).to.contain('972401')});
    })
})

describe('GET my_courses - test #2 - empty array',()=>{
    it('GET /my_courses/ returns an array of a student\'s registered courses',async()=>{
        const response= await request(server).get('/preregister/12341451111');

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceof(Array);
        expect(response.body).to.be.empty;
    })
})

describe('POST preregister - test #1 - successfull registeration',()=>{
    it('POST /preregister/ returns a boolean: success',async()=>{
        const payload = {std_id: '972401', course_code: '10002'}
        const response = await request(server)
            .post('/preregister')
            .send(payload)

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceof(Boolean);
        expect(response.body).to.be(true);
    })
})

describe('POST preregister - test #2 - fail: already registered',()=>{
    it('POST /preregister/ returns a boolean: success',async()=>{
        const payload = {std_id: '972401', course_code: '10001'}
        const response = await request(server)
            .post('/preregister')
            .send(payload)

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceof(Boolean);
        expect(response.body).to.be(false);
    })
})

