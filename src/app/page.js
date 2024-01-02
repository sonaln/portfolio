"use client";

import Image from 'next/image'
import Head from 'next/head'
import {BsAirplane, BsFillMoonStarsFill} from 'react-icons/bs'
import {TiSocialLinkedin, TiSocialGithub, TiMail, TiUser, TiStarOutline, TiStarHalfOutline} from 'react-icons/ti'
import { FaGalacticRepublic } from "react-icons/fa6";
import { useState } from 'react'
import Lilly from '/public/companies/lilly.png'
import Sonal from '/public/sonal.JPG'
import PurSec from '/public/companies/pursec.png'
import Purdue from '/public/companies/purdue.svg'
import Diamond from '/public/companies/diamond.png'
import SupportVectors from '/public/companies/supportvectors.png'



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={darkMode ? "dark" : ""}>
    <Head>
      <title>Sonal Naiks Portfolio</title>
      <meta name="description" content="General"/>
      <link rel="icon" href='./star.ico' />
    </Head>

    <main className='bg-cyan-100 px-10 md:px-20 lg:px-30 xl:px-40 dark:bg-black'>
      <section className="min-h-screen">
        <nav className='p-10 mb-12 flex justify-between'>
          <ul className='flex items-center gap-5'>
            <li><TiStarOutline className='text-4xl' color='darkcyan'/></li>
            <li><h1 className='text-xl font-small font-mono'>Sonals Portfolio</h1></li>
          </ul>
          
          <ul className='flex items-center gap-5'>
            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
            <li><a className='bg-cyan-600 text-white px-5 rounded-md'href='#' onClick={href => window.open("https://www.google.com", "_blank")}>Resume</a></li>
          </ul>
        </nav>

        <div className='relative'>
        </div>
        <div className='text-center p-10 rounded-full bg-cyan-200'>
          <h2 className='text-6xl py-2 text-cyan-700 font-medium font-mono'>
            Sonal Naik
          </h2>
          <h3 className='text-2xl py-2'>Aspiring Software Developer</h3>
          <p>
            Hello! Welcome to my portfolio. I am a software developer based in the San Francisco Bay Area. I am currently a sophomore at Purdue University studying Computer Science.
          </p>
        

        <div className='text-5xl flex justify-center gap-16'>
          <TiMail onClick={href => window.open('mailto:sonal.sachin.naik@gmail.com', '_blank')}/>
          <TiSocialLinkedin onClick={href => window.open("https://www.linkedin.com/in/sonaln", '_blank')}/>
          <TiSocialGithub onClick={href => window.open('https://www.github.com/sonaln', '_blank')}/>

        </div>
        </div>
      </section>



      <section>
        <div className='flex justify-center gap-10 py-1'>
          <div>
            <h3>Skills</h3>
          </div>
          </div>
      </section>



      <section>
        <div className='flex justify-center gap-10 py-1'>
          <h3 className='text-3xl font-extrabold'>
            Research
          </h3>
        </div>
        <div className='grid-flow-col justify-center gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-cyan-300 '>
            <h3 className='font-medium text-xl justify-center'>Software Engineering Researcher</h3>
            <h2>Jan 2024 - present</h2>
            <div className='grid grid-cols-5 gap-10'>
            <Image className='col-span-1 m-5' src={Lilly} alt='Lilly' width={200} height={200}/>
            <ul className='text-left list-disc p-5 col-span-4'>
                <li className='m-5'> Utilizing data analytics and software engineering skills to aid in drug research and discovery. </li>
              </ul>
              </div>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-cyan-600'>
          <h3 className='font-medium text-xl justify-center'>PurSec Lab Student Researcher</h3>
            <h2>Oct 2023 - present</h2>
            <div className='grid grid-cols-5 gap-10'>
              <Image className='m-5 col-span-1' src={PurSec} alt='PurSec Lab' width={200} height={200} />
            <ul className='text-left list-disc p-5 col-span-4'>
                <li className='m-5'> Analyzing security of LLM and Diffusion Models in Android applications through jailbreaking, prompt retrieval
                      methods, and back-end communication interception. </li>
                <li className='m-5'> Researching security concerns and limitations of such applications under Dr. Berkay Celik and Dr. Antonio Bianchi as part of the Purdue Security Lab. </li>
              </ul>
              </div>

          </div>
        </div>
      </section>

      <section className='py-10'>
        <div className='flex justify-center gap-10 py-1'>
          <h3 className='text-3xl font-extrabold'>
            Professional Experience
          </h3>
        </div>
        <div className='grid-flow-col justify-center gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-cyan-300'>
            <h3 className='font-medium text-xl justify-center'>Undergraduate Teaching Assistant</h3>
            <h2>Jan 2024 - present</h2>
            <div className='grid grid-cols-5 gap-10'>
            <Image className='col-span-1 m-5' src={Purdue} alt='Purdue' width={200} height={200}/>
            <ul className='text-left list-disc p-5 col-span-4'>
                <li className='m-5'> Utilizing data analytics and software engineering skills to aid in drug research and discovery. </li>
              </ul>
              </div>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-cyan-600'>
          <h3 className='font-medium text-xl justify-center'>Natural Language Processing Intern</h3>
            <h2>June 2023 - Aug 2023</h2>
            <div className='grid grid-cols-5 gap-10'>
              <Image className='bg-slate-600 col-span-1 m-5' src={SupportVectors} alt='SupportVectors' width={200} height={200} />
            <ul className='text-left list-disc p-5 col-span-4'>
                <li className='m-5'> Implemented 3 LLMs and vector databases using LangChain to generate an adaptive Document QA Chatbot
              web application with Streamlit to embed and converse with documents from 7 file types using Python. </li>
                <li className='m-5'> Proficiency in vector similarity search (FAISS), sentence transformers, and integration of Generative AI models.</li>
                <li className='m-5'>Collaborated with a group of 10 to develop a Medical Consult API to transcribe consultation audio and produce ICD/CPT codes with 88% accuracy using Whisper, OpenAI, MIMIC IV dataset, and Google Healthcare APIs. </li>
              </ul>
              </div>
          </div>


          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-cyan-600'>
          <h3 className='font-medium text-xl justify-center'>Private Tutor</h3>
            <h2>March 2021 - May 2022</h2>
            <div className='grid grid-cols-5 gap-10'>
              <Image className='col-span-1 rounded-full m-5' src={Diamond} alt='Diamond' width={200} height={200} />
            <ul className='text-left list-disc p-5 col-span-4'>
                <li className='m-5'> Tutored 5 clients ages 8-14 weekly in English and Math and boosted student grades up to 30% due to topic
                mastery and increased confidence.</li>
                <li className='m-5'>Created over 30 personalized lessons and communicated problem-solving strategies to parents.</li>
              </ul>
              </div>

          </div>

        </div>
      </section>

      <section>
        <div className='flex justify-center gap-10 py-1'>
          <h3 className='text-3xl font-extrabold'>
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
          <div className='basis-1/3 flex-1'>
            <h3>Marketplace</h3>
          </div>
          <div className='basis-1/3 flex-1'>
            <h3>Armdle</h3>
          </div>
          <div className='basis-1/3 flex-1'>
            <h3>Humic</h3>
          </div>


        </div>
      </section>

      <section>
        <div className='flex justify-center gap-10 py-1'>
          <div>
            <h3>Leadership</h3>
          </div>
          </div>
      </section>


      <section>
        <div className='flex justify-center gap-10 py-1'>
          <div>
            <h3>Contact</h3>
          </div>
          
          </div>
      </section>

    </main>
  </div>
  );
}

