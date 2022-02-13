import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import '../css/BlogCard.css'

const BlogCardHome = (props) => {
  return (
    <>
        <Card variant="outlined" sx={{backgroundColor: "white", paddingLeft: "15px", paddingRight: "15px", paddingTop: "20px", paddingBottom: "20px", fontFamily: "Zen Kaku Gothic Antique"}}>
            <CardContent>
                <Typography className='auth_name' sx={{ fontSize: "large"}}>{props.authName}</Typography>
                <Typography className='blog_title' sx={{ fontSize: "xx-large"}}>{props.title}</Typography>
                <Typography className='blog_desc' sx={{ fontSize: "medium"}}>{props.description}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" color="primary">Read More</Button>
            </CardActions>
        </Card>
    </>
  )
}

export default BlogCardHome