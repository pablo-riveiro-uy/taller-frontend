import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
	return (
		<div>
			<header>
				<div className="containerp-6 flex flex-row content-center justify-around bg-cyan-100 h-[60px]">
					<div className='w-[50px] h-[50px] bg-slate-400 rounded-full shrink-0 grow-0 text-base self-center  '>Auto</div>
					<nav className="pr-6 flex flex-row justify-content  justify-end self-center ">
						<Link to="/">PreLogin</Link>
						<Link to="/home">Home</Link>
					</nav>
				</div>
			</header>
		</div>
	)
}
