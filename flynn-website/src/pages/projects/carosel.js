import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { Divider, Grid } from '@mui/material';
import { TwitterTimelineEmbed } from 'react-twitter-embed';



const images = [
  {
    type: 'image',
    label: 'rbclust - An R library for finite mixture modelling',
    imgPath:
    require('../../images/EM.gif'),
    size: 240
  },
  {
    type: 'image',
    label: 'GOLC - A CLI implementation of Conways Game of Life',
    imgPath:
      require('../../images/GOLc.gif'),
      size: 380
  },
  {
    type: 'twitter',
    label: 'ElonStoryBot - A Twitterbot markov chain trained on Elon Musk tweets',
    type: 'twitterbot'
  },
  {
    type: 'image',
    label: 'The All Knowing One - A Facebook Messenger connector for Open AIs GPT-3',
    imgPath: require('../../images/GPT-3.gif'),
    size: 380
  },
  {
    type: 'image',
    label: '{Aware Automaton} - A website built in React to act as a blog and portfolio',
    imgPath: require('../../images/Aware.gif'),
    size: 380
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
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
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
              {step.type == 'image'?
              <Box
                component="img"
                sx={{
                  height: step.size,
                  width: '100%',
                  mb: 3
                }}
                src={step.imgPath}
                alt={step.label}
              />
              : <TwitterTimelineEmbed
              sourceType="profile"
              screenName="ElonStoryBot"
              options={{height: 400}}
            />}
              <Grid container>
              <Grid item xs>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Grid>
              <Divider orientation="vertical" flexItem/>
              <Grid item xs>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Grid>
          </Grid>
          </div>
            ) : null}
        </div>
          
        ))}
      </SwipeableViews>
      <MobileStepper
        sx = {{ mt: 3}}
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