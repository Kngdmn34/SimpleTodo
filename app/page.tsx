

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

    <body className=" appwhite max-w-[50%] mx-auto flex justify-center ">

      <div className=" absolute circle rounded-full flex justify-center items-center mt-96  ">
      </div>

      <div className="relative grid h-screen place-content-center  ">
        <div className="text-extralight text-2xl text-center lg:text-6xl lg:text-left ">Simple Todo</div>
        <div className="pt-11">

          <TaskListForm />
        </div>


        <div className="border-b border-black p-2 m-6" />
        <span className=' flex justify-end'><ModifyTask /></span>
        {tasks?.length !== 0 ? <LeftSide tasks={tasks} /> : ''}


        <div className="w-1/2 flex justify-center  mt-6 lg:w-full">

          <Tasktable tasks={tasks} />

        </div>




      </div>

    </body>
  )
}

export default Home 