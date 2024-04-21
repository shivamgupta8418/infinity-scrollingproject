import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const LogOut = () => {
  const {logout} = useContext(AuthContext);
  return (
    <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Log Out From your account
        </h2>
      </div>

<div className="flex justify-center">
  <button
    onClick={logout}
    className="w-60 flex-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Log Out
  </button>
</div>

    </div>
  )
}

export default LogOut