import { Router } from "express";

export class Route {
  constructor(
    public path: string,
    public router: Router,
  ) {}
}

export type Routes = Route[];

type Method = "GET" | "POST" | "PUT" | "DELETE";

export interface IExcludedPaths {
    path: string;
    method: Method;
  }