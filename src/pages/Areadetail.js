import React from 'react';
import Aboutplace from './Aboutarea';
import Book from './Book';
import './Areadetail.css';
import {RouteComponentProps} from 'react-router-dom';

const Areadetail = (props : RouteComponentProps<{areaId:string}>) =>  {
  return (
    <div className="Areadetail">
      <header className="header">
      </header>
      <body>
        <div>여행지 {props.match.params.areaId}</div>
        <Aboutplace />
        <br></br>
        <div className='book'>관련 책</div>
        <Book />
      </body>
    </div>
  );
}

export default Areadetail;