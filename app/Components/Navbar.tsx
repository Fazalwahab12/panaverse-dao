"use client"


 import Link from 'next/link'

import pa from '../../publick/pra.png'
import {  AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFacebook, BsFillPersonLinesFill, BsTwitter } from 'react-icons/bs';
import React, { useState,  } from 'react';
import Image from 'next/image';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
      setNav(!nav);
    };
    
    
    
    
     return (
     <div     
     className={
        'bg-[#ecf0f3] w-full h-24 shadow-xl z-[100] ease-in-out duration-300'
      }
    >
      
        <div className=' flex justify-between items-center w-full px-2 zxl:px-16 pt-2'>
        <Image src={pa} alt="panaverse Logo" />
        <div>
            <ul  className='hidden md:flex px-6  pb-6'>
              <li className='ml-10 text-sm uppercase  hover:font-bold'>
                <Link href='/'>Home</Link>
              </li>
              <li className='ml-10 text-sm uppercase hover:font-bold'>
              <Link href={'syllabus'}  >syllabus</Link>
                
              </li>
              <li className='ml-10 text-sm uppercase  hover:font-bold'>
              <Link href='about'>About</Link>
              </li>
              <li className='ml-10 text-sm uppercase  hover:font-bold'>
              <Link href="blog" >blog</Link>
              </li>
              
            </ul>
            <div onClick={handleNav} className='md:hidden sm:w-[240] sm:px-3 pb-10'>
            <AiOutlineMenu size={25} />
            </div>
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        
        <div
            className={
              nav
                ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
             <div>
            <div className='flex w-full  items-center justify-between '>
            <Image src={pa} alt="panaverse Logo" />
            <div onClick={handleNav}  className='  rounded-full shadow-lg shadow-gray-400 p-3  cursor-pointer '>
              <AiOutlineClose/>
            </div>
              </div>
              
            </div>
            <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
                <Link href='/'>
                  <li  className='py-4 text-sm'>
                    Home
                  </li>
                </Link>
                <Link href='syllabus'>
               
                  <li  className='py-4 text-sm'>
                  syllabus
                  </li>
                </Link>
                <Link href='about'>
                  <li  className='py-4 text-sm'>
                   About
                  </li>
                </Link>
                <Link href='Blog'>
                  <li  className='py-4 text-sm'>
                   Blog
                  </li>
                </Link>
                  
              </ul>
              <div>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
            
              <div className='flex items-center justify-between w-full sm:w-[120%] pt-20'>
              
              <a
                  href='https://www.linkedin.com/company/panaverse/'
                  target='_blank'
                  rel='noreferrer'
                >
                <div className='  flex rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    
                 <FaLinkedinIn/>
                 </div>
                 </a>
                 <a
                  href='https://github.com/panaverse'
                  target='_blank'
                  rel='noreferrer'
                >
                 <div className=' flex rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                
                 <FaGithub />
                 </div>
                 </a>
                 <a
                  href='https://www.facebook.com/groups/panaverse/'
                  target='_blank'
                  rel='noreferrer'
                >
                 <div className=' flex rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                
                 <BsFacebook />
                 </div>
                </a>
                <a
                  href=''
                  target='_blank'
                  rel='noreferrer'
                >
                 <div className=' flex rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                
                 
               
                 <BsTwitter />
                 
                 </div>
                 </a>
                </div>
                </div>
            </div>
          </div>
        </div>
       </div>
     )
    }
    
    export default Navbar
    