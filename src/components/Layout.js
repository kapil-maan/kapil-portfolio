import React from 'react'
import VersionSwitch from './VersionSwitch'

const Layout = ({children, className = ""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 xs:p-8 ${className}`}>
        {children}
        <VersionSwitch/>
    </div>
  )
}

export default Layout
