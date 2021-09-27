import api, { Routes } from "./config";

export const getFolders = async () => {
  try {
    let res = await api.get(`/${Routes.FOLDERS}`);
    return res.data;
  } catch ({ message }) {
    // TODO handle errors
    console.error({ message });
  }
};

export const getFolder = async (name: string) => {
  try {
    let res = await api.get(`/${Routes._FOLDERS}/${name}`);
    return res.data;
  } catch ({ message }) {
    // TODO handle errors
    console.error({ message });
  }
};
