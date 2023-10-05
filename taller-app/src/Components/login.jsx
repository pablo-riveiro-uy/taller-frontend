import React from "react";

function Login() {
	return (
		<>
			<div className="logo-app-inicio rounded-full bg-gray-100 border-zinc-300 w-40 h-40 mx-20 border-solid border-2 border-white-500/50 flex flex-col content-center translate-y-20">
				<p className="h-50 p-50"></p>
			</div>
			<div className="ventana-login columns-1 flex flex-col bg-teal-50 rounded-2xl border-2 border-teal-800 w-96 h-full px-30 py-40">
				<div className="caja-login columns-1 flex flex-col ">
					<form action="" className="login-form columns-1 ">
						<p>Correo</p>
						<input type="text" name="correo" className="mail" />
						<p>Contraseña</p>
						<input type="text" name="correo" className="password" />

					</form>
				</div>

			</div>
		</>
	)
}

export default Login;