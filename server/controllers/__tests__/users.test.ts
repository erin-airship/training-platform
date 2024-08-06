import { when } from 'jest-when';
import { mockRequest, mockResponse } from '../../testUtils/mockRequest';
import * as usersModel from '../../models/users';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../users';

jest.mock('../../models/users');

describe('Users Controller', () => {
  describe('getUsers', () => {
    it('should return a 200 status and list of users', async () => {
      // Arrange
      const req = mockRequest();
      const res = mockResponse();

      const mockedUsers: { id: number; email: string; password: string; role: string; created_at: Date | null; updated_at: Date | null; }[] = [
        { id: 1, email: 'user1@example.com', role: 'trainer', password: 'password', created_at: null,updated_at: new Date() },
        { id: 2, email: 'user2@example.com', role: 'trainee', password: 'password', created_at: new Date(), updated_at: new Date() },
      ];

      when(usersModel.getAllUsers).calledWith().mockReturnValueOnce(Promise.resolve(mockedUsers));

      // Act
      await getUsers(req, res);

      // Assert
      expect(usersModel.getAllUsers).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockedUsers);
    });

    it('should return a 500 status if an error occurs', async () => {
      // Arrange
      const req = mockRequest();
      const res = mockResponse();

      when(usersModel.getAllUsers).calledWith().mockReturnValueOnce(Promise.reject(new Error('Database error')));

      // Act
      await getUsers(req, res);

      // Assert
      expect(usersModel.getAllUsers).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'An error occurred while fetching users' });
    });
  });

  describe('getUserById', () => {
    it('should return a 200 status and the user if found', async () => {
      // Arrange
      const req = mockRequest({ params: { id: 1 } });
      const res = mockResponse();

      const mockedUser = { id: 1, email: 'user1@example.com', password: 'password', role: 'trainer', created_at: new Date(), updated_at: new Date() };

      when(usersModel.getUserById).calledWith(1).mockReturnValueOnce(Promise.resolve(mockedUser));

      // Act
      await getUserById(req, res);

      // Assert
      expect(usersModel.getUserById).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockedUser);
    });

    it('should return a 404 status if the user is not found', async () => {
      // Arrange
      const req = mockRequest({ params: { id: 1 } });
      const res = mockResponse();

      when(usersModel.getUserById).calledWith(1).mockReturnValueOnce(Promise.resolve(null as any));

      // Act
      await getUserById(req, res);

      // Assert
      expect(usersModel.getUserById).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
    });

    it('should return a 500 status if an error occurs', async () => {
      // Arrange
      const req = mockRequest({ params: { id: 1 } });
      const res = mockResponse();

      when(usersModel.getUserById).calledWith(1).mockReturnValueOnce(Promise.reject(new Error('Database error')));

      // Act
      await getUserById(req, res);

      // Assert
      expect(usersModel.getUserById).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'An error occurred while fetching user' });
    });
  });

  describe('createUser', () => {
    it('should return a 201 status and the created user', async () => {
      // Arrange
      const req = mockRequest({ body: { email: 'newuser@example.com', password: 'password', role: 'user' } });
      const res = mockResponse();
    
      const mockedUser = { 
        id: 1, 
        email: 'newuser@example.com', 
        password: 'password', 
        role: 'trainer', 
        created_at: new Date(), 
        updated_at: new Date() 
      };
    
      when(usersModel.createUser).calledWith(req.body).mockReturnValueOnce(Promise.resolve(mockedUser));
    
      // Act
      await createUser(req, res);
    
      // Assert
      expect(usersModel.createUser).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockedUser);
    });

    it('should return a 500 status if an error occurs', async () => {
      // Arrange
      const req = mockRequest({ body: { email: 'newuser@example.com', password: 'password', role: 'trainee' } });
      const res = mockResponse();

      when(usersModel.createUser).calledWith(req.body).mockReturnValueOnce(Promise.reject(new Error('Database error')));

      // Act
      await createUser(req, res);

      // Assert
      expect(usersModel.createUser).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'An error occurred while creating user' });
    });
  });

  describe('updateUser', () => {
    it('should return a 200 status and the updated user if successful', async () => {
      // Arrange
      const req = mockRequest({ params: { id: 1 }, body: { email: 'updateduser@example.com' } });
      const res = mockResponse();

      const mockedUser = { 
        id: 1, 
        email: 'updatedUser@example.com', 
        password: 'password2', 
        role: 'trainer', 
        created_at: new Date(), 
        updated_at: new Date() 
      };

      when(usersModel.updateUser).calledWith(1, req.body).mockReturnValueOnce(Promise.resolve(mockedUser));

      // Act
      await updateUser(req, res);

      // Assert
      expect(usersModel.updateUser).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockedUser);
    });

    it('should return a 404 status if the user is not found', async () => {
      // Arrange
      const req = mockRequest({ params: { id: 1 }, body: { email: 'updateduser@example.com' } });
      const res = mockResponse();

      when(usersModel.updateUser).calledWith(1, req.body).mockReturnValueOnce(Promise.resolve(null as any));

      // Act
      await updateUser(req, res);

      // Assert
      expect(usersModel.updateUser).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
    });

    it('should return a 500 status if an error occurs', async () => {
      // Arrange
      const req = mockRequest({ params: { id: 1 }, body: { email: 'updateduser@example.com' } });
      const res = mockResponse();

      when(usersModel.updateUser).calledWith(1, req.body).mockReturnValueOnce(Promise.reject(new Error('Database error')));

      // Act
      await updateUser(req, res);

      // Assert
      expect(usersModel.updateUser).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'An error occurred while updating user' });
    });
  });

  describe('deleteUser', () => {
    it('should return a 200 status and the deleted user if successful', async () => {
      // Arrange
      const req = mockRequest({ params: { id: 1 } });
      const res = mockResponse();

      const mockedUser = { 
        id: 1, 
        email: 'newuser@example.com', 
        password: 'password', 
        role: 'trainee', 
        created_at: null,
        updated_at: null
      };

      when(usersModel.deleteUser).calledWith(1).mockReturnValueOnce(Promise.resolve(mockedUser));

      // Act
      await deleteUser(req, res);

      // Assert
      expect(usersModel.deleteUser).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockedUser);
    });

    it('should return a 404 status if the user is not found', async () => {
      // Arrange
      const req = mockRequest({ params: { id: 1 } });
      const res = mockResponse();

      when(usersModel.deleteUser).calledWith(1).mockReturnValueOnce(Promise.resolve(null as any));

      // Act
      await deleteUser(req, res);

      // Assert
      expect(usersModel.deleteUser).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
    });

    it('should return a 500 status if an error occurs', async () => {
      // Arrange
      const req = mockRequest({ params: { id: 1 } });
      const res = mockResponse();

      when(usersModel.deleteUser).calledWith(1).mockReturnValueOnce(Promise.reject(new Error('Database error')));

      // Act
      await deleteUser(req, res);

      // Assert
      expect(usersModel.deleteUser).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'An error occurred while deleting the user' });
    });
  });
});
