import React from 'react';
import { departments } from '../../mockData/departments';

const DepartmentRenderer = (props) => {
	const department = (departments.find((department) => department.id === props.departmentId));
	return (<td className="column6 font-iran-sans">{department.name}</td>);
}

export default DepartmentRenderer;
