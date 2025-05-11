import clsx from 'clsx';
import styles from './FriendListItem.module.css'

export default function FriendListItem({ friends }) {
  return (
     <div className='flex'> 
      {
      friends.map(({avatar, name, isOnline, id}) => (
        <div key={id}><img className='img' src={avatar} alt="Avatar" width="48" />
          <p className={clsx(isOnline ? styles.true : styles.false)}>
            {isOnline ? 'Online' : 'Offline'}
          </p>
          <p>{name}</p>
      </div>
     ))}
    </div>
    
  );
};


