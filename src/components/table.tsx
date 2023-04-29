// import { SetStateAction, useState } from "react";
// import { Table, Drawer } from "antd";

// const columns = [
//   {
//     title: "Title",
//     dataIndex: "title",
//     key: "title",
//   },
//   {
//     title: "Owner",
//     dataIndex: "owner",
//     key: "owner",
//   },
//   {
//     title: "Status",
//     dataIndex: "status",
//     key: "status",
//   },
//   {
//     title: "Created At",
//     dataIndex: "createdAt",
//     key: "createdAt",
//   },
// ];

// const data = [
//   {
//     key: "1",
//     title: "CheckIn name",
//     owner: "John Doe",
//     status: "CHECKED IN",
//     createdAt: "28th Apr 2023",
//     details: "Details about CheckIn name",
//     image: "https://static.toiimg.com/photo/66840273.cms",
//   },
//   {
//     key: "2",
//     title: "Another CheckIn",
//     owner: "Jane Smith",
//     status: "CHECKED OUT",
//     createdAt: "29th Apr 2023",
//     details: "Details about Another CheckIn",
//     image: "https://i.pinimg.com/550x/d7/1f/79/d71f79e1e76221f35f5911488aeb8f0c.jpg"
//   },
// ];

// const TableWithDetails = () => {
//   interface SelectedRowType {
//     key: string;
//     title: string;
//     owner: string;
//     status: string;
//     createdAt: string;
//     details: string;
//     image: string;
//   }

//   const [selectedRow, setSelectedRow] = useState<SelectedRowType | null>(null);

//   const handleRowClick = (record: any) => {
//     setSelectedRow(record);
//   };

//   const handleCloseDetails = () => {
//     setSelectedRow(null);
//   };

//   return (
//     <>
//       <Table
//         className="table"
//         columns={columns}
//         dataSource={data}
//         onRow={(record) => ({
//           onClick: () => handleRowClick(record),
//         })}
//       />
//       <Drawer
//         title={selectedRow && selectedRow.title}
//         open={Boolean(selectedRow)}
//         onClose={handleCloseDetails}
//         width={400}
//       >
//         {selectedRow && selectedRow.details}
//         {selectedRow && selectedRow.image}
//       </Drawer>
//     </>
//   );
// };

// export default TableWithDetails;

import { Table, Drawer } from "antd";
import { useState } from "react";

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
    imageUrl: "https://i.pinimg.com/550x/d7/1f/79/d71f79e1e76221f35f5911488aeb8f0c.jpg", // add image URL to data
  },
  {
        key: "2",
        title: "Another CheckIn",
        owner: "Jane Smith",
        status: "CHECKED OUT",
        createdAt: "29th Apr 2023",
        imageUrl: "https://static.toiimg.com/photo/66840273.cms"
      },
];

const TableWithDrawer = () => {
  const [open, setopen] = useState(false);
  // const [details, setDetails] = useState({});<DetailsType | null>(null)
  const [details, setDetails] = useState<CheckIn | undefined>(undefined);
  const showDetailsDrawer = (record: CheckIn) => {
    setDetails(record);
    setopen(true);
  };

  const onClose = () => {
    setopen(false);
  };

  return (
    <>
      <Table
        className="table"
        columns={columns}
        dataSource={data}
        onRow={(record) => {
          return {
            onClick: () => showDetailsDrawer(record),
            style: { cursor: "pointer" }, // change cursor to pointer on hover
          };
        }}
      />
      <Drawer
        title="Details"
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
        width={400}
      >
        {details && (
          <div>
            <p>{details.title}</p>
            <img src={details.imageUrl} alt={details.title} style={{ maxWidth: "100%" }} />
          </div>
        )}
      </Drawer>
    </>
  );
};

export default TableWithDrawer;
