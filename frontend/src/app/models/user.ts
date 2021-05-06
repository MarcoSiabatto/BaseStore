// Export user model class
export class User {
  // Constructor
  constructor(
      public _id: String,
      public names: String,
      public lastName: String,
      public pass: String,
      public age: Number, 
      public role: String,
      public getToken: boolean
  ) {}
}
