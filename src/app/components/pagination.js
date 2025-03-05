import React from 'react'
import Link from 'next/link'

export default function pagination() {
  return (
    <div>

<ul className="pagination pagination-lg justify-content-center">
    
    <li className="page-item"><Link className="page-link" href="/">Home</Link></li>
    <li className="page-item"><Link className="page-link" href="/update">Update</Link></li>
    <li className="page-item"><Link className="page-link" href="/data">Read</Link></li>
  </ul>
    </div>
  )
}
