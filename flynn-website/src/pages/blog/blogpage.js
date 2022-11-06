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
        It was titled 'Finite Mixture Models - A Divide and Conquer Approach', and investigated a novel, computationally efficient way
        to find the optimal number of mixture components - a very common problem in clustering.
        <br/> <br/>
        As a basic introduction, clustering is an unsupervised machine learning problem, which includes a dataset of individuals, 
        and independent variables which describe these individuals. Clustering assigns these individuals into groups, such that individuals
        in the same group share similar independent variables, and individuals in different groups are different in terms of these independent variables.
        <Box sx={{m: 3}}>
        <Box component="img" src={require('../../images/blog/Base_R=1.png')} height={300}/>
        <Typography>Figure 1: A Gaussian density.</Typography>
        </Box>
        Figure 1, above, shows a Gaussian (normal) density of a variable y. Looking at the clear peaks in the density plot, it appears that this
        density is 'tri-modal', meaning that there appear to be 3 'modes'. If we were to group this dataset into a number of different datapoints, 
        3 appears to be a reasonable number, and a method we might use is called 'finite mixture modelling'.
        <Box sx={{m: 3}}>
        <Box component="img" src={require('../../images/blog/Split_Full.png')} height={300}></Box>
        <Typography>Figure 2: A Gaussian density with 3 components.</Typography>
        </Box>
        Finite mixture modelling in the general sense requires you to choose a set of arguments before fitting the model.
        These include: The number of mixture components (clusters), the Generalised Linear Model (GLM) family (such as Gaussian, Poisson, etc), 
        the model equation - e.g if the model includes additional information such as covariates or regressors. After defining our arguments, an 
        optimization problem is solved - by structuring the a combination of the model equation and data as a likelihood function, this is minimized 
        with a particular optimization algorithm.

        <Box component="img" src={require('../../images/blog/DMLL_sankey_800.png')} height={300}></Box>
        <Box component="img" src={require('../../images/blog/HNTB_sankey_800.png')} height={300}></Box>
        <Box component="img" src={require('../../images/blog/HSR_sankey_800.png')} height={300}></Box>
        <Box component="img" src={require('../../images/blog/HRL_sankey_800.png')} height={300}></Box>
        <Box component="img" src={require('../../images/blog/R_Values_line_Study3.png')} height={300}></Box>
        <Box component="img" src={require('../../images/blog/Run_times_line_Study3.png')} height={300}></Box>
        </Typography>
    },
    {
        date: '06/11/2022',
        title: 'Reciting React',
        description: 
        <Typography>
        I decided to teach myself basic React.
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