export class StorageHandler {
  public static setUserData(data: any) {
    localStorage.setItem("USER_INFO", JSON.stringify(data));
  }

  public static getUserData(): any {
    return JSON.parse(localStorage.getItem("USER_INFO") ?? "{}");
  }
}
