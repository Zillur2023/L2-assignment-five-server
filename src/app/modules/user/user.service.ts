import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "./user.model";
import { IUser } from "./user.interface";

const createUserIntoDB = async (payload: IUser) => {
  // checking if the user is exist
  const isUserExist = await User.isUserExistsByEmail(payload.email);

  if (isUserExist) {
    throw new AppError(
      httpStatus.ALREADY_REPORTED,
      "This user is already exist!"
    );
  }
  const result = await User.create(payload);

  return result;
};

const getAllUserFromDB = async () => {
  const result = await User.find();

  return result;
};
const getUserFromDB = async (email: string) => {
  const result = await User.findOne({ email });

  return result;
};
const getUserByIdFromDB = async (id: string) => {
  const result = await User.findById(id);

  return result;
};

const updateUserIntoDB = async (payload: Record<string, unknown>) => {
  const user = await User.findByIdAndUpdate(payload._id, payload, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  return user;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getUserFromDB,
  getUserByIdFromDB,
  updateUserIntoDB,
};
