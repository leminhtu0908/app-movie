import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Button, TextField } from '@mui/material';
import { BsArrowRight } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';
const questionLists = [
  {
    id: 1,
    question: 'Netflix là gì?',
    answer:
      'Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại chương trình truyền hình, phim, anime, phim tài liệu đoạt giải thưởng và nhiều nội dung khác trên hàng nghìn thiết bị có kết nối Internet. Bạn có thể xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn mà không gặp phải một quảng cáo nào – tất cả chỉ với một mức giá thấp hàng tháng. Luôn có những nội dung mới để bạn khám phá và những chương trình truyền hình, phim mới được bổ sung mỗi tuần!',
  },
  {
    id: 2,
    question: 'Tôi phải trả bao nhiêu tiền để xem Netflix?',
    answer:
      'Xem Netflix trên điện thoại thông minh, máy tính bảng, TV thông minh, máy tính xách tay hoặc thiết bị phát trực tuyến, chỉ với một khoản phí cố định hàng tháng. Các gói dịch vụ với mức giá từ 70.000 ₫ đến 260.000 ₫ mỗi tháng. Không phụ phí, không hợp đồng.',
  },
  {
    id: 3,
    question: 'Tôi có thể xem ở đâu?',
    answer:
      'Xem mọi lúc, mọi nơi. Đăng nhập bằng tài khoản Netflix của bạn để xem ngay trên trang web netflix.com từ máy tính cá nhân, hoặc trên bất kỳ thiết bị nào có kết nối Internet và có cài đặt ứng dụng Netflix, bao gồm TV thông minh, điện thoại thông minh, máy tính bảng, thiết bị phát đa phương tiện trực tuyến và máy chơi game.',
  },
  {
    id: 4,
    question: 'Làm thế nào để hủy?',
    answer:
      'Netflix rất linh hoạt. Không có hợp đồng phiền toái, không ràng buộc. Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ trong hai cú nhấp chuột. Không mất phí hủy – bạn có thể bắt đầu hoặc ngừng tài khoản bất cứ lúc nào.',
  },
  {
    id: 5,
    question: 'Tôi có thể xem gì trên Netflix?',
    answer:
      'Netflix có một thư viện phong phú gồm các phim truyện, phim tài liệu, chương trình truyền hình, anime, tác phẩm giành giải thưởng của Netflix và nhiều nội dung khác. Xem không giới hạn bất cứ lúc nào bạn muốn.',
  },
  {
    id: 6,
    question: 'Netflix có phù hợp cho trẻ em không?',
    answer:
      'Trải nghiệm Netflix Trẻ em có sẵn trong gói dịch vụ của bạn, trao cho phụ huynh quyền kiểm soát trong khi các em có thể thưởng thức các bộ phim và chương trình phù hợp cho gia đình tại không gian riêng.',
  },
];
const Question = () => {
  const [activeIndices, setActiveIndices] = useState(new Set());
  const handleClick = (index) => {
    const newIndices = new Set(activeIndices);
    if (activeIndices.has(index)) {
      newIndices.delete(index);
    } else {
      newIndices.add(index);
    }
    setActiveIndices(newIndices);
  };
  return (
    <div className="question">
      <h1>Câu hỏi thường gặp</h1>
      {questionLists.map((questionitem, index) => (
        <List
          sx={{ width: '100%', maxWidth: 500, margin: '10px auto', backgroundColor: '#303030' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          key={questionitem.id}
        >
          <ListItemButton
            onClick={() => {
              handleClick(index);
            }}
          >
            <ListItemText primary={questionitem.question} />
            {activeIndices.has(index) ? (
              <AiOutlineClose className="question__icon" />
            ) : (
              <IoIosAddCircleOutline className="question__icon" />
            )}
          </ListItemButton>
          <Collapse in={Boolean(activeIndices.has(index))} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={questionitem.answer} />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      ))}
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

export default Question;
