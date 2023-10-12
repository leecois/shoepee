import React from 'react'

const Location = () => {
    return (
        <div className='w-full h-screen '>

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <div className='w-full flex flex-col items-center'>
                    <h3 className='text-5xl font-light my-5'> DROP-OFF LOCATIONS </h3>
                </div>
                <div className='my-10'>
                    <h2 className='text-yellow-500 font-bold text-2xl py-5'>HA NOI, VIET NAM</h2>
                    <p className='font-semibold'>Flagship Store</p>
                    <p className='font-light'>Khu Giáo dục và Đào tạo – Khu Công nghệ cao Hòa Lạc – Km29 Đại lộ Thăng Long, Thạch Thất, TP. HN</p>
                    <p className='font-light'>Monday - Sunday</p>
                    <p className='font-light'>9:00 AM - 21:00 PM</p>
                </div>
                <div>
                    <h2 className='text-red-500 font-bold text-2xl py-5'>HO CHI MINH, VIET NAM</h2>
                    <div className='py-3'>
                        <p className='font-semibold'>Flagship Store</p>
                        <p className='font-light'>Lô E2a-7, Đường D1 Khu Công nghệ cao, P.Long Thạnh Mỹ, Q.9, TP.HCM</p>
                        <p className='font-light'>Monday - Sunday</p>
                        <p className='font-light'>9:00 AM - 21:00 PM</p>
                    </div>
                    <div>
                        <p className='font-semibold'>Pop-up Store</p>
                        <p className='font-light'>Nguyễn Xiển – Phường Long Thạnh Mỹ – Quận 9 – TP Hồ Chí Minh</p>
                        <p className='font-light'>Monday - Sunday</p>
                        <p className='font-light'>9:00 AM - 21:00 PM</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Location
