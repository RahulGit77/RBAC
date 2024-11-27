import React, { useState } from "react";
import { users, roles } from "../data";

const UserManagement = () => {
  const [userList, setUserList] = useState(users);

  const assignRole = (userId, roleName) => {
    setUserList((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, roles: [roleName] } : user
      )
    );
  };

  return (
    <div>
      <h1>User Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roles</th>
            <th>Assign Role</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.roles.join(", ")}</td>
              <td>
                <select
                  onChange={(e) => assignRole(user.id, e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  {roles.map((role) => (
                    <option key={role.id} value={role.name}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
