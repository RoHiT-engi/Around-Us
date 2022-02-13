import { TextField, Button } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import '../css/Dashboard.css';


export default function Dashboard() {
    return (
        <>
        <Navbar />
        <h1 className="title">Dashboard</h1>
        <div className="container">
        <div className="column">
                <h5>Your Profile</h5>
                <TextField variant="outline" />
            </div>
            <div className="column">
                <h5>Your Blogs</h5>
                <BlogListCard title="Blog Name" />
            </div>
        </div>
            
        </>
    );
}

const BlogListCard = (props) => {
    return (
        <div className="card">
            <span className="blog_title">{props.title}</span>
            <span><Button>Edit</Button></span>
            <span><Button style={{color: "red"}}>Delete</Button></span>
        </div>
    );
}