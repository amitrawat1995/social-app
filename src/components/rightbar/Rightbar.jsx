import './rightbar.css';
import {Actives} from '../../dummyData';
import Online from './online/Online';

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img src="./assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Itadori Yuzi</b> and <b>3 others friends</b> have birthday today
          </span>
        </div>
        <img  className="rightbarAd" src="./assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Actives.map((u) =>(
            <Online key={u.id} user= {u} />
          ))}
        </ul>
      </>
    )
  }

    const ProfileRightbar = () => {
      return(
        <>
          <h4 className="rightbarTitle">User Information</h4>
          <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="righbarInfoValue">New York</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="righbarInfoValue">Madrid</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="righbarInfoValue">Single</span>
              </div>
          </div>

          <h4 className="rightbarTitle">User Friends</h4>
          <div className="rightbarFollowings">

            <div className="rightbarFollowing">
              <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>

          </div>
        </>
      )
    }
  
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        { profile ? <ProfileRightbar/> : <HomeRightbar/> }
      </div>
    </div>
  )
}
