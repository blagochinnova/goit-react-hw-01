import css from "./Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.cardDescription}>
        <img className={css.userImage} src={avatar} alt="User avatar" />
        <p className={css.usernameTitle}>{username}</p>
        <p className={css.userInfo}>&#64;{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.listTitle}>Followers</span>
          <span className={css.listAmount}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.listTitle}>Views</span>
          <span className={css.listAmount}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.listTitle}>Likes</span>
          <span className={css.listAmount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;