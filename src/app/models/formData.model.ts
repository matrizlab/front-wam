export class FormData {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  payment: string = '';
  title: string = '';
  text: string = '';
  img: string = '';

  clear() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.payment = '';
    this.title = '';
    this.text = '';
    this.img = '';
  }
}

export class User {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
}

export class Payment {
  title: string = '';
  text: string = '';
  img: string = '';
}
