import React from 'react'
import { Link } from 'react-router-dom'

const Tabla = () => {
    return (
        <div className='imgbackgfond h-screen'>
            <div className='border-4 border-blue-500/20 rounded-xl hover:backdrop-blur-sm hover:bg-purple-500/10 '>
                <ul className='flex mx-auto text-center mt-2 gap-4 border-2'>
                    <li>
                        <Link to={'/'}>
                            <a href='#'
                                className='ml-auto text-white border-black hover:text-yellow-400 hover:shadow-red-500 hover:shadow-md'
                            >
                                Login
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Courses'}>
                            <a href='#'
                                className='text-white border-black hover:text-yellow-400 hover:shadow-red-500 hover:shadow-md'
                            >
                                Courses
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Table'}>
                            <a href='#'
                                className='text-white border-black hover:text-yellow-400 hover:shadow-red-500 hover:shadow-md'
                            >
                                Table
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='grid grid-cols-1 mt-3'>
                <table className='table-fixed text-white bg-black border-2 rounded-xl border-white '>
                    <thead>
                        <tr className='border-white rounded-lg'>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                            <th>Song</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tabla