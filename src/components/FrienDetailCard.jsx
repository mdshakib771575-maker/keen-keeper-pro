import Image from 'next/image';
import { MdDelete } from "react-icons/md";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FaArchive } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
import { IoVideocamSharp } from "react-icons/io5";
import React from 'react';

const FrienDetailCard = ({friend}) => {
    return (
        <div className=' w-11/12 mx-auto flex flex-col lg:flex-row justify-around mt-10'>
            {/* img Card */}
            <div className='part-1 mx-auto'>
                < div className="card bg-base-100 w-100 card-md shadow-xl text-center border border-gray-200">
                    <div className="card-body">
                        <div className='flex justify-center items-center'>
                            <Image src={friend.picture} width={'70'} height={'60'} alt={friend.picture} className='rounded-full bg-gray-700'></Image>
                        </div>
                        <h2 className='text-xl font-bold'>{friend.name}</h2>
                        <p className='font-bold'>62d ago</p>
                        <div className='flex gap-4 justify-center'>
                            {friend.tags.map((tag, index) => <div key={index} className="badge bg-green-200">{tag}</div>)}
                        </div>
                    </div>
                    <div className='flex justify-center pb-5'>
                        <p className={`badge ${friend.status === 'active' ? "bg-green-800 text-white" : friend.status === "On-Track" ? "bg-black text-white" : "bg-red-500 text-white"}`}>{friend.status}</p>
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
                        <h2 className="font-bold text-2xl ">{friend.days_since_contact}</h2>
                        <p className ="font-bold">Days Since Contact</p>
                       
                    </div>
                    </div>
                    <div className='ccard card-border bg-base-100  shadow-2xl border border-gray-200 w-50'>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl ">{friend.goal}</h2>
                        <p className ="font-bold">Goal (Days)</p>
                       
                    </div>
                    </div>
                    <div className='ccard card-border bg-base-100  shadow-2xl border border-gray-200 w-50'>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl ">{friend.next_due_date}</h2>
                        <p className ="font-bold">Next Due</p>
                       
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
                    <div>
                    <button className='bg-base-200  lg: p-6 px-16  flex gap-2 items-center hover:cursor-pointer rounded-2xl'> <IoCallSharp /> Call</button>
                    </div>

                    <div>
                    <button className='bg-base-200 p-6 px-16 flex gap-2 items-center hover:cursor-pointer rounded-2xl'> <IoMdText /> Text</button> 
                    </div>

                    <div>
                    <button className='bg-base-200 p-6 px-16   flex gap-2 items-center hover:cursor-pointer rounded-2xl'><IoVideocamSharp /> Video</button>
                     </div>

                   </div>
            </div>
            </div>
            {/* part 2 end */}

        </div>
    );
};

export default FrienDetailCard;