
export default function logout(req,res){
    // clear JWT 'loginJWT' from cookies
    const cookie1 = 'loginJWT=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    const cookie2 = 'next-auth.session-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    res.setHeader('Set-Cookie', [cookie1, cookie2])

    return res.status(200).json({message: 'Logout successful'})

}