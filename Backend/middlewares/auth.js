import { catchAssyncError } from "./catchassyncError.js"
import ErrorHandler from './error.js';
import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";

export const isAuthorized = catchAssyncError(async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token)
    {
        return next (new ErrorHandler("user not authorized"), 400 );
    }
    else{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = await User.findById(decoded.id);

        next();

    }
})