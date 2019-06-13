import React from 'react';
import {SupportTeamItem} from '../../component/SupportTeam/SupportTeamItem'
import { supportTeamUsers } from '../../mockData/supportTeamUsers'
import AddSupportUser from '../../component/SupportTeam/AddSupportForm'




const SupportTeamList = () => (
    <div className="welcome">
        <table  className="Table" >
            <thead>
            <tr>
                <th className="vaz"> وضعیت</th>
                <th className="vaz"> تلفن تماس</th>
                <th className="vaz">ایمیل</th>
                <th className="vaz">دپارتمان</th>
                <th className="vaz">نقش</th>
                <th className="vaz">نام کامل</th>


            </tr>
            </thead>
        </table>
        {supportTeamUsers.map((supporters) => (
            <SupportTeamItem  {...supporters} />

        ))}

    <AddSupportUser/>

    </div>
);

export default SupportTeamList ;
