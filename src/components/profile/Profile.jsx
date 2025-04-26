import styles from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats: {likes, views, followers}}) {
  return (
    <div className="">
      <div className="">
        <img 
          src={image}
          alt="User avatar"
          className="img-profile"
        />
        <p className="">{name}</p>
        <p className="">@{tag}</p>
        <p className="">{location}</p>
      </div>
      <ul className="">
        <li className="">
          <span className="">Followers</span>
          <span className="">{followers}</span>
        </li>
        <li className="">
          <span className="">Views</span>
          <span className="">{views}</span>
        </li>
        <li className="">
          <span className="">Likes</span>
          <span className="">{likes}</span>
        </li>
      </ul>
    </div>
  );
};


