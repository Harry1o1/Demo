import React from 'react'




function Pc2() {    
  return (
    <>
     
    {/* ///////////////////////////////// Sidebar /////////////////////////////////////*/}
        <nav className="sidebar close" id="pro-navbartop-sidebar">
          <div className="menu-bar">
            <div className="menu">
              {/* <li class="search-box">
                      <i class='bx bx-search icon'></i>
                      <input type="text" placeholder="Search...">
                  </li> */}
              <ul className="menu-links">
                <li className="nav-link">
                  <a href="#">
                    <ion-icon className="icon" name="albums-outline" id="photo-search" />
                    <span className="text nav-text">Dashboard</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <ion-icon className="icon" name="albums-outline" id="photo-search" />
                    <span className="text nav-text">Wallets</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <ion-icon className="icon" name="albums-outline" id="photo-search" />
                    <span className="text nav-text">Wallets</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <ion-icon className="icon" name="albums-outline" id="photo-search" />
                    <span className="text nav-text">Wallets</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <ion-icon className="icon" name="albums-outline" id="photo-search" />
                    <span className="text nav-text">Wallets</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bottom-content">
              <li className>
                <a href="#">
                  <i className="bx bx-log-out icon" />
                  <span className="text nav-text">Logout</span>
                </a>
              </li>
              <li className="mode">
                <div className="sun-moon">
                  <i className="bx bx-moon icon moon" />
                  <i className="bx bx-sun icon sun" />
                </div>
                <span className="mode-text text">Dark mode</span>
                <div className="toggle-switch">
                  <span className="switch" />
                </div>
              </li>
            </div>
          </div>
        </nav>
        
        
    </>
  )
}






export default Pc2;
