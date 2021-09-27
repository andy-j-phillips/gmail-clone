import { useState } from "react";
import { useQuery } from "react-query";
import { useHistory, useLocation } from "react-router";
import { Table } from "antd";
import { folder } from "src/api";
import { QueryCacheTypes } from "src/types/enums";
import styles from "./email-table.module.css";
import { GetFolderResponse } from "src/types/queryResponse";

const EMAIL_COLUMNS = [
  {
    title: "From",
    dataIndex: "from",
  },
  {
    title: "Subject",
    dataIndex: "subject",
  },
  {
    title: "",
    dataIndex: "",
  },
];

const EmailTable = () => {
  const location = useLocation();
  const history = useHistory();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const { isLoading, error, data } = useQuery<GetFolderResponse, Error>(
    `${QueryCacheTypes.folder}_${location.pathname}`,
    async () => await folder.getFolder(location.pathname)
  );

  if (isLoading) {
    // TODO handle loading
  }

  if (error) {
    // TODO handle error
  }

  const onChange = (selectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  return (
    <Table
      className={styles.table}
      rowSelection={{
        selectedRowKeys,
        onChange,
      }}
      onRow={(record) => {
        return {
          onClick: () => {
            history.push(`${location.pathname}/${record["message-id"]}`);
          },
        };
      }}
      columns={EMAIL_COLUMNS}
      dataSource={data?.emails}
      pagination={{ position: ["topRight", "topRight"] }}
      rowKey="message-id"
    />
  );
};

export default EmailTable;
