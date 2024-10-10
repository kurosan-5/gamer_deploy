import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MessageIcon from '@mui/icons-material/MessageOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const fetchData = async () => {
        const response = await axios.get('api/posts');
        setPosts(response.data.posts);
    };
    useEffect(() => {
        fetchData();
    }, []);
    console.log(posts)
    const row = [];
    return (
        
        <>
            {posts && posts.map((item) => {
                return(
                    <Post key={item.id} post={item} />
                );
            })}
        </>
    );
}

const Post = ({post}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={post.image_path}
                title="game1"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {post.about}
                </Typography>
                <MessageIcon />
                {post.comments_count}
                <FavoriteBorderIcon />
                {post.like}
            </CardContent>
        </Card>
    );
}

const Home = () => {
    return(
        <div>
            <PostList />
        </div>
    );
}

export default Home;