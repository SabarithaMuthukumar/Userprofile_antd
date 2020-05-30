import React from "react";
import DescriptionTag from "./DescriptionTag";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import "../style/userprofile.css";
export default function Listview({ list }) {
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={false}
        dataSource={list}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={
                <div>
                  <DescriptionTag />
                  <div className="listpara"> {item.content}</div>
                </div>
              }
            />
            <div className="listupdateat">
              {<Avatar src={item.avatar} className="desavatar" />}
              <pre className="blue"> {item.owner}</pre>
              <pre> 发布在</pre>
              <pre className="blue"> {item.href}</pre>
              <pre className="time"> {item.updatedAt}</pre>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}
