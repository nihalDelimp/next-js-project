import { PrismaClient } from '@prisma/client'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { email, password } = req.body;
            if (email && password) {
                let user = await prisma.user.findUnique({
                    where: { email }
                });
                if (!user) {
                    return res.status(409).json("User is not present");
                }
                bcrypt.compare(password, user.password, async (err, result) => {
                    if (err) {
                        res.status(200).json("Some Error Occured!");

                    }
                    if (result) {
                        let userData = { user };
                        const jwtPayload = userData;
                        const secret = process.env.SECRET_KEY;
                        const jwtData = {
                            expiresIn: "1d",
                        };
                        userData.token = jwt.sign(jwtPayload, secret, jwtData);
                        let { id, username, email } = userData.user;
                        let { token } = userData;
                        res.status(200).json({ user: { id, username, email }, token, message: "Logged in successfully" });
                    }
                    else {
                        res.status(200).json("Not a valid Password!");
                    }
                })
            }
        }

        catch (error) {
            console.log(error)
        }
    } else {

        // Handle any other HTTP methods
    }
}
