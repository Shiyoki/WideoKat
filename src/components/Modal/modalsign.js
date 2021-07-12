import styled from "styled-components";
import React, {useRef, useEffect, useCallback, useState} from "react";
import { useSpring, animated } from 'react-spring'
import { MdClose } from 'react-icons/md'
import { Signup } from "./signup";

const Background = styled.div`
  z-index: 100000000000000000000000000;
  width: 100%;
  height: 90%;
  /*background: rgba(0, 0, 0, 0.8);*/
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 540px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #212022;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 95%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
   }
   button {
   padding: 10px 24px;
   /*background: #141414;*/
   color: #fff;
   border: none;
  }
`


const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;



export const Modall=({ showModall, setShowModall })=>{

 const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModall ? 1 : 0,
    transform: showModall ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModall(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModall) {
        setShowModall(false);
        console.log('I pressed');
      }
    },
    [setShowModall, showModall]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

/////////////////////////////////////////////////////////////////////////////

  return (
    <>
      {showModall ? (
        <Background className="scroll" onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModall={showModall}>
              <ModalImg src= "https://www.digitalartsonline.co.uk/cmsdata/features/3699297/namu-tree13.jpg" alt='camera' />
              <ModalContent>
             <Signup />
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModall(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};