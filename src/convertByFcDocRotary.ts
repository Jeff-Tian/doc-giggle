import request from "request";

const promisify = (fn: Function) => async (...args: any): Promise<any> =>
  new Promise((resolve, reject) =>
    fn(...args, (err: any, res: any) => (err ? reject(err) : resolve(res)))
  );

export const convertByFcDocRotary = async (docUrl: string) =>
  promisify(request.get)(
    `https://1546617239930485.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/libreoffice/word2pdf-nodejs8/?file=${docUrl}&from=doc-giggle`
  );
