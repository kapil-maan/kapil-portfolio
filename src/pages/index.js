import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import pic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import Footer from '@/components/Footer'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/lightbulb.svg"
import TransitionEffect from '@/components/transitionEffect'
export default function Home() {
  return (
    <>
      <Head>
        <title>Kapil Kumar</title>
        <meta name="description" content="Portfolio" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='!pt-0 md:pt-16 sm:pt-8 xs:pt-8'>
            <div className='flex items-center justify-between w-full lg:flex-col md:flex-col sm:flex-col xs:flex-col'>
                <div className='w-1/2 md:w-full sm:w-full xs:w-full'>
                    <Image src = {pic} alt = "AR" className = 'w-full h-auto md:w-full md:inline-block lg:hidden sm:w-full sm:inline-block xs:w-full xs:inline-block' priority 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
                </div>
                <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center 
                md:w-full md:text-center sm:w-full sm:text-center xs:w-full xs:text-center'>
                  <AnimatedText text='Turning vision into reality With Code And Design.' className='text-5xl
                   sm:text-3xl xs:text-3xl md:text-5xl text-left lg:text-center lg:text-6xl xl:text-5xl md:text-center 
                   sm:text-center xs:text-center
                  '/>
                  <p className='my-4 text-base font-medium md:text-sm sm:text-xs xs:text-xs'>
                    As a aspiring full-stack developer, I am dedicated to turning my ideas into innovative web application. 
                    Explore my latest projects, showcasing my expertise in stacks and react.js.
                  </p>
                  <div className='flex items-center self-start mt-2 lg:self-center md:self-center sm:self-center xs:self-center'>
                    <Link href="/Resume.pdf" target={"_blank"}
                    className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
                    font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                    
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                    md:p-2 md:px-4 md:text-base
                    sm:p-2 sm:px-4 sm:text-base
                    xs:p-2 xs:px-4 xs:text-base
                    ' download={true}
                    >Resume
                    <LinkArrow className={"w-6 ml-1"} />
                    </Link>
                    <Link href="mailto:kapilkumar74152@gmail.com"
                    className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light 
                    md:text-base sm:text-base xs:text-base'
                    >Contact</Link>
                  </div>
                </div>
                
            </div>
            <HireMe />
            <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden sm:hidden xs:hidden'>
              <Image src = {lightBulb} alt = "AR" className='w-full h-auto hover:animate-pulse' />
            </div>
        </Layout>
      </main>
      <Footer />
    </>
  )
}
