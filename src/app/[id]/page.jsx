import FrienDetailCard from '@/components/FrienDetailCard';
import Image from 'next/image';
import friendData from "../../../public/data.json"
import React from 'react';

const FriendDetailPage = async ({ params }) => {
    const { id } = await params;

    const friends = friendData;
    //  console.log(friends);

    const friend = friends.find(friend => friend.id == id)
    // console.log(friend)




    return (
        <div>
            <FrienDetailCard friend={friend}></FrienDetailCard>
        </div>
    );
};

export default FriendDetailPage;