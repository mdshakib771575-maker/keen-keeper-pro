"use client"
import { FriendContext } from '@/context/InstallContext';
import React, { useContext } from 'react';
import { IoVideocamSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';

const VideoBtn = ({ friend }) => {
    const { instalFriend, setInstalFriend } = useContext(FriendContext);
    const handalbtn = () => {
        setInstalFriend(instalFriend => [...instalFriend, {
            ...friend,                    
            type: "video",               
            action: "Video",
        }]);
        toast.success("Video coll is added to timeline");
    }
    return (
        <div>
            <div>
                <button onClick={handalbtn} className='bg-base-200 p-6 px-16   flex gap-2 items-center hover:cursor-pointer rounded-2xl'><IoVideocamSharp /> Video</button>
            </div>
        </div>
    );
};
export default VideoBtn;