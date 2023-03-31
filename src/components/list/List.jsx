import React from 'react'
import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
  } from "@material-ui/icons";
  import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
  import "./list.scss";

export default function List() {

    const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };



  return (
    <div className='list'>
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} imgSrc="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" />

          <ListItem index={1} imgSrc="https://www.bollywoodhungama.com/wp-content/uploads/2022/04/K.G.F-%E2%80%93-Chapter-2-15.jpg"/>

          <ListItem index={2} imgSrc="https://images-platform.99static.com/Jfrdh0MpVRCubNvCVTX09708qQ8=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/126/126381/attachment_126381283"/>

          <ListItem index={3} imgSrc="https://mymodernmet.com/wp/wp-content/uploads/2016/12/honest-movie-titles-2.jpg"/>


          <ListItem index={4} imgSrc="https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/01/Dhaakad-New-Poster-Ft.-Kangana-Ranaut-001.jpg"/>


          <ListItem index={5} imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96oyqAj34Y-sbyPUewgRw29Znqo_Wwv6Zpg&usqp=CAU"/>


          <ListItem index={6} imgSrc="https://cdn.openart.ai/stable_diffusion/a4caf56611b31eb0440e4e2cfb28de851e23d2e0_2000x2000.webp"/>


          <ListItem index={7} imgSrc="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/10/28/207717-207126-kantara11200x768.jpg?itok=tSKjE_ub"/>

          <ListItem index={8} imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKhXHKB2wlMDAMMCA88MDBGhj_7jEazDzMhjquAKVNr-IijTX_g8dNrKAxadh8ss1e2g&usqp=CAU"/>

          <ListItem index={9} imgSrc="https://i.pinimg.com/736x/3f/06/b8/3f06b8c43b494e76d75af294c3026d01.jpg"/>

        
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  )
}
