import "./Header.css"

function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitlesm">React JS</span>
            <span className="headerTitlelg">BLOG</span>
        </div>
        <img className="headerimg" alt="" src={require('../../Assets/05.jpg')} />
    </div>
  )
}
export default Header;
