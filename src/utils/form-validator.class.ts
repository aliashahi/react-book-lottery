export class FormValidator {
  public static isEmailValid(email: string): boolean {
    return !!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  }

  public static isPasswordValid(pass: string): boolean {
    return pass.trim().length >= 6 && !pass.includes(" ");
  }
}
