import React from "react";

function TopHeader(props: any) {
  return (
    <div>
      <h1>TopHeader</h1>
      {props.children}
    </div>
  );
}

export default TopHeader;
