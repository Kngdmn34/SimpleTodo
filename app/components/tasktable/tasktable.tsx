'use client'

import { useState, useTransition } from 'react';

import { completedAction, deleteTaskaction } from '@/app/actions'
//icons
import { Pencil, Trash, ClipboardCheck, Loader } from 'lucide-react'
//UI components





interface TasktableProps {
    tasks: {
        id: string;
        text: string;
        isCompleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[] | undefined;
}


const Tasktable: React.FC<TasktableProps> = ({ tasks }) => {

    const [isPending, startTransition] = useTransition()
    const [open, setIsOpen] = useState(false)


    const statusIcon = {
        completed: <ClipboardCheck size={15} className='mr-2 ' />,
        inProgress: <Loader size={15} className='animate-spin duration-2 mr-2' />
    }




    return (
        <div>
            {tasks?.length !== 0 ? (
                <>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6 ">

                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-all-search"
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 hidden bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label htmlFor="checkbox-all-search" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Todos
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-11 py-3 text-right">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks?.map((task) => (
                                    <tr key={task.id} className=" border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input
                                                    defaultChecked={task.isCompleted}
                                                    id={`checkbox-table-search-${task.id}`}
                                                    type="checkbox"
                                                    className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    onChange={(e) => startTransition(() => completedAction(task.id, e.target.checked))}
                                                />
                                                <label htmlFor={`checkbox-table-search-${task.id}`} className="sr-only">
                                                    checkbox
                                                </label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-l">
                                            {task.isCompleted ? <div className='bg-green-100 w-full'>{task.text}</div> : <div>{task.text}</div>}
                                        </th>
                                        <td className="px-6 py-4 border-l">
                                            {task.isCompleted ? <div className='flex'>{statusIcon.completed} Completed</div> : <div className='flex'>{statusIcon.inProgress} In Progress</div>}
                                        </td>
                                        <td className="px-11 py-4 text-right  border-l" >
                                            <button onClick={(e) => deleteTaskaction(task.id, task.isCompleted, task.text)} className="font-medium text-red-600 px-2 dark:text-blue-500 hover:underline">
                                                <Trash size={15} />
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <p className='text-center grid place-content-center items-center mt-24 text-gray-500 font-semibold'>No tasks. </p>
            )
            }
        </div >
    );
}

export default Tasktable