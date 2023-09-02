import prisma from '@/app/lib/prisma'
import { spec } from 'node:test/reporters';

export async function getTodos() {

    try {
        const tasks = await prisma.task.findMany();
        return { tasks }

    } catch (error) {
        return {error}
    }
}

export async function createTask (text: string) {

    try {
        const newTask = await prisma.task.create({
            data: {
                text
            }})
            return {newTask}
    } catch(error) {
        return {error}
    }
}

export async function validateTask (id: string, isCompleted: boolean) {
    try {
        const validateTask = await prisma.task.update({
            where: {
                id
            },
            data: {
                isCompleted
            }

        })
        return {validateTask}
    } catch(error) {

    }
}

export async function updateTask (id: string , isCompleted: boolean , text: string) {
    try {
        const updatedTask = await prisma.task.update({
            where:{
                id
            },
            data:{
                text: text,
                isCompleted
            }
            
        })
        return {updatedTask}
    } catch(error) {
        return (error)
    }
}

export async function deleteTask (id: string,isCompleted:boolean,text:string) {
    try {
            const supTask= await prisma.task.delete({
                where: {id, isCompleted,text}
            })
            return (supTask)
    }catch(error) {
        return (error)
    }

}