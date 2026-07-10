
"use client";

import React from 'react'
import { useState } from 'react';

const Sidebar = () => {
    const [showProjects , setShowProjects] = useState(true);
    const [showPriority , setShowPriority] = useState(true);


    const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between  shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white` 
    
    return (
    <aside className={sidebarClassNames}>
      <div className="flex flex-col h-full p-4">
       
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar