import { when } from 'jest-when';
import { mockRequest, mockResponse } from '../../testUtils/mockRequest';
import { prismaForTests } from '../../testUtils/prisma';
import { exampleModel } from '..';

jest.mock('@prisma/client');

describe("Example Model", () => {
  describe("getAllForUsers", () => {
    it("should return all users", async () => {
      // Arrange
      const users = [
        {
          id: 1,
          email: 'something', 
          role: 'trainer', 
          password: 'password',
          created_at: new Date(),
          updated_at: new Date()
        },
      ];
      prismaForTests.events = {
        findMany: jest.fn().mockResolvedValueOnce(users),
      };

      // Act;
      const result = await exampleModel.getAllUsers();

      // Assert
      expect(prisma.events.findMany).toHaveBeenCalledTimes(1);
      expect(prisma.events.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          orderBy: {
            id: 'asc'
          }
        })
      );
      expect(result).toEqual(users);
    });
  });
});
