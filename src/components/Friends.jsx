
import React from 'react';
import FriendsCard from './FriendsCard';
import friendsData from '../../public/data.json';
const Friends = async() => {
   const friends = friendsData
  
    return (
        <div className='w-11/12 mx-auto  mt-8'>
            <h2 className='text-xl font-bold mb-5'>Friends :</h2>
        <div className='grid justify-center lg:grid-cols-4 gap-3.5 '>
         {friends.map(friend => <FriendsCard friend={friend} key={friend.id}></FriendsCard> )}
        </div>
        </div>
    );
};

export default Friends;
