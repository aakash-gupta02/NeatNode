import type { NextFunction, Request, RequestHandler, Response } from "express";

const CatchAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>,
): RequestHandler =>
  (req, res, next) => {
    fn(req, res, next).catch(next);
  };

export default CatchAsync;
