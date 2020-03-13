import React from "react";

export default function Header() {
  return (
    <div style={headerStyle}>
      <h1 className="Title">
        Robbie's Portfolio
        <span id="underline"></span>
      </h1>
    </div>
  );
}
const headerStyle = {
  background: "#5D5C61",
  color: "#FFFFFF",
  height: "30vh",
  textAlign: "center",
  padding: "30px",
  position: "relative"
};
