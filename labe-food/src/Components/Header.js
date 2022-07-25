import React from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { goToHome } from '../Routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const StyledHeader = styled.div`
  display: flex;
  height: 30px;
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 0.5px grey;
  padding: 10px 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;
const TextInput = styled.div`
  width: 175px;
  height: 44px;
  margin: 0px 60px 54px;
  padding: 13px 40px 12px;
`;

const Header = () => {
  const navigate = useNavigate;
  return (
    <StyledHeader>
      <Button onClick={() => goToHome(navigate)}>
        <ArrowBackIosIcon fontSize="medium" />
      </Button>
      <TextInput>Busca</TextInput>
    </StyledHeader>
  );
};

export default Header;
