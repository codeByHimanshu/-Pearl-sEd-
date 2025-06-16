import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const userMiddleware = async (req, res, next) => {
    console.log("User middleware triggered");
    try {
        const token = req.headers.authorization?.split(" ")[1];
        // console.log(token);
        if (!token) {
            return res.status(401).json({ message: 'Authentication required' });
        }
        // console.log("jwt :", process.env.JWT_SECRET);
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "12345678");
        // console.log("decoded",decoded)
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export default userMiddleware;


