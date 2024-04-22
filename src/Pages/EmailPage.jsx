import React from 'react'
import Swal from 'sweetalert2'


export default function EmailPage() {

    const handleSweetAlert = () => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }
    return (
        <div>
            <div className='bg-white py-4 px-8 rounded-lg'>
                <h3 className='text-xl font-medium text-gray'><span className='text-primary'>Components /</span> Sweet Alert</h3>
            </div>
            <div className='bg-white mt-8 max-w-[350px] p-8 rounded-lg'>
                <h3 className='text-xl font-medium'>Sweet Wrong</h3>
                <button onClick={handleSweetAlert} className='mt-10 bg-danger px-8 py-3 rounded-lg text-white font-medium'>Sweet Wrong</button>
            </div>
        </div>
    )
}
