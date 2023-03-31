"use client"
import pa from '../../publick/mab.png'
import Link from 'next/link'
import Image from 'next/image'


import React from 'react'




const Hiro = () => {
  return (
    
    <div className='bg-gradient-to-r   from-indigo-500 via-purple-500 to-pink-500 flex px-7 flex-col md:flex-row '>
            
        <section className=' flex-1 pt-3'>
          <p className='  text-cyan-50'>
Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
</p>
        <h1 className=' font-bold text-black text-2xl pt-5 pb-10 '>Certified Web 3.0 and Metaverse Developer</h1>
      <text className='text-white   font-semibold'>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient 
        Computing/IoT, Network Automation, and Bioinformatics Technologies</text>
        <div className=' mt-7'>
    <Link href={'https://portal.piaic.org/signup'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">apply now</Link>
    </div>
        </section>
       <section className=' flex-1  pb-6'>
        <Image src={pa}alt='mataverse'></Image>
       </section>

      </div>
        
      
  )
}

export default Hiro
