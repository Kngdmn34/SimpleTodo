

import { getTodos } from "@/app/api/todos"
import TaskListForm from '@/app/components/tasklist'
import Tasktable from '@/app/components/tasktable/tasktable'
import LeftSide from '@/app/components/leftside'
//UI COMPONENTS
import { Separator } from "@/components/ui/separator"
import { ModifyTask } from '@/app/components/modal'

//TODO
//1 add table schadcn 

const Home = async () => {

  const { tasks } = await getTodos()

  return (

    <body className="relative appwhite max-w-[50%] mx-auto flex justify-center items-end">

      <main className="absolute circle rounded-full  items-center place-content-end mb-11">
      </main>
      <div className="relative grid h-screen place-content-center pb-96 ">
        <div className="pt-11">
          <TaskListForm />
        </div>


        <div className="border-b border-black p-2 m-6" />
        <span className=' flex justify-end'><ModifyTask /></span>
        {tasks?.length !== 0 ? <LeftSide tasks={tasks} /> : ''}


        <div className="w-full mt-6">

          <Tasktable tasks={tasks} />

        </div>




      </div>

    </body>
  )
}

export default Home 