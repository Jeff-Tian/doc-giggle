import { testingXlsx } from "./fixtures/testingFiles";
import { download } from "../src/download";

describe("download", () => {
  it("download a file into buffer", async () => {
    const res = await download(testingXlsx);

    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toEqual(
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    expect(res.body instanceof Buffer).toBe(true);
    expect(Object.prototype.toString.call(res.body)).toEqual(
      "[object Uint8Array]"
    );
  });
});
