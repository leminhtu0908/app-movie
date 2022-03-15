import React from 'react';
import './styles.scss';
import { HiOutlineChevronRight } from 'react-icons/hi';
const FreePlanAndroid = () => {
  return (
    <div className="freeplanAnroid">
      <div className="freeplanAnroid__left">
        <h1>Bạn có điện thoại Android? Hãy thử gói dịch vụ miễn phí mới của chúng tôi!</h1>
        <h2>
          Xem các bộ phim và chương trình truyền hình mới được tuyển chọn mà không cần cung cấp thông tin thanh toán!
        </h2>
        <div className="freeplanAnroid__left__dowload">
          <a href="https://play.google.com/store/apps/details?id=com.netflix.mediaclient">Tải Ứng dụng</a>
          <HiOutlineChevronRight className="freeplanAnroid__left__dowload--icon" />
        </div>
      </div>
      <div className="freeplanAnroid__right">
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ab36101/nmhp/vn.jpg" alt="" />
      </div>
    </div>
  );
};

export default FreePlanAndroid;
