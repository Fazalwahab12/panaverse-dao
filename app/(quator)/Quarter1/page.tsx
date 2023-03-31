
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
   
        <div className='block text-white  max-w-7xl mx-5 mt-4 mb-5 p-6 bg-indigo-500 border border-gray-200'>
                 <h1 className=' font-extrabold text-2xl px-8'>Detailed Course Syllabus</h1>
                 <h1 className=' font-bold '>Quarter I (Core)</h1>
                 <h1 className=' font-bold '>CS-101: Object-Oriented Programming using TypeScript</h1>
                 <p>Duration: 13 Weeks</p>
                 <h1 className=' font-extrabold text-2xl px-8'>Course Description: </h1>
                 <p>We will start the program by learning the 
                    fundamentals of Object-Oriented programming using JavaScript 
                    and TypeScript. We will also understand the latest Web trends 
                    i.e. Web 3.0 and Metaverse concepts and try to understand their 
                    working from the perspective of the users. 
</p>
<h1 className=' font-extrabold text-2xl px-8'>Course outline: </h1>
<h1 className=' font-extrabold text-2xl px-8'>HTML and CSS (Homework) </h1>
<h3>Learn HTML by Hira Khan (Watch Recorded Videos)</h3>
<Link href={'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6'}>watch video</Link>
<h3>Learn CSS by Hira Khan (Watch Recorded Videos)</h3>
<Link href={'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob'}>watch video</Link>
<h3>Learn JavaScript by zeshon (Watch Recorded Videos)</h3>
<Link href={'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob'}>watch video</Link>
<div className='pt-10'>
<Link href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit" className=" mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
Detailed Course Syllabus</Link>
    </div> 
        </div>
    
  )
}
