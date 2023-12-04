import styled from "styled-components"
import "./css/admin.css";
import Login from "./Login";
import { useState,useEffect } from "react";

import { Link } from "react-router-dom"
const Container=styled.div`
  width: calc(100vw-10px);
  background-color:khaki ;
`
const Footer=styled.div`
display: flex;
`
const Sidebar=styled.div`
  width: 15%;
  height: 900px;
  background-color: ffb4a2;
  display: flex;
  li{    
    position: relative;
    text-align: center;
    top: 100px;
  }
  li a{
    color: black;
  }
  li a:hover{
    cursor: pointer;
    color:rgb(55, 55, 198);
  }
`

export function Admin(){
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('isLogin')) {
      setIsLogin(true);
    }
  },[]);

  return<>
      <Container>    
        <main className="main">
        <Login isLogin={isLogin} setIsLogin={setIsLogin} userId={userId} setUserId={setUserId} password={password} setPassword={setPassword} />
              <section >
                <Sidebar>
                  <h2>관리자</h2>
                  <ul>
                    <li><Link to="/admin">병원정보</Link></li>
                    <li><Link to="/admin">회원정보</Link></li>
                  </ul>

                </Sidebar>

              </section>
          </main>
          <Footer>
    <ul>
        <li><Link to='https://cocoder.tistory.com' target='_blank'>Blog</Link> </li>
        <li><Link to='https://github.com/cocoder16' target='_blank'>Github</Link></li>
    </ul>
    <p>
        <span>저자 : 황진우</span><br/>
        <span>이메일 : hjinu91@naver.com</span><br/>
        <span>Copyright 2023. copy. All Rights Reserved.</span>
    </p>
</Footer>
    </Container>  
  </>
}