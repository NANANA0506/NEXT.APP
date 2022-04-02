import React from "react";
import "antd/dist/antd.css";
import Link from "next/link";

const AppShell = ({ Component }) => {
  return (
    <>
      <Component />
    </>
  );
};

export default AppShell;
