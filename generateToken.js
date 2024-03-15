import jwt from 'jsonwebtoken';

const generateToken = (token) => {
    if(token === 'undefined' || token === 'null'){
        token = undefined
    }

    if(token){
        try{
            const decoded = jwt.verify(token, 'asdasdasd');

            return decoded
        }catch(err){
            return 'Not authorized, invalid token'
        }
    }else{
        return 'Not authorized, no token'
    }





}

export default generateToken
