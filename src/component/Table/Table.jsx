import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import PdfComponent from "../pdfComponet/PdfComponent";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";

const ActionTable = ({ formData }) => {
  const handlePdfClick = (ids) => {
    // Function to handle the PDF icon click with the array of object IDs
    console.log(ids, "hhh");
    const filterData = [...formData?.filter((e) => e.id === ids)];
    return (
      <PDFDownloadLink
        document={<PdfComponent filterData={filterData} />}
        fileName="somename.pdf"
      >
        <FilePdfOutlined style={{ color: "green" }} />
      </PDFDownloadLink>
    );
  };
 
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => <a>{id}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <span>
            <EditOutlined style={{ color: "blue" }} />
          </span>
          <span>
            <DeleteOutlined style={{ color: "red" }} />
          </span>
          <span>{handlePdfClick(record.id)}</span>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={formData ? formData : "NO data to show"}
        pagination={false}
      />
    </div>
  );
};

export default ActionTable;
