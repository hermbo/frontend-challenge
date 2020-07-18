import { submitForm } from '../helperFunctions'

describe('submitForm()', () => {
  it('is a defined export', () => {
    expect(submitForm).toBeDefined()
  })
  it('should return status and form data', async () => {
    const stubbedForm = { firstName: 'Luke', lastName: 'Skywalker', email: 'luke@awesomesauce.com', company: 'Starwars', role: 'Mentor' }
    const results = await submitForm(stubbedForm)
    const { status, data } = results
    expect(status).toBe(200)
    expect(JSON.parse(data)).toEqual(stubbedForm)
  })
})
