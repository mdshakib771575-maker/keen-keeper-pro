import React from 'react';
import { MdAddBox } from "react-icons/md";

const Banner = () => {
    return (
        <div >
            <div className='w-11/12 mx-auto space-y-4 mt-10'>
                <div className='text-center space-y-2 '>
                    <h2 className='text-5xl font-bold mb-5'>Friends to keep close in your life</h2>
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>

                </div>
                <div className='text-center'>
                    <button className='btn bg-green-700 text-white'><MdAddBox /> Add a Friend</button>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-3.5 w-11/12 mx-auto mt-10'>
                <div className="card card-border bg-base-100  shadow-2xl">
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl ">10</h2>
                        <p className ="font-bold">Total Friend</p>
                       
                    </div>
                </div>
                <div className="card card-border bg-base-100 shadow-2xl">
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl ">3</h2>
                        <p className ="font-bold">On Track</p>
                       
                    </div>
                </div>
                <div className="card card-border bg-base-100 shadow-2xl">
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl ">6</h2>
                        <p className ="font-bold">Need Attention</p>
                       
                    </div>
                </div>
                <div className="card card-border bg-base-100 shadow-2xl">
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl ">12</h2>
                        <p>Interactions This Month</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;