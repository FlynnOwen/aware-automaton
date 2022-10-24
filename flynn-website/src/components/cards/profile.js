import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function ProfileCard() {
  return (
    <Card sx={{ maxWidth: 345}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={require("../../images/Blinkie.jpg")}
          alt="Binkie"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign="center" alignItems="center">
            Flynn Owen
          </Typography>
          <Grid container item justifyContent="center" alignItems="center" style={{ gap: 15 }}>
            <Grid item xs={1}>
            <GitHubIcon/>
            </Grid>
            <Grid item xs={1}>
            <LinkedInIcon/>
            </Grid>
            <Grid item xs={1}>
            <EmailIcon/>
            </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary">
            What a dude I am. Look at me, I am one hell of a dude.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}