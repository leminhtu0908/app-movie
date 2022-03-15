import { Button, TextField } from '@mui/material';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
const Content = () => {
  return (
    <div className="content">
      <h1 className="content__title">Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.</h1>
      <h2 className="content__text">Xem ở mọi nơi. Hủy bất kỳ lúc nào.</h2>
      <h2 className="content__subtext">
        Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.
      </h2>
      <div className="content__form">
        <TextField
          id="outlined-basic"
          label="Địa chỉ email"
          variant="outlined"
          sx={{ backgroundColor: '#fff', borderRadius: '3px' }}
        />
        <Button variant="contained" size="large" color="error" endIcon={<BsArrowRight />}>
          Bắt đầu
        </Button>
      </div>
    </div>
  );
};

export default Content;
