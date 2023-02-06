// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import BackToTop from '../AppBar/BackToTop';
import './NotedRegister.css';

function PostRegister() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleHandler = event => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const contentHandler = event => {
    event.preventDefault();
    setContent(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log(event);
    navigate('/profile/seller');

    const body = {
      title,
      content,
      status: 1,
    };

    console.log(body);

    // axios
    //   .post('http://localhost:3000/profile/seller', body)
    //   .then(res => console.log(res));
  };

  return (
    <div className="postregister">
      <BackToTop />
      <form onSubmit={submitHandler}>
        <div className="noted_reg_title">
          <p>공지 제목</p>
          <input
            type="text"
            id="noted_reg_title"
            name="title"
            placeholder="공지 제목을 입력해주세요"
            onChange={titleHandler}
          />
        </div>
        <hr />
        <div className="noted_reg_detail">
          <p>공지 내용</p>
          <textarea
            id="noted_reg_detail"
            name="size"
            placeholder="공지사항을 적어주세요&#13;&#10;알아둬야 될 사항을 적어주세요"
            onChange={contentHandler}
          />
        </div>
        <div className="submit_btn">
          {/* 저장 누르면 판매자 페이지로 rendering되도록 */}
          <button type="submit">저장</button>
        </div>
      </form>
    </div>
  );
}

export default PostRegister;