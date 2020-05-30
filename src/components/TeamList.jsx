import React from "react";
import { Row, Col } from "antd";
export default function TeamList({ notice }) {
  return (
    <div>
      <Row gutter={[16, 16]} className="team_list">
        {notice
          ? notice.map((note) => (
              <Col key={note.id} span={12}>
                <img src={note.logo} alt="" className="teamlogo" />
                {note.member}
              </Col>
            ))
          : null}
      </Row>
    </div>
  );
}
