import * as redis from "redis";
import { RateLimiterRedis } from "rate-limiter-flexible";
import { NextFunction, Request, Response } from "express";
import { AppError } from "@shared/Errors/AppError";



export default async function rateLimiter(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {


    const redisClient = redis.createClient({
        legacyMode: true,
        socket:
        {
            host: process.env.REDIS_HOST,       
            port: Number(process.env.REDIS_PORT),
        },
    });
    
    await redisClient.connect();
    
    const limiter = new RateLimiterRedis({
        storeClient: redisClient,
        keyPrefix: 'rateLimiter',
        points: 10,
        duration: 10,
    });
    try {

        await limiter.consume(request.ip);;
        return next();
    } catch (err) {
        throw new AppError("Too many requests", 429);
    } finally {
        //await redisClient.disconnect();
      }
}