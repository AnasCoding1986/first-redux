import { selectFilter, selectTasks } from "@/redux/features/counter/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";


const Tasks = () => {

    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilter);
    console.log(tasks);
    console.log(filter);
    

    return (
        <div>
            <p>This is tasks</p>
        </div>
    );
};

export default Tasks;