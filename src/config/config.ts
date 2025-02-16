import dotenv from "dotenv";

dotenv.config();

export const CONFIG = {
  BASE_URL: process.env.BASE_URL || "https://www.saucedemo.com",
};