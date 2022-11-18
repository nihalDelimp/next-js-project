import { PrismaClient } from '@prisma/client'
import {  Request, Response } from 'express';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

function hashPassword(password : string) {
  return bcrypt.hashSync(password, salt);
}

const IsEmailExists = async (email:string) => {
  return await prisma.user.findUnique({
    where: { email }
  })
}
const IsUsernameExists = async (username:string) => {
  return await prisma.user.findUnique({
    where: { username }
  })
}
export default async function handler(req:Request, res:Response) {
  if (req.method === 'POST') {
    try {
      const { username, email, password } = req.body;
      const IsEmail = await IsEmailExists(email);
      if (IsEmail) {
        return res.status(409).json("Email already Exists!");
      }
      const IsUsername = await IsUsernameExists(username);
      if (IsUsername) {

        return res.status(409).json("Username already Exists!");
      }
      const hashedPassword = hashPassword(password);
      const result = await prisma.user.create({
        data: {
          username, email, password: hashedPassword
        },
      })
      res.status(200).json("Registartion succesful!");
    }

    catch (error) {
      console.log(error)
    }
  } else {

    // Handle any other HTTP methods
  }
}
