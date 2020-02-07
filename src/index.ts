import { convertByDocRotary } from "./convertByDocRotary";
import { convertByFcDocRotary } from "./convertByFcDocRotary";
import assert from "assert";
import { download } from "./download";

export { convertByDocRotary } from "./convertByDocRotary";
export { convertByFcDocRotary } from "./convertByFcDocRotary";

export const convert = async (fileUrl: string) => {
  try {
    const res = await convertByFcDocRotary(fileUrl);

    assert(res.statusCode === 200);
    assert(res.headers["content-type"] === "application/json");
    assert(res.body.hasOwnProperty("sourceFileUrl"));
    assert(res.body.hasOwnProperty("pdfUrl"));

    return await download(res.body.pdfUrl);
  } catch (ex) {
    return await convertByDocRotary(fileUrl);
  }
};
