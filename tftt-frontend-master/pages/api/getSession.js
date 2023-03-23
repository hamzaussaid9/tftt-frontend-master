import jwt_decode from 'jwt-decode'
export default function getSession(req, res) {
    const token = req.cookies.loginJWT
    if (token) {
        //Decode JWT and return user object
        const decoded = jwt_decode(token)
        return res.status(200).json({ user: decoded.user })
    }
    else {
        //Session is not active
        return res.status(200).json({ user: null })
    }
}

