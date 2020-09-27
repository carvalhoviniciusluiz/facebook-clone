import { User } from "firebase";

export interface Action {
  type: string;
  user: User;
};
