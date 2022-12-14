import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Fade, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function ProfileCard() {
  return (
    <Fade in={true} timeout={{enter: 1000}}>
    <Card sx={{ maxWidth: 345, m: 5, height: 500}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={require("../../images/cards/Me-pixel-2.png")}
          alt="Binkie"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign="center">
            Flynn Owen
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
          &#128075; Kia Ora! Take a look around.
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
            <Button href={require("../../images/Flynn_Owen_-_Data_Engineer.pdf")} download='FlynnOwenCV' variant="contained" size="small" color='secondary' sx={{m: 0.2}}>
              <ContactPageIcon/>
            </Button>
            </Grid>
            <Grid item>
            <Button href="mailto:flynoo49@gmail.com" variant="contained" size="small" color='secondary' sx={{m: 0.2}}>
            <EmailIcon/>
            </Button>
            </Grid>
          </Grid>
      </CardActions>
    </Card>
    </Fade>
  );
}