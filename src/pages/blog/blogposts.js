import * as React from 'react';
import { Box, Typography } from '@mui/material';
var Latex = require("react-latex");

export const blogPosts = [
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
    <Box component="img" src={require('../../images/blog/Base_R=1.png')} width={'90%'}/>
    <Typography>Figure 1: A Gaussian density.</Typography>
    </Box>
    Figure 1, above, shows a Gaussian (normal) density of a variable y. Looking at the clear peaks in the density plot, it appears that this
    density is 'tri-modal', meaning that there appear to be 3 'modes'. If we were to group this dataset into a number of different datapoints, 
    3 appears to be a reasonable number, and a method we might use is called 'finite mixture modelling'.
    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/Split_Full.png')} width={'90%'}></Box>
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
    To test this algorithm, we used simulated data. To generate this data, we can specify a number of parameters:
    <br/>
    <ul>
        <li><Latex>{`$$R$$`}</Latex> : The number of clusters or mixtures in the dataset. </li>
        <li><Latex>{`$$n$$`}</Latex> : The number of rows of the matrix Y. </li>
        <li><Latex>{`$$m$$`}</Latex> : The number of columns of the matrix Y. </li>
        <li><Latex>{`$$\\theta$$`}</Latex> : A vector of length R, which are the GLM parameters for each mixture. </li>
        <li><Latex>{`$$\\pi$$`}</Latex> : A vector of length R, which are the mixing proportions. </li>
    </ul>
    <br/>
    By using these parameters to randomly generate data matrices, we can fit them with a series of algorithms to see how well they estimate the parameters <Latex>{`$$\\theta$$`}</Latex> and <Latex>{`$$\\pi$$`}</Latex>.
    For the following examples, we simulated a dataset with the following parameters:
    <br/>
    <ul>
        <li><Latex>{`$$R$$`}</Latex> = 3 </li>
        <li><Latex>{`$$n$$`}</Latex> = 800 </li>
        <li><Latex>{`$$m$$`}</Latex> = 200 </li>
        <li><Latex>{`$$\\theta$$`}</Latex> = (0.25, 0.5, 0.75) </li>
        <li><Latex>{`$$\\pi$$`}</Latex> = (0.25, 0.5, 0.25) </li>
    </ul>
    <br/>
    Our first algorithm is named 'DMLL', which is inspired by the method of fitting a model with R = 1 mixture, calculating the AIC, and incrementing R = R + 1 until the AIC reaches a minimum.
    Figure 3 shows the allocation of datapoints to clusters when fitting the DMLL with R = 1 model on the left, followed by R = 2, and finally R = 3, which it halted on, showing the DMLL's optimal number of clusters and allocation.
    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/DMLL_sankey_800.png')} width={'90%'}></Box>
    <Typography>Figure 3: A Sankey diagram of DMLL.</Typography>
    </Box>
    To develop a new algorithm, we take inspiration from 'divide and conquer' methods from computer science, as well as 'hierarchical clustering' used in common, distance based methods.
    The idea behind the algorithm is that mixtures are necessarily composed of sub-mixtures. We first fit the full dataset with both R = 1 cluster and R = 2 clusters. If the AIC is lower for the R = 1 fit than the R = 2 fit, we halt 
    - this is the optimal number of clusters. If not, We then perform an E-step to find allocation of datapoints to mixtures. The full dataset is then subsetted based on this membership.
    For each of the sub-datasets, we perform both R = 1 and R = 2 fits, and if the AIC for the R = 1 fit is lower than the R = 2 fit, then this branch has halted. This algorithm is named the 'HNTB' algorithm.
    <br/>
    <br/>
    Figure 4 shows the Sankey diagram for this algorithm when applied on the same dataset as was used in Figure 3. Notice that mixtures are necessarily composed of sub-mixtures as the Sankey diagram proceeds.
    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/HNTB_sankey_800.png')} width={'90%'}></Box>
    <Typography>Figure 4: A Sankey diagram of HNTB.</Typography>
    </Box>
    Clearly, compared to the DMLL method, the HNTB method has over-estimated R by 1, and the <Latex>{`$$\\pi$$`}</Latex> values are quite different to the true values used to simulate the dataset.
    To counter address this limitation, once the HNTB method has halted, we execute a single E-step, borrowed from the EM algorithm, and then re-fit each seperate dataset, dependent on this membership with a single R = 1 model.
    This algorithm is named the 'HSR' algorithm - the result of this is shown in figure 5:
    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/HSR_sankey_800.png')} width={'90%'}></Box>
    <Typography>Figure 5: A Sankey diagram of HSR.</Typography>
    </Box>
    This addition of the E-step at the end of HNTB has reallocated several datapoints from the fourth, smallest cluster into the second smallest cluster. 
    Clearly, this smallest cluster in the HNTB may have been an extra, 'dud' cluster, whose datapoints are better suited in another cluster. The results are looking 
    more similar to both the DMLL and true parameters than the HNTB were. Perhaps, more reallocation may benefit the algorithm even more? We define a new algorithm, the
    HRL algorithm, that reallocates datapoints continually until no more can be reallocated (convergence of the E-step). Results are shown in Figure 6:
    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/HRL_sankey_800.png')} width={'90%'}></Box>
    <Typography>Figure 6: A Sankey diagram of HRL.</Typography>
    </Box>
    The HRL algorithm has converged with R = 3, the same as both the DMLL and the true parameter! Not only this, but the <Latex>{`$$\\pi$$`}</Latex> values are the exact same as the DMLL also!
    If this method is able to reliably execute faster than the DMLL algorithm, we could conclude that a divide and conquer approach to mixture modelling is both faster and suitbaly replicates traditional methods.
    We define a final method, for interest, that reallocates datapoints while the hierarchical process is still executing (not strictly reallocating at the end). This method is named the HRD algorithm, results are shown in
    Figure 7:
    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/HEM_sankey_800.png')} width={'90%'}></Box>
    <Typography>Figure 7: A Sankey diagram of HRD.</Typography>
    </Box>
    Unfortunately, this method hasn't addressed the problem of there being too many estimated clusters, and there remains R = 4, the same the HNTB algorithm.
    <br/>
    <br/>
    To accurately assess these methods, a large-scale simulation study was run. To test how each algorithm scaled with the number of clusters, R, we generated data,
    fit the data using each algorithm, and reported on how well they estimated both the true number of clusters, and how long they took to run. The full protocol used in the
    simulation is shown here:
    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/Simulation_Protocol.png')} width={'90%'}></Box>
    </Box>
    Figure 8 shows that the DMLL algorithm seems to constantly under-estimate R, compared to the truth - especially as R increases. HNTB and HSR look to generally over-estimate R. Closest to the truth are both HRL and HRD.
    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/R_Values_line_Study3.png')} width={'90%'}></Box>
    <Typography>Figure 8: How well the different algorithms approximated true R.</Typography>
    </Box>
    Figure 9 shows that the DMLL algorithm scales the worst the the number of clusters by far. Less reallocation means less run time - as evidenced by the HNTB algorithm being the fastest.
    <Box sx={{m: 3}}>
    <Box component="img" src={require('../../images/blog/Run_times_line_Study3.png')} width={'90%'}></Box>
    <Typography>Figure 9: Comparison of run time in seconds of the different algorithms.</Typography>
    </Box> 
    Findings from the research were that these novel rapid mixture modelling techniques were much faster than traditional methods. As well as this, they fitted the true data well, in cases even better than
    the traditional methods, as shown in Figure 8 as DMLL consistently under-predicted R. Make sure to view the code under the 'projects' page, or to read my thesis on the 'about' page under the thesis dropdown.

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