import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  CardMedia,
  CardActionArea,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

import {formatRating} from '@nxegghead/store/util-formatters'
import styled from 'styled-components';
import { Game } from '@nxegghead/api/util-interfaces';


/* eslint-disable-next-line */
export interface StoreFeatureGameDetailProps {}

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
`;

export const StoreFeatureGameDetail = (props: StoreFeatureGameDetailProps) => {
  const [state, setState] = useState<{
    data: Game | null;
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: null,
    loadingState: 'success',
  });

  const { id } = useParams();

  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    const gameId = id;
    fetch(`/api/games/${gameId}`)
      .then((x) => x.json())
      .then((res) => {
        setState({
          ...state,
          data: res,
          loadingState: 'success',
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loadingState: 'error',
        });
      });
  }, [id]); // eslint-disable-line

  return (
    <Container>
      {state.loadingState === 'loading' ? (
        'Loading...'
      ) : state.loadingState === 'error' ? (
        <div>Error fetching data</div>
      ) : state.data == null ? (
        ''
      ) : (
        <Card>
          <CardActionArea>
            <CardMedia
              className="game-card-media"
              image={state.data.image}
              title={state.data.name}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {state.data.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="game-rating"
              >
                <strong>Rating:</strong> {formatRating(state.data.rating)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </Container>
  );
};

export default StoreFeatureGameDetail;
