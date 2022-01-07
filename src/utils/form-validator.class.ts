export class FormValidator {
  isEmailValid(email: string): boolean {
    return !!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  }

  isPasswordValid(pass: string): boolean {
    return pass.trim().length >= 6 && !pass.includes(" ");
  }
}
