import jwt from 'jsonwebtoken';

const isAuthenticated = async(req,res,next)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            return res
              .status(401)
              .json({ message: "No token, authorization denied" });
        }
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        req.user = decoded;
        next();
    }
    catch(err){
        return res
          .status(401)
          .json({ message: "Invalid or expired token", error: err.message });
    }
}

export default isAuthenticated