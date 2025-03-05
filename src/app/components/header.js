import React from 'react'
import Link from 'next/link'
export default function header() {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
    <div className='d-flex text-decoration-none gap-3'>
        <button><Link href="/" className='text-decoration-none btn btn-outline-primary text-dark fs-5'>Home</Link></button>
        <button><Link href="/data" className='text-decoration-none btn btn-outline-primary text-dark fs-5'>Data</Link></button>
        <button><Link href="/" className='text-decoration-none btn btn-outline-primary text-dark fs-5'>Home</Link></button>
    </div>
  </div>
</nav>

    </div>
  )
}
