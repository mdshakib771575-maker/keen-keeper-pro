import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendsCard = ({friend}) => {
    console.log(friend)
    return (
        <div className='flex'>
            <Link href={`http://localhost:3000/${friend.id}`} className="card bg-base-100 w-100 card-md shadow-xl text-center border border-gray-200">
  <div className="card-body">
    <div className='flex justify-center items-center'>
       <Image src={friend.picture} width={'70'}  height={'60'} alt={friend.picture} className='rounded-full bg-gray-700'></Image>
    </div>
    <h2 className='text-xl font-bold'>{friend.name}</h2>
    <p  className='font-bold'>62d ago</p>
    <div className='flex gap-4 justify-center'>
    {friend.tags.map((tag,index) => <div key={index} className="badge bg-green-200">{tag}</div> )}
    </div>
  </div>
  <div className='flex justify-center pb-5'>
  <p className={`badge ${friend.status === 'active'? "bg-green-800 text-white": friend.status === "On-Track"? "bg-black text-white":"bg-red-500 text-white"}`}>{friend.status}</p>
  </div>
</Link>
        </div>
    );
};

export default FriendsCard;