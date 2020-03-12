import { convertByDocRotary } from "./convertByDocRotary";
import { convertByFcDocRotary } from "./convertByFcDocRotary";
import assert from "assert";
import { download } from "./download";

export { convertByDocRotary } from "./convertByDocRotary";
export { convertByFcDocRotary } from "./convertByFcDocRotary";

interface ILogger {
  error: (...args: any) => void;
}

export const convert = async (fileUrl: string, logger: ILogger = console) => {
  try {
    const res = await convertByFcDocRotary(fileUrl);

    assert(res.statusCode === 200);
    assert(res.headers["content-type"] === "application/json");
    assert(res.body.hasOwnProperty("sourceFileUrl"));
    assert(res.body.hasOwnProperty("pdfUrl"));

    return await download(res.body.pdfUrl);
  } catch (ex) {
    logger.error(`convertByFcDocRotary error: `, { ex });
    return await convertByDocRotary(fileUrl);
  }
};
