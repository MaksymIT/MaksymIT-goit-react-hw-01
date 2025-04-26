import styles from './FriendList.module.css'

export default function FriendList({ friends }) {
  return (
    <ul className='flex'>
      {
      friends.map(({avatar, name, isOnline, id}) => (
      <div key={id} className="friend-list"> 
      <img className='img' src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? 'Online' : 'Offline'}</p>
    </div >
     ))}
    </ul>
    
  );
};


