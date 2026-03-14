import type { NextFunction, Request, Response } from "express";
import type { ZodTypeAny } from "zod";

const validatePart = (part: "body" | "params" | "query", schema: ZodTypeAny) => {
  return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      const parsed = await schema.parseAsync(req[part]);

      if (part === "query") {
        Object.assign(req.query, parsed as Request["query"]);
      } else if (part === "params") {
        req.params = parsed as Request["params"];
      } else {
        req.body = parsed;
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export const validateBody = (schema: ZodTypeAny) => validatePart("body", schema);
export const validateParams = (schema: ZodTypeAny) => validatePart("params", schema);
export const validateQuery = (schema: ZodTypeAny) => validatePart("query", schema);