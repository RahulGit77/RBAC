import React from "react";
import { permissions } from "../data";

const PermissionManagement = () => (
  <div>
    <h1>Permission Management</h1>
    <ul>
      {permissions.map((perm, index) => (
        <li key={index}>{perm}</li>
      ))}
    </ul>
  </div>
);

export default PermissionManagement;
