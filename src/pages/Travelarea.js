import React from 'react';
import './Travelarea.css'
import imgB from '../images/place.jpg';
import {withRouter} from 'react-router-dom';

class Travelarea extends React.Component  {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
  return (
      <div className='travel_info' onClick={() => this.nextPath('/areadetail/1')}>
        <img src={imgB} className='place_cover' />
        <div className='travel_detail'>
            <h3>관광지</h3>
            <div>관광지설명 어쩌고저쩌고 웅앵웅</div>
        </div>
      </div>
  );
  }
}
  
  export default withRouter(Travelarea);