import styled from 'styled-components';
import './app.css';
import { getAllGames } from '../fake-api';

import { Header } from '@nxegghead/store/ui-shared';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
`;

const GamesLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export function App() {
  return (
    <>
      <Header />
      <Container>
        <GamesLayout>
          {getAllGames().map((x) => (
            <Card key={x.id} className="game-card">
              <CardActionArea>
                <CardMedia
                  className="game-card-media"
                  image={x.image}
                  title={x.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {x.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {x.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="game-rating"
                  >
                    <strong>Rating:</strong> {x.rating}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </GamesLayout>
      </Container>
    </>
  );
}

export default App;
