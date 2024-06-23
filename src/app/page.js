"use client";

import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link';
import { BsAirplane, BsFillMoonStarsFill, BsSpotify } from 'react-icons/bs'
import { TiSocialLinkedin, TiSocialGithub, TiMail, TiUser, TiStarOutline, TiStarHalfOutline } from 'react-icons/ti'

import { FaGalacticRepublic, FaJava } from "react-icons/fa6";
import { useState } from 'react'
import Lilly from '/public/companies/lilly.png'
import Sonal from '/public/sonal.JPG'
import PurSec from '/public/companies/pursec.png'
import Purdue from '/public/companies/purdue.svg'
import Diamond from '/public/companies/diamondbg.png'
import SupportVectors from '/public/companies/supportvectorsbg.png'
import ImaginationStation from '/public/companies/is.webp'
import Tulip from '/public/companies/tulip.png'
import Blizzard from '/public/blizzardbg.png'
import Armdle from '/public/projects/armdle.png'
import ArmdleDemo from '/public/projects/armdledemo.png'
import Marketplace1 from '/public/projects/marketplace/marketplace1.png'
import Marketplace2 from '/public/projects/marketplace/marketplace2.png'
import Marketplace3 from '/public/projects/marketplace/marketplace3.png'

import { IoPizzaOutline } from "react-icons/io5";
import { BiLogoJava, BiShoppingBag } from "react-icons/bi";
import { LiaCodeSolid, LiaJava } from "react-icons/lia";
import { GiDoorHandle } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";








export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (

    <div>
      <Head>
        <title>Sonal Naik&#39;s Portfolio</title>
        <meta name="description" content="General" />
        <link rel="icon" href='./star.ico' />
      </Head>

      <main className='bg-[#0b3948] px-10 md:px-20 lg:px-30 xl:px-40 dark:bg-black'>
        <section className="min-h-screen">
          <nav className='p-10 mb-12 flex justify-between'>
            <ul className='flex items-center gap-5'>
              <li><TiStarOutline className='text-4xl' color='darkcyan' /></li>
              <li><h1 className='text-2xl font-small text-[#6bb8c3be] font-mono'>Sonal&#39;s Portfolio</h1></li>
            </ul>
{/* 
            <ul className='flex items-center gap-5 text-xl'>

              <li><a className='bg-cyan-700 text-cyan-600 font-mono px-5 rounded-md cursor-pointer h-5 w-5' onClick={href => window.open("https://forms.gle/J1pBuMzQJw2R8vzC8", "_blank", "noopener", "noreferrer")}>Resume</a></li>
            </ul> */}
          </nav>

          <div className='relative'>
          </div>
          <div className='text-center p-10 rounded-3xl md:rounded-full bg-[#6bb7c371]'>
            <h2 className='lg:text-6xl py-2 text-[#0b3948] font-medium font-mono text-4xl'>
              Sonal Naik
            </h2>
            <h3 className='text-2xl py-2'>Aspiring Software Developer</h3>
            <p className='p-10 text-xl text-[#0b3948] font-mono'>
            <span role="img" aria-label="wave">👋</span> Welcome to my portfolio!
            </p>
            <p className='p-5 md:p-10 text-lg md:text-xl text-[#0b3948] font-mono'>
              Software developer from SF Bay Area, CA. Passionate about technology and always looking for new opportunities to learn and grow. Looking for Summer 2025 SWE internship.
            </p>


            <div className='text-4xl md:text-5xl flex justify-center gap-16'>
              <TiMail onClick={href => window.open('mailto:sonal.sachin.naik@gmail.com', "_blank", "noopener", "noreferrer")} className='cursor-pointer' />
              <TiSocialLinkedin onClick={href => window.open("https://www.linkedin.com/in/sonaln", "_blank", "noopener", "noreferrer")} className='cursor-pointer' />
              <TiSocialGithub onClick={href => window.open('https://www.github.com/sonaln', "_blank", "noopener", "noreferrer")} className='cursor-pointer' />
            </div>
          </div>
        </section>



        {/* <section>
          <div className='flex justify-center gap-10 pt-10'>
            <h3 className='text-3xl font-extrabold font-mono'>
              Skills
            </h3>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 text-lg md:text-2xl gap-4 mb-4'>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-600'>
              <h4>Java</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-600'>
              <h4>Python</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-600'>
              <h4>C/C++</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-600'>
              <h4>HTML/CSS</h4>
            </div>

            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-500'>
              <h4>Javascript</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-500'>
              <h4>SQL</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-500'>
              <h4>R</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-500'>
              <h4>MATLAB</h4>
            </div>


            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-600'>
              <h4>AWS</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-600'>
              <h4>Azure</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-600'>
              <h4>GCP</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-600'>
              <h4>Docker</h4>
            </div>

            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-500'>
              <h4>Git</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-500'>
              <h4>Linux</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-500'>
              <h4>pandas</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-500'>
              <h4>scikit-learn</h4>
            </div>

            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-600'>
              <h4>OpenCV</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-600'>
              <h4>PyTorch</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-600'>
              <h4>Tensorflow</h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-full my-10 bg-cyan-600'>
              <h4>Vuforia</h4>
            </div>

          </div>

        </section>
 */}




        <section className='py-10'>
          <div className='flex justify-center gap-10 pt-10'>
            <h3 className='text-3xl font-mono text-[#6bb8c3be]'>
              Professional Experience
            </h3>
          </div>
          <div className='grid-flow-col justify-center gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-[#6bb7c371]'>
              <h3 className='font-semibold md:text-xl justify-center text-[#0b3948] font-mono'>Undergraduate Teaching Assistant @ Purdue</h3>
              <h2>Jan 2024 - present</h2>
              <div className='grid md:grid-cols-5 gap-10'>
                <Image className='col-span-1 m-5 md:col-span-1' src={Purdue} alt='Purdue' width={200} height={200} />
                <ul className='text-left list-disc p-5 col-span-4 font-mono'>
                  <li className='m-5'> Summer 2024 - Assisted students during office hours for CS177: Programming With Multimedia Objects (Introduction to Python). </li>
                  <li className='m-5'> Spring 2024 - Graded assingments and lead labs for CS180: Problem Solving And Object-Oriented Programming in Java. </li>
                </ul>
              </div>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-[#6bb7c371]'>
              <h3 className='font-semibold md:text-xl justify-center text-[#0b3948] font-mono '>Natural Language Processing Intern @ SupportVectors</h3>
              <h2>June 2023 - Aug 2023</h2>
              <div className='grid md:grid-cols-5 gap-10'>
                <Image className=' md:col-span-1 m-5' src={SupportVectors} alt='SupportVectors' width={200} height={200} />
                <ul className='text-left list-disc p-5 md:col-span-4 font-mono'>
                  <li className='m-5'> Implemented 3 LLMs and vector databases using LangChain to generate an adaptive Document QA Chatbot
                    web application with Streamlit to embed and converse with documents from 7 file types using Python. </li>
                  <li className='m-5'> Proficiency in vector similarity search (FAISS), sentence transformers, and integration of Generative AI models.</li>
                  <li className='m-5'>Collaborated with a group of 10 to develop a Medical Consult API to transcribe consultation audio and produce ICD/CPT codes with 88% accuracy using Whisper, OpenAI, MIMIC IV dataset, and Google Healthcare APIs. </li>
                </ul>
              </div>
            </div>


            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-[#6bb7c371]'>
              <h3 className='font-semibold md:text-xl justify-center text-[#0b3948] font-mono'>Private Tutor @ Diamond Tutoring</h3>
              <h2>Mar 2021 - May 2022</h2>
              <div className='grid md:grid-cols-5 gap-10'>
                <Image className='col-span-1 rounded-full m-5' src={Diamond} alt='Diamond' width={200} height={200} />
                <ul className='text-left list-disc p-5 md:col-span-4 font-mono'>
                  <li className='m-5'> Tutored 5 clients ages 8-14 weekly in English and Math and boosted student grades up to 30% due to topic
                    mastery and increased confidence.</li>
                  <li className='m-5'>Created over 30 personalized lessons and communicated problem-solving strategies to parents.</li>
                </ul>
              </div>

            </div>




          </div>
        </section>


        <section>
          <div className='flex justify-center gap-10 pt-10'>
            <h3 className='text-3xl font-mono text-[#6bb8c3be]'>
              Research
            </h3>
          </div>
          <div className='grid-flow-col justify-center gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-[#6bb7c371]'>
              <h3 className='font-semibold md:text-xl justify-center text-[#0b3948] font-mono'>Software Engineering Researcher @ Eli Lilly</h3>
              <h2>Jan 2024 - present</h2>
              <div className='grid md:grid-cols-5 gap-10'>
                <Image className='col-span-1 m-5 opacity-7' src={Lilly} alt='Lilly' width={200} height={200} />
                <ul className='text-left list-disc p-5 md:col-span-4 font-mono'>
                  <li className='m-5'> Utilizing data analytics and software engineering skills to aid in drug research and discovery. </li>
                </ul>
              </div>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-[#6bb7c371]'>
              <h3 className='font-semibold md:text-xl justify-center text-[#0b3948] font-mono'>Student Researcher @ PurSec Lab</h3>
              <h2>Oct 2023 - Jan 2024</h2>
              <div className='grid md:grid-cols-5 gap-10'>
                <Image className='m-5 md:col-span-1' src={PurSec} alt='PurSec Lab' width={200} height={200} />
                <ul className='text-left list-disc p-5 md:col-span-4 font-mono'>
                  <li className='m-5'> Analyzing security of LLM and Diffusion Models in Android applications through jailbreaking, prompt retrieval
                    methods, and back-end communication interception. </li>
                  <li className='m-5'> Researching security concerns and limitations of such applications under Dr. Berkay Celik and Dr. Antonio Bianchi as part of the Purdue Security Lab. </li>
                </ul>
              </div>
              
            </div>
          </div>
        </section>


        <section>
          <div className='flex justify-center gap-10 pt-10'>
            <h3 className='text-3xl font-mono text-[#6bb8c3be]'>
              Projects
            </h3>
          </div>
          <div className='grid md:grid-cols-2 gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-[#6bb7c371]'>
              <IoPizzaOutline className='text-3xl' />
              <h3 className='font-semibold text-xl justify-center font-mono text-[#0b3948]'>What&#39;s For Dinner?</h3>
              <h2>Jan 2024 - present</h2>
              <div >
                <ul className='text-left list-disc p-5 font-mono'>
                  <li className='m-2'>Hosted an application on AWS using Flask, and Suggestic API to process 7000+ recipes.</li>
                  <li className='m-2'>Allows users to specify up to 10 ingredients and recommender system suggests meals based on assigned filters</li>
                </ul>
              </div>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-[#6bb7c371]'>
              <LiaCodeSolid className='text-3xl' />
              <h3 className='font-semibold font-mono text-xl justify-center text-[#0b3948]'>Simple C Compiler</h3>
              <h2>Nov 2023 - Dec 2023</h2>
              <div>
                <ul className='text-left list-disc p-5 font-mono'>
                  <li className='m-2'>Developed a C compiler using Lex and Yacc to generate x86-64 assembly language to produce an executable file.</li>
                </ul>
              </div>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-[#6bb7c371]'>
              <BiShoppingBag className='text-3xl' />
              <h3 className='font-semibold text-xl justify-center text-[#0b3948] font-mono'>Marketplace</h3>
              <h2>Nov 2022 - Dec 2022</h2>
              <div>
                <ul className='text-left list-disc p-5 col-span-4 font-mono'>
                  <li className='m-2'>Managed a 5-member team to produce an interactive Java GUI program allowing users to pose as sellers or
                    buyers to list products in stores or purchase products. </li>
                  <li className='m-2'>Implemented Network I/O, file processing, and concurrency to increase efficiency by 20%.</li>
                </ul>
              </div>
              <div className='grid md:grid-cols-3 gap-3  justify-content-space-evenly justify-items-center align-content-space-evenly align-items-center'>
                <Image className='rounded-xl' src={Marketplace1} alt='Marketplace1' width={200} height={200} />
                <Image className='rounded-xl' src={Marketplace2} alt='Marketplace2' width={200} height={200} />
                <Image className='rounded-xl' src={Marketplace3} alt='Marketplace3' width={200} height={200} />
              </div>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-[#6bb7c371]'>
              <GiDoorHandle className='text-3xl' />
              <h3 className='font-semibold text-xl justify-center text-[#0b3948] font-mono'>Armdle</h3>
              <h2>Mar 2020 - June 2021</h2>
              <div>
                <ul className='text-left list-disc p-5 col-span-4 font-mono'>
                  <li className='m-2'>Original 3D printed CAD design to prevent the spread of COVID through seamless attachment to door handles. </li>
                  <li className='m-2'>Distributed to local businesses and garnered local media recognition. </li>
                  <li className='m-2'>Top 3 Team at JCRMRG/United Way Health Hackathon (130+ participants).</li>
                </ul>
              </div>
              <div className='grid md:grid-cols-2 gap-3  justify-content-space-evenly justify-items-center align-content-space-evenly align-items-center p-5'>
                <Image className='rounded-xl' src={Armdle} alt='Armdle' width={200} height={200} />
                <Image className='rounded-xl' src={ArmdleDemo} alt='ArmdleDemo' width={200} height={200} />
              </div>
              <Link target="_blank" rel="noopener noreferrer" href='https://www.thingiverse.com/thing:4540597' className='text-lg cursor-pointer underline hover:bg-cyan-700 rounded-lg'>CAD Files</Link>
            </div>


            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-[#6bb7c371]'>
              <IoWaterOutline className='text-3xl' />
              <h3 className='font-semibold text-xl justify-center text-[#0b3948] font-mono'>HumiCheck</h3>
              <h2>June 2021</h2>
              <div >
                <ul className='text-left list-disc p-5 font-mono'>
                  <li className='m-2'>IoT device that effectively detects the amount of humidity in the air and moisture on various surfaces.</li>
                  <li className='m-2'>Built using various Grove sensors attachments onto a single-board Arduino computer. </li>
                  <li className='m-2'>Includes smart-home integration (Amazon Alexa, Google Home). </li>
                  <li className='m-2'>Finalist for the 2021 Bloom Startup Hackathon</li>
                </ul>
              </div>

              <div>
                <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1R8iNOvR7y2XnRTMrPKSbz9u7haTDSegtenc3wLxLNPE/edit?usp=sharing" className='text-lg cursor-pointer underline hover:bg-cyan-700 rounded-lg'>Business Plan</Link>
              </div>
            </div>



          </div>
        </section>

        <section>
          <div className='flex justify-center gap-10 pt-10'>
            <h3 className='text-3xl font-mono text-[#6bb8c3be]'>
              Leadership
            </h3>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-[#6bb7c371]'>
            <h3 className='font-semibold md:text-xl justify-center text-[#0b3948] font-mono'>STEM Volunteer @ Imagination Station</h3>
            <h2>Sept 2023 - present</h2>
            <div className='grid md:grid-cols-5 gap-10'>
              <Image className='col-span-1 rounded-full m-5' src={ImaginationStation} alt='ImaginationStation' width={200} height={200} />
              <ul className='text-left list-disc p-5 md:col-span-4 font-mono'>
                <li className='m-5'>Volunteered at a local science musuem targeted for children ages 2-10. </li>
                <li className='m-5'>Presented lesson material and organized activities for participants. </li>
              </ul>
            </div>
          </div>


          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-[#6bb7c371]'>
            <h3 className='font-semibold md:text-xl justify-center text-[#0b3948] font-mono'>Co-Founder and Co-Captain/Alumni Mentor @ Blizzard Robotics</h3>
            <h2>Mar 2020 - present</h2>
            <div className='grid md:grid-cols-5 gap-10'>
              <Image className='col-span-1 rounded-full m-5' src={Blizzard} alt='Blizzard' width={200} height={200} />
              <ul className='text-left list-disc p-5 md:col-span-4 font-mono'>
                <li className='m-5'>Founded an award-winning robotics team of 8 focused on design, teamwork, and technological advancements. </li>
                <li className='m-5'>Established and mentoring a non-profit organization impacting 1000+ people to spread STEM education in local communities, libraries, and schools.</li>
              </ul>
            </div>
              <Link target="_blank" rel="noopener noreferrer" href='https://www.ftcblizzardrobotics.com' className='text-lg cursor-pointer hover:bg-cyan-700 rounded-lg underline'>Official Website</Link>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-[#6bb7c371]'>
            <h3 className='font-semibold md:text-xl justify-center text-[#0b3948] font-mono'>STEM Summer Camp Counselor @ Tulip After School</h3>
            <h2>June 2019 - Aug 2019</h2>
            <div className='grid md:grid-cols-5 gap-10'>
              <Image className='col-span-1 m-5' src={Tulip} alt='Tulip' width={200} height={200} />
              <ul className='text-left list-disc p-5 md:col-span-4 font-mono'>
                <li className='m-5'>Volunteered at a local STEAM summer camp for children ages 5-10. </li>
                <li className='m-5'>Formulated lesson material and organized daily activities for participants. </li>
                <li className='m-5'>Communicated student development and daily itinerary with parents.</li>
              </ul>
            </div>
          </div>

        </section>




      </main>
    </div>
  );
}



{/* 


              <li><BsSpotify className='cursor-pointer text-2xl' /></li>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' /></li>


<section>
<div className='flex justify-center gap-10 py-1'>
  <h3 className='text-3xl font-extrabold'>
    Contact
  </h3>
</div>
<div className='grid grid-cols-2 gap-10'>
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfICdEGyxTziDRKxE24IXAygVBj0zUMQLSOwiijzsTf8m6HDA/viewform?embedded=true" width="640" height="926" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfICdEGyxTziDRKxE24IXAygVBj0zUMQLSOwiijzsTf8m6HDA/viewform?embedded=true" width="640" height="926" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>


</div>
</section> */}