import React from "react";
import Button from "./button";
function Login() {
	return (
		<>

			<div className="login-y-logo flex flex-col justify-items-center space-x-2">
				<div className="logo-app-inicio rounded-full bg-gray-100 border-zinc-300 w-11 h-11 shrink-0 grow-0  border-solid border-2 border-white-500/50 translate-y-5 translate-x-11">
				</div>
				<div className="ventana-login flex flex-col content-center  py-6 bg-[#09B6C2] rounded-2xl border-2 border-white-800 w-full max-h-96 h-full m-11 ">
					<div className="p-4">
						<form action="" className="login-form font-sans text-white">
							<p>Correo</p>
							<input type="text" name="correo" className=" mail bg-[#CCDBDB] mb-4" />
							<p className="font-sans ">Contraseña</p>
							<input type="text" name="contraseña" className="password bg-[#CCDBDB] mb-4" />
						</form>

					</div>
					<Button color="blue" children="Log in" />

				</div>
			</div>


		</>
	)
}

export default Login;