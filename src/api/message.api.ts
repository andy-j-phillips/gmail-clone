import api, { Routes } from "./config";

export const getMessage = async (messageId: string) => {
  try {
    let res = await api.get(`/${Routes.MESSAGES}/${messageId}`);
    return res.data;
  } catch ({ message }) {
    // TODO handle errors
    console.error({ message });
  }
};

export const createMessage = async (
  message: string,
  subject: string,
  to: string
) => {
  try {
    console.group("SENDING EMAIL:-");
    console.log("url: http://localhost:8080/messages/new");
    console.group("payload");
    console.log(
      "This assumes that logged in user data is handled server side and not required to send user data."
    );
    console.log({
      message,
      subject,
      to,
    });
    console.groupEnd();
    console.groupEnd();
  } catch ({ message }) {
    // TODO handle errors
    console.error({ message });
  }
};
