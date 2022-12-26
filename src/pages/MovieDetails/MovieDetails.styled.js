import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SyledLink = styled(NavLink)``;

export const FilmContainer = styled.div`
  margin-top: 15px;
  padding-bottom: 20px;
  box-shadow: 0px 2px 0px 0px #00000033;
  display: flex;
`;

export const AdditionalContainer = styled.ul`
  padding-bottom: 20px;
  box-shadow: 0px 2px 0px 0px #00000033;
`;

export const InfoContainer = styled.div`
  margin-left: 30px;
`;

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`;
