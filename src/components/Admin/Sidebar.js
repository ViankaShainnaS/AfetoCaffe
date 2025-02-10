import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../images/putih 2.png';
import menuIcon from '../../images/menu-icon.svg'
import informationIcon from '../../images/Alert admin.png'
import galleryIcon from '../../images/Gallery Admin.png'
import commentsIcon from '../../images/Comments Admin.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className='menu-admin'>
        <ul>
          <li ><a href="/editMenu"><img src={menuIcon}></img>Menu</a></li>
          <li><a href="/editInformation"><img src={informationIcon}></img>Information</a></li>
          <li><a href="/editGallery"><img src={galleryIcon}></img>Gallery</a></li>
          <li><a href="/editComments"><img src={commentsIcon}></img>Comments<></></a></li>
        </ul>
        </div>
    </div>
  );
}

export default Sidebar;