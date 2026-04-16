"use client"
import { FriendContext } from '@/context/InstallContext';
import React, { useContext } from 'react';
import { IoMdText } from "react-icons/io";
import { toast } from 'react-toastify';
const TextBtn = ({ friend }) => {
    const { instalFriend, setInstalFriend, setText } = useContext(FriendContext);
    // console.log(instalFriend,"friend")
    const handalbtn = () => {
        setInstalFriend(instalFriend => [...instalFriend, {
            ...friend,                    
            type: "text",                 
            action: "Text",
        }]);
        
        toast.success("Text is Added to TimeLine");
    }
    return (
        <div>
            <div>
                <button onClick={handalbtn} className='bg-base-200 p-6 px-16 flex gap-2 items-center hover:cursor-pointer rounded-2xl'> <IoMdText /> Text</button>
            </div>
        </div>
    );
};
export default TextBtn;