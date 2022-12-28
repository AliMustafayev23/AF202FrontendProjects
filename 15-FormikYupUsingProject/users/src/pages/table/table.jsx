import React from "react";
import { Table } from "antd";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";
import "./table.css";
const Usertable = () => {
  const serverdata = JSON.parse(localStorage.getItem("userdata"));
  return (
    <div>
      <Table dataSource={serverdata}>
        <ColumnGroup title="User Info">
          {serverdata.map((e, i) => {
            return (
              <div className="table">
                <Column title="First Name" dataIndex="name" key="name" />
                <Column title="Last Name" dataIndex="surname" key="surname" />
                <Column title="Country" dataIndex="country" key="country" />
                <Column title="City" dataIndex="city" key="city" />
              </div>
            );
          })}
        </ColumnGroup>
      </Table>
    </div>
  );
};

export default Usertable;
