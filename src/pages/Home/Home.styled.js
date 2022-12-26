import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeTitle = styled.h2`
  text-align: center;
`;
export const SyledLink = styled(NavLink)`
  outline: none;
  text-decoration: none;
  color: inherit;
`;

export const TrendsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`;

export const Poster = styled.img`
  box-shadow: 0px 2px 1px 0px #00000033, 0px 2px 1px 0px #00000033,
    0px 1px 3px 0px #0000001f;
`;
