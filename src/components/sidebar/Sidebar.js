import "./Sidebar.css"

 function Sidebar() {
  return (
    <div className="sidebar">
         <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME </span>
            <p>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Illo dolor
                aspernatur ex aliquam porro harum nulla, 
                perferendis nihil similique alias nobis soluta
                numquam officiis possimus 
                odio consectetur molestiae natus asperiores!</p>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">
                CATEGORIES
            </span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Religion</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cartoons</li>
            </ul>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US </span>
            <iv className="sidebarsocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            <i className="sidebarIcon fa-brands fa-youtube"></i>
            </iv>
         </div>
    </div>
  )
}
export default Sidebar;
