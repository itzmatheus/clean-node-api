import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

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
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
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
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password is provided', () => {
    // System Under Test
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any name',
        email: 'any@mail.com',
        passwordConfirmation: '12321321'
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
})
