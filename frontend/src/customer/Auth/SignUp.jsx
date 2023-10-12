import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const SignUp = () => {

    return (
        <div className="w-full h-screen flex items-start">
            <div className='hidden relative w-1/2 h-full lg:flex items-center justify-center flex-col'>
                <img src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" className='w-full h-full object-cover' />
            </div>
            <div className='lg:w-1/2 w-full h-full bg-white  flex  flex-col p-20 justify-between items-center '>

                <div className='w-full flex flex-col max-w-[520px]'>
                    <div className='w-full flex flex-col mb-2'>
                        <h3 className='text-3xl font-semibold mb-2'> REGISTER </h3>
                        <p className='font-light text-base mb-8'>PLEASE ENTER YOUR DETAILS.</p>
                    </div>
                    <div className='w-full flex flex-col'>
                        <input
                            className='w-full text-black border-2 border-gray-100 rounded-xl p-4 my-2 mt-1 bg-transparent'
                            placeholder="First Name"
                        />
                        <input
                            className='w-full text-black border-2 border-gray-100 rounded-xl p-4 my-2 mt-1 bg-transparent'
                            placeholder="Last Name"
                        />
                        <input
                            className='w-full text-black border-2 border-gray-100 rounded-xl p-4 my-2 mt-1 bg-transparent'
                            placeholder="Email"
                            type={"email"}
                        />

                        <input
                            className='w-full text-black border-2 border-gray-100 rounded-xl p-4 my-2 mt-1 bg-transparent'
                            placeholder="Password"
                            type={"password"}
                        />
                        <input
                            className='w-full text-black border-2 border-gray-100 rounded-xl p-4 my-2 mt-1 bg-transparent'
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className='w-full flex item-center justify-between'>
                        <div className='w-full flex items-center'>
                            <input type="checkbox" className='w-4 h-4 mr-2 my-3' />
                            <p className='text-sm'>Agree to our Terms</p><br />
                        </div>
                    </div>
                    <div className='w-full flex flex-col'>
                        <button
                            type={"submit"}
                            className='w-full text-black my-5 bg-[white] font-semibold border-2 border-black rounded-md  p-4 text-center flex items-center justify-center cursor-pointer'
                        >REGISTER</button>

                    </div>
                </div>
                <div className='w-full flex item-center justify-center'>
                    <p className='text-sm font-normal text-black'>  ALREADY HAVE ACCOUNT ? <span className='font-semibold underline underline-offset-2 cursor-pointer'>LOGIN NOW.</span></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp