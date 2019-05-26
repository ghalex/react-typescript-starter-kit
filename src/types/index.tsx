import { RouteComponentProps } from "@reach/router";
import User from "models/User";

export type Nullable<T> = T | null;

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData extends LoginData {
  retypePassword: string;
}

export type PrivateRouteProps<Params = {}> = RouteComponentProps<Params> & {
  user: User;
};
