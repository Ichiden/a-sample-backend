import generateToken from "./generateToken.js"

export const protect = async(req,res,next) => {
    console.log(req.cookies.myCat)
    req.user = req.cookies.myCat
    next()
}

export const controller = async(req,res,next) => {
    console.log(req.user)
    console.log('qweqwe')
}

export const get = async(req,res,next) => {

    const token = req.query.cookie


    // generateToken(token,res)

    // generateToken(token,res)
    
    const protect = generateToken(token)

    console.log(protect)

    if(protect === 'Not authorized, no token'){
        res.status(401).json(protect)
        return
    }

    // if(protect === 'Not authorized, invalid token'){
    //     res.status(401).json(protect)
    //     return
    // }


    res.status(200).json('success')
    





    

}