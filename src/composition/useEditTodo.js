import { ref, computed } from 'vue';

export default function useEditTodo(todosRef) {
    const editingTodoRef = ref(null);  // 当前正在修改的todo
    let originTitle = null;
    const editTodo = (todo) => {  // 编辑修改
        originTitle = todo.title
        editingTodoRef.value =  todo
    }
    const doneTodo = (todo) => {  // 完成修改
        editingTodoRef.value = null;
        const title = todo.title.trim();
        if(title){
            todo.title = title
        }else {
            todosRef.value.splice(todosRef.value.indexOf(todo),1)
        }
    }
    const cancelEdit = (todo) => {  // 取消修改
        editingTodoRef.value = null;
        todo.title = originTitle
    }
    const allDoneRef = computed({
        get() {
            return todosRef.value.filter(it => !it.completed).length === 0
        },
        set(checked) {
            todosRef.value.forEach(it => {
                it.completed = checked
            }) 
        }
    })
    return {
        editingTodoRef,
        editTodo,
        doneTodo,
        cancelEdit,
        allDoneRef
    }
}