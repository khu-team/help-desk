import React from 'react';
import {RoleRenderer} from '../../component/SupportTeam/RoleRenderer'
import {DepartmentRenderer} from "./DepartmentRenderer";

export const SupportTeamItem = ({fullName,email,phoneNumber,status,department,role,id}) => (

    <div >
        <table className="Table" >
            <tbody>
            <tr>
                <th>{(status===true) ? 'فعال':'غیرفعال'}</th>
                <th>{phoneNumber}</th>
                <th>{email} </th>
                <th>  {RoleRenderer(role, id)}</th>
                <th>{DepartmentRenderer(department, id)}</th>
                <th>{fullName} </th>
            </tr>

            </tbody>
        </table>
        
    </div>
);
