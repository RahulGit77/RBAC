import React, { useState } from "react";
import { roles, permissions } from "../data";

const RoleManagement = () => {
  const [roleList, setRoleList] = useState(roles);

  const togglePermission = (roleId, permission) => {
    setRoleList((prev) =>
      prev.map((role) =>
        role.id === roleId
          ? {
              ...role,
              permissions: role.permissions.includes(permission)
                ? role.permissions.filter((p) => p !== permission)
                : [...role.permissions, permission],
            }
          : role
      )
    );
  };

  return (
    <div>
      <h1>Role Management</h1>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roleList.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>
                {permissions.map((perm) => (
                  <label key={perm}>
                    <input
                      type="checkbox"
                      checked={role.permissions.includes(perm)}
                      onChange={() => togglePermission(role.id, perm)}
                    />
                    {perm}
                  </label>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
