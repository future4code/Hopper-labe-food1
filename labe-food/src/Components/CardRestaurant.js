import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const StyledAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardRestaurant = (props) => {
  return (
    <Card sx={{ width: '95%', border: '1px solid LightGrey', margin: '4px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={props.logoUrl}
          alt="hamburguer"
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color={'primary'}
          >
            {props.name}
          </Typography>

          <StyledAlign>
            <Typography variant="h6" color={'neutralColor'}>
              {props.deliveryTime} - {props.deliveryTime - 10} min
            </Typography>

            <Typography variant="h6" color={'neutralColor'}>
              Frete R$:{props.shipping.toFixed(2).replace('.', ',')}
            </Typography>
          </StyledAlign>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardRestaurant;
