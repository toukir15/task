import React from 'react'
import { toast } from 'react-toastify';

export default function NewJobpage() {
    return (
        <div>
            <div className='bg-white py-4 px-8 rounded-lg'>
                <h3 className='text-xl font-medium text-gray'><span className='text-primary'>Advanced /</span> Toastr</h3>
            </div>
            <div className='bg-white mt-8  rounded-lg'>
                <div className='border-b border-[#d8d7d7c9] py-5'>
                    <h3 className='text-xl font-medium px-8'>Toastr</h3>
                </div>
                <button onClick={() => toast.warn("Top Right")} className='mt-10 bg-danger px-8 py-3 rounded-lg text-white font-medium mx-8 mb-10'>Error</button>
            </div>
        </div>
    )
}
