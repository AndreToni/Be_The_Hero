const request = require('supertest');
const app = require('../../src/app');
const connection = require ("../../src/database/connection");

describe ('INCIDENT', () =>{

    beforeEach(async() =>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });
    it ('should be able to create a new incident', async() => {
        const response = await request(app)
            .post('/casos')
            .set('Authorization', '18d344cc')
            .send({
                title: "Gato atropelado",
                description: "Gato foi atropelado e sofreu serias fraturas em seu maxilar, patas e costela e devido a isso precisa paassar por diversas cirurgias de reconstituição.",
                "value": 1200
            })
        
    })
})