import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackToTop from '../AppBar/BackToTop';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import './PostDetail.css';

function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [seller, setSeller] = useState(null);
  // const [wish, setWish] = useState(null);
  // 스토어 좋아요 여부 이거는 DB에서 불린으로 줌
  // 눌리면 axios 보내서 바꾸기 + 좋아요 숫자 불러오기
  const [isLiked, setIsLiked] = useState(true);

  const ColorButton = styled(Button)(() => ({
    fontSize: '20px',
    backgroundColor: '#deb887',
    '&:hover': {
      backgroundColor: '#deb887',
    },
  }));

  const DarkColorButton = styled(Button)(() => ({
    fontSize: '20px',
    backgroundColor: '#cf974f',
    '&:hover': {
      backgroundColor: '#cf974f',
    },
  }));

  const WhiteButton = styled(Button)(() => ({
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: '#ffffff',
    },
  }));

  const token1 =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9TRUxMRVIiLCJ1c2VySWQiOiJzc2FmeTEiLCJleHAiOjE2NzYxODE0OTV9.7RfncJBF-f_0Mn3EjjHhjWNw3-g-vH1GtvYZKEeKgMg';
  const token2 =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9CVVlFUiIsInVzZXJJZCI6InllYXIxMjMiLCJleHAiOjE2NzYyNDk4OTV9.s9hdTB7D0ak30LFqbXfszM9DvIrFHsnAQ9Kjn7QQLDw  ';

  useEffect(() => {
    axios
      .get(`https://i8b204.p.ssafy.io/be-api/post/${postId}`)
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    axios
      .get(`https://i8b204.p.ssafy.io/be-api/user/seller/${post?.sellerId}`, {
        headers: { Authorization: token1 },
      })
      .then(res => {
        setSeller(res.data);
      })
      .catch(err => console.log('seller', err));
  }, [post]);

  const wishPost = () => {
    axios
      .post(`https://i8b204.p.ssafy.io/be-api/wishlist/${post?.id}`, {
        headers: {
          Authorization: token2,
        },
      })
      .then(res => setPost(res))
      .catch(err => console.log('wishlist', err));
  };

  // const wishPost = () => {
  //   axios
  //     .get(`https://i8b204.p.ssafy.io/be-api/wishlist`, {
  //       headers: {
  //         Authorization: token2,
  //       },
  //     })
  //     .then(res => setWish(res))
  //     .catch(err => console.log('wishlist', err));
  // };

  // console.log('wish', wish);

  const salePercent = Math.floor(
    ((post?.price - post?.sale_price) / post?.price) * 100,
  );

  return (
    <div>
      <BackToTop />
      {post &&
        post?.postImages.map(image => (
          <img
            className="detail_img"
            src={image.url}
            alt="이미지사진"
            key={image.url}
          />
        ))}
      <div>
        <div className="detail-basic">
          <div className="detail-basic-info">
            <div className="detail-post-store">{seller?.nickName}</div>
            <div className="detail-post-title">{post?.title}</div>
            <div className="detail-br-cateId">
              {post?.brCateName}/{post?.typeCateName}
            </div>
            <div className="detail-price">
              {salePercent ? (
                <div className="detail-sale-percent">{salePercent}%</div>
              ) : null}
              <div className="detail-post-sale-price">
                {post?.sale_price.toLocaleString()}원
              </div>
              <div className="detail-post-price">
                {post?.price.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="post-like">
            <IconButton
              size="small"
              color="inherit"
              aria-label="like"
              sx={{ color: 'red' }}
              onClick={() => setIsLiked(!isLiked)}
            >
              {isLiked && <FavoriteIcon />}
              {!isLiked && <FavoriteBorderIcon />}
            </IconButton>
            <div className="post-like-cnt">4.5천</div>
          </div>
        </div>
        <Divider variant="middle" sx={{ margin: '1rem' }} />
        <div className="detail-size-info">
          <div className="detail-size-name">사이즈</div>
          <div className="detail-size">{post?.size}</div>
        </div>
        <Divider variant="middle" sx={{ margin: '1rem' }} />
        <div className="detail-detail-info">
          <div className="detail-detail-name">상세설명</div>
          <div className="detail-detail">{post?.content}</div>
        </div>
        <Divider variant="middle" sx={{ margin: '1rem' }} />
        <div className="detail-store-info">
          <div className="detail-store-name">
            {seller?.nickName}님의 다른 상품
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          {/* 상점명 상품번호 넘겨서 할건가? 어떻게 할지 생각해보기 */}
          {/* <Carousel card={dummy.Popular} /> */}
        </div>
      </div>
      <footer>
        <Paper
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
          }}
          elevation={3}
        >
          <Box className="detail-footer" sx={{ height: '56px' }}>
            <WhiteButton
              className="like-bnt"
              variant="contained"
              sx={{ background: '#ffffff', color: 'red' }}
              onClick={() => setIsLiked(!isLiked)}
            >
              {isLiked && <FavoriteIcon />}
              {!isLiked && <FavoriteBorderIcon />}
            </WhiteButton>
            <ColorButton
              variant="contained"
              fullWidth
              onClick={() => wishPost()}
            >
              <div>장바구니</div>
            </ColorButton>
            <DarkColorButton
              variant="contained"
              fullWidth
              onClick={() => {
                navigate('/payment', {
                  state: {
                    post: [post],
                    checkItems: [post?.id],
                    totalPrice: post?.sale_price,
                  },
                });
              }}
            >
              <div>바로 구매</div>
            </DarkColorButton>
          </Box>
        </Paper>
      </footer>
    </div>
  );
}

export default PostDetail;
