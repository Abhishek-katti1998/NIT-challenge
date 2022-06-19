import { prodUrl } from "../config";
export const getProducts = async () => {
  return await (await fetch(`${prodUrl}`)).json();
};
