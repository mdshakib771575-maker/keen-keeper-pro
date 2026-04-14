import FrienDetailCard from '@/components/FrienDetailCard';
import Image from 'next/image';

import React from 'react';

const FriendDetailPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('http://localhost:3000/data.json');
    const friends = await res.json();
    //  console.log(friends);

    const friend = friends.find(friend => friend.id == id)
    console.log(friend)




    return (
     <div>
        <FrienDetailCard friend={friend}></FrienDetailCard>
     </div>
    );
};

export default FriendDetailPage;