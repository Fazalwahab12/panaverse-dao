import Image from 'next/image'
import React from 'react'

import mp from '../../publick/ca.png'
import apa from '../../publick/ca2.png'
import cp from '../../publick/cc3.png'
import ap from '../../publick/ca4.png'
import Link from 'next/link'


export default function page() {
  return (
    
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <section className=' mx-6 pt-6  '>
      <h1 className='font-bold text-red-600  mb-5 text-2xl'>Specialized Tracks:</h1>
      <text className='  font-semibold text-xl mb-7'>After completing the first three quarters the participants will select one or
       more specializations consisting of two courses each
</text>
    </section>

    <div className=' container flex flex-grow  flex-col md:flex-row   md:mx-10'>
    <div className=" plan mx-4 basis-1/3 px-4  sm:mb-3  bg-white border border-red-500   rounded-lg shadow flex-1 hover:bg-gray-100">
    <Image className="scale-40 rounded-full   lg:mx-5 " src={mp}alt='mataverse'>
    </Image>
<h1 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web 3.0 (Blockchain) and Metaverse Specialization
</h1>    
    
<p className=" pb-3  font-semibold text-gray-700 dark:text-gray-400">This Web 3.0 and Metaverse 
specialization focuses on developing full-stack Web 3.0 
and Metaverse experiences for the next generation of the internet 
by specializing in building worlds that merge the best of cutting-edge decentralized 
distributed blockchains with 3D metaverse client experiences.</p>
<Link href="/web3" className=" mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
    Read more</Link>
</div>
       
        
    
    <div className="plan mx-4 basis-1/3 px-4  sm:mb-3  bg-white border border-red-500 rounded-lg shadow flex-1 hover:bg-gray-100 ">
    <Image className="scale-40 rounded-full   lg:mx-5  " src={apa}alt='AI '>
    </Image>
<h1 className="mb-2  mt-7 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Artificial Intelligence (AI) and Deep Learning Specialization</h1>    
    


<p className="mb-3  text-gray-700 dark:text-gray-400 font-semibold">The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.

</p>
<Link href="/AI" className=" mb-3  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
    Read more</Link>
</div>
<div className=" sm:mb-3  plan mx-4 basis-1/3 px-4 bg-white border border-red-600 hover:bg-gray-100  rounded-lg shadow flex-1 ">
<Image className="scale-40 rounded-full   lg:mx-5   md:px-4  " src={cp}alt='Cloud native computing'>
    </Image>
<h1 className="mb-2 mt-7 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cloud-Native Computing Specialization  </h1>    
    


<p className="mb-3  font-semibold text-gray-700 dark:text-gray-400">The Cloud-Native Computing Specialization focuses on 
Containers, Kubernetes, and CDK for Kubernetes..</p>
<Link href="/cloud" className=" mb-3  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
    Read more</Link>
</div>
</div>
     <div className='      container flex flex-grow  flex-col md:flex-row    md:mx-10'>
     <div className=" sm:mb-3 plan mx-4 basis-1/3 px-4 bg-white border border-red-600 hover:bg-gray-100  rounded-lg shadow flex-1">
     <Image className="scale-40 rounded-full   lg:mx-5  " src={ap}alt='Ambient Computing and IoT Specialization'>
    </Image>
<h1 className="mb-2 mt-7  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ambient Computing and IoT Specialization
</h1>    
    


<p className="mb-3  font-semibold text-gray-700 dark:text-gray-400">The Ambient Computing and IoT Specialization focuses on 
building Smart Homes, Offices, Factories, and Cities using Voice computing,
 Matter Protocol, and Embedded Devices. </p>
 <Link href="/acis" className="mb-3  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
    Read more</Link>
</div>
<div className=" sm:mb-3 plan mx-4 basis-1/3 px-4 bg-white border border-red-600 hover:bg-gray-100  rounded-lg shadow flex-1">
<Image className="scale-40 rounded-full   lg:mx-5 " src={apa}alt='Genomics and Bioinformatics'>
    </Image>
<h1 className="mb-2 mt-4  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Genomics and Bioinformatics Specialization
</h1>

<p className="mb-4  font-semibold text-gray-700 dark:text-gray-400">Genomics is the study of the total genetic makeup
 of individual organisms, and how this genetic information is structured,
  functions, and has evolved; bioinformatics encompasses a diverse range
   of analytical methods and tools applied to genomic data. This Specialization
    focuses on performing complex bioinformatics analysis
 using the most essential Python libraries and applications..</p>
 <Link href="/gbs" className=" mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
    Read more</Link>
</div>
<div className=' sm:mb-3 plan mx-4 basis-1/3 px-4 bg-white border border-red-600 hover:bg-gray-100  rounded-lg shadow flex-1
'><Image className="scale-40 rounded-full   lg:mx-5   md:px-4  " src={ap}alt='Network'>
    </Image>
<h1 className="mb-2 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Network Programmability and Automation Specialization

</h1>

<p className="mb-6  font-semibold text-gray-700 dark:text-gray-400">More than ever, network engineers are finding
 it challenging to complete their duties entirely manually. Network
  automation is now crucial due to new protocols, technologies, delivery
   models, and the requirement for enterprises to become more adaptable and
    agile. This course teaches network engineers how to automate systems with
     code using a variety
 of technologies and tools, including Linux, Python, APIs, and Git..</p>
 <Link href="/npas" className=" mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
    Read more</Link>
</div>

     </div>
        </div>
   
  )
}
