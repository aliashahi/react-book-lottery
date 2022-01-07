export class StorageHandler {
  public static setUserData(data: any) {
    localStorage.setItem("USER_INFO", JSON.stringify(data));
  }

  public static getUserData() {
    return localStorage.getItem("USER_INFO");
  }
}
