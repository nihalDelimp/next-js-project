import { PrismaClient } from '@prisma/client'
import {  Request, Response } from 'express';

const prisma = new PrismaClient()

export default async function handler(req:Request, res:Response) {
  if (req.method === 'GET') {
    try {
      let priceDetails = await prisma.price.findMany();
      res.status(200).json({ data: priceDetails })
    }

    catch (error) {
      console.log(error)
    }
  } else {

    // Handle any other HTTP methods
  }
}
