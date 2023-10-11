import React from 'react'
import DataBox from './DataBox'
import DataFrame from './DataFrame'
import TitleBox from './TitleBox'

export default function Dashboard() {
	const data = {
		nombre: 'pablo', edad: '44'
	}
	return (
		<>
			<div className=' bg-cyan-200'>
				<h2>DashBoard</h2>
				<div className='father w-screen h-screen'>
					<div className='grid-container grid-cols-1 grid-rows-3items-center p-4 m-auto'>
						<div className="grid-row1 inline-grid grid-cols-3 gap-4 m-auto">
							<TitleBox className="col-start-3" title="Nombre de TAller" />
							<DataFrame className="col-span-1" title="Presupuestos en espera" level="12" />
							<DataFrame className="col-span-3" title="Total de Vehiculos" level="6" />
						</div>
						<div className="dataframe">
							<DataBox title="Servicios Activos" data={data} />
						</div>
					</div>

				</div>
			</div>
		</>
	)
}
