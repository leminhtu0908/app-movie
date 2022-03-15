import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import './styles.scss';
const footerList = [
  {
    id: 1,
    title: 'Câu hỏi thường gặp',
  },
  {
    id: 2,
    title: 'Trung tâm trợ giúp',
  },
  {
    id: 3,
    title: 'Tài khoản',
  },
  {
    id: 4,
    title: 'Trung tâm đa phương tiện',
  },
  {
    id: 5,
    title: 'Quan hệ với nhà đầu tư',
  },
  {
    id: 6,
    title: 'Việc làm',
  },
  {
    id: 7,
    title: 'Các cách xem',
  },
  {
    id: 8,
    title: 'Điều khoản sử dụng',
  },
  {
    id: 9,
    title: 'Quyền riêng tư',
  },
  {
    id: 10,
    title: 'Tùy chọn cookie',
  },
  {
    id: 11,
    title: 'Thông tin doanh nghiệp',
  },
  {
    id: 12,
    title: 'Liên hệ với chúng tôi',
  },
  {
    id: 13,
    title: 'Kiểm tra tốc độ',
  },
  {
    id: 14,
    title: 'Thông báo pháp lý',
  },
  {
    id: 15,
    title: 'Chỉ có trên Netflix',
  },
];
const Footer = () => {
  const [language, setLanguage] = useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className="footer">
      <a href="# "> Bạn có câu hỏi? Liên hệ với chứng tôi</a>
      <ul className="footer__list">
        {footerList.map((item) => (
          <li className="footer__item" key={item.id}>
            <a href="# ">{item.title}</a>
          </li>
        ))}
      </ul>
      <Box sx={{ maxWidth: 220, backgroundColor: '#fff', borderRadius: '10px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Languages</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Languages"
            onChange={handleChange}
          >
            <MenuItem value={10}>Tiếng Việt</MenuItem>
            <MenuItem value={20}>English</MenuItem>
            <MenuItem value={30}>France</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <p>Netflix Việt Nam</p>
    </div>
  );
};

export default Footer;
