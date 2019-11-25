import urllib from "urllib-x";
import { URL } from "url";
import request from "request";

export const convert = async (docUrl: string) => {
  const { res } = await new Promise((resolve, reject) =>
    request.get(docUrl, { encoding: null }, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve({ res });
      }
    })
  );

  return await urllib.request(
    "https://doc-rotary.herokuapp.com/upload?from=doc-giggle",
    {
      files: res,
      data: {
        file: new URL(docUrl).pathname.substr(1)
      },
      timeout: [10000, 30000]
    }
  );
};
