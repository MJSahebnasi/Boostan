describe('get all_available_courses',()=>{
    it('GET /all_available_courses/ returns an array of courses',async()=>{
        const response= await request(server).get('/all_available_courses/');
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an.instanceof(Array);
    })
})