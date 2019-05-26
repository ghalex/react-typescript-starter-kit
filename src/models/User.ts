export default class User {
  private rawData: any;

  constructor(data: any) {
    this.rawData = data;
  }

  get id() {
    return this.rawData.id;
  }

  get email() {
    return this.rawData.profile.email!;
  }
}
