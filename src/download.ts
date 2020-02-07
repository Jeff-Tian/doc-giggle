import request from "request";
import { promisify } from "./promisify";

export const download = (fileUrl: string): Promise<any> =>
  promisify(request.get)(fileUrl, { encoding: null });
