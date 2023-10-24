import './scss/App.scss'

import { Container, Nav, Navbar, Offcanvas, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

import motorCore_data from './motorCore_data';
import Detail from './routes/Detail';
import Home from './routes/Home';
import Cart from './routes/Cart';

function App() {  
  let [moterCoreData] = useState(motorCore_data);
  // let [res, setRes] = useState([0,1,2,3,4,5,6,7]);

  //위로가기 버튼
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
      window.addEventListener('scroll', updateScroll);
      return () => {
          window.removeEventListener('scroll', updateScroll);
      }
  }, []);
  let display = scrollPosition > 100 ? { display: 'block' } : { display: 'none' };

  //navigation
  let nav = useRef(null);
  let logo = useRef(null);
  let location = useRef(null);
  let search = useRef(null);
  let logIn = useRef(null);
  let basket = useRef(null);

  let [showUnderNav, setShowUnderNav] = useState({ display: 'none' });
  let [categories, setCategories] = useState({ color: '#fff' });
  let [navPosition, setNavPosition] = useState({position: 'absolute'});


  function navMouseOn(e) {
    setShowUnderNav({ display: 'block' });
    setCategories({ color: '#333' });

    nav.current.style.background = '#fff';
    logo.current.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='32.939' viewBox='0 0 100 32.939'%3E%3Cg id='Logo' transform='translate(-88.414 -468.005)'%3E%3Cpath id='패스_1' data-name='패스 1' d='M150.8,496.543l0-24.144a4.325,4.325,0,0,1,4.316-4.394h.47a4.394,4.394,0,0,1,4.394,4.394v24.144a4.394,4.394,0,0,1-4.4,4.39h-.5a4.3,4.3,0,0,1-4.282-4.39' transform='translate(-30.302)' fill='%23002053'/%3E%3Cpath id='패스_2' data-name='패스 2' d='M218.424,470.885l9.763,15.889c2.107,3.434,2.6,4.327,2.6,6.853a7.254,7.254,0,0,1-6.818,7.048H210.773a4.117,4.117,0,0,1-4.343-4.067v-.279a4.341,4.341,0,0,1,4.343-4.342l8.086,0c.509,0,.822-.069.96-.387a.855.855,0,0,0-.133-.939l-5.757-9.238c-.093-.155-.2-.367-.379-.367s-.313.212-.393.379l-8.792,15.1c-1.373,2.392-2.981,4.146-5.382,4.146H182.069a6.878,6.878,0,0,1-6.426-6.429V472.412a4.347,4.347,0,0,1,4.342-4.349h.555a4.351,4.351,0,0,1,4.348,4.349l0,17.839a1.146,1.146,0,0,0,1.185,1.179l8.4,0a3.259,3.259,0,0,0,3.131-1.818l11.306-18.729a5.462,5.462,0,0,1,4.834-2.739,5.246,5.246,0,0,1,4.682,2.739' transform='translate(-42.369 -0.028)' fill='%23002053'/%3E%3Cpath id='패스_3' data-name='패스 3' d='M98.841,501.022a1.181,1.181,0,0,0-1.18,1.184l0,6.076a4.345,4.345,0,0,1-4.346,4.344h-.555a4.345,4.345,0,0,1-4.341-4.344V497.233a5.1,5.1,0,0,1,5.177-5.177h17.652a4.348,4.348,0,0,1,4.343,4.344v.281a4.343,4.343,0,0,1-4.343,4.341Z' transform='translate(-0.001 -11.682)' fill='%23002053'/%3E%3Cpath id='패스_4' data-name='패스 4' d='M92.809,469.229h20.567a4.323,4.323,0,0,1,4.392,4.31v.273a4.393,4.393,0,0,1-4.392,4.4H92.809a4.4,4.4,0,0,1-4.4-4.4v-.3a4.3,4.3,0,0,1,4.4-4.279' transform='translate(0 -0.595)' fill='%23002053'/%3E%3C/g%3E%3C/svg%3E%0A")`
    e.target.style.borderBottom = '1px solid #333';
    location.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26.852' height='26' viewBox='0 0 26.852 26'%3E%3Cg id='Store' transform='translate(53.926)'%3E%3Cpath id='íŒ¨ìŠ¤_310' data-name='íŒ¨ìŠ¤ 310' d='M-44.25,17h-5.308L-53,26.5h24l-1.353-3.734L-32.442,17h-5.307' transform='translate(0.5 -1.5)' fill='none' stroke='%23000' stroke-miterlimit='10' stroke-width='2'/%3E%3Cpath id='íŒ¨ìŠ¤_311' data-name='íŒ¨ìŠ¤ 311' d='M-35,7.857C-35,12.089-42,19-42,19s-7-6.911-7-11.143A6.87,6.87,0,0,1-42,1,6.87,6.87,0,0,1-35,7.857Z' transform='translate(1.499)' fill='none' stroke='%23000' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2'/%3E%3Ccircle id='íƒ€ì›_68' data-name='íƒ€ì› 68' cx='2' cy='2' r='2' transform='translate(-42.5 5.556)' fill='none' stroke='%23000' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
    search.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24.707' height='24.707' viewBox='0 0 24.707 24.707'%3E%3Cg id='Search' transform='translate(-3.25 -3.25)'%3E%3Cg id='íƒ€ì›_1' data-name='íƒ€ì› 1' transform='translate(3.25 3.25)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='10.5' cy='10.5' r='10.5' stroke='none'/%3E%3Ccircle cx='10.5' cy='10.5' r='9.5' fill='none'/%3E%3C/g%3E%3Cline id='ì„ _2' data-name='ì„  2' x2='6.9' y2='6.9' transform='translate(20.35 20.35)' fill='none' stroke='%23000' stroke-linejoin='round' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
    logIn.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg id='Mypage' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg id='ì‚¬ê°í˜•_50' data-name='ì‚¬ê°í˜• 50' transform='translate(7)' fill='none' stroke='%23000' stroke-width='2'%3E%3Crect width='10' height='10' rx='4' stroke='none'/%3E%3Crect x='1' y='1' width='8' height='8' rx='3' fill='none'/%3E%3C/g%3E%3Cg id='ì‚¬ê°í˜•_52' data-name='ì‚¬ê°í˜• 52' transform='translate(0 12)' fill='none' stroke='%23000' stroke-width='2'%3E%3Cpath d='M4,0H20a4,4,0,0,1,4,4v8a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z' stroke='none'/%3E%3Cpath d='M4,1H20a3,3,0,0,1,3,3v7a0,0,0,0,1,0,0H1a0,0,0,0,1,0,0V4A3,3,0,0,1,4,1Z' fill='none'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
    basket.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg id='Cart' transform='translate(-1887 -40)'%3E%3Cg id='ì‚¬ê°í˜•_42' data-name='ì‚¬ê°í˜• 42' transform='translate(1887 46)' fill='none' stroke='%23000' stroke-width='2'%3E%3Crect width='24' height='18' stroke='none'/%3E%3Crect x='1' y='1' width='22' height='16' fill='none'/%3E%3C/g%3E%3Cg id='ì‚¬ê°í˜•_51' data-name='ì‚¬ê°í˜• 51' transform='translate(1893 40)' fill='none' stroke='%23000' stroke-width='2'%3E%3Cpath d='M6,0H6a6,6,0,0,1,6,6V8a0,0,0,0,1,0,0H0A0,0,0,0,1,0,8V6A6,6,0,0,1,6,0Z' stroke='none'/%3E%3Cpath d='M6,1H6a5,5,0,0,1,5,5V7a0,0,0,0,1,0,0H1A0,0,0,0,1,1,7V6A5,5,0,0,1,6,1Z' fill='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A"/>`
  }

  function outNav(e) {
    if (window.matchMedia("(min-width:768px)").matches) {
      e.target.style.borderBottom = '1px solid transparent';
    }
  }

  function navMouseOut() {
    if (window.matchMedia("(min-width:768px)").matches) {
      setShowUnderNav({ display: 'none' });
      setCategories({ color: '#fff' });

      nav.current.style.background = 'transparent';
      logo.current.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='32.939' viewBox='0 0 100 32.939'%3E%3Cg id='Logo' transform='translate(-88.414 -468.005)'%3E%3Cpath id='패스_1' data-name='패스 1' d='M150.8,496.543l0-24.144a4.325,4.325,0,0,1,4.316-4.394h.47a4.394,4.394,0,0,1,4.394,4.394v24.144a4.394,4.394,0,0,1-4.4,4.39h-.5a4.3,4.3,0,0,1-4.282-4.39' transform='translate(-30.302)' fill='%23fff'/%3E%3Cpath id='패스_2' data-name='패스 2' d='M218.424,470.885l9.763,15.889c2.107,3.434,2.6,4.327,2.6,6.853a7.254,7.254,0,0,1-6.818,7.048H210.773a4.117,4.117,0,0,1-4.343-4.067v-.279a4.341,4.341,0,0,1,4.343-4.342l8.086,0c.509,0,.822-.069.96-.387a.855.855,0,0,0-.133-.939l-5.757-9.238c-.093-.155-.2-.367-.379-.367s-.313.212-.393.379l-8.792,15.1c-1.373,2.392-2.981,4.146-5.382,4.146H182.069a6.878,6.878,0,0,1-6.426-6.429V472.412a4.347,4.347,0,0,1,4.342-4.349h.555a4.351,4.351,0,0,1,4.348,4.349l0,17.839a1.146,1.146,0,0,0,1.185,1.179l8.4,0a3.259,3.259,0,0,0,3.131-1.818l11.306-18.729a5.462,5.462,0,0,1,4.834-2.739,5.246,5.246,0,0,1,4.682,2.739' transform='translate(-42.369 -0.028)' fill='%23fff'/%3E%3Cpath id='패스_3' data-name='패스 3' d='M98.841,501.022a1.181,1.181,0,0,0-1.18,1.184l0,6.076a4.345,4.345,0,0,1-4.346,4.344h-.555a4.345,4.345,0,0,1-4.341-4.344V497.233a5.1,5.1,0,0,1,5.177-5.177h17.652a4.348,4.348,0,0,1,4.343,4.344v.281a4.343,4.343,0,0,1-4.343,4.341Z' transform='translate(-0.001 -11.682)' fill='%23fff'/%3E%3Cpath id='패스_4' data-name='패스 4' d='M92.809,469.229h20.567a4.323,4.323,0,0,1,4.392,4.31v.273a4.393,4.393,0,0,1-4.392,4.4H92.809a4.4,4.4,0,0,1-4.4-4.4v-.3a4.3,4.3,0,0,1,4.4-4.279' transform='translate(0 -0.595)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E%0A")`
      location.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26.852' height='26' viewBox='0 0 26.852 26'%3E%3Cg id='Store' transform='translate(53.926)'%3E%3Cpath id='패스_310' data-name='패스 310' d='M-44.25,17h-5.308L-53,26.5h24l-1.353-3.734L-32.442,17h-5.307' transform='translate(0.5 -1.5)' fill='none' stroke='%23fff' stroke-miterlimit='10' stroke-width='2'/%3E%3Cpath id='패스_311' data-name='패스 311' d='M-35,7.857C-35,12.089-42,19-42,19s-7-6.911-7-11.143A6.87,6.87,0,0,1-42,1,6.87,6.87,0,0,1-35,7.857Z' transform='translate(1.499)' fill='none' stroke='%23fff' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2'/%3E%3Ccircle id='타원_68' data-name='타원 68' cx='2' cy='2' r='2' transform='translate(-42.5 5.556)' fill='none' stroke='%23fff' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
      search.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24.707' height='24.707' viewBox='0 0 24.707 24.707'%3E%3Cg id='Search' transform='translate(-3.25 -3.25)'%3E%3Cg id='타원_1' data-name='타원 1' transform='translate(3.25 3.25)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='10.5' cy='10.5' r='10.5' stroke='none'/%3E%3Ccircle cx='10.5' cy='10.5' r='9.5' fill='none'/%3E%3C/g%3E%3Cline id='선_2' data-name='선 2' x2='6.9' y2='6.9' transform='translate(20.35 20.35)' fill='none' stroke='%23fff' stroke-linejoin='round' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
      logIn.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg id='Mypage' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg id='사각형_50' data-name='사각형 50' transform='translate(7)' fill='none' stroke='%23fff' stroke-width='2'%3E%3Crect width='10' height='10' rx='4' stroke='none'/%3E%3Crect x='1' y='1' width='8' height='8' rx='3' fill='none'/%3E%3C/g%3E%3Cg id='사각형_52' data-name='사각형 52' transform='translate(0 12)' fill='none' stroke='%23fff' stroke-width='2'%3E%3Cpath d='M4,0H20a4,4,0,0,1,4,4v8a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z' stroke='none'/%3E%3Cpath d='M4,1H20a3,3,0,0,1,3,3v7a0,0,0,0,1,0,0H1a0,0,0,0,1,0,0V4A3,3,0,0,1,4,1Z' fill='none'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
      basket.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg id='Cart' transform='translate(-1887 -40)'%3E%3Cg id='사각형_42' data-name='사각형 42' transform='translate(1887 46)' fill='none' stroke='%23fff' stroke-width='2'%3E%3Crect width='24' height='18' stroke='none'/%3E%3Crect x='1' y='1' width='22' height='16' fill='none'/%3E%3C/g%3E%3Cg id='사각형_51' data-name='사각형 51' transform='translate(1893 40)' fill='none' stroke='%23fff' stroke-width='2'%3E%3Cpath d='M6,0H6a6,6,0,0,1,6,6V8a0,0,0,0,1,0,0H0A0,0,0,0,1,0,8V6A6,6,0,0,1,6,0Z' stroke='none'/%3E%3Cpath d='M6,1H6a5,5,0,0,1,5,5V7a0,0,0,0,1,0,0H1A0,0,0,0,1,1,7V6A5,5,0,0,1,6,1Z' fill='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A"/>`
    }
  }


  function clickHamburger() {
    if (window.location.pathname === '/'){
      setCategories({ color: '#333' });
      location.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26.852' height='26' viewBox='0 0 26.852 26'%3E%3Cg id='Store' transform='translate(53.926)'%3E%3Cpath id='íŒ¨ìŠ¤_310' data-name='íŒ¨ìŠ¤ 310' d='M-44.25,17h-5.308L-53,26.5h24l-1.353-3.734L-32.442,17h-5.307' transform='translate(0.5 -1.5)' fill='none' stroke='%23000' stroke-miterlimit='10' stroke-width='2'/%3E%3Cpath id='íŒ¨ìŠ¤_311' data-name='íŒ¨ìŠ¤ 311' d='M-35,7.857C-35,12.089-42,19-42,19s-7-6.911-7-11.143A6.87,6.87,0,0,1-42,1,6.87,6.87,0,0,1-35,7.857Z' transform='translate(1.499)' fill='none' stroke='%23000' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2'/%3E%3Ccircle id='íƒ€ì›_68' data-name='íƒ€ì› 68' cx='2' cy='2' r='2' transform='translate(-42.5 5.556)' fill='none' stroke='%23000' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
      search.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24.707' height='24.707' viewBox='0 0 24.707 24.707'%3E%3Cg id='Search' transform='translate(-3.25 -3.25)'%3E%3Cg id='íƒ€ì›_1' data-name='íƒ€ì› 1' transform='translate(3.25 3.25)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='10.5' cy='10.5' r='10.5' stroke='none'/%3E%3Ccircle cx='10.5' cy='10.5' r='9.5' fill='none'/%3E%3C/g%3E%3Cline id='ì„ _2' data-name='ì„  2' x2='6.9' y2='6.9' transform='translate(20.35 20.35)' fill='none' stroke='%23000' stroke-linejoin='round' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
      logIn.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg id='Mypage' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg id='ì‚¬ê°í˜•_50' data-name='ì‚¬ê°í˜• 50' transform='translate(7)' fill='none' stroke='%23000' stroke-width='2'%3E%3Crect width='10' height='10' rx='4' stroke='none'/%3E%3Crect x='1' y='1' width='8' height='8' rx='3' fill='none'/%3E%3C/g%3E%3Cg id='ì‚¬ê°í˜•_52' data-name='ì‚¬ê°í˜• 52' transform='translate(0 12)' fill='none' stroke='%23000' stroke-width='2'%3E%3Cpath d='M4,0H20a4,4,0,0,1,4,4v8a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z' stroke='none'/%3E%3Cpath d='M4,1H20a3,3,0,0,1,3,3v7a0,0,0,0,1,0,0H1a0,0,0,0,1,0,0V4A3,3,0,0,1,4,1Z' fill='none'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
      basket.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg id='Cart' transform='translate(-1887 -40)'%3E%3Cg id='ì‚¬ê°í˜•_42' data-name='ì‚¬ê°í˜• 42' transform='translate(1887 46)' fill='none' stroke='%23000' stroke-width='2'%3E%3Crect width='24' height='18' stroke='none'/%3E%3Crect x='1' y='1' width='22' height='16' fill='none'/%3E%3C/g%3E%3Cg id='ì‚¬ê°í˜•_51' data-name='ì‚¬ê°í˜• 51' transform='translate(1893 40)' fill='none' stroke='%23000' stroke-width='2'%3E%3Cpath d='M6,0H6a6,6,0,0,1,6,6V8a0,0,0,0,1,0,0H0A0,0,0,0,1,0,8V6A6,6,0,0,1,6,0Z' stroke='none'/%3E%3Cpath d='M6,1H6a5,5,0,0,1,5,5V7a0,0,0,0,1,0,0H1A0,0,0,0,1,1,7V6A5,5,0,0,1,6,1Z' fill='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A"/>`
    }  
  }

  function closeHamburger() {
    if (window.location.pathname === '/'){
      setCategories({ color: '#fff' });
      logo.current.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='32.939' viewBox='0 0 100 32.939'%3E%3Cg id='Logo' transform='translate(-88.414 -468.005)'%3E%3Cpath id='패스_1' data-name='패스 1' d='M150.8,496.543l0-24.144a4.325,4.325,0,0,1,4.316-4.394h.47a4.394,4.394,0,0,1,4.394,4.394v24.144a4.394,4.394,0,0,1-4.4,4.39h-.5a4.3,4.3,0,0,1-4.282-4.39' transform='translate(-30.302)' fill='%23fff'/%3E%3Cpath id='패스_2' data-name='패스 2' d='M218.424,470.885l9.763,15.889c2.107,3.434,2.6,4.327,2.6,6.853a7.254,7.254,0,0,1-6.818,7.048H210.773a4.117,4.117,0,0,1-4.343-4.067v-.279a4.341,4.341,0,0,1,4.343-4.342l8.086,0c.509,0,.822-.069.96-.387a.855.855,0,0,0-.133-.939l-5.757-9.238c-.093-.155-.2-.367-.379-.367s-.313.212-.393.379l-8.792,15.1c-1.373,2.392-2.981,4.146-5.382,4.146H182.069a6.878,6.878,0,0,1-6.426-6.429V472.412a4.347,4.347,0,0,1,4.342-4.349h.555a4.351,4.351,0,0,1,4.348,4.349l0,17.839a1.146,1.146,0,0,0,1.185,1.179l8.4,0a3.259,3.259,0,0,0,3.131-1.818l11.306-18.729a5.462,5.462,0,0,1,4.834-2.739,5.246,5.246,0,0,1,4.682,2.739' transform='translate(-42.369 -0.028)' fill='%23fff'/%3E%3Cpath id='패스_3' data-name='패스 3' d='M98.841,501.022a1.181,1.181,0,0,0-1.18,1.184l0,6.076a4.345,4.345,0,0,1-4.346,4.344h-.555a4.345,4.345,0,0,1-4.341-4.344V497.233a5.1,5.1,0,0,1,5.177-5.177h17.652a4.348,4.348,0,0,1,4.343,4.344v.281a4.343,4.343,0,0,1-4.343,4.341Z' transform='translate(-0.001 -11.682)' fill='%23fff'/%3E%3Cpath id='패스_4' data-name='패스 4' d='M92.809,469.229h20.567a4.323,4.323,0,0,1,4.392,4.31v.273a4.393,4.393,0,0,1-4.392,4.4H92.809a4.4,4.4,0,0,1-4.4-4.4v-.3a4.3,4.3,0,0,1,4.4-4.279' transform='translate(0 -0.595)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E%0A")`
      location.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26.852' height='26' viewBox='0 0 26.852 26'%3E%3Cg id='Store' transform='translate(53.926)'%3E%3Cpath id='패스_310' data-name='패스 310' d='M-44.25,17h-5.308L-53,26.5h24l-1.353-3.734L-32.442,17h-5.307' transform='translate(0.5 -1.5)' fill='none' stroke='%23fff' stroke-miterlimit='10' stroke-width='2'/%3E%3Cpath id='패스_311' data-name='패스 311' d='M-35,7.857C-35,12.089-42,19-42,19s-7-6.911-7-11.143A6.87,6.87,0,0,1-42,1,6.87,6.87,0,0,1-35,7.857Z' transform='translate(1.499)' fill='none' stroke='%23fff' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2'/%3E%3Ccircle id='타원_68' data-name='타원 68' cx='2' cy='2' r='2' transform='translate(-42.5 5.556)' fill='none' stroke='%23fff' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
      search.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24.707' height='24.707' viewBox='0 0 24.707 24.707'%3E%3Cg id='Search' transform='translate(-3.25 -3.25)'%3E%3Cg id='타원_1' data-name='타원 1' transform='translate(3.25 3.25)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='10.5' cy='10.5' r='10.5' stroke='none'/%3E%3Ccircle cx='10.5' cy='10.5' r='9.5' fill='none'/%3E%3C/g%3E%3Cline id='선_2' data-name='선 2' x2='6.9' y2='6.9' transform='translate(20.35 20.35)' fill='none' stroke='%23fff' stroke-linejoin='round' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
      logIn.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg id='Mypage' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg id='사각형_50' data-name='사각형 50' transform='translate(7)' fill='none' stroke='%23fff' stroke-width='2'%3E%3Crect width='10' height='10' rx='4' stroke='none'/%3E%3Crect x='1' y='1' width='8' height='8' rx='3' fill='none'/%3E%3C/g%3E%3Cg id='사각형_52' data-name='사각형 52' transform='translate(0 12)' fill='none' stroke='%23fff' stroke-width='2'%3E%3Cpath d='M4,0H20a4,4,0,0,1,4,4v8a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z' stroke='none'/%3E%3Cpath d='M4,1H20a3,3,0,0,1,3,3v7a0,0,0,0,1,0,0H1a0,0,0,0,1,0,0V4A3,3,0,0,1,4,1Z' fill='none'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
    }
  }

  useEffect(() => {        
    if (window.location.pathname != '/') {
      // if (window.location.href.indexOf('detail')>0) {
      setNavPosition({position:'fixed'});
      setCategories({ color: '#333' });

      nav.current.style.background = '#fff';
      logo.current.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='32.939' viewBox='0 0 100 32.939'%3E%3Cg id='Logo' transform='translate(-88.414 -468.005)'%3E%3Cpath id='패스_1' data-name='패스 1' d='M150.8,496.543l0-24.144a4.325,4.325,0,0,1,4.316-4.394h.47a4.394,4.394,0,0,1,4.394,4.394v24.144a4.394,4.394,0,0,1-4.4,4.39h-.5a4.3,4.3,0,0,1-4.282-4.39' transform='translate(-30.302)' fill='%23002053'/%3E%3Cpath id='패스_2' data-name='패스 2' d='M218.424,470.885l9.763,15.889c2.107,3.434,2.6,4.327,2.6,6.853a7.254,7.254,0,0,1-6.818,7.048H210.773a4.117,4.117,0,0,1-4.343-4.067v-.279a4.341,4.341,0,0,1,4.343-4.342l8.086,0c.509,0,.822-.069.96-.387a.855.855,0,0,0-.133-.939l-5.757-9.238c-.093-.155-.2-.367-.379-.367s-.313.212-.393.379l-8.792,15.1c-1.373,2.392-2.981,4.146-5.382,4.146H182.069a6.878,6.878,0,0,1-6.426-6.429V472.412a4.347,4.347,0,0,1,4.342-4.349h.555a4.351,4.351,0,0,1,4.348,4.349l0,17.839a1.146,1.146,0,0,0,1.185,1.179l8.4,0a3.259,3.259,0,0,0,3.131-1.818l11.306-18.729a5.462,5.462,0,0,1,4.834-2.739,5.246,5.246,0,0,1,4.682,2.739' transform='translate(-42.369 -0.028)' fill='%23002053'/%3E%3Cpath id='패스_3' data-name='패스 3' d='M98.841,501.022a1.181,1.181,0,0,0-1.18,1.184l0,6.076a4.345,4.345,0,0,1-4.346,4.344h-.555a4.345,4.345,0,0,1-4.341-4.344V497.233a5.1,5.1,0,0,1,5.177-5.177h17.652a4.348,4.348,0,0,1,4.343,4.344v.281a4.343,4.343,0,0,1-4.343,4.341Z' transform='translate(-0.001 -11.682)' fill='%23002053'/%3E%3Cpath id='패스_4' data-name='패스 4' d='M92.809,469.229h20.567a4.323,4.323,0,0,1,4.392,4.31v.273a4.393,4.393,0,0,1-4.392,4.4H92.809a4.4,4.4,0,0,1-4.4-4.4v-.3a4.3,4.3,0,0,1,4.4-4.279' transform='translate(0 -0.595)' fill='%23002053'/%3E%3C/g%3E%3C/svg%3E%0A")`
      location.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26.852' height='26' viewBox='0 0 26.852 26'%3E%3Cg id='Store' transform='translate(53.926)'%3E%3Cpath id='íŒ¨ìŠ¤_310' data-name='íŒ¨ìŠ¤ 310' d='M-44.25,17h-5.308L-53,26.5h24l-1.353-3.734L-32.442,17h-5.307' transform='translate(0.5 -1.5)' fill='none' stroke='%23000' stroke-miterlimit='10' stroke-width='2'/%3E%3Cpath id='íŒ¨ìŠ¤_311' data-name='íŒ¨ìŠ¤ 311' d='M-35,7.857C-35,12.089-42,19-42,19s-7-6.911-7-11.143A6.87,6.87,0,0,1-42,1,6.87,6.87,0,0,1-35,7.857Z' transform='translate(1.499)' fill='none' stroke='%23000' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2'/%3E%3Ccircle id='íƒ€ì›_68' data-name='íƒ€ì› 68' cx='2' cy='2' r='2' transform='translate(-42.5 5.556)' fill='none' stroke='%23000' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
      search.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24.707' height='24.707' viewBox='0 0 24.707 24.707'%3E%3Cg id='Search' transform='translate(-3.25 -3.25)'%3E%3Cg id='íƒ€ì›_1' data-name='íƒ€ì› 1' transform='translate(3.25 3.25)' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='10.5' cy='10.5' r='10.5' stroke='none'/%3E%3Ccircle cx='10.5' cy='10.5' r='9.5' fill='none'/%3E%3C/g%3E%3Cline id='ì„ _2' data-name='ì„  2' x2='6.9' y2='6.9' transform='translate(20.35 20.35)' fill='none' stroke='%23000' stroke-linejoin='round' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
      logIn.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg id='Mypage' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg id='ì‚¬ê°í˜•_50' data-name='ì‚¬ê°í˜• 50' transform='translate(7)' fill='none' stroke='%23000' stroke-width='2'%3E%3Crect width='10' height='10' rx='4' stroke='none'/%3E%3Crect x='1' y='1' width='8' height='8' rx='3' fill='none'/%3E%3C/g%3E%3Cg id='ì‚¬ê°í˜•_52' data-name='ì‚¬ê°í˜• 52' transform='translate(0 12)' fill='none' stroke='%23000' stroke-width='2'%3E%3Cpath d='M4,0H20a4,4,0,0,1,4,4v8a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z' stroke='none'/%3E%3Cpath d='M4,1H20a3,3,0,0,1,3,3v7a0,0,0,0,1,0,0H1a0,0,0,0,1,0,0V4A3,3,0,0,1,4,1Z' fill='none'/%3E%3C/g%3E%3C/svg%3E%0A"/>`
      basket.current.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg id='Cart' transform='translate(-1887 -40)'%3E%3Cg id='ì‚¬ê°í˜•_42' data-name='ì‚¬ê°í˜• 42' transform='translate(1887 46)' fill='none' stroke='%23000' stroke-width='2'%3E%3Crect width='24' height='18' stroke='none'/%3E%3Crect x='1' y='1' width='22' height='16' fill='none'/%3E%3C/g%3E%3Cg id='ì‚¬ê°í˜•_51' data-name='ì‚¬ê°í˜• 51' transform='translate(1893 40)' fill='none' stroke='%23000' stroke-width='2'%3E%3Cpath d='M6,0H6a6,6,0,0,1,6,6V8a0,0,0,0,1,0,0H0A0,0,0,0,1,0,8V6A6,6,0,0,1,6,0Z' stroke='none'/%3E%3Cpath d='M6,1H6a5,5,0,0,1,5,5V7a0,0,0,0,1,0,0H1A0,0,0,0,1,1,7V6A5,5,0,0,1,6,1Z' fill='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A"/>`
    }

  }, [])

  return (
    <div className="App">

      <div style={{ position: 'relative' }}>
        <Navbar key='md' expand='md' className="bg-body-transparent mb-3" style={navPosition} ref={nav}>
          <Container fluid>
            <Navbar.Brand href="/" className='logo' ref={logo}></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} variant="light" onClick={clickHamburger} style={
              (window.location.pathname === '/') ? {filter: 'invert(100%)'} : {filter: 'invert(0%)'}
            } />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton onClick={closeHamburger}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='32.939' viewBox='0 0 100 32.939'%3E%3Cg id='Logo' transform='translate(-88.414 -468.005)'%3E%3Cpath id='패스_1' data-name='패스 1' d='M150.8,496.543l0-24.144a4.325,4.325,0,0,1,4.316-4.394h.47a4.394,4.394,0,0,1,4.394,4.394v24.144a4.394,4.394,0,0,1-4.4,4.39h-.5a4.3,4.3,0,0,1-4.282-4.39' transform='translate(-30.302)' fill='%23002053'/%3E%3Cpath id='패스_2' data-name='패스 2' d='M218.424,470.885l9.763,15.889c2.107,3.434,2.6,4.327,2.6,6.853a7.254,7.254,0,0,1-6.818,7.048H210.773a4.117,4.117,0,0,1-4.343-4.067v-.279a4.341,4.341,0,0,1,4.343-4.342l8.086,0c.509,0,.822-.069.96-.387a.855.855,0,0,0-.133-.939l-5.757-9.238c-.093-.155-.2-.367-.379-.367s-.313.212-.393.379l-8.792,15.1c-1.373,2.392-2.981,4.146-5.382,4.146H182.069a6.878,6.878,0,0,1-6.426-6.429V472.412a4.347,4.347,0,0,1,4.342-4.349h.555a4.351,4.351,0,0,1,4.348,4.349l0,17.839a1.146,1.146,0,0,0,1.185,1.179l8.4,0a3.259,3.259,0,0,0,3.131-1.818l11.306-18.729a5.462,5.462,0,0,1,4.834-2.739,5.246,5.246,0,0,1,4.682,2.739' transform='translate(-42.369 -0.028)' fill='%23002053'/%3E%3Cpath id='패스_3' data-name='패스 3' d='M98.841,501.022a1.181,1.181,0,0,0-1.18,1.184l0,6.076a4.345,4.345,0,0,1-4.346,4.344h-.555a4.345,4.345,0,0,1-4.341-4.344V497.233a5.1,5.1,0,0,1,5.177-5.177h17.652a4.348,4.348,0,0,1,4.343,4.344v.281a4.343,4.343,0,0,1-4.343,4.341Z' transform='translate(-0.001 -11.682)' fill='%23002053'/%3E%3Cpath id='패스_4' data-name='패스 4' d='M92.809,469.229h20.567a4.323,4.323,0,0,1,4.392,4.31v.273a4.393,4.393,0,0,1-4.392,4.4H92.809a4.4,4.4,0,0,1-4.4-4.4v-.3a4.3,4.3,0,0,1,4.4-4.279' transform='translate(0 -0.595)' fill='%23002053'/%3E%3C/g%3E%3C/svg%3E%0A" alt="logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div></div>
                  <div className='category_box'>
                    <Nav.Link href="/product" className='category' style={categories} onMouseOver={(e) => {
                      if (window.matchMedia("(min-width:768px)").matches) {
                        navMouseOn(e);
                      }
                    }} onMouseOut={outNav}>WOMEN</Nav.Link>
                    <Nav.Link href="/product" className='category' style={categories} onMouseOver={(e) => {
                      if (window.matchMedia("(min-width:768px)").matches) {
                        navMouseOn(e);
                      }
                    }} onMouseOut={outNav}>MEN</Nav.Link>
                    <Nav.Link href="/product" className='category' style={categories} onMouseOver={(e) => {
                      if (window.matchMedia("(min-width:768px)").matches) {
                        navMouseOn(e);
                      }
                    }} onMouseOut={outNav} >KIDS</Nav.Link>
                    <Nav.Link className='category' style={categories}>|</Nav.Link>
                    <Nav.Link href="/product" className='category' style={categories} onMouseOver={(e) => {
                      if (window.matchMedia("(min-width:768px)").matches) {
                        navMouseOn(e);
                      }
                    }} onMouseOut={outNav} >BRAND</Nav.Link>
                  </div>

                  <div className="icon_box">
                    <Nav.Link href="/customer-service" className='icon' ref={location}><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26.852' height='26' viewBox='0 0 26.852 26'%3E%3Cg id='Store' transform='translate(53.926)'%3E%3Cpath id='패스_310' data-name='패스 310' d='M-44.25,17h-5.308L-53,26.5h24l-1.353-3.734L-32.442,17h-5.307' transform='translate(0.5 -1.5)' fill='none' stroke='%23fff' stroke-miterlimit='10' stroke-width='2'/%3E%3Cpath id='패스_311' data-name='패스 311' d='M-35,7.857C-35,12.089-42,19-42,19s-7-6.911-7-11.143A6.87,6.87,0,0,1-42,1,6.87,6.87,0,0,1-35,7.857Z' transform='translate(1.499)' fill='none' stroke='%23fff' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2'/%3E%3Ccircle id='타원_68' data-name='타원 68' cx='2' cy='2' r='2' transform='translate(-42.5 5.556)' fill='none' stroke='%23fff' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A" /></Nav.Link>
                    <Nav.Link href="/search" className='icon' ref={search}><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24.707' height='24.707' viewBox='0 0 24.707 24.707'%3E%3Cg id='Search' transform='translate(-3.25 -3.25)'%3E%3Cg id='타원_1' data-name='타원 1' transform='translate(3.25 3.25)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='10.5' cy='10.5' r='10.5' stroke='none'/%3E%3Ccircle cx='10.5' cy='10.5' r='9.5' fill='none'/%3E%3C/g%3E%3Cline id='선_2' data-name='선 2' x2='6.9' y2='6.9' transform='translate(20.35 20.35)' fill='none' stroke='%23fff' stroke-linejoin='round' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A" /></Nav.Link>
                    <Nav.Link href="/log-in" className='icon' ref={logIn}><img src="data:image/svg+xml,%3Csvg id='Mypage' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg id='사각형_50' data-name='사각형 50' transform='translate(7)' fill='none' stroke='%23fff' stroke-width='2'%3E%3Crect width='10' height='10' rx='4' stroke='none'/%3E%3Crect x='1' y='1' width='8' height='8' rx='3' fill='none'/%3E%3C/g%3E%3Cg id='사각형_52' data-name='사각형 52' transform='translate(0 12)' fill='none' stroke='%23fff' stroke-width='2'%3E%3Cpath d='M4,0H20a4,4,0,0,1,4,4v8a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z' stroke='none'/%3E%3Cpath d='M4,1H20a3,3,0,0,1,3,3v7a0,0,0,0,1,0,0H1a0,0,0,0,1,0,0V4A3,3,0,0,1,4,1Z' fill='none'/%3E%3C/g%3E%3C/svg%3E%0A" /></Nav.Link>
                    <Nav.Link href="/cart" className='icon' ref={basket}><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg id='Cart' transform='translate(-1887 -40)'%3E%3Cg id='사각형_42' data-name='사각형 42' transform='translate(1887 46)' fill='none' stroke='%23fff' stroke-width='2'%3E%3Crect width='24' height='18' stroke='none'/%3E%3Crect x='1' y='1' width='22' height='16' fill='none'/%3E%3C/g%3E%3Cg id='사각형_51' data-name='사각형 51' transform='translate(1893 40)' fill='none' stroke='%23fff' stroke-width='2'%3E%3Cpath d='M6,0H6a6,6,0,0,1,6,6V8a0,0,0,0,1,0,0H0A0,0,0,0,1,0,8V6A6,6,0,0,1,6,0Z' stroke='none'/%3E%3Cpath d='M6,1H6a5,5,0,0,1,5,5V7a0,0,0,0,1,0,0H1A0,0,0,0,1,1,7V6A5,5,0,0,1,6,1Z' fill='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A" /></Nav.Link>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <div className='under_nav' style={showUnderNav}>
          <div className='white_block'>
            <Container>
              <Table responsive="md" className='hidden_nav'>
                <thead>
                  <tr>
                    <th>New & Featured</th>
                    <th>의류</th>
                    <th>신발</th>
                    <th>용품</th>
                    <th>언더웨어</th>
                    <th>스포츠</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>신상품</td>
                    <td>전체보기</td>
                    <td>전체보기</td>
                    <td>전체보기</td>
                    <td>전체보기</td>
                    <td>테니스</td>
                  </tr>
                  <tr>
                    <td>베스트</td>
                    <td>온라인 단독</td>
                    <td>라이프스타일</td>
                    <td>백팩</td>
                    <td>멀티팩</td>
                    <td>러닝</td>
                  </tr>
                  <tr>
                    <td>스타일</td>
                    <td>바람막이 / 집업</td>
                    <td>헤리티지</td>
                    <td>메신저 / 크로스백</td>
                    <td>드로즈</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>세일</td>
                    <td>팬츠</td>
                    <td>테니스</td>
                    <td>슬링백 / 힙색</td>
                    <td>브리프</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>맨투맨 / 후드티</td>
                    <td>러닝</td>
                    <td>모자</td>
                    <td>런닝</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>SO-HEE SHELL JACKET</td>
                    <td>티셔츠</td>
                    <td>샌들 / 슬리퍼</td>
                    <td>양말</td>
                    <td>라이프웨어</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>OAKMONT v3</td>
                    <td>트레이닝 셋업</td>
                    <td></td>
                    <td>테니스</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>TAURUS v3</td>
                    <td>니트 / 스웨터</td>
                    <td></td>
                    <td>기타</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>MATCH OG 1992</td>
                    <td>다운 / 플리스</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </div>

          <div className='opacity_block' onMouseOver={() => {
            if (window.location.pathname === '/') {
              navMouseOut()
            } else {
              setShowUnderNav({ display: 'none' });
              
            }
          }}></div>
        </div>
      </div>




      <Routes>
        <Route path='/' element={<Home moterCoreData={moterCoreData} />} />
        <Route path='/detail/:id' element={<Detail moterCoreData={moterCoreData} />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<div style={{padding:'150px'}}>페이지를 찾을 수 없습니다.</div>} />
      </Routes>



      <div className='scroll' style={display}>
        <a href='#' className='goTop'>
          <FontAwesomeIcon icon={faArrowUp} />
        </a>

        <a href="#" className='goTop kakao'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
            <g id="btn_kakao" transform="translate(-330)">
              <circle id="타원_73" data-name="타원 73" cx="25" cy="25" r="25" transform="translate(330)" fill="#fedc00"></circle>
              <g id="그룹_18" data-name="그룹 18" transform="translate(345 15)">
                <path id="패스_8" data-name="패스 8" d="M192.79,193.223c-5.868,0-10.625,3.782-10.625,8.447a8.127,8.127,0,0,0,4.614,6.966l-.768,4.118a.236.236,0,0,0,.362.241l4.564-3.006s1.221.128,1.853.128c5.868,0,10.625-3.782,10.625-8.447s-4.757-8.447-10.625-8.447" transform="translate(-182.165 -193.223)" fill="#3c1e1e"></path>
              </g>
            </g>
          </svg>
        </a>
      </div>




      <Footer />
    </div>
  );
}


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_leftBox">
        <a href="#" className='footerLogo'></a>
      </div>

      <div className="footer_rightBox">
        <div className='footer_first'>
          <a href="#">FILA IR</a>

          <div className="footer_iconBox">
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>


        <div>
          <div className="fUnder_left">
            <div className="fLink_top">
              <a href="#">매장안내</a>
              <p>|</p>
              <a href="#">공지사항</a>
              <p>|</p>
              <a href="#">FILA MEMBERSHIP</a>
              <p>|</p>
              <a href="#">단체 판매</a>
              <p>|</p>
              <a href="#">대리점 개설문의</a>
              <p>|</p>
              <a href="#">FILA 입찰 참여 안내</a>
            </div>

            <p>서울시 강동구 천호대로 1077 이스트센트럴타워 15층 ~ 18층 휠라코리아(주) &nbsp; 대표이사 : 김지헌</p>
            <p>사업자등록번호 : 716-81-01573 &nbsp; <small>사업자정보확인</small> &nbsp; 통신판매업신고 : 제 2020-서울강동-0160 호</p>
            <p style={{ paddingBottom: '30px' }}>개인정보 관리책임자 : 이학우</p>
            <p>본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.</p>
            <p style={{ paddingBottom: '30px' }}>콘텐츠산업진흥법에 의한 콘텐츠보호안내 <small>자세히 보기</small></p>

            <div className="fLink_top">
              <a href="#">통합회원 이용약관</a>
              <p>|</p>
              <a href="#">개인정보 처리방침</a>
              <p>|</p>
              <a href="#">제보센터</a>
            </div>
          </div>


          <div className="fUnder_right">
            <button>CS CENTER</button>
            <h2>1577-3472</h2>
            <a href='#'>filaonline@fila.com</a>
            <p>평일 월 - 금 : 09시 ~ 18시 (공휴일 제외)</p>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>KOREA</span>
              <select>
                <option name="family" id="family">FAMILY SITE</option>
                <option name="keds" id="keds">KEDS 온라인 스토어</option>
                <option name="zoo" id="zoo">ZOO YORK 온라인 스토어</option>
                <option name="fila" id="filaNotice">FILA 입찰공고</option>
                <option name="hodings" id="hodings">FILA HODINGS</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App;
