"use client"

import { FriendContext } from "@/context/InstallContext";
import { useContext } from "react";
import { IoCallSharp } from "react-icons/io5";
import { toast } from 'react-toastify';
const CallBtn = ({ friend }) => {
    const { instalFriend, setInstalFriend, } = useContext(FriendContext);

    const handalbtn = () => {
        // setInstalFriend([...instalFriend, friend])
       
        setInstalFriend(instalFriend => [...instalFriend, {
      ...friend,                   
      type: "call",                 
      action: "Call",
    }]);
       toast.success("Coll is added to timeline");
    }
    return (
        <div>
            <div>
                <button onClick={handalbtn} className='bg-base-200  lg: p-6 px-16  flex gap-2 items-center hover:cursor-pointer rounded-2xl'> <IoCallSharp /> Call</button>
            </div>
        </div>
    );
};

export default CallBtn;