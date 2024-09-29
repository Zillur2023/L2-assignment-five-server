// import { Model, Types } from "mongoose";
import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface IUser {
  // _id?: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  phone: string;
  role: IUserRole;
  address: string;
  status: "in-progress" | "blocked";
  isDeleted: boolean;
}

export interface IUserModel extends Model<IUser> {
  //instance methods for checking if the user exist
  isUserExistsByEmail(id: string): Promise<IUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}
// export type IUserRole = typeof USER_ROLE[keyof typeof USER_ROLE]; 

export type IUserRole = keyof typeof USER_ROLE;
