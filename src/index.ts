import { convertByDocRotary } from "./convertByDocRotary";
import { convertByFcDocRotary } from "./convertByFcDocRotary";
import assert from "assert";
import { download } from "./download";

export { convertByDocRotary } from "./convertByDocRotary";
export { convertByFcDocRotary } from "./convertByFcDocRotary";

interface ILogger {
  error: (...args: any) => void;
  info: (...args: any) => void;
}

export const convert = async (
  fileUrl: string,
  logger: ILogger = { error: console.error, info: console.log }
) => {
  try {
    const res = await convertByFcDocRotary(fileUrl);

    logger.info("convertByFcDocRotary Result: ", { res });

    assert(res.statusCode === 200, "status should be 200");
    assert(
      res.body.hasOwnProperty("sourceFileUrl"),
      "should contain `sourceFileUrl`"
    );
    assert(res.body.hasOwnProperty("pdfUrl"), "should contain `pdfUrl`");

    return await download(res.body.pdfUrl);
  } catch (ex) {
    logger.error(`convertByFcDocRotary error: `, { ex });
    return await convertByDocRotary(fileUrl);
  }
};
