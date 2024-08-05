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
      { id: 1, name: "example1" },
      { id: 2, name: "example2" },
    ];

    when(exampleModel.getAllForUser)
      .calledWith(userId)
      .mockReturnValueOnce(Promise.resolve(mockedReturnValue));

    // Act
    await getAllUsers(req, res);

    // Assert
    expect(exampleModel.getAllForUser).toHaveBeenCalledTimes(1);
    expect(exampleModel.getAllForUser).toHaveBeenLastCalledWith(userId);
    // expect(res.status).toHaveBeenCalledTimes(1);
    // expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(mockedReturnValue);
  });
});
