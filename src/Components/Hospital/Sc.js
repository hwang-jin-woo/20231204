import styled from "styled-components"
import "./css/sc.css";
import sc1 from "./images/sc1.jpg"
import sc2 from "./images/sc2.jpg"
import { useState,useRef } from "react";
import { Link } from "react-router-dom"

const Container=styled.div`
  width: calc(100vw-10px);
  background-color:e5989b ;
`
const Footer=styled.div`
  display: flex;
`


export function Sc(){


  const [modalOpen5, setModalOpen5] = useState(false);
  const [modalOpen6, setModalOpen6] = useState(false);
  const [modalOpen7, setModalOpen7] = useState(false);
  const modalBackground = useRef();

  return<>
      <Container>    
        <main className="main">
                <section className="sc-section">
                      <div>
                        <ul className="buttons">        
                        <li>
                                <button className="button" onClick={() => setModalOpen5(true)}>
                                  <h2>내가  가본병원</h2>
                                </button>  
                              {
                                modalOpen5 &&
                                <div className="modal-container5" ref={modalBackground} onClick={e => {                                
                                  if (e.target === modalBackground.current) {
                                    setModalOpen5(false);
                                  }
                                }}>
                                  <div className="modal-content">
                                    <button className="modal-close-btn" onClick={() => setModalOpen5(false)}>
                                      x
                                    </button>
                                  </div>
                                </div>
                              }</li>         
                        <li>
                                <button className="button" onClick={() => setModalOpen6(true)}>
                                  <h2>가까운 병원</h2>
                                </button>  
                              {
                                modalOpen6 &&
                                <div className="modal-container6" ref={modalBackground} onClick={e => {                                
                                  if (e.target === modalBackground.current) {
                                    setModalOpen5(false);
                                  }
                                }}>
                                  <div className="modal-content">
                                    <button className="modal-close-btn" onClick={() => setModalOpen6(false)}>
                                      x
                                    </button>
                                  </div>
                                </div>
                              }</li>         
                        <li>
                                <button className="button" onClick={() => setModalOpen7(true)}>
                                  <h2>인기 병원</h2>
                                </button>  
                              {
                                modalOpen7 &&
                                <div className="modal-container7" ref={modalBackground} onClick={e => {                                
                                  if (e.target === modalBackground.current) {
                                    setModalOpen5(false);
                                  }
                                }}>
                                  <div className="modal-content">
                                    <button className="modal-close-btn" onClick={() => setModalOpen7(false)}>
                                      x
                                    </button>
                                  </div>
                                </div>
                              }</li>          
                          </ul>
                      </div>
                </section>
            </main>
          <div className="scimage">
            <img className="scimage1"src={sc1} alt="sc"  />
            <img className="scimage2"src={sc2}  alt="sc"  />
          </div>
          <Footer>
              <ul>
                  <li><Link to='https://cocoder.tistory.com' target='_blank'>Blog</Link> </li>
                  <li><Link to='https://github.com/hwang-jin-woo/' target='_blank'>Github</Link></li>
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