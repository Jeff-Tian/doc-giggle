// @ts-ignore
import CloudmersiveConvertApiClient from 'cloudmersive-convert-api-client';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

const asyncCallback = (resolve: any, reject: any) => (
  error: any,
  data: any,
  _response: any
) => {
  if (error) {
    reject(error);
  } else {
    resolve(data);
  }
};

export const convert = async (docUrl: string) => {
  const defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

  const Apikey = defaultClient.authentications.Apikey;
  Apikey.apiKey = '079b7333-32f5-4b7d-8a5b-3af659a6709a';

  const api = new CloudmersiveConvertApiClient.ConvertDocumentApi();

  return await new Promise((resolve, reject) => {
    api.convertDocumentDocxToPdf(docUrl, asyncCallback(resolve, reject));
  });
};
