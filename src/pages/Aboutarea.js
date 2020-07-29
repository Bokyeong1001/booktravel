import React from 'react';
import './Aboutarea.css';
import imgArea from '../images/imgArea.jpg';

const Aboutarea = () => {
    return (
        <div className='area_block'>
            <div className='area'>관광지 이름</div>
            <img src={imgArea} className='area_cover' />
            <br></br>
            <p>위치 : </p>
            <p>간단 소개:</p>
            <input id="toggle-heart" type="checkbox" />
            <label for="toggle-heart">❤</label>
        </div>
    );
}

  
  export default Aboutarea;
  
