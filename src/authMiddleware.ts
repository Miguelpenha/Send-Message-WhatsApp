import { Request, Response, NextFunction } from 'express'

function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const keyRaw = req.header('Authorization')

    if (keyRaw) {
        const key = keyRaw.replace('key ', '')
        const keysAuthorized = process.env.TOKEN_ACCESS_API.split(',')
        
        if (keysAuthorized.includes(key)) {
            next()
        } else {
            res.status(401)
            res.json({ unauthorized: true })
        }
    } else {
        res.status(401)
        res.json({ unauthorized: true })
    }
}

export default authMiddleware