import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
// import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import {
  Menu,
  Item,
  SidebarContainer,
  SidebarWrapper,
  User,
  UserImg,
  ItemImg,
  UserTitle,
  ItemTitle,
  MenuTitle,
  Hr,
} from "./Sidebar.styled";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const currentUser = useSelector((state) => state.state);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(PF);

  console.log("sidebar");

  return (
    <SidebarWrapper>
      <SidebarContainer>
        <Menu className="menu">
          <User className="user">
            <UserImg
              src={
                currentUser?.profilePicture
                  ? currentUser?.profilePicture
                  : PF + "person/not_found.png"
              }
              alt="1.jpeg"
              className="topbarImg"
            />
            <UserTitle>{currentUser?.name}</UserTitle>
          </User>
          <Item className="item">
            <ItemImg src={Friends} alt="" />
            <span>Friends</span>
          </Item>
          <Item className="item">
            <ItemImg src={Groups} alt="" />
            <span>Groups</span>
          </Item>
          <Item className="item">
            <ItemImg src={Market} alt="" />
            <span>Marketplace</span>
          </Item>
          <Item className="item">
            <ItemImg src={Watch} alt="" />
            <span>Watch</span>
          </Item>
          <Item className="item">
            <ItemImg src={Memories} alt="" />
            <span>Memories</span>
          </Item>
        </Menu>
        <Hr />
        <Menu className="menu">
          <MenuTitle>Your shortcuts</MenuTitle>
          <Item className="item">
            <ItemImg src={Events} alt="" />
            <ItemTitle>Events</ItemTitle>
          </Item>
          <Item className="item">
            <ItemImg src={Gaming} alt="" />
            <ItemTitle>Gaming</ItemTitle>
          </Item>
          <Item className="item">
            <ItemImg src={Gallery} alt="" />
            <ItemTitle>Gallery</ItemTitle>
          </Item>
          <Item className="item">
            <ItemImg src={Videos} alt="" />
            <ItemTitle>Videos</ItemTitle>
          </Item>
          <Item className="item">
            <ItemImg src={Messages} alt="" />
            <ItemTitle>Messages</ItemTitle>
          </Item>
        </Menu>
        <Hr />
        <Menu className="menu">
          <MenuTitle>Others</MenuTitle>
          <Item className="item">
            <ItemImg src={Fund} alt="" />
            <ItemTitle>Fundraiser</ItemTitle>
          </Item>
          <Item className="item">
            <ItemImg src={Tutorials} alt="" />
            <ItemTitle>Tutorials</ItemTitle>
          </Item>
          <Item className="item">
            <ItemImg src={Courses} alt="" />
            <ItemTitle>Courses</ItemTitle>
          </Item>
        </Menu>
      </SidebarContainer>
    </SidebarWrapper>
  );
}
