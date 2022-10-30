import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function ProfileCard() {
  return (
    <Card sx={{ maxWidth: 345, m: 5, height: 500}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={require("../../images/Me-pixel-2.png")}
          alt="Binkie"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign="center" alignItems="center">
            Flynn Owen
          </Typography>
          <Typography variant="body2" color="text.secondary">
            What a dude I am. Look at me, I am one hell of a dude.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container item justifyContent="center" alignItems="center">
            <Grid item>
              <Button href='https://github.com/FlynnOwen' variant="contained" size="small" color='secondary' sx={{m: 0.2}}>
            <GitHubIcon/>
            </Button>
            </Grid>
            <Grid item>
            <Button href='https://www.linkedin.com/in/flynn-owen-076160135/' variant="contained" size="small" color='secondary' sx={{m: 0.2}}>
            <LinkedInIcon/>
            </Button>
            </Grid>
            <Grid itemScope>
            <Button href='https://github.com/FlynnOwen' variant="contained" size="small" color='secondary' sx={{m: 0.2}}>
            <ContactPageIcon/>
            </Button>
            </Grid>
            <Grid item>
            <Button href='https://github.com/FlynnOwen' variant="contained" size="small" color='secondary' sx={{m: 0.2}}>
            <EmailIcon/>
            </Button>
            </Grid>
          </Grid>
      </CardActions>
    </Card>
  );
}