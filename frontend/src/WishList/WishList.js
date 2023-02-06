import { Divider } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackToTop from '../AppBar/BackToTop';
import dummy from '../db/list.json';
import './WishList.css';

function WishList() {
  const wishlist = dummy.WishLists;
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkItems, setCheckItems] = useState([]);
  const navigate = useNavigate();
  checkItems.sort();

  const SingleCheck = (checked, id, post, price) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
      setTotalPrice(totalPrice + price);
    } else {
      setCheckItems(checkItems.filter(el => el !== id));
      setTotalPrice(totalPrice - price);
    }
  };

  const AllCheck = checked => {
    if (checked) {
      const idArray = [];
      const allprice = 0;
      wishlist.forEach(el => idArray.push(el.wishListId));
      const totalwishprice = wishlist.map(
        el => allprice + el.post.post_sale_price,
      );
      const pricetotal = totalwishprice.reduce((a, b) => a + b, 0);
      setCheckItems(idArray);
      setTotalPrice(pricetotal);
    } else {
      setCheckItems([]);
      setTotalPrice(0);
    }
  };

  return (
    <div>
      <BackToTop />

      <div className="wish-select-all">
        <input
          type="checkbox"
          onChange={event => AllCheck(event.target.checked)}
          checked={checkItems.length === wishlist.length}
        />
        <span>
          {checkItems.length === wishlist.length ? '전체 해제' : '전체 선택'}
        </span>
      </div>
      <Divider variant="middle" sx={{ marginY: '0.75rem' }} />
      <div>
        {wishlist.map(wish => (
          <div key={wish.wishListId}>
            <div className="wish-post">
              <div className="wish-checkbox">
                <input
                  type="checkbox"
                  onChange={event =>
                    SingleCheck(
                      event.target.checked,
                      wish.wishListId,
                      wish.post,
                      wish.post.post_sale_price,
                    )
                  }
                  checked={checkItems.includes(wish.wishListId)}
                />
              </div>
              <div className="wish-post-img-div">
                <img
                  className="wish-post-img"
                  src={wish.post.postimage_url}
                  alt="이미지사진"
                />
              </div>
              <div className="wish-post-info">
                <div className="wish-post-sellername">
                  {wish.post.sellerName}
                </div>
                <div className="wish-post-title">{wish.post.post_title}</div>
                <div className="wish-post-price">
                  {wish.post.post_sale_price.toLocaleString()}원
                </div>
              </div>
            </div>
            <Divider variant="middle" sx={{ marginY: '0.75rem' }} />
          </div>
        ))}
        <div className="wish-total-price">
          결제 예상 금액
          <span>{totalPrice.toLocaleString()}</span>원
        </div>
        <Divider variant="middle" sx={{ marginY: '0.75rem' }} />
        <button
          className="wish-payment-btn"
          type="submit"
          onClick={() =>
            navigate('/payment', {
              state: { checkItems, totalPrice },
            })
          }
        >
          결제하기
        </button>
      </div>
    </div>
  );
}

export default WishList;
