// "use client"
// import { FriendContext } from '@/context/InstallContext';
// import React, { useContext } from 'react';
// const TimeLinePage = () => {
//     const { instalFriend } = useContext(FriendContext)
//     return (
//         <div>
//             {instalFriend.length === 0 ? (<h2>Data is Empty</h2>) :
//                 (instalFriend.map((friend, index) => {
//                     return (
//                         <div key={index} className='card  bg-base-100 card-xs shadow-sm'>

//                             <div className="card-body">
//                                 <h2 className="text-lg">coll <span className='font-bold text-xl'></span> With {friend.name}</h2>
//                                 <p>{friend.next_due_date}</p>
//                             </div>
//                         </div>
//                     )
//                 }))}
//         </div>
//     );
// };



// export default TimeLinePage;

// "use client"

// import { FriendContext } from '@/context/InstallContext';
// import React, { useContext } from 'react';

// const TimeLinePage = () => {
//   const { instalFriend } = useContext(FriendContext);

//   return (
//     <div className="p-4">
//       {instalFriend.length === 0 ? (
//         <h2 className="text-center text-4xl mt-2">Data is Empty</h2>
//       ) : (
//         instalFriend.map((item, index) => {
//           let icon = "📞";
//           let actionText = "Call";

//           if (item.type === "text") {
//             icon = "💬";
//             actionText = "Text";
//           } else if (item.type === "video") {
//             icon = "🎥";
//             actionText = "Video";
//           }

//           return (
//             <div key={index} className="card bg-base-100 card-xs shadow-sm mb-4">
//               <div className="card-body">
//                 <h2 className="text-lg">
//                   {icon} {actionText} with <span className="font-bold">{item.name}</span>
//                 </h2>
//                 <p>{item.next_due_date || "No date"}</p>

//               </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default TimeLinePage;


"use client"

import { FriendContext } from '@/context/InstallContext';
import React, { useContext, useState } from 'react';

const TimeLinePage = () => {
  const { instalFriend } = useContext(FriendContext);
  console.log(instalFriend)

  const [filter, setFilter] = useState("all");

  const filteredData = filter === "all" ? instalFriend
    : instalFriend.filter(item => item.type === filter);
    console.log(filteredData)

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Timeline</h1>

      {/* Filter Dropdown */}
      <div className="mb-8">


        
       <div className="dropdown dropdown-start">
         

  <div tabIndex={0} role="button" className="w-100  m-1"><summary className="btn btn-outline flex justify-between items-center text-left">
            {filter}
            <span>▼</span>
          </summary></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-100 p-2 shadow-sm">
     <li>
              <button onClick={() => setFilter("text")} className={filter === "text" ? "active" : ""}>
                Text
              </button>
            </li>
            <li>
              <button onClick={() => setFilter("call")} className={filter === "call" ? "active" : ""}>
                Call
              </button>
            </li>
            <li>
              <button onClick={() => setFilter("video")} className={filter === "video" ? "active" : ""}>
                Video
              </button>
            </li>
  </ul>
</div> 



      </div>

      {/* Timeline Content */}
      {filteredData.length === 0 ? (
        <p className="text-center text-gray-500 text-xl mt-10">No data found for this filter</p>
      ) : (
        <div className="space-y-4">
          {filteredData.map((item, index) => {
            
            way-1
            const icon = item.type === "text" ? "💬" : item.type === "video" ? "🎥" : "📞";
            const action = item.type === "text" ? "Text" : item.type === "video" ? "Video" : "Call";
            


          //   //  way -2 
          //     let icon = "📞";
          // let action = "Call";

          // if (item.type === "text") {
          //   icon = "💬";
          //   action = "Text";
          // } else if (item.type === "video") {
          //   icon = "🎥";
          //   action = "Video";
          // }


            return (
              <div key={index} className="flex items-start gap-4 bg-base-100 p-4 rounded-2xl border border-base-300">
                <div className="text-4xl mt-1">{icon}</div>
                <div className="flex-1">
                  <p className="font-medium text-lg">
                    {action} with <span className="font-bold">{item.name}</span>
                  </p>
                  {item.next_due_date && <p className="text-sm text-gray-500">{item.next_due_date}</p>}
                 
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TimeLinePage;