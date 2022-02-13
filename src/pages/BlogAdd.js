import { TextField, Button } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import '../css/BlogAdd.css';


export default function BlogAdd() {
    return (
        <>
        <Navbar />
        <div className="container">
        <h2 className='write_blog'>Write your blog</h2>
        <TextField id="outlined-basic" label="Blog Title" variant="outlined" />
        <TextField id="outlined-basic" label="Blog Description" variant="outlined" />
        <TextField id="outlined-basic" label="Blog Content" variant="outlined" multiline rows="12" />
        <Button variant="contained">Save Changes</Button>
        </div>
        </>
    );
}
