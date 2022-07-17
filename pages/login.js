//import styles from '../styles/Login.module.css';
import Logo from '../images/SFN_3.png';
import Image from 'next/image';
import React from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

let schema = yup.object().shape({
    email: yup.string().email('Enter a valid email').required('Email is a required field'),
    password: yup.string().required('Password is a required field'),
  });
schema
  .isValid({
    email: 'eric.cartman@southpark.com',
  })
  .then((valid) => {
    console.log(valid); // true
  });
schema
  .isValid({
    email: 'not.a.valid.email',
  })
  .then((valid) => {
    console.log(valid); // false
  });

function Login(props) {
    const { register, formState: { errors },handleSubmit, reset } = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit = (data) => console.log(data);
    return (
        <div className=' bg-neutral-100  w-full min-h-screen block pt-6 overflow-hidden'>
            <div className='bg-stone-800 w-2/5 h-96 absolute top-0 right-0'></div>
            <div className='col-md-4 card py-12 px-4 sm:px-6 lg:px-8 max-w-md mx-auto my-auto bg-white relative z-20'>
                <div className="w-64 h-64 mx-auto -mt-5">
                    <Image src={Logo} 
                    layout={'responsive'}
                    >
                    </Image>
                </div>
                <p className='mx-auto text-center'>Don't have an account? <a href='/' className='underline font-medium'>Create account</a></p>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='card-body'>
                    <div className='form-group p-4'>
                    <label htmlFor="email" className='text-lg font-semibold scroll-mb-8	'>Email:</label>
                    <input type="email" name="email" 
                    className=' mt-2.5 form-control h-11 w-full scroll-py-3 scroll-px-5 scroll-my-2 scroll-mx-0 inline-block box-border border border-solid border-inherit bg-stone-50 focus:outline-none focus:border-current focus:bg-white active:bg-white'
                    {...register("email")} 
                    />
                    {errors.email && <p className='text-red-500 ml-4'>{errors.email.message}</p>}
                    </div>
                    <div className='form-group p-4'>
                    <label htmlFor="password" className='text-lg font-semibold'>Password:</label>
                    <input type="pswrd" 
                    className='mt-2.5 form-control h-11 w-full scroll-py-3 scroll-px-5 scroll-my-2 scroll-mx-0 inline-block box-border border border-solid border-inherit bg-stone-50 focus:outline-none focus:border-current focus:bg-white'
                    {...register("password")} 
                    />
                    {errors.password && <p className='text-red-500 ml-4'>{errors.password.message}</p>}
                    </div>
                    <div className='mt-4'>
                    <a href='/' className='underline font-medium ml-4 mt-5'>Forgot password?</a>
                    </div>
                    <div className='form-control p-4 -mb-10'>
                    <button type="submit" className='w-full bg-stone-800 text-white h-11'>Login</button>
                    </div>
                </div>
                </form>
            </div>
            <div className='bg-amber-200 w-505px h-36 rounded-r-lg rounded-full rotate-90 left-72 -mt-64 relative z-10 max-w-screen-sm'></div>

        </div>
    );
}

export default Login;