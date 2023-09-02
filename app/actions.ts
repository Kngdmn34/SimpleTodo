'use server'

import {createTask, validateTask, updateTask,deleteTask} from '@/app/api/todos'
import { revalidatePath } from 'next/cache'

export  async function createTaskAction (text: string)  {
    await createTask(text)
    revalidatePath('/')
}

export  async function completedAction (id: string, isCompleted: boolean)  {
    await validateTask(id, isCompleted)
    revalidatePath('/')
}

export  async function edittodo (id: string, isCompleted: boolean, text: string)  {
    await updateTask(id, isCompleted, text)
    revalidatePath('/')
}

export async function deleteTaskaction (id: string, isCompleted: boolean, text: string) {
    await deleteTask(id, isCompleted, text)
    revalidatePath('/')
}