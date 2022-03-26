import React, { FC } from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Modal,
  Typography,
} from '@mui/material';
import { Book } from '../../services/books/types';
import useBoolean from '../../hooks/useBoolean';
import { useCardStyles } from '../../utils/styles';
import CharactersGridFromUrlsWithPagination from '../CharactersGridFromUrlsWithPagination';

export interface BookCardProps {
  book: Book;
}

const BookCard: FC<BookCardProps> = ({ book }) => {
  const classes = useCardStyles();
  const { name, isbn, authors, numberOfPages, characters } = book;
  const [modalIsOpen, { on: openModal, off: closeModal }] = useBoolean();

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.card}>
          <Typography variant="subtitle1" color="text.primary" textAlign="center" padding={2}>
            {name}
          </Typography>
          <Divider />

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            padding={2}
          >
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
          {characters.length === 0 && (
            <Typography
              variant="subtitle2"
              textAlign="center"
              color="primary"
              fontWeight="medium"
              pt={2}
            >
              NO RELATED CHARACTERS
            </Typography>
          )}
        </CardContent>

        {characters.length > 0 && (
          <CardActions>
            <Button variant="outlined" color="primary" fullWidth onClick={openModal}>
              See related characters
            </Button>
          </CardActions>
        )}
      </Card>

      {modalIsOpen && (
        <Modal
          open
          onClose={closeModal}
          sx={{
            display: 'flex',
            flexDirection: 'colum',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            bgcolor="white"
            maxHeight="95%"
            minWidth="80%"
            overflow="auto"
          >
            <Typography pt={2} variant="h6" textAlign="center">
              {name}
            </Typography>
            <CharactersGridFromUrlsWithPagination charactersUrls={characters} />
            <Button variant="outlined" color="primary" onClick={closeModal} sx={{ margin: '10px' }}>
              Back to results
            </Button>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default BookCard;
