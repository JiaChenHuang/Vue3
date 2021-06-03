import { ref, watchEffect } from 'vue';
import * as  todoStorage from '../util/todoStorage'
export default function useNewTodo() {
    const newTodoRef = ref("");  // 新任务的标题
    return {
        newTodoRef
    }
}