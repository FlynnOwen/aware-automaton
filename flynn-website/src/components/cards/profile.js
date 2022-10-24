import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProfileCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require("../../images/Blinkie.jpg")}
          alt="Binkie"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign="center">
            Flynn Owen
          </Typography>
          <Typography variant="body2" color="text.secondary">
            What a dude I am. Look at me, I am one hell of a dude.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}