import React from 'react'

const Sidebar = () => {
  return (
    <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:flex md:w-64 md:flex-col bg-white border-r">
      <div className="flex flex-col h-full p-4">
        <div className="text-lg font-semibold mb-4">Project</div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">Dashboard</li>
            <li className="text-sm text-gray-700">Projects</li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar