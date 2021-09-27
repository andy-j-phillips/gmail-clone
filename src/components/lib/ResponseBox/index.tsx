import { useState } from "react";
import { Button } from "src/components/lib";
import { DeleteOutlined } from "@ant-design/icons";
import styles from "./respond-box.module.css";
import { capitalize } from "src/utils/format";

export enum EmailResponseType {
  REPLY = "reply",
  FORWARD = "forward",
}

interface ResponseBoxProps {
  responseType: EmailResponseType;
  to: string;
  handleSend: (message: string) => void;
  handleCancel: () => void;
}
const ResponseBox: React.FC<ResponseBoxProps> = ({
  responseType,
  to,
  handleSend,
  handleCancel,
}) => {
  const [response, setResponse] = useState("");

  return (
    <div className={styles.respondBox}>
      <div>
        <span className={styles.replyingText}>
          {capitalize(responseType)}ing to{" "}
        </span>
        <span>{to}</span>
      </div>
      <div>
        <textarea
          autoFocus
          rows={6}
          onChange={(e) => setResponse(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.footer}>
        <Button type="primary" onClick={() => handleSend(response)}>
          Send
        </Button>
        <DeleteOutlined onClick={handleCancel} />
      </div>
    </div>
  );
};

export default ResponseBox;
