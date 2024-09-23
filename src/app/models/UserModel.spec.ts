import { UserModel } from "./UserModel";

describe('UserModel', () => {
  it('should create an instance with valid inputs', () => {
    const user = new UserModel('johnDoe', 'john@example.com', 'password123');
    expect(user).toBeTruthy();
  });
});