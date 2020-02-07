import { convertByFcDocRotary } from "../src/convertByFcDocRotary";
import { testingXlsx } from "./fixtures/testingFiles";

jest.setTimeout(120000);

describe("converting by fc-doc-rotary", () => {
  it("converts", async () => {
    const res = await convertByFcDocRotary(testingXlsx);

    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toEqual("application/json");
    expect(res.body.hasOwnProperty("sourceFileUrl"));
    expect(res.body.hasOwnProperty("pdfUrl"));
  });
});
