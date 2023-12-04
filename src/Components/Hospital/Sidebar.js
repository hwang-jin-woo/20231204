import {  AiOutlineMenu  } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import "./css/sidebar.css";
import styled from "styled-components"
import { Link} from "react-router-dom"




export default function Sidebar({mypageClick,mbClick,isSidebarOpen,setSidebarOpen,toggleSidebar}){



const Container=styled.div` 
position: absolute;
left: 5px;
top: 60px;
li a{
    font-size: 22px;
}
`
const Barbrand=styled.div`
display: flex;
h2 {
        margin-left: 30px;
    }
`

return(
    <>
    <Container>
    <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <div className="menu-icon"onClick={toggleSidebar}> 
                <AiOutlineMenu />
                </div>
                    <Barbrand>        
                        <div className="sidebabrand-icon">HP</div>
                        <h2>병원 예약시스템</h2>
                        </Barbrand>
                        <div className="Sidebaicon1">
                        <button className="sidebarlogin"onClick={mypageClick}>
                            <div className="user-icon">
                            <AiOutlineUser />
                            </div>
                        <h3>내정보수정</h3>
                        </button>
                        <button className="sidebarmb"onClick={mbClick}>
                            <div className="login-icon">
                            <FiLogIn/>
                            </div>
                    <h3>회원가입</h3>
                        </button>
                        </div>
                        <ul id="Sidebamenu">
                        <li className="Sidebamenu-item">
                            <div className="Sidebamenu-button">
                            <div className="down-icon">
                            진료예약<FiChevronDown />
                            </div>
                            </div>
                            <ul className="Sidebamenu-sub">
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/reservation"}className="sidemenu">예약하기</Link>
                            </li>
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/reservationConfirm"}className="sidemenu">예약확인</Link>
                            </li>
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/reservationStatus"}className="sidemenu">예약자 현황</Link>
                            </li>
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/hospitalInformation"}className="sidemenu">병원정보</Link>
                            </li>
                            </ul>
                        </li>
                        <li className="Sidebamenu-item">
                            <div className="Sidebamenu-button">
                            <div className="down-icon">
                            나의관리<FiChevronDown />
                            </div>
                            </div>
                            <ul className="Sidebamenu-sub">
                            <li className="Sidebamenu-sub-item">
                                <Link to="https://www.hira.or.kr/dummy.do?pgmid=HIRAA030009200000"target="_blank"className="sidemenu">병원내역 조회</Link>
                            </li>
                            <li className="Sidebamenu-sub-item">
                                <Link to="https://www.kahp.or.kr/ho/medi/intro.do"target="_blank"className="sidemenu">건강검진</Link>
                            </li>
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/bmiMeasurement"}className="sidemenu">BMI측정</Link>
                            </li>
                            </ul>
                        </li>
                        <li className="Sidebamenu-item">
                            <div className="Sidebamenu-button">                        
                            <div className="down-icon">
                                검색<FiChevronDown />
                                </div>
                            </div>
                            <ul className="Sidebamenu-sub">
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/favoriteHospital"}className="sidemenu">내가 가본 병원</Link>
                            </li>
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/nearestHospital"}className="sidemenu">가까운 병원</Link>
                            </li>
                            <li className="Sidebamenu-sub-item">
                                <Link to={"/popularHospitals"}className="sidemenu">인기병원</Link>
                            </li>
                            </ul>
                        </li>
                        <li className="Sidebamenu-item">
                            <div className="Sidebamenu-button">
                            <Link to={"/reservationConfirm"}className="sidemenu">FAQ</Link>
                            </div>
                        </li>
                        </ul>
                </div>
    </Container>
    </>
)
}