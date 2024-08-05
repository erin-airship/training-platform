import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import { usersModel } from "../models";
import { generateAccessToken } from "../utils/auth";

const postSignUp = async (req: Request, res: Response) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = {
      email: req.body.email,
      password: hashPassword,
      role: req.body.role,
    };
    const user = await usersModel.createUser(newUser);
    const accessToken = await generateAccessToken(user.id);
    res.status(201).json({ accessToken });
  } catch (error) {
    res.status(400).send("Could not sign up");
    console.error(error);
  }
};

const postSignIn = async (req: Request, res: Response) => {
  try {
    const user = await usersModel.getUserByEmail(req.body.email);
    if (!user) {
      return res.status(400).send("User not found");
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).send("Invalid password");
    }
    const accessToken = await generateAccessToken(user.id);
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(400).send("Could not sign in");
    console.error(error);
  }
};

export { postSignUp, postSignIn };
