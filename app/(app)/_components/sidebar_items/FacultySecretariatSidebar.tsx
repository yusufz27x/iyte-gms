import Link from 'next/link'
import React from 'react'

const FacultySecretariatSidebar = ({ activePage }: { activePage: string }) => {
  return (
    <nav className="flex-1 px-4 py-6">
    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-red-300 pl-2">
      Main Menu
    </div>
    <ul className="space-y-1">
      <li>
        <Link 
          href="/" 
          className={`flex items-center px-4 py-3 rounded-lg hover:bg-red-700 transition-colors ${
            activePage === '' ? 'bg-red-700 font-medium' : ''
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </Link>
      </li>
      <li>
        <Link 
          href="/faculty-secretariat/student-list" 
          className={`flex items-center px-4 py-3 rounded-lg hover:bg-red-700 transition-colors ${
            activePage === 'student-list' ? 'bg-red-700 font-medium' : ''
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Graduation Approval
        </Link>
      </li>
      
      <li>
        <Link 
          href="/faculty-secretariat/top-three-students" 
          className={`flex items-center px-4 py-3 rounded-lg hover:bg-red-700 transition-colors ${
            activePage === 'top-three-students' ? 'bg-red-700 font-medium' : ''
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.539 1.118l-3.975-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          Top Three Students
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default FacultySecretariatSidebar