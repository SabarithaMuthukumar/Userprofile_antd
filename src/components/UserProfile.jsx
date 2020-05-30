import React, { useState, useEffect } from "react";
import { Card } from "antd";
import {
  ContactsOutlined,
  ClusterOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "../style/userprofile.css";
import Tags from "./Tags";
import { Divider } from "antd";
import TeamList from "./TeamList";

const { Meta } = Card;

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const result = await fetch(
      "https://proapi.azurewebsites.net//api/currentUser",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
    console.log("result", result);
    setUser(result);
  };
  return (
    <div>
      {user ? (
        <Card style={{ width: 490 }}>
          <div className="profile">
            <img src={user.avatar} alt="" className="avatar" />
            <br />
            <Meta title={user.name} description={user.signature} />
          </div>
          <div className="content_in">
            <h5>
              <ContactsOutlined />
              &nbsp;&nbsp;&nbsp;
              {user.title}
            </h5>
            <h5>
              <ClusterOutlined />
              &nbsp;&nbsp;&nbsp;
              {user.group}
            </h5>
            <h5>
              <HomeOutlined />
              &nbsp;&nbsp;&nbsp;
              {user.geographic.city.label}
              {user.geographic.province.label}
            </h5>
            <Divider dashed />
            <h3>标签</h3>
            <br />
            <Tags tags={user.tags} />

            <Divider dashed />
            <h3>团队</h3>
            <br />
            <TeamList notice={user.notice} />
          </div>
        </Card>
      ) : null}
    </div>
  );
}
