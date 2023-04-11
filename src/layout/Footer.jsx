import React from "react";
import styled from "styled-components";
import logo from "../assets/full-logo.png";
import logo1 from "../assets/bocongthuong.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import { FiMapPin, FiCheck, FiSmartphone } from "react-icons/fi";

const Container = styled.div`
    background: #232d42;
`;
const Container2 = styled.div`
    background: #64b9e5;
    color: #fff !important;
`;
const StyleFooter = styled.div`
    display: flex;
    padding: 30px 15px 0;
    color: #fff !important;
`;
const StyleFooterItem1 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #fff !important;
`;
const StyleFooterItem2 = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #fff !important;
`;
const StyleImg = styled.img.attrs({
    src: `${logo}`,
})`
    width: 200px;
    object-fit: contain;
`;
const StyleImg1 = styled.img.attrs({
    src: `${logo1}`,
})`
    width: 78px;
    object-fit: contain;
`;
const StyleLink = styled.a`
    color: #45c3d2;
    cursor: pointer;
    text-decoration: none;
`;
const StyleFooter2 = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid #ccc;
    padding: 10px 15px 30px;
    color: #fff !important;
`;
const StyleFooter3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
`;
const ImgIcon1 = styled.img.attrs({
    src: `${facebook}`,
})`
    width: 32px;
    object-fit: contain;
`;
const ImgIcon2 = styled.img.attrs({
    src: `${youtube}`,
})`
    width: 32px;
    object-fit: contain;
`;
const StyleIcon = styled.div`
    display: flex;
    gap: 10px;
`;
function Footer(props) {
    return (
        <>
            <Container>
                <StyleFooter className="container">
                    <StyleFooterItem2>
                        <StyleImg src="" alt="" />
                        <h6>Công ty Cổ phần Công nghệ Med247</h6>
                        <p className="m-0">
                            <FiMapPin /> Công ty TNHH Med247 Giấy phép hoạt động
                            số: 1168/HN0 - GPHĐ do Sở y tế Hà Nội cấp ngày
                            12/07/2019.
                        </p>
                        <p className="m-0">
                            <FiCheck /> ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp
                            ngày 16/03/2015
                        </p>
                        <div>
                            <StyleImg1 alt="" />
                            <StyleImg1 alt="" />
                        </div>
                    </StyleFooterItem2>
                    <StyleFooterItem1>
                        <StyleLink href="https://med247.vn/chuyen-khoa-dich-vu">
                            Các gói khám sức khoẻ ...
                        </StyleLink>
                        <StyleLink href="https://med247.vn/dieu-khoan-khieu-nai">
                            Gói chuyển đổi số doanh nghiệp
                        </StyleLink>
                        <StyleLink href="https://sites.google.com/view/med247tuyendung/trang-ch%E1%BB%A7">
                            Tuyển dụng
                        </StyleLink>
                        <StyleLink href="https://bookingcare.vn/hop-tac-voi-bookingcare">
                            Câu hỏi thường gặp
                        </StyleLink>
                        <StyleLink href="https://med247.vn/chinh-sach-bao-mat-thong-tin">
                            Điều khoản sử dụng
                        </StyleLink>
                        <StyleLink href="https://med247.vn/chinh-sach-bao-mat-thong-tin">
                            Quy trình hỗ trợ giải quyết khiếu nại
                        </StyleLink>
                        <StyleLink href="https://med247.vn/chinh-sach-bao-mat-thong-tin">
                            Quy chế hoạt động
                        </StyleLink>
                    </StyleFooterItem1>
                    <StyleFooterItem1>
                        <div className="mb-3">
                            <h6>Trụ sở tại Hà Nội</h6>
                            <p className="m-0">
                                {" "}
                                - Med247 Tây Hồ Nhà D5 Dreamland Tây Hồ, 107
                                Xuân La, Q. Bắc Từ Liêm, Hà Nội
                            </p>
                        </div>
                        <div className="mb-3">
                            <h6>Văn phòng tại Hà Nội</h6>
                            <p className="m-0">
                                {" "}
                                - Med247 Hai Bà Trưng Số 9 Thanh Nhàn, Hai Bà
                                Trưng, Hà Nội
                            </p>
                        </div>
                        <div className="mb-3">
                            <h6>Hỗ trợ khách hàng</h6>
                            <p className="m-0"> support@met247.vn (7h -20h)</p>
                        </div>
                    </StyleFooterItem1>
                </StyleFooter>
                <StyleFooter2 className="container">
                    <FiSmartphone /> Tải ứng dụng Met247 cho điện thoại hoặc máy
                    tính bảng:{" "}
                    <StyleLink className="ms-3 mx-3">
                        {" "}
                        Android-Iphone/ipad-Khác
                    </StyleLink>
                    <StyleIcon>
                        <ImgIcon1 />
                        <ImgIcon2 />
                    </StyleIcon>
                </StyleFooter2>
            </Container>
        </>
    );
}

export default Footer;
