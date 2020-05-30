import React from "react";
import { Card } from "antd";
import Members from "./Members";
import "../style/userprofile.css";
const { Meta } = Card;
export default function CardView3({ cover, title, discription, members }) {
  return (
    <div className="cont_detail">
      <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt="example" src={cover} />}
      >
        <Meta title={title} description={discription} />
        <div className="last_Seen">
          <p> 1 小時前</p>
          <Members members={members} />
        </div>
      </Card>
    </div>
  );
}
