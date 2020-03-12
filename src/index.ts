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

    logger.info("convertByFcDocRotary Result: ", {
      body: res.body,
      statusCode: res.statusCode,
      typeOfBody: typeof res.body
    });

    assert(res.statusCode === 200, "status should be 200");

    let body = res.body;

    if (typeof res.body === "string") {
      body = JSON.parse(body);
    }

    assert(
      body.hasOwnProperty("sourceFileUrl"),
      "should contain `sourceFileUrl`"
    );
    assert(body.hasOwnProperty("pdfFileUrl"), "should contain `pdfFileUrl`");

    return await download(body.pdfFileUrl);
  } catch (ex) {
    logger.error(`convertByFcDocRotary error: `, { ex });
    return await convertByDocRotary(fileUrl);
  }
};
