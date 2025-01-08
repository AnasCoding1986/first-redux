import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  selectFilter,
  selectTasks,
  updateFilter,
} from "@/redux/features/counter/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";
import { useDispatch } from "react-redux";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  const disPatch = useDispatch();
  console.log(tasks);
  console.log(filter);

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-bold my-5">This is tasks</p>
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList className="flex w-full justify-between">
            <TabsTrigger onClick={()=> disPatch(updateFilter("all"))} value="all" className="w-1/4 text-center">
              All
            </TabsTrigger>
            <TabsTrigger onClick={()=> disPatch(updateFilter("low"))} value="low" className="w-1/4 text-center">
              Low
            </TabsTrigger>
            <TabsTrigger onClick={()=> disPatch(updateFilter("medium"))} value="medium" className="w-1/4 text-center">
              Medium
            </TabsTrigger>
            <TabsTrigger onClick={()=> disPatch(updateFilter("high"))} value="high" className="w-1/4 text-center">
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;
