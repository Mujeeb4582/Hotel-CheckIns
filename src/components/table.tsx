import { Table, Drawer, Tag } from "antd";
import { useCallback, useState } from "react";
import { useQuery } from "@apollo/client";
import styles from "../styles/table.module.scss";
import { GET_ALL_CHECKINS, GET_CHECKIN_BY_ID } from "../../graphql/queries";
import moment from "moment";

interface CheckIn {
  id: number;
  key: string;
  name: string;
  owener: string;
  comment: string;
  status: string;
  created_at: string;
  updated_at: string;
  image_url: string;
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
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
          {status && status.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Created At",
    dataIndex: "created_at",
    key: "created_at",
    render: (created_at: string) => moment(created_at).format("Do MMMM YYYY"),
  },
];

const TableWithDrawer = () => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<CheckIn | undefined>(undefined);

  const { loading, error, data } = useQuery<{ check_in: CheckIn[] }>(
    GET_ALL_CHECKINS
  );

  const showDetailsDrawer = useCallback((record: CheckIn) => {
    setDetails(record);
    setOpen(true);
  }, []);

  const onRow = useCallback(
    (record: CheckIn) => ({
      onClick: () => showDetailsDrawer(record),
    }),
    []
  );

  const onClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Table
        className={styles.table}
        columns={columns}
        dataSource={data?.check_in}
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
            <p className={styles.drawerBodyTitle}>{details.name}</p>
            <img
              src={details.image_url}
              alt={details.name}
              className={styles.drawerBodyImage}
            />
            <p>
              <br />
              <strong>Comment: </strong>
              {details.comment}
            </p>
          </div>
        )}
      </Drawer>
    </>
  );
};

export default TableWithDrawer;
