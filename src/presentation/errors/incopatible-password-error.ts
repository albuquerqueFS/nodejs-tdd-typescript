export class IncopatiblePassword extends Error {
  constructor () {
    super('Password not compatible with confirmation')
    this.name = 'IncopatiblePasswordError'
  }
}
