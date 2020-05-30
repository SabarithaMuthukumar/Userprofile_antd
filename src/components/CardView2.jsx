import React from "react";
import { Card, Avatar } from "antd";
import "../style/userprofile.css";
import {
  EditOutlined,
  EllipsisOutlined,
  ShareAltOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import "../style/userprofile.css";
const { Meta } = Card;

export default function CardView2({ title, avatar, active, newuser }) {
  return (
    <div className="cont_detail">
      <Card
        hoverable
        style={{ width: 300 }}
        actions={[
          <DownloadOutlined key="download" />,
          <EditOutlined key="edit" />,
          <ShareAltOutlined key="share" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta avatar={<Avatar src={avatar} />} title={title} />
        <div className="active_new">
          <div>
            <h4>活跃用户</h4>
            <h2>{active}万</h2>
          </div>
          <div>
            <h4>新增用户</h4>
            <h2>{newuser}</h2>
          </div>
        </div>
      </Card>
    </div>
  );
}
