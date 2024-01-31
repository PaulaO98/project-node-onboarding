// UserController.test.ts
import { UserController } from './user.controller';
import { UserServiceImpl } from '../service';

jest.mock('../service/impl/userImpl.service.ts', () => {
  return {
    UserServiceImpl: jest.fn().mockImplementation(() => {
      return {
        getUsers: jest.fn().mockResolvedValue(['user1', 'user2']),
      };
    }),
  };
});

describe('UserController', () => {
  let userController: UserController;

  beforeEach(() => {
    userController = new UserController();
  });

  it('should retrieve all users', async () => {
    const users = await userController.getAllUsers();
    expect(users).toEqual(['user1', 'user2']);
  });

  // Agrega más pruebas para otros métodos
});
