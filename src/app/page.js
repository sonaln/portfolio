"use client";

import Image from 'next/image'
import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai'
import { useState } from 'react'



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (

    <div className={darkMode ? "dark" : ""}>
    <Head>
      <title>Sonal Naik Portfolio</title>
      <meta name="description" content="General"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <main className='bg-white px-10 md:px-20 lg:px-30 xl:px-40 dark:bg-black'>
      <section className="min-h-screen">
        <nav className='p-10 mb-12 flex justify-between'>
          <h1 className='text-xl'>Sonal Naik</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
            <li><a className='bg-cyan-600 text-white px-5 rounded-md'href='#'>Resume</a></li>
          </ul>
        </nav>

        <div className='relative'>

        </div>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-500 font-medium'>
            Sonal Naik
          </h2>
          <h3 className='text-2xl py-2'>Aspiring Software Developer</h3>
          <p>

          </p>
        </div>

        <div className='text-5xl flex justify-center gap-16'>
          <AiFillMail />
          <AiFillLinkedin />
          <AiFillGithub />

        </div>
      </section>



      <section>
        <div>
          <h3 className='text-3xl py-1'>
            Experience
          </h3>
        </div>
        <div className='lg:flex gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>

          </div>

        </div>
      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1'>
            Projects
          </h3>
        </div>
        <div className='glex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1'>
            <h3>Whats For Dinner?</h3>
          </div>
          <div className='basis-1/3 flex-1'>
            <h3>Simple Compiler</h3>
          </div>


        </div>
      </section>

    </main>
  </div>
  );
}

