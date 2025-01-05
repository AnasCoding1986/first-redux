import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import {
  selectFilter,
  selectTasks,
} from "@/redux/features/counter/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filter);

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-bold my-5">This is tasks</p>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task)=>{return <TaskCard key={task.id} task={task} />})}
      </div>
    </div>
  );
};

export default Tasks;
