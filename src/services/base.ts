import apisauce from 'apisauce';

const baseUrl = 'https://qubisaapi.azurewebsites.net/studentdev/v1/';

const api = apisauce.create({
  baseURL: baseUrl,
  timeout: 3000,
  headers: {
    Authorization: 'Basic dHJpYWxxdWJpc2E6dHJpYWxxdWJpc2FrYW5kaWRhdA==',
  },
});

export const get = async (url: string, params: Object = {}) =>
  (
    await api.get(url, {
      params,
    })
  ).data as any;
