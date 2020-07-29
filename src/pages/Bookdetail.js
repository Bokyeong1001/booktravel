import React from 'react';
import Aboutbook from './Aboutbook';
import Travelarea from './Travelarea';
import './Bookdetail.css';
import {RouteComponentProps} from 'react-router-dom';

const Bookdetail = (props : RouteComponentProps<{bookId:string}>) => {
  return (
    <div className="Bookdetail">
      <header className="header">
      </header>
      <body>
        <div>책 {props.match.params.bookId}</div>
        <Aboutbook />
        <br></br>
        <div className='place'>관광지</div>
        <br></br>
        <Travelarea />
        <Travelarea />
        <Travelarea />
      </body>
    </div>
  );
}

export default Bookdetail;