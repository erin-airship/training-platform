import { usersModel } from "..";
import { prismaForTests } from "../../testUtils/prisma";
import {prisma} from "../../utils/prisma";

jest.mock("@prisma/client");

describe('Users Model', () => {
describe('getAllUsers', () => {
    // it('should get all users with pagination', async () => {
    //     // Arrange 
    //     const users = [
    //         {
    //             id: 1, 
    //             email: 'user1@example.com',
    //             password: 'password',
    //             role: 'trainer',
    //             created_at: new Date(),
    //             updated_at: new Date()
    //         },
    //         {
    //           id: 2,
    //           email: "user2@example.com",
    //           password: "password",
    //           role: "trainee",
    //           created_at: new Date(),
    //           updated_at: new Date(),
    //         },
    //       ];
    //       prismaForTests.users = {
    //         get: jest.fn().mockResolvedValue(users)
    //       }

    //       // Act 
    //       const result = await usersModel.getAllUsers(0,2);

    //       // Assert 
    //       expect(prisma.users.findMany).toHaveBeenCalledTimes(1);
    //       expect(prisma.users.findMany).toHaveBeenCalledWith({
    //         skip: 0,
    //         take: 2,
    //         orderBy: {
    //           id: "asc",
    //         },
    //       });
    //       expect(result).toEqual(users);
    // });
});

describe("getUserById", () => {
    it("should get a user by id", async () => {
      // Arrange
      const user = {
        id: 1,
        email: "user1@example.com",
        password: "password",
        role: "trainer",
        created_at: new Date(),
        updated_at: new Date(),
      };
      prismaForTests.users = {
        findUnique: jest.fn().mockResolvedValue(user)
      }

      // Act
      const result = await usersModel.getUserById(1);

      // Assert
      expect(prisma.users.findUnique).toHaveBeenCalledTimes(1);
      expect(prisma.users.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(result).toEqual(user);
    });

    it("should throw an error if user not found", async () => {
      // Arrange
      prismaForTests.users = {
        findUnique: jest.fn().mockResolvedValue(null)
      }

      // Act & Assert
      await expect(usersModel.getUserById(1)).rejects.toThrow("User not found");
      expect(prisma.users.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });
});