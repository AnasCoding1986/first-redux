import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";

const Tasks = () => {
  const {data,isLoading,isError} = useGetTasksQuery(undefined);
  console.log(data,isLoading,isError);
  
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-bold my-5">This is tasks</p>
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList className="flex w-full justify-between">
            <TabsTrigger value="all" className="w-1/4 text-center">
              All
            </TabsTrigger> 
            <TabsTrigger value="low" className="w-1/4 text-center">
              Low
            </TabsTrigger>
            <TabsTrigger value="medium" className="w-1/4 text-center">
              Medium
            </TabsTrigger>
            <TabsTrigger value="high" className="w-1/4 text-center">
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        
      </div>
    </div>
  );
};

export default Tasks;
