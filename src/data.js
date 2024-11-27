export const users = [
    { id: 1, name: "Rahul", roles: ["Admin"] },
    { id: 2, name: "Ranjan", roles: ["Editor"] },
  ];
  
  export const roles = [
    { id: 1, name: "Admin", permissions: ["read", "write", "delete"] },
    { id: 2, name: "Editor", permissions: ["read", "write"] },
  ];
  
  export const permissions = ["read", "write", "delete"];
  