export interface ITask  {
    id: string; // Unique identifier for the task
    title: string; // Title of the task
    description: string; // Description of the task
    dueDate: string; // Due date in "YYYY-MM" format
    isCompleted: boolean; // Completion status of the task
    priority: "high" | "medium" | "low"; // Priority of the task
};