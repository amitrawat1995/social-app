import {Search,Person, Message, Notifications} from '@mui/icons-material'
import './topbar.css'

export default function Topbar() {
  return (
    <div className="topbarContainer">
      
      <div className="topbarLeft">
        <span className="logo">
          Fakebook
        </span>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
         <Search className='searchIcon'/>
          <input placeholder="Search for friends or Posts" className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">

        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge" >1</span>
          </div>
          <div className="topbarIconItem">
            <Message/>
            <span className="topbarIconBadge" >2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge" >3</span>
          </div>
        </div>

        <img src="assets/person/6.jpeg" alt="" className="topbarImg" />

      </div>

    </div>
  )
}
