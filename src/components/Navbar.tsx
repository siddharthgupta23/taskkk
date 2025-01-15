import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { toggleDarkMode } from '../store/slices/themeSlice'
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi'

export const Navbar: React.FC = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state: RootState) => state.theme.darkMode)

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400">
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className="ml-3 p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {darkMode ? <FiSun className="h-6 w-6" /> : <FiMoon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

