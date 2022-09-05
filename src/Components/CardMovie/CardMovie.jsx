import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import noImg from './noimg.jpg';
import './CardMovie.css';

const CardMovie = ({ movie }) => {

  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={movie.Poster !== "N/A" ? movie.Poster : noImg}
          alt={movie.imdbID}
        />
        <CardContent> <Typography gutterBottom variant="h5" component="div">
            {movie.Title}
          </Typography> <Typography gutterBottom variant="h5" component="div">
            {movie.Year}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {movie.Language}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.Plot}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardMovie;