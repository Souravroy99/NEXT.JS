import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex h-20 gap-8 bg-blue-600 text-green-200 text-3xl'>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/service'}>Service</Link>
        <Link href={'/contact'}>Contact</Link>
        <Link href={'/admin'}>Admin</Link>
        <Link href={'/admin/about'}>Admin_About</Link>
        <Link href={'/clientcomp'}>Client_Component</Link>
        <Link href={'/servercomp'}>Server_Component</Link>
    </div>
  )
}

export default Navbar
