import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';
import EditIcon from '@mui/icons-material/Edit';
import './App.css';
import Typography from 'antd/es/typography/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'; import { Router } from 'react-router-dom';
function View() {

    const [employeesList, setEmployeesList] = useState([]);
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };



    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        let res = await axios.get("http://localhost:8080/get");
        setEmployeesList(res.data);
        console.log(res.data);
    }

    const handleDelete = (id) => {
        axios.delete("http://localhost:8080/delete/" + id);
    }

    return (
        <div>
            <div>
                <button >
                    <Link to="/post" style={{ textDecoration: "none" }}>Post a New Data</Link>
                </button>
            </div>
            <div className='head'>

                <h4 style={{ marginLeft: 10 }}>Employee Id</h4>
                <h4 style={{ marginLeft: 50 }}>Employee Name</h4>
                <h4 style={{ marginLeft: 180 }}>Employee Department</h4>
                <h4 style={{ marginLeft: 300 }}>Employee PhoneNo</h4>
                <h4 style={{ marginLeft: 350 }}>Employee Email</h4>
                <h4 style={{ marginLeft: 350 }}>Employee Shift</h4>
                <h4 style={{ marginLeft: 350 }}>Employee Salary</h4>

            </div>
            <List sx={{ width: '100%', maxWidth: 1600, bgcolor: 'background.paper' }}>
                {employeesList.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem
                            key={value}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments">
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemText id={labelId} primary={`${value.empId}`} />
                                <ListItemText id={labelId} primary={`${value.empName}`} />
                            </ListItemButton>
                            <ListItemText
                                primary={value.empDept}
                                secondary={
                                    <React.Fragment>
                                    </React.Fragment>
                                }
                            />
                            <ListItemText
                                primary={value.phoneNo}
                                secondary={
                                    <React.Fragment>
                                    </React.Fragment>
                                }
                            />
                            <ListItemText
                                primary={value.email}
                                secondary={
                                    <React.Fragment></React.Fragment>
                                } />
                            <ListItemText
                                primary={value.shift}
                                secondary={
                                    <React.Fragment></React.Fragment>
                                } />
                            <ListItemText
                                primary={value.salary}
                                secondary={
                                    <React.Fragment></React.Fragment>
                                } />
                            <IconButton edge="end" aria-label="comments">
                                <Link to="/put"> <EditIcon /></Link>
                            </IconButton>
                            <IconButton onClick={() => { handleDelete(value.empId) }} edge="end" aria-label="comments">
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    );
                })}
            </List>

        </div>

    )
}

export default View
