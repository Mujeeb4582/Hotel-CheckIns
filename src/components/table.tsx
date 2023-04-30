import { Table, Drawer, Tag } from "antd";
import { useCallback, useState } from "react";
import styles from "../styles/table.module.scss";

interface CheckIn {
  key: string;
  title: string;
  owner: string;
  status: string;
  createdAt: string;
  imageUrl: string;
}
const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      let color = "#79FFE1";
      if (status === "CHECKED OUT") {
        color = "volcano";
      }
      return (
        <Tag color={color} key={status} className={styles.tag}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];

const data: CheckIn[] = [
  {
    key: "1",
    title: "CheckIn name",
    owner: "John Doe",
    status: "CHECKED IN",
    createdAt: "28th Apr 2023",
    imageUrl:
      "https://i.pinimg.com/550x/d7/1f/79/d71f79e1e76221f35f5911488aeb8f0c.jpg",
  },
  {
    key: "2",
    title: "Another CheckIn",
    owner: "Jane Smith",
    status: "CHECKED IN",
    createdAt: "29th Apr 2023",
    imageUrl: "https://static.toiimg.com/photo/66840273.cms",
  },
];

const TableWithDrawer = () => {
  const [open, setopen] = useState(false);
  const [details, setDetails] = useState<CheckIn | undefined>(undefined);

  const showDetailsDrawer = useCallback((record: CheckIn) => {
    setDetails(record);
    setopen(true);
  }, []);

  const onRow = useCallback(
    (record: CheckIn) => ({
      onClick: () => showDetailsDrawer(record),
    }),
    []
  );

  const onClose = useCallback(() => {
    setopen(false);
  }, [setopen]);

  return (
    <>
      <Table
        className={styles.table}
        columns={columns}
        dataSource={data}
        pagination={false}
        onRow={onRow}
      />
      <Drawer
        title="Details"
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
        width={430}
      >
        {details && (
          <div>
            <p className={styles.drawerBodyTitle}>{details.title}</p>
            <img
              src={details.imageUrl}
              alt={details.title}
              className={styles.drawerBodyImage}
            />
          </div>
        )}
      </Drawer>
    </>
  );
};

export default TableWithDrawer;
