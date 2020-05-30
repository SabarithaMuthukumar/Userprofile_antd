import React, { useState, useEffect } from "react";
import Listview from "./Listview";
import CardView2 from "./CardView2";
import CardView3 from "./CardView3";
import { Card } from "antd";
import { Tabs } from "antd";
import "../style/userprofile.css";
const { TabPane } = Tabs;

export default function DetailedCard() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getCardDetails();
  }, []);

  const getCardDetails = async () => {
    const res = await fetch("https://proapi.azurewebsites.net//api/fake_list", {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
    console.log("DetailedCard", res);
    setDetails(res);
  };

  const callback = (key) => {
    console.log(key);
  };

  return (
    <div>
      <Card style={{ width: 1100 }} className="detail_card">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="文章 (8)" key="1">
            {details ? <Listview list={details} /> : null}
          </TabPane>
          <TabPane tab="应用 (8)" key="2">
            {details
              ? details.map((detail) => (
                  <CardView2
                    key={detail.id}
                    title={detail.title}
                    avatar={detail.avatar}
                    active={detail.activeUser}
                    newuser={detail.newUser}
                  />
                ))
              : null}
          </TabPane>
          {details ? (
            <TabPane tab="项目 (8)" key="3">
              {details.map((detail) => (
                <CardView3
                  key={detail.id}
                  members={detail.members}
                  title={detail.title}
                  cover={detail.cover}
                  discription={detail.subDescription}
                />
              ))}
            </TabPane>
          ) : null}
        </Tabs>
      </Card>
    </div>
  );
}
