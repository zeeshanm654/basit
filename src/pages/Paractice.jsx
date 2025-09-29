import axios from "axios";
import { useEffect, useState } from "react";
import { Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const Practice = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    const navigate = useNavigate();




    const getPost = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPost(response?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPost();
    }, []);

    const showDetails = async (id,title,detail,userId) => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                // console.log("detailed response", response.data)
                setDetails(response.data)
                navigate('/postdetails', { state: { comments: response.data, postTitle: title, postDetail: detail, userId: userId } });

            } catch (error) {
                console.log(error)
            }
    }
    console.log(post)

    if (loading){
        return 'Loading ....'
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    {post.map((data) => (
                        <Grid size={4} key={data.id}>
                            <Item>{data.title}</Item>
                            <Button onClick={() => { showDetails(data.id,data.title,data.body,data.userId) }} variant="outlined" fullWidth>
                                detail
                            </Button>
                        </Grid>
                    ))}

                </Grid>
            </Box>

        </>

    );
};

export default Practice;
