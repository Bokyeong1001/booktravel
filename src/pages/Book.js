import React from 'react';
import './Aboutbook.css'
import imgA from '../images/img.jpg';
import {withRouter} from 'react-router-dom';

class Book extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
  return (
    <div className='book_block' onClick={() => this.nextPath('/bookdetail/1')}>
      <img src={imgA} className='book_cover' />
      <div className='book_info'>
          <br></br>
          <div>책 이름</div>
          <div>책 소개</div>
      </div>
  </div>
  );
  }
}
  
  export default withRouter(Book);