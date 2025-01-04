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
      <div>
        <p>This is tasks</p>
      </div>
      <div className="space-y-5 mt-5">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default Tasks;
