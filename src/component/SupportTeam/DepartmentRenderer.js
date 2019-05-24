import React from "react";
import {departments} from "../../mockData/departments";

export const DepartmentRenderer = (department, id) => {
  const FindDepartment = departments.find((item) => item.id === department);
  return <span  key={id}>{FindDepartment.name}</span>
}
