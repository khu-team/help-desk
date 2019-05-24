import React from "react";
import {roles} from "../../mockData/roles";

export const RoleRenderer = (role, id) => {
  const FindRole = roles.find((item) => item.id === role);
  return <span  key={id}>{FindRole.name}</span>
}
