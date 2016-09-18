process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../src/server')
const should = chai.should()

chai.use(chaiHttp)

describe('Add user', () => {
    describe('/POST Register User', () => {
        const user = {
            email: 'renau94@gmail.com',
            password: 'testPassword'
        }
        it('should create a user', (done) => {
            chai.request(server)
        .post('/user/account/createUser')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            console.log(res)
            done()
        })
        })
    })
})
