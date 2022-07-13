import { Document } from "mongoose";

//types = blueprint for todo data
export interface Todo extends Document {
  title: string;
  status: "completed" | "uncompleted";
}
 