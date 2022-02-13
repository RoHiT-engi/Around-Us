import { TextField, Button } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { auth } from '../Firebase/Auth';
import { useNavigate } from 'react-router-dom';
import '../css/BlogAdd.css';



export default function BlogAdd() {
    const BASE_URI = "http://localhost:5000/"
    const history = useNavigate();
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [Description, setDescription] = React.useState('');
    const HandleOnSave= async () => {
        if(auth.currentUser!==null && title!="" && content!="" && Description!=""){
            await axios.post(BASE_URI +'blogs/addblog?apiID=sussy_baka',{
                blog_title: title,
                blog_content: content,
                blog_description: Description,
                email: auth.currentUser.email,
                name : auth.currentUser.displayName || localStorage.getItem('name') + ' ' + localStorage.getItem('surname')
            }).then(function(response){
                console.log(response);
            }).catch(function(error){
                console.log(error);
            })
        }else{
            alert("Please Login First");
            history('/login');
        }
    }

    return (
        <>
        <Navbar />
        <div className="container">
        <h2 className='write_blog'>Write your blog</h2>
        <TextField id="outlined-basic" label="Blog Title" valueLink={title} onChange={(e)=>{setTitle(e.target.value)}} variant="outlined" />
        <TextField id="outlined-basic" label="Blog Description" valueLink={content} onChange={(e)=>{setContent(e.target.value)}} variant="outlined" />
        <TextField id="outlined-basic" label="Blog Content" valueLink={Description} onChange={(e)=>{setDescription(e.target.value)}} variant="outlined" multiline rows="12" />
        <Button variant="contained" onClick={HandleOnSave}>Save Changes</Button>
        </div>
        </>
    );
}
