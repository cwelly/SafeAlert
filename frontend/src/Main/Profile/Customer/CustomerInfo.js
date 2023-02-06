import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import './CustomerInfo.css';
import Ordered from './Ordered';
import MyReview from './MyReview';

const StyledMiddleNavigationAction = styled(BottomNavigationAction)`
  color: #cccccc;

  .MuiBottomNavigationAction-label {
    background: #ffffff;
    font-size: 16px;
  }

  .MuiBottomNavigationAction-label.Mui-selected {
    font-size: 16px;
  }

  &.Mui-selected {
    color: #ff3d00;
    font-weight: Bold;
    border-bottom: 2px #ff3d00 solid;
  }
`;

export default function CustomerInfo() {
  const [value, setValue] = React.useState(0);
  // value 값에 따라서 상품, 라이브, 공지사항, 리뷰 중에 하나의 값을 선택함을 알 수 있다.
  // 그러면 이미 받아오려나 아니며누를때 받아오려나?
  return (
    <>
      <header className="mid-nav">
        <Box sx={{ width: '100%', height: '100%' }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ background: '#ffffff' }}
          >
            <StyledMiddleNavigationAction label="구매내역" />
            <StyledMiddleNavigationAction label="찜" />
            <StyledMiddleNavigationAction label="즐겨찾기" />
            <StyledMiddleNavigationAction label="My 리뷰" />
          </BottomNavigation>
          <Divider />
        </Box>
      </header>
      <main>
        {value === 0 && <Ordered />}
        {value === 1 &&
          '찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품찜한 상품'}
        {value === 2 &&
          '찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어찜한 스토어'}
        {value === 3 && <MyReview />}
      </main>
    </>
  );
}
