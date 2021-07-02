import { ref, watchEffect } from 'vue';
// import * as  todoStorage from '../util/todoStorage'
import { save,generateId } from '../util/todoStorage';
export default function useNewTodo(todosRef) {
    const newTodoRef = ref("");  // 新任务的标题
    const addTodo = () => {  // 新增任务的方法
        const value = newTodoRef.value && newTodoRef.value.trim();
        if(!value){
            return
        }
        // 生成一个任务对象，将其加入到任务列表中
        const todo = {
            title: value,
            completed: false,  // 任务是否完成
            id: generateId()  // 任务的唯一id
        }
        todosRef.value.push(todo)
        newTodoRef.value = "";
        console.log('新增数据：',todo);
    }
    return {
        newTodoRef,
        addTodo
    }
}