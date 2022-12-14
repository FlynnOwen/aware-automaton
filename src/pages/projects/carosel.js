import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import GitHubIcon from '@mui/icons-material/GitHub';



const images = [
  {
    type: 'image',
    label: 'rbclust',
    imgPath:
    require('../../images/projects/EM.gif'),
    size: 240,
    description: "A dynamic library for GLM modelling of finite mixture models in R. \
                  A novel 'divide and conquer' method is used for fitting mixture models with unknown numbers of components, \
                  which was developed in my MSc thesis.",
    link: "https://github.com/FlynnOwen"
  },
  {
    type: 'image',
    label: 'GOLC',
    imgPath:
      require('../../images/projects/GOLc.gif'),
      size: 445,
    description: "A CLI application for game of life, written in C. It's fast, and renders well, with various input options. \
                  Now has a few followers on Github.",
    link: "https://github.com/FlynnOwen/GOL-C"

  },
  {
    type: 'twitter',
    label: 'ElonStoryBot',
    type: 'twitterbot',
    size: 400,
    description: "A Twitterbot which is a Markov chain trained on a combination of tweets scraped from Elon Musks account, \
                  and a large dataset of childrens books. Utilizes the Tweepy API in Python, and various AWS services to \
                  automatically tweet daily updates.",
    link: "https://github.com/FlynnOwen/elon-markov-chain-twitter-bot"
  },
  {
    type: 'image',
    label: 'The All Knowing One',
    imgPath: require('../../images/projects/GPT-3.gif'),
    size: 380,
    description: "A 'connector' between Open AI's GPT-3 API and Facebook Messenger. Hosted on a Flask server, and uses a \
                  PostgreSQL database to asynchronously log and remember conversations between users.",
    link: "https://github.com/FlynnOwen/GPT-3-App"
  },
  {
    type: 'image',
    label: '{Aware Automaton}',
    imgPath: require('../../images/projects/Aware.gif'),
    size: 380,
    description: "This website. Written in React to host my projects, blog and generally learn more about front end development.",
    link: "https://github.com/FlynnOwen/flynn-website-React"
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '80%', overflow: 'hidden'}}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div>
              <Typography textAlign="center" fontSize={24} sx={{ mb:2, mt:2 }}>{step.label}</Typography>
              {step.type == 'image'?
              <Box
                component="img"
                sx={{
                  height: step.size,
                  width: '99%',
                }}
                src={step.imgPath}/>
              : <TwitterTimelineEmbed
              sourceType="profile"
              screenName="ElonStoryBot"
              options={{height: step.size}}
              
            />}
              <Button sx={{ mb:2, mt:2 }} variant="contained" color='secondary' href={step.link} disableRipple="true" startIcon={<GitHubIcon/>}> Github </Button>
              <Typography>{step.description}</Typography>
          </div>
            ) : null}
        </div>
          
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;