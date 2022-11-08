import * as React from 'react';
import { Box, Typography } from '@mui/material';
import CustomBlogBody from './body';
import BlogNav from './blognav';
import ProfileCard from '../../components/cards/profile';
var Latex = require("react-latex");

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
    the model equation - e.g if the model includes additional information such as covariates or regressors. 
    <br/><br/>
    After defining our arguments, an optimization problem is solved - by structuring the a combination of the model equation and data as a likelihood function, this is maximized 
    with a particular optimization algorithm. In the case of my thesis this was L-BFGS-B. A likelihood function includes the product all individuals over a density
    function. Assume a generalized density function is: 
    <Latex>{`$$f(\\theta|Y)$$`}</Latex>, where Y is a data matrix we would like to cluster, and  <Latex>{`$$\\theta$$`}</Latex>
    is our chosen parameter (e.g <Latex>{`$$\\mu$$`}</Latex> for Gaussian, or <Latex>{`$$\\lambda$$`}</Latex> for Poisson). From this, we establish
    mixture density, incorporating the additional parameter <Latex>{`$$\\pi$$`}</Latex>, of length R, which represents the proportion of rows of Y in each cluster:  
    <br/>
    <br/>
    <Latex>{`$$\\sum_{r=1}^R \\pi_r f(\\theta_r|Y)$$`}</Latex>.
    <br/>
    <br/>
    By considering the count measure across the m columns of Y, this becomes: 
    <br/>
    <br/>
    <Latex>{`$$\\prod_{j=1}^m\\sum_{r=1}^R \\pi_r f(\\theta_r|Y)$$`}</Latex>.
    <br/>
    <br/>
    Finally, by taking the product over individuals (the n rows of Y), we have a likelihood function to maximize: 
    <br/>
    <br/>
    <Latex>{`$$\\prod_{i=1}^n\\prod_{j=1}^m\\sum_{r=1}^R \\pi_r f(\\theta_r|Y)$$`}</Latex>
    <br/>
    <br/>
    Additional improvements have been made on simply maximizing
    the likelihood function - such as including something known as an expectation step, which calculates the expectation of a latent variable, Z that
    is cluster membership. Z is an n x R matrix defined as:
    <br/>
    <br/>
    <Latex>{`$$z_{ir} = \\begin{cases} 1 & \\text{if row $i$ is in cluster $r$} \\\\ 0 & \\text{otherwise} \\\\ \\end{cases}$$`}</Latex>
    <br/>
    <br/>
    To estimate Z, the expectation (E) step is defined as:
    <br/>
    <br/>
    <Latex>{`$$E[z_{ir} | \\widehat{\\pi}, \\widehat{\\theta}| Y] = \\widehat{z}_{ir} = \\frac{\\widehat{\\pi}_r \\prod^m_{j=1}f_r(y_{ij}| \\widehat{\\theta})}{\\sum_{r'=1}^{R}\\widehat{\\pi}_{r'} \\prod^m_{j=1}f_{r'}(y_{ij}| \\widehat{\\theta})}. $$`}</Latex>
    <br/>
    <br/>
    The Expectation-Maximisation (EM) algorithm is a popular adaption that utilizes iteration of the maximization of the likelihood
    function with the expectation step, as well as a new, maximisation step (the M step), that includes Z as a parameter, but is ommitted here.
    The EM algorithm is known as accurate but very slow - due to it's iteration.
    <br/>
    <br/>
    Now that we have established how mixture models are defined and fitted, we still need to define how to find the optimal number of clusters when fitting them.
    Usually, this is done by fitting a mixture model with R = 1 component, calculating the Likelihood Ratio Test Statistic (LRTS), or some penalised likelihood value -
    the Aikaike or Bayesian Information Criterion (AIC, BIC), incrementing R = R + 1, refitting, and recalculating the metric, and finally halting when either the AIC / BIC finds
    a minimum, or the LRTS is rejected.
    <br/>
    <br/>
    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/DMLL_sankey_800.png')} height={300}></Box>
    <Typography>Figure 3: A Sankey diagram of DMLL.</Typography>
    </Box>

    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/HNTB_sankey_800.png')} height={300}></Box>
    <Typography>Figure 4: A Sankey diagram of HNTB.</Typography>
    </Box>

    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/HSR_sankey_800.png')} height={300}></Box>
    <Typography>Figure 5: A Sankey diagram of HSR.</Typography>
    </Box>
    
    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/HRL_sankey_800.png')} height={300}></Box>
    <Typography>Figure 6: A Sankey diagram of HRL.</Typography>
    </Box>
    
    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/R_Values_line_Study3.png')} height={300}></Box>
    <Typography>Figure 7: How well the different algorithms approximated true R.</Typography>
    </Box>

    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/Run_times_line_Study3.png')} height={300}></Box>
    <Typography>Figure 8: Comparison of run time in seconds of the different algorithms.</Typography>
    </Box>

    </Typography>
},
{
    date: '06/11/2022',
    title: 'Reading React',
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