import urllib from "urllib-x";
import { URL } from "url";
import request from "request";

export const convert = async (docUrl: string) => {
  const originalFile = await request.get(docUrl, { encoding: null });

  return await urllib.request("https://doc-rotary.herokuapp.com/upload", {
    files: originalFile,
    data: {
      file: new URL(docUrl).pathname.substr(1)
    }
  });
};
