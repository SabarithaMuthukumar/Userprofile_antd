import React from "react";
import { Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";
export default function Tags({ tags }) {
  return (
    <>
      {
        tags.map((tag) => (
          <Tag>{tag.label}</Tag>
        ))

        // !inputVisible && (
      }
      <br />
      <br />

      <Tag className="site-tag-plus">
        <PlusOutlined />
      </Tag>
    </>
  );
}
