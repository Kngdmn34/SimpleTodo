import React from 'react'


interface TasktableProps {
    tasks: {
        id: string;
        text: string;
        isCompleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[] | undefined;
}


const LeftSide: React.FC<TasktableProps> = ({ tasks }) => {
    return (
        <div>
            <div className="grid grid-cols-3 place-content-center  mx-auto  mt-6 gap-2">
                <p className='bg-gray-200 grid-spa border shadow-md rounded-lg text-center lg:text-xl p-5'>Total Tasks : {tasks?.length}</p>
                <p className='bg-gray-200 border shadow-md rounded-lg text-center lg:text-xl p-4'>Completed Tasks : {tasks?.filter((task) => task.isCompleted).length}</p>
                <p className='bg-gray-200 border shadow-md rounded-lg text-center lg:text-xl p-4'>InProgress Tasks : {tasks?.filter((task) => !task.isCompleted).length}</p>
            </div>
        </div>
    )
}

export default LeftSide