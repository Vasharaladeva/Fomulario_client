import { Outlet, Link, useLocation } from 'react-router-dom'
import img from '../../public/logo.jpeg'
function Layout() {
    const location = useLocation()
    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/4 bg-white px-5 py-10'>

            <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={img}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={img}
                    alt="Your Company"
                  />
                </div>
                <nav className='mt-10'>



                    <Link
                        className={`${location.pathname === '/formulario' ? 'text-blue-300' : 'text-blue-900'} text-2xl block mt-2 hover:text-blue-600 `}
                        to="/formulario">Formulario</Link>

                </nav>
            </aside>

            <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
