import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:text-light dark:border-light
    font-medium text-lg sm:text-base'>
      <Layout className='py-8 flex items-center justify-between sm:flex-col md:flex-col xs:flex-col lg:flex-col lg:py-6
      md:py-6 xs:py-6 sm:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='lg:py-2 md:py-2 sm:py-2 xs:py-2'>
                <Link href = "https://www.linkedin.com/in/kapilmaan/" target="_blank">Built by <span className='underline'>Kapil Kumar</span></Link>
            </div>
            <Link href = "https://www.linkedin.com/in/kapilmaan/" target="_blank" className='underline'>Say hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer
