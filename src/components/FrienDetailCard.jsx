import Image from 'next/image';
import { MdDelete } from "react-icons/md";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FaArchive } from "react-icons/fa";


import { IoVideocamSharp } from "react-icons/io5";
import React from 'react';
import CallBtn from './buttons/CallBtn';
import TextBtn from './buttons/TextBtn';
import VideoBtn from './buttons/VideoBtn';
import Navber from './Navbar';
import Footer from './Footer';
import Link from 'next/link';

  
const FrienDetailCard = ({ friend }) => {
    if(!friend){
     return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      
      <h1 className="text-7xl font-extrabold text-red-500">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>
      
    </div>
  );
    
    }
    return (<>
   
    <Navber></Navber>
    
        <div className=' w-11/12 mx-auto flex flex-col lg:flex-row justify-around mt-10'>
            {/* img Card */}
            <div className='part-1 mx-auto'>
                < div className="card bg-base-100 w-100 card-md shadow-xl text-center border border-gray-200">
                    <div className="card-body">
                        <div className='flex justify-center items-center'>
                            <Image
                                src={friend?.picture || '/default-avatar.png'}
                                alt={friend?.picture || 'friend'}
                                width={70}
                                height={60}
                                className='rounded'
                            />
                        </div>
                        <h2 className='text-xl font-bold'>{friend?.name}</h2>
                        <p className='font-bold'>62d ago</p>
                        <div className='flex gap-4 justify-center'>
                            {friend?.tags.map((tag, index) => <div key={index} className="badge bg-green-200">{tag}</div>)}
                        </div>
                    </div>
                    <div className='flex justify-center pb-5'>
                        <p className={`badge ${friend?.status === 'active' ? "bg-green-800 text-white" : friend?.status === "On-Track" ? "bg-black text-white" : "bg-red-500 text-white"}`}>{friend?.status}</p>
                    </div>
                </div>

                <div className='flex flex-col gap-2 mt-6'>
                    <button className=' btn bg-white shadow-xl w-100 border border-gray-200 p-6'><RiNotificationSnoozeLine /> Snooze 2 weeks</button>
                    <button className=' btn bg-white shadow-xl w-100 border border-gray-200 p-6'><FaArchive /> Archive</button>
                    <button className=' btn bg-white shadow-xl w-100 border border-gray-200 p-6 text-red-600'><MdDelete /> Delete</button>
                </div>

            </div>

            <div className='part-2 flex flex-col gap-5 mt-5'>
                {/* banner card */}
                <div className='flex gap-5'>
                    <div className='ccard card-border bg-base-100  shadow-2xl border border-gray-200 w-50'>
                        <div className="card-body text-center">
                            <h2 className="font-bold text-2xl ">{friend?.days_since_contact}</h2>
                            <p className="font-bold">Days Since Contact</p>

                        </div>
                    </div>
                    <div className='ccard card-border bg-base-100  shadow-2xl border border-gray-200 w-50'>
                        <div className="card-body text-center">
                            <h2 className="font-bold text-2xl ">{friend?.goal}</h2>
                            <p className="font-bold">Goal (Days)</p>

                        </div>
                    </div>
                    <div className='ccard card-border bg-base-100  shadow-2xl border border-gray-200 w-50'>
                        <div className="card-body text-center">
                            <h2 className="font-bold text-2xl ">{friend?.next_due_date}</h2>
                            <p className="font-bold">Next Due</p>

                        </div>
                    </div>
                </div>
                {/* part 2 c-2 */}
                <div className='card bg-base-100 card-md shadow-xl  border border-gray-200 p-5'>
                    <div className=' flex justify-between items-center'>
                        <p className='font-bold text-lg'>Relationship Goal</p>
                        <button className='btn'>Edit</button>
                    </div>
                    <p>Connect every <span className='font-bold'>30 days</span> </p>

                </div>

                {/* btn c-3 */}
                <div className=' card bg-base-100 w-160 card-md shadow-xl  border border-gray-200 p-5'>
                    <p className='font-semibold' >Quick Check-In</p>
                    <div className=' flex flex-col gap-5 ml-30 lg:flex-row gap-5 mt-2 lg:ml-0'>
                        <CallBtn friend={friend}></CallBtn>

                        <TextBtn friend={friend}></TextBtn>

                        <VideoBtn friend={friend}></VideoBtn>
                    </div>
                </div>
            </div>
            {/* part 2 end */}

        </div>
        <Footer></Footer>
        </>
    );
};

export default FrienDetailCard;