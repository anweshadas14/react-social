import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.jpg" alt="" />
          <span className="birthdayText">
            <b>Abhi Bhowal</b> and <b>2 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Kolkata</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Country:</span>
            <span className="rightbarInfoValue">India</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Working Status:</span>
            <span className="rightbarInfoValue">Student</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Emma Magen</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Kristen Dawson </span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Alisha Smith </span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Amy Adamas</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/9.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Abhi Bhowal</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Olivia Rosa </span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}
