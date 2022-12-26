import React from 'react';
import {LoaderBox} from './Loader.styled'
import { TailSpin} from 'react-loader-spinner';

export  class Loader extends React.Component {
  render() {
    return (
      <LoaderBox>
        <TailSpin width="400" color="#3f51b5" />
      </LoaderBox>
    );
  }
}