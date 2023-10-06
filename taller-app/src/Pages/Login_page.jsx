import React from 'react'
import Login from '../Components/login'

export default function Login_page() {
	return (
		<>
			<div className="w-screen h-screen  flex items-center  justify-center flex-row bg-cyan-100">

				<div className="logo-app px-5 mr-40 logo h-[100px] w-[100px]   bg-gray-100 "> logo </div>

				<Login />

			</div>
		</>
	)
}
