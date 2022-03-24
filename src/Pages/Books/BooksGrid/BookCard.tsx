import React, { FC } from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Book } from '../../../services/books/types';

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

export interface BookCardProps {
  book: Book;
}

const BookCard: FC<BookCardProps> = ({ book }) => {
  const classes = useStyles();
  const { name, isbn, authors, numberOfPages } = book;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.card}>
        <Typography variant="subtitle1" color="text.primary" textAlign="center" padding={2}>
          {name}
        </Typography>
        <Divider />

        <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" padding={2}>
          <SearchIcon />
          <Typography variant="body2" color="text.secondary" textAlign="center" padding={2}>
            {isbn}
          </Typography>
          <AutoStoriesIcon />
          <Typography variant="body2" color="text.secondary" textAlign="center" padding={2}>
            {numberOfPages}
          </Typography>
        </Box>
        <Divider />

        <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
          <HistoryEduIcon />
          {authors.map(author => (
            <Typography key={author} variant="subtitle2" padding={2}>
              {author}
            </Typography>
          ))}
        </Box>
        <Divider />
      </CardContent>

      <CardActions>
        <Button variant="outlined" color="primary" fullWidth>
          See related characters
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
