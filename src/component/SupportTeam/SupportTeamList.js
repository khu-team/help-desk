import React from 'react';
import {SupportTeamItem} from '../../component/SupportTeam/SupportTeamItem'
import { supportTeamUsers } from '../../mockData/supportTeamUsers'


const SupportTeamList = () => (
    <div className="welcome">
        <table >
            <thead>
            <tr>
                <th> وضعیت</th>
                <th> تلفن تماس</th>
                <th> ایمیل</th>
                <th> دپارتمان</th>
                <th>نقش</th>
                <th>نام کامل</th>

            </tr>
            </thead>
        </table>
        {supportTeamUsers.map((supporters) => (
            <SupportTeamItem  {...supporters} />

        ))}
    </div>
);

export default SupportTeamList ;
