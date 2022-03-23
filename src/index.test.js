const app = require('./app');
const request = require('supertest');
const shortid = require('shortid');

describe('EndPoints Tests', () => {
  it('POST /encode', async () => {
    const res = await request(app)
      .post('/encode')
      .send({ "url": "https://github.com/victorhenriqu3/Url-Shortest" })
      .set('Accept', 'application/json');

    expect(res.type).toBe('application/json')
    expect(res.statusCode).toBe(201);
    expect(res.body.url).toBe("https://github.com/victorhenriqu3/Url-Shortest");
  });

  it('GET /decode/:id', async () => {
    const id = 'cpKi9RckL'
    const res = await request(app)
      .get(`/decode/${id}`)

    console.log(res);

    expect(res.statusCode).toBe(200);

  })

})
