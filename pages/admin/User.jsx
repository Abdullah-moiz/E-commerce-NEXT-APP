import { getUserData } from '@/services/admin'
import React from 'react'
import Sidebar_com from './components/Sidebar_com'


export async function getStaticProps() {
    const data = await getUserData() || [];

    return {
        props: { data }
    }

}

export default function User({ data }) {
    return (
        <div className='w-full h-screen bg-slate-900 flex'>
            <Sidebar_com />
            <div className='w-10/12 h-full text-white'>
                <div className='w-full p-4  mt-10 mb-4 flex items-center justify-center'>
                    <h1 className='text-4xl font-semibold tracking-widest border-b p-2 uppercase'>List of Users</h1>
                </div>
                <div className=' px-10 '>
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-center">
                                    <thead className="border-b ">
                                        <tr >
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4 ">
                                                id
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4 ">
                                                Name
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4 ">
                                                Email
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data?.map((user) => {
                                                return (
                                                    <tr className="border-b " key={user._id}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{user._id}</td>
                                                        <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                                                            {user.name}
                                                        </td>
                                                        <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                                                            {user.email}
                                                        </td>

                                                    </tr>
                                                )
                                            })


                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
