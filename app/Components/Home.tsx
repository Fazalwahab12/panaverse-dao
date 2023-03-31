import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
import z from '../../publick/techer/zai.jpg'
import d from '../../publick/techer/dinyal.jpg'
import a from '../../publick/techer/adil1.jpg'
import h from '../../publick/techer/hira1.jpg'

export default function Home() {
  return (
   
<div  className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  mb-5'>
  
    <section className='      mx-10  '>
        <h1 className=' font-bold text-red-600  mb-5 text-2xl pt-5'>The Program in a Nutshell: Earn While You Learn</h1>
        <text className='  mb-6  font-semibold text-xl'>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning.
             It resembles a cross between a corporate
              venture and an educational project.</text>
    </section>
    <section className='   mx-10 mt-5  '>
        <h1 className='font-bold text-red-600  mb-5 text-2xl '>Program of Studies</h1>
        <text className='mb-6  font-semibold text-xl'> This curriculum is intended for beginners who want to learn software 
            development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite
             classes complemented by online Zoom laboratories and recorded videos.</text>
    </section>
    <section className='mx-12 mt-5  '>
      <h1 className='font-bold text-red-600  mb-5 text-2xl'>Core Courses (Common in All Specializations):</h1>
      <text className='  font-semibold text-xl mb-7'>Every participant of the program will start by completing the following three core courses:

</text>
    </section>
    <div className='  container flex flex-grow  flex-col md:flex-row   mt-6  md:mx-20 lg:mx-10'>
    <div className="sm:mb-3 plan mx-4 basis-1/3 px-4  bg-white border border-red-600 sm:space-x-3   rounded-lg shadow flex-1 hover:bg-gray-100 ">
<h1 className="mb-2 text-2xl font-bold  pt-3">Quarter I (Core)</h1>    
    
<h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CS-101: Object-Oriented Programming using TypeScript
</h1>

<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Learning the fundamentals of Object-Oriented programming 
using JavaScript and TypeScript. Understanding latest Web trends i.e. Web 3.0
 and Metaverse concepts.</p>
 
    <Link href="/Quarter1" className=" mb-3  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
    Read more</Link>
</div>

<div className=" sm:mb-3 plan mx-4 basis-1/3 px-4 bg-white border border-red-600  sm:-space-x-3  rounded-lg shadow hover:bg-gray-100  flex-1 ">
<h1 className="mb-2 text-2xl font-bold  pt-3">Quarter II (Core)  </h1>
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">  Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</h1>
    
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts,
     unit test and user interfaces. Develop ERC-20 and NFT tokens</p> 
     <Link href="/Quarter2" className=" mb-3  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
    Read more</Link>
</div>
<div className="sm:mb-3 plan mx-4 basis-1/3 px-4 bg-white border border-red-600  rounded-lg shadow flex-1 hover:bg-gray-300">
<h1 className="mb-2 text-2xl font-bold  pt-3">Quarter III (Core)  </h1>
    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Developing Planet-Scale Web 2.0 Serverless
     Cloud Apps and APIs using Next.js 13</h1>
    
           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">Develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards and APIs</p> 
           <Link href="/Quarter3" className=" mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
    Read more</Link>
</div>
</div>
<div className='block   mb-6   max-w-6xl  sm:mx-2   mt-4 p-20 bg-red-200  border border-green-500 rounded-full  shadow-red-500 hover:bg-gray-100  lg:mx-24 md:mx-10'>
  <h1 className='mb-2 sm:px-2 text-2xl font-bold'>The Outcome for Participants of the Program</h1>
  <p className=' font-semibold'>The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also
     giving the economy a much-needed boost by expanding software exports</p>
</div>

<div className=' mb-7'>
<h1 className='mb-2  mt-6 text-2xl font-bold tracking-tight text-center'>Our Instructors</h1>
</div>
<div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col md:flex-row '  >
<div className="text-center  flex-1">
  <Image className="  mx-auto mb-4 w-32 rounded-lg  "
      src={z}alt="Zia khan"></Image>
  <h1 className="mb-2 text-xl font-medium leading-tight   text-white">Zia Khan</h1>
  <h1 className="mb-2 text-xl font-medium leading-tight text-white">CEO Panacloud</h1>
  <p className="  mx-3">Web 3, DeFi, Cloud and Metaverse Architect | 
  Tokenomist and Metanomist | Volunteer COO PIAIC and Computing</p>
</div>

<div className="text-center flex-1">
  <Image className="mx-auto mb-4 w-32 rounded-lg"
      src={d}alt="Danyal Nagori"></Image>
  <h1 className="mb-2 px-3 text-xl font-medium leading-tight text-white ">Daniyal Nagori</h1>
  <h1 className="mb-2 px-3 text-xl font-medium leading-tight text-white">Software Development Lead at Panacloud Pvt Ltd </h1>
  <p className=" px-3">I am a Full-stack developer and DevOps Architect with certification in most cutting edge technologies of 
  development and deployment of tools, apps and microservices. </p>
</div>


<div className="text-center  flex-1">
  <Image className="mx-auto mb-4 w-32 rounded-lg"
      src={a}alt="Adil altaf"></Image>
  <h1 className="mb-2 text-xl font-medium leading-tight text-white">Adil Altaf</h1>
  <h1 className="mb-2 text-xl font-medium leading-tight text-white">Full Stack Cloud Developer  </h1>
  <p className="">Internet-Scale Multi-Cloud Global App Architect | 
  Full Stack Cloud Developer | Continuous Innovation Leader</p>
</div>


<div className="text-center flex-1  ">
  <Image className="mx-auto mb-4 w-32 rounded-lg"
      src={h}alt="Hira khan"></Image>
  <h1 className="mb-2 text-xl font-medium leading-tight text-white">Hira Khan
</h1>
<h1 className="mb-2 text-xl font-medium leading-tight text-white">Director at the Women Empowerment.
</h1>
  <p className="  my-3">Director of the Women Empowerment of 
  the Presidential Initiative for Artificial Intelligence & Computing.</p>

</div>
</div>
  




</div>


   
    
  )
}
