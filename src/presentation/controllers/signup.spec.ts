import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    // System Under Test
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any@mail.com',
        password: '12321321',
        passwordConfirmation: '12321321'
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })

  test('Should return 400 if no email is provided', () => {
    // System Under Test
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any name',
        password: '12321321',
        passwordConfirmation: '12321321'
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: email'))
  })
})
