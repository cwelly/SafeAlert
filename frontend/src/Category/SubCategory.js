import { useState, useCallback, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackToTop from '../AppBar/BackToTop';
import SearchCard from '../Search/SearchCard';
import { Divider } from '@mui/material';
import './Category.css';

export default function SubCategory() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const state = useLocation().state;
  const [items, setItems] = useState();

  const getBrand = useCallback(async () => {
    await axios
      .get(`https://i8b204.p.ssafy.io/be-api/cate/type/detail/${categoryId}`)
      .then(res => {
        // console.log(res.data, 'dd');
        setItems(res.data);
      })
      .catch(() => {
        alert('문제가 발생했습니다. \n 잠시후에 다시 시도해주세요.');
        navigate('/');
      });
  }, [categoryId, navigate]);

  useEffect(() => {
    getBrand();
  }, [getBrand]);

  // console.log('items', items);

  return (
    <div>
      <BackToTop />
      <div className="brandInfo">
        <img
          src={state.cateImg}
          alt="서브카테고리 사진"
          className="brandDetailImg"
        />
        <div className="brandDetail">{state.cateName}</div>
      </div>
      <Divider variant="middle" />
      {items && (
        <div className="searchCardList">
          {items.map(result => {
            return (
              <SearchCard result={result} key={result.id} navigate={navigate} />
            );
          })}
        </div>
      )}
    </div>
  );
}