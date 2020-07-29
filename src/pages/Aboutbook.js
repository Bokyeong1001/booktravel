import React,{Component} from 'react';
import './Aboutbook.css';
import imgA from '../images/img.jpg';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {

};
   
firebase.initializeApp(firebaseConfig) //firebase 초기화
   
const db = firebase.firestore(); //store 사용 

class Aboutbook extends Component {
    render(){
        var title=""
        db.collection('book') //조회할 collection 넣어준다.
        .doc('1') // 조회할 document 를 넣어준다.
        .get()
        .then(doc => {
        if (!doc.data()) {
            alert(`no data`);
        // 존재할경우 
        } else {
            title=doc.data().title;
            alert(title);
        }
        });
    return (
        <div className='book_block'>
            <img src={imgA} className='book_cover' />
            <div className='book_info'>
                <br></br>
                <div>책 이름 : {title}</div>
                <div>작가</div>
                <div>책 소개</div>
                <input id="toggle-heart" type="checkbox" />
                <label for="toggle-heart">❤</label>
            </div>
        </div>
    );
    }
}

  
  export default Aboutbook;
  
