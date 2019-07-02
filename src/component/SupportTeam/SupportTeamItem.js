import React from 'react';
import {RoleRenderer} from '../../component/SupportTeam/RoleRenderer'
import {DepartmentRenderer} from "./DepartmentRenderer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {handelEdit1} from '../../component/Edit/EditSupportTeamUser'

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {Mood,SentimentDissatisfied} from '@material-ui/icons';
import { green} from '@material-ui/core/colors';



const ColorButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);


export default function SupportTeamItem({fullName,email,phoneNumber,status,department,role,id}) {
    return (
    <div >


        <table class="Table">
            <tbody>
            <tr className="font-iran-sans">
                <td>{fullName} </td>
                <td>  {RoleRenderer(role, id)}</td>
                <td>{DepartmentRenderer(department, id)}</td>
                <td>{email} </td>
                <td>{phoneNumber}</td>
                <td>{(status===true) ?  <ColorButton variant="contained" color="primary" className="font-iran-sans">
                   &nbsp;فعال&nbsp;&nbsp;
                    <Mood />
                </ColorButton> :<Button variant="contained" color="secondary" className="font-iran-sans" >
                    غیرفعال
                    <SentimentDissatisfied  />
                </Button>
                }</td>
                <td>
                    {handelEdit1(id)}
                    </td>
            </tr>
            </tbody>
        </table>

    </div>
);
}
