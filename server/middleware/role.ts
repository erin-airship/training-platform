import {Request, Response, NextFunction} from 'express';

export function checkRoleMiddleware(requiredRole: string) {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole = res.locals.user.role;
        if (userRole === requiredRole) {
            return next();
        } else {
            return res.status(403).json({
                message: 'Forbidden',
            });
        }
    }
}