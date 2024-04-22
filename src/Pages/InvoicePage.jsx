import React from 'react'
import logo from "../assets/logo.png";
import qr from "../assets/qr.png";

export default function InvoicePage() {
    const tableData = [
        {
            item: "Origin License",
            description: "Extended License",
            unit_cost: '999,99',
            quantity: 1,
            total: "999,00"
        },
        {
            item: "Custom Service",
            description: "Instalation and Customization (cost per hour)",
            unit_cost: '150,00',
            quantity: 20,
            total: "3.000,00"
        },
        {
            item: "Hosting",
            description: "1 year subcription",
            unit_cost: '499,00',
            quantity: 1,
            total: "499,00"
        },
        {
            item: "Platinum Support",
            description: "1 year subcription 24/7",
            unit_cost: '3.999,00',
            quantity: 1,
            total: "3.999,00"
        },
    ]
    return (
        <div>
            <div className='bg-white py-4 px-8 rounded-lg'>
                <h3 className='text-xl font-medium text-gray'><span className='text-primary'>Layout /</span> Blank</h3>
            </div>
            <div className='mt-12 bg-white rounded-lg'>
                <div>
                    <div className='flex justify-between py-6 px-8 text-gray'>
                        <p>Invoice</p>
                        <p className='font-bold'>01/01/01/2018</p>
                        <p><span className='font-bold'>Status:</span> Pending</p>
                    </div>

                    <div className='border-t border-[#F5F5F5] flex flex-col md:flex-row justify-between px-4 md:px-8 py-8 md:py-16'>
                        <div className='flex flex-col md:flex-row gap-6  md:gap-52'>
                            <ul className='text-gray'>
                                <li className='font-medium text-black'>From:</li>
                                <li className='font-bold mt-2'>Webz Poland</li>
                                <li>Madalinskiego 8</li>
                                <li>71-101 Szczecin, Poland</li>
                                <li>Email: info@webz.com.pl</li>
                                <li>Phone: +48 444 666 3333</li>
                            </ul>
                            <ul className='text-gray'>
                                <li className='font-medium text-black'>To:</li>
                                <li className='font-bold mt-2'>Bob Mart</li>
                                <li>Attn: Daniel Marek</li>
                                <li>43-190 Mikolow, Poland</li>
                                <li>Email: marek@daniel.com</li>
                                <li>Phone: +48 123 456 789</li>
                            </ul>

                        </div>
                        <div className='flex flex-col md:flex-row md:items-center gap-10'>
                            <div>
                                <div className="flex md:px-[0.5rem] items-center py-2 mb-1 mt-2 md:mt-0">
                                    <img className="w-[48px] h-[48px]" src={logo} alt="" />
                                    <div className="ml-3 hidden md:block">
                                        <h1 className="text-3xl font-bold text-dark-gray">Jobick</h1>
                                        <p className="text-sm text-gray">Job Admin Dashboard</p>
                                    </div>
                                </div>
                                <ul className='text-gray'>
                                    <li>Please send exact amount:</li>
                                    <li className='font-bold'>0.15050000 BTC</li>
                                    <li className='font-bold'>1DonateWffyhwAjskoEwXt83pHZxhLTr8H</li>
                                    <li className='text-sm'>Current exchange rate 1BTC = $6590 USD</li>
                                </ul>
                            </div>
                            <div>
                                <img src={qr} className='w-[110px]' alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* invoice table  */}
                <div className='px-4 md:px-8 overflow-x-scroll'>
                    <table className='w-full'>
                        <thead>
                            <tr className='border-b border-[#adabab4f] '>
                                <th className='py-4 text-lg md:text-xl font-medium text-gray text-start px-3'>#</th>
                                <th className='text-lg md:text-xl font-medium text-gray text-start px-4 md:px-0'>Item</th>
                                <th className='text-lg md:text-xl font-medium text-gray text-start px-4 md:px-0'>Description</th>
                                <th className='text-lg md:text-xl font-medium text-gray text-start px-4 md:px-0'>Unit Cost</th>
                                <th className='text-lg md:text-xl font-medium text-gray text-start px-4 md:px-0'>Qty</th>
                                <th className='text-lg md:text-xl font-medium text-gray text-start px-4 md:px-0'>Total</th>
                            </tr>
                        </thead>
                        <tbody className='text-gray'>
                            {
                                tableData.map((singleTableData, index) => {
                                    return (
                                        <tr className={`${index % 2 == 0 && "bg-[#F2F2F2]"} border-b border-[#adabab4f]`}>
                                            <td className='py-4 px-3'>{index + 1}</td>
                                            <td className='px-4 md:px-0'>{singleTableData.item}</td>
                                            <td className='px-4 md:px-0'>{singleTableData.description}</td>
                                            <td className='px-4 md:px-0'>${singleTableData.unit_cost}</td>
                                            <td className='px-4 md:px-0'>{singleTableData.quantity}</td>
                                            <td className='px-4 md:px-0'>${singleTableData.total}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='md:flex px-4 md:px-8'>
                    <div className='w-[70%]'> </div>
                    <div className='w-[30%] md:pl-6 pt-4 pb-10'>
                        <table>
                            <tbody className='text-gray'>
                                <tr>
                                    <td className='font-bold'>Subtotal</td>
                                    <td>$8.497,00</td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Discount (20%)</td>
                                    <td>$1,699,40</td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>VAT (10%)</td>
                                    <td>$679,76</td>
                                </tr>
                                <tr>
                                    <td className='font-bold'>Total</td>
                                    <td className='font-bold'>$7.477,36 0.15050000 BTC</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <p className='text-center mt-32 py-4 text-gray'>Copyright © Designed & Developed by <span className='text-primary'>DexignLab</span> 2023</p>
        </div>
    )
}
