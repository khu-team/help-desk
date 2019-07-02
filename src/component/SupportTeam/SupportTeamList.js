import React from 'react';
import SupportTeamItem from '../../component/SupportTeam/SupportTeamItem'
import { supportTeamUsers } from '../../mockData/supportTeamUsers'
import AddSupportUser from '../../component/SupportTeam/AddSupportForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';



export default function SupportTeamList() {
    return(
    <div >

        <table class="Table table-striped table-hover" >
            <thead>
              <tr >
                  <th scope="col">نام کامل</th>
                  <th scope="col">نقش</th>
                  <th scope="col">دپارتمان</th>
                  <th scope="col">ایمیل</th>
                  <th scope="col"> تلفن تماس</th>
                  <th scope="col"> وضعیت</th>
                  <th scope="col">ویرایش</th>
            </tr>
            </thead>
        </table>
        {supportTeamUsers.map((supporters) => (
            <SupportTeamItem  {...supporters} />
        ))}
    <AddSupportUser/>

    </div>
);
}
