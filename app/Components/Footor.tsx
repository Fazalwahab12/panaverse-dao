import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pa from '../../publick//pra.png'

const Footor = () => {
  return (
    
       <footer className='flex  bg-gray-800'>
               <div className='  gap-3 flex-1 text-white pt-4'>
                <Image src={pa}alt='panaverse'></Image>
                
               </div>
               
               <div className='flex flex-1 flex-col text-white '>
                <h1 className=' pt-5 font-extrabold  text-green-600'> useful links</h1>
                <Link href={'/'}> Home</Link>
                <Link href={'syllabus'}> syllabus</Link>
                <Link href={'about'}> About</Link>
                <Link href={'blog'}> blog</Link>
               </div>
               <div className=' flex flex-1 flex-col text-white px-1'>
                <h1 className=' pt-5 font-extrabold  text-green-600'>Connect</h1>
                <Link href={'https://www.facebook.com/groups/panaverse'}> Facbook</Link>
                <Link href={'https://www.youtube.com/@panaverse'}> Youtub</Link>
                <Link href={'https://twitter.com/panaverse_edu?lang=en'}> tiwtter</Link>
                <Link href={'https://github.com/panaverse'}> github</Link>
               </div>
                <div className=' flex flex-1 flex-col text-white '>
                <h1 className=' pt-5 px-3 font-extrabold  text-green-600'>Location</h1>
                <Link href={''}> karachi</Link>
                <Link href={''}>Lahor</Link>
                <Link href={''}> Islamabad</Link>
                <Link href={''}> pashwer</Link>
                </div>
               
               
       </footer>
      
  )
}

export default Footor