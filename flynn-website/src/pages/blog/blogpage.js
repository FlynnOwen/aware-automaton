import * as React from 'react';
import { Box, Typography } from '@mui/material';
import CustomBlogBody from './body';
import BlogNav from './blognav';
import ProfileCard from '../../components/cards/profile';

    const blogPosts = [
    {
        date: '31/10/2022',
        title: 'Rapid Mixture Modelling',
        description: 
        <Typography>
        On 09/09/2022 I was finally able to hand in my long awaited MSc thesis after two years of work on it part-time.
        It was a huge undertaking - supervised by Prof Richard Arnold and Dr Louise McMillan and funded by a Marsden scholarship.
        <br/> <br/>
        It was titled 'Finite Mixture Models - A Divide and Conquer Approach', and investigated a novel, computationally efficient way
        to find the optimal number of mixture components - a very common problem in clustering.
        <Box component="img" src={require('../../images/blog/Split_Full.png')} height={300}></Box>
        <Box component="img" src={require('../../images/blog/DMLL_sankey_800.png')} height={300}></Box>
        <Box component="img" src={require('../../images/blog/HNTB_sankey_800.png')} height={300}></Box>
        <Box component="img" src={require('../../images/blog/HSR_sankey_800.png')} height={300}></Box>
        <Box component="img" src={require('../../images/blog/HRL_sankey_800.png')} height={300}></Box>
        <Box component="img" src={require('../../images/blog/R_Values_line_Study3.png')} height={300}></Box>
        <Box component="img" src={require('../../images/blog/Run_times_line_Study3.png')} height={300}></Box>
        </Typography>
    },
    {
        date: '1/1/2011',
        title: 'Poopoo!',
        description: 
        <Typography>
        Test!
        </Typography>
    }
    ]


function CustomBlogPage() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    function handleIndex(index)  {
        setActiveIndex(index);
        console.log(index);
      };

    return (
        <Box sx={{display:'flex'}}>
        <ProfileCard />
        <CustomBlogBody blogPost={blogPosts[activeIndex]}/>
        <BlogNav blogPosts={blogPosts} handleIndex={handleIndex}/>
        </Box>
    );
}

export default CustomBlogPage;