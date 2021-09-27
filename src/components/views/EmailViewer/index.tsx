import { useState } from "react";
import { useQuery } from "react-query";
import { useHistory, useLocation, useParams } from "react-router";
import { message } from "src/api";
import { format } from "src/utils";
import { Button, ResponseBox, Space, BrokenText } from "src/components/lib";
import { EmailResponseType } from "src/components/lib/ResponseBox";
import { QueryCacheTypes } from "src/types/enums";
import styles from "./email-viewer.module.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Message } from "src/types/dataTypes";

const EmailViewer: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  let { id } = useParams<{ id: string }>();
  const [responseStatus, setResponseStatus] =
    useState<EmailResponseType | null>(null);

  const {
    isLoading,
    error,
    data: email,
  } = useQuery<Message, Error>(
    QueryCacheTypes.email,
    async () => await message.getMessage(id)
  );

  if (isLoading || typeof email === "undefined") {
    // TODO handle loading
    return null;
  }

  if (error) {
    // TODO handle error
  }

  const handleBackClick = () => {
    // Get folder name - If we decide to page through open emails
    // then we can store the current folder in memory
    let pathNames = location.pathname.split("/").filter((p) => p);
    history.push(`/${pathNames[0]}`);
  };

  const handleSend = (messageStr: string) => {
    message.createMessage(messageStr, `Re: ${email.subject}`, email.from);
  };

  return (
    <div>
      <div className={styles.toolBar}>
        <ArrowLeftOutlined onClick={handleBackClick} />
      </div>
      <div className={styles.emailViewer}>
        <div className={styles.subject}>{email?.subject}</div>
        <div className={styles.emailMeta}>
          <div>
            <div className={styles.from}>{email?.from}</div>
            <div className={styles.to}>to {email?.to}</div>
          </div>
          <div className={styles.date}>
            {format.humanReadableDate(new Date(email?.date))}
          </div>
        </div>
        <div className={styles.body}>
          <BrokenText text={email?.body} />
        </div>
        {!responseStatus ? (
          <Space>
            <Button onClick={() => setResponseStatus(EmailResponseType.REPLY)}>
              Reply
            </Button>
            <Button
              onClick={() => setResponseStatus(EmailResponseType.FORWARD)}
            >
              Forward
            </Button>
          </Space>
        ) : (
          <ResponseBox
            to={email?.from}
            responseType={responseStatus}
            handleSend={handleSend}
            handleCancel={() => setResponseStatus(null)}
          />
        )}
      </div>
    </div>
  );
};

export default EmailViewer;
