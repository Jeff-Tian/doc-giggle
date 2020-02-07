import request from "request";
import { promisify } from "./promisify";

export const convertByFcDocRotary = async (docUrl: string) =>
  promisify(request.get)(
    `https://1546617239930485.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/libreoffice/word2pdf-nodejs8/?file=${docUrl}&from=doc-giggle`
  );
