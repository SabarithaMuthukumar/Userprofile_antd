import React from "react";
export default function Members({ members }) {
  return (
    <ul className="member_list">
      {members
        ? members.map((mem) => (
            <li className="mem_list">
              <img key={mem.id} src={mem.avatar} alt="mem_img" />
            </li>
          ))
        : null}
    </ul>
  );
}
