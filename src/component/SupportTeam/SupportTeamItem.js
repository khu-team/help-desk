import React from 'react';
import {RoleRenderer} from '../../component/SupportTeam/RoleRenderer'
import {DepartmentRenderer} from "./DepartmentRenderer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {Edit, Mood, SentimentDissatisfied} from '@material-ui/icons';
import { green} from '@material-ui/core/colors';
import {NavLink} from "react-router-dom";


const ColorStatusButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(green[900]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);

const ColorEditButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(green[900]),
        backgroundColor: green[800],
        '&:hover': {
            backgroundColor: green[300],
        },
    },
}))(Button);



export default function SupportTeamItem({fullName,email,phoneNumber,status,department,role,id}) {
    return (
    <div >


        <table class="Table table-striped  ">
            <tbody >
            <tr className="font-iran-sans">
                <td>{fullName} </td>
                <td>  {RoleRenderer(role, id)}</td>
                <td>{DepartmentRenderer(department, id)}</td>
                <td>{email} </td>
                <td>{phoneNumber}</td>
                <td>{(status===true) ?  <ColorStatusButton variant="contained" color="primary" className="font-iran-sans">

                    <div className="white-text" > &nbsp;فعال&nbsp;&nbsp; </div>
                    <Mood />
                </ColorStatusButton> :<Button variant="contained" color="secondary" className="font-iran-sans" >
                     غیرفعال
                    <SentimentDissatisfied className="white-text"  />
                </Button>
                }</td>
                <td>
                    <NavLink to = {{pathname:`/support-team/${id}`,state:{ID:id}}} >
                        <ColorEditButton  variant="contained" color="default" className="font-iran-sans white-text" value={id}> ویرایش
                <Edit/>
            </ColorEditButton>
                    </NavLink>


                    </td>
            </tr>
            </tbody>
        </table>

    </div>
);
}
