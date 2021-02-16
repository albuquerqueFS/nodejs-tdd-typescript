import { InvalidParamError, MissingParamError, IncopatiblePassword } from '../errors/index'
import { badRequest, serverError } from '../helper/http-helper'
import { Controller, EmailValidator, HttpRequest, HttpResponse } from '../protocols/index'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    const { email, password, passwordConfirmation } = httpRequest.body
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    try {
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const isValid = this.emailValidator.isValid(email)
      if (!isValid) { return badRequest(new InvalidParamError('email')) }

      if (password !== passwordConfirmation) {
        return badRequest(new IncopatiblePassword())
      }
    } catch (error) {
      return serverError()
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}
