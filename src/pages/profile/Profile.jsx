import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'



export default function Profile() {
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" 
              src="assets/post/shrine.jpg"
               alt=""
            />
            <img className="profileUserImg" 
              src="assets/person/6.jpeg"
              alt="" 
            />
          </div>
           
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Sataro Gojo</h4>
            <span className="profileInfoDesc">Hello my Friends</span>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
    
  )
}
