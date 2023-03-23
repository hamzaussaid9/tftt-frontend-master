//Helper function to decode JWT 'loginJWT' from cookies and return the user object
import jwt_decode from 'jwt-decode'
export const getSession = async (req) => {
    const token = req.cookies.loginJWT
    if(token){
        //Decode JWT and return user object
        const decoded = jwt_decode(token)
        return decoded.user
    }
    else{
        //Session is not active
        return null
    }
}
