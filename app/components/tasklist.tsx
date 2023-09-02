'use client'

import React, { useRef } from 'react'
import { createTaskAction } from '@/app/actions'

// UI COMPONENTS
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const TaskListForm = () => {

    const formRef = useRef<HTMLFormElement>(null)

    async function handler(data: FormData) {
        const text = data.get('text')
        if (!text || typeof text !== 'string') return

        await createTaskAction(text)

        formRef?.current?.reset()

    }

    return (

        <form ref={formRef} action={handler} id='main'>
            <div className='relative flex justify-center pt-2 py-2 bg-gray-200 rounded-lg shadow-md'>
                <Input className=' w-1/2 shadow-sm' type='text' name='text' placeholder='Add new task' />
                <Button type='submit' className=' ml-2 shadow-sm' >Add</Button>

            </div>

        </form>
    )
}

export default TaskListForm