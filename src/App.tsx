import { useState } from 'react'
import { Country } from './components/country'
import { FormSearch } from './components/form-search'
import { DefaultLayout } from './layout/default-layout'
import { getCountryData } from './services/country-service'
import { ICountry } from './shared/types/country'

function App() {
  const [country, setCountry] = useState<ICountry[]>()

  return (
    <DefaultLayout>
      <div className='w-[100%*] min-h-[400px] p-10 flex flex-col justify-center align-middle content-center shadow-lg shadow-cyan-500/50'>
        <h1 className='text-4xl my-10 text-center'>
          Consulta de paises
        </h1>
        <FormSearch onChangeSearch={search => getCountryData(search).then(data => setCountry(data))} />
        {country && country[0] ? (
          <>
            <h1 className='text-2xl my-10 text-center'>
              Resultados de la busqueda:
            </h1>
            <Country country={country[0]} />
          </>
        ) : (
          <h1 className='text-2xl my-10 text-center'>
            Sin resultados todavia
          </h1>
        )}
      </div>
    </DefaultLayout>
  )
}

export default App
