
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    
        <div className='block  text-white max-w-7xl mx-5 mt-4 mb-5 p-6 bg-indigo-500 border border-gray-200  '>
                 <h1 className=' font-extrabold text-2xl px-8'>Detailed Course Syllabus</h1>
                 <h1 className=' font-bold '>Quarter III (Core)</h1>
                 <h1 className=' font-bold '>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
Duration: 13 Weeks
</h1>
                 <p>Earn While You Learn Projects
</p>
                 <h1 className=' font-extrabold text-2xl px-8'>Course Description: </h1>
                 <h1 className=' font-extrabold text-2xl px-8'> Build Full-Stack Next.js 13 Jamstack Templates </h1>
                 <p>You will be assigned to build a
                     template which we will sell on Theme
                      Forest and Panaverse DAO marketplace. The Panaverse
                       DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through
                       the Panaverse DAO in the form of Panaverse tokens. 
</p>

<h1 className=' font-extrabold text-2xl px-8'> The Template Standard
</h1>

<Link href={'https://github.com/panaverse/panaverse-template-standard'}> click the link</Link>

<h1 className=' font-extrabold text-2xl px-8'> Build QraphQL APIs </h1>
<p>You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. 

</p>
<div className='pt-10'>
<Link href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit" className=" mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
Detailed Course Syllabus</Link>
    </div> 
        </div>
   
  )
}
