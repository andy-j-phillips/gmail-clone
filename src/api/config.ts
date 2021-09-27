import axios from "axios";

const { REACT_APP_SERVER_ADDRESS, REACT_APP_SERVER_PORT } = process.env;

export enum Routes {
  FOLDERS = "folders",
  _FOLDERS = "_folders",
  MESSAGES = "messages",
}

export default axios.create({
  baseURL: `${REACT_APP_SERVER_ADDRESS}:${REACT_APP_SERVER_PORT}/`,
  timeout: 5000,
});
