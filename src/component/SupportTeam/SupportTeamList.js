import React from 'react';
import {SupportTeamItem} from '../../component/SupportTeam/SupportTeamItem'
import { supportTeamUsers } from '../../mockData/supportTeamUsers'
import AddSupportUser from '../../component/SupportTeam/AddSupportForm'




const SupportTeamList = () => (
    <div className="welcome">
        <table  className="Table" >
            <thead>
              <tr className="font-iran-sans">
                <th > وضعیت</th>
                <th > تلفن تماس</th>
                <th >ایمیل</th>
                <th >دپارتمان</th>
                <th >نقش</th>
                <th>نام کامل</th>


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
