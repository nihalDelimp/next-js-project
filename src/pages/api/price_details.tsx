import { PrismaClient } from '@prisma/client'
import {  Request, Response } from 'express';

const prisma = new PrismaClient()

export default async function handler(req:Request, res:Response) {
    if (req.method === 'POST') {
        try {
            const {id}= req.body;
            console.log(id,"Nihallll")
            let priceDetails = await prisma.price_details.findMany({where:{
                plan_id:id
            }});
            res.status(200).json({ data: priceDetails })
        }

        catch (error) {
            console.log(error)
        }
    } else {

        // Handle any other HTTP methods
    }
}
