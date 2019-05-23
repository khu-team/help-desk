import React from 'react';

export const SupportTeamItem = ({fullName,email,phoneNumber,status,department,role,id}) => (
    <div >
        <table>
            <tbody>
            <tr>
    
                <th>{(status===true) ? 'فعال':'غیرفعال'}</th>
                <th>{phoneNumber} </th>
                <th>{email} </th>
                <th>انتظار تکمیل</th>
                <th>انتظار تکمیل</th>
                <th>{fullName} </th>

            </tr>

            </tbody>
        </table>
    </div>
);
