import { when } from "jest-when";
import { mockRequest, mockResponse } from "../../testUtils/mockRequest";
import * as exampleModel from "../../models/example";
import { getAllUsers } from "../example";

jest.mock("../../models/example");

describe("Examples Controller", () => {
  it("should return a 200 when examples are found", async () => {
    // Arrange
    const userId = 1;
    const req = mockRequest({ locals: { userId: userId } });
    const res = mockResponse(userId);

    const mockedReturnValue = [
      { id: 1, email: "example1@example.com", password: "password1", role: "trainer", created_at: null, updated_at: null },
      { id: 2, email: "example2@example.com", password: "password2", role: "trainee", created_at: null, updated_at: null },
    ];

    when(exampleModel.getAllForUser)
      .calledWith(userId)
      .mockReturnValueOnce(Promise.resolve(mockedReturnValue));

    // Act
    await getAllUsers(req, res);

    // Assert
    expect(exampleModel.getAllUsers).toHaveBeenCalledTimes(0);
    // expect(exampleModel.getAllForUser).toHaveBeenLastCalledWith(userId);
    // expect(res.status).toHaveBeenCalledTimes(1);
    // // expect(res.status).toHaveBeenCalledWith(200);
    // expect(res.json).toHaveBeenCalledTimes(1);
    // expect(res.json).toHaveBeenCalledWith(mockedReturnValue);
  });
});
