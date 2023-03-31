import React from 'react'



import Image from 'next/image'
import pa from '../../publick/pra.png'
import z from '../../publick/techer/zai.jpg'
import p from '../../publick/Dr.jpg'
const About = () => {
  return (
<>
      <div className='  '>
      <h1 className='  font-extrabold text-2xl  px-40 pt-7 '>About us</h1>
        </div>
      
      <div className='flex flex-col md:flex-row  '>
        <div className='flex-1' >
        <Image src={p}alt='Dr-arif-alvi'></Image>
        </div>
        <div className='   md:mt-6  p-8 flex-1'>
        <h1 className='  font-extrabold text-2xl '>Dr. Arif Alvi</h1>
        <text className=' px-6   '>
        Dr. Arif Alvi was sworn in as the 13th President of Islamic
         Republic of Pakistan on 9th September 2018.


Dr. Arif Alvi was born in 1949 and completed his early education in Karachi.
 He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of
  Dentistry, Lahore where he was declared the “Best Graduate”. He completed his 
  Masters of Science in the field of Prosthodontics from University of Michigan (1975)
   and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded
    fellowship ‘Diplomatic American Board of Orthodontists (1995)’.


President Dr. Arif Alvi has been a renowned professional and has 
held many important positions in the field of Dentistry. He remained Dean 
of Orthodontics, College of Physicians and Surgeons of Pakistan, President,
 Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists
  (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental 
  Federation (2007-2013). Through his sheer hard work in the World Dental Federation,
   he was able to get the declaration of 20th March as World 
Oral Health Day. He is also an author of a book, theses, and many articles.
        </text>
        </div>
        </div>
      <div className='flex flex-col md:flex-row sm:flex-row'>
      <div className='flex-1 '>
          <Image src={pa}alt='panaverse-deo'></Image>
        </div>
        <div className='flex-1   md:mt-6  p-8'>
        <h1 className='  font-extrabold text-2xl '>Panaverse DAO</h1>
        <text className=' px-6   '>Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers,
         trainers, startup founders and service providers. </text>
        </div>
       
      
   </div>
   <div className='flex flex-col md:flex-row pb-7 px-6'>
      <div className='flex-1 '>
          <Image src={z}alt='panaverse-deo'></Image>
        </div>
        <div className='flex-1   md:mt-6  p-8  pt-10'>
        <h1 className='  font-extrabold text-2xl '>Zia Khan</h1>
        <text className=' px-6   '>CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.


Extensive experience in software architecture, design, 
development, implementation, and integration. Worked as a 
developer in Silicon Valley for 7 years. Hands-on work including
 thousands of hours of development work logged recently resulting 
 in multiple successful projects for cutting edge startups like Panacloud,
  OpenPD, Datasplash, 
FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc. </text>
        </div>
       
      
   </div>
   </>
   
  )
}



export default About