import { ref, onMounted, onUnmounted, computed } from 'vue';
import { filter } from '../util/todoStorage'
const validHash = ['all', 'active', 'completed'];
export default function useFilter(todosRef) {
    const visibilityRef = ref('all');

    const onHashChange = (e) => {
        const hash = location.hash.replace(/#\/?/, '');
        if (validHash.includes(hash)) {
            visibilityRef.value = hash
        } else {
            location.hash = "";
            visibilityRef.value = "all"
        }
    }
    // 1、组件挂在完成的生命周期
    onMounted(() => {
        window.addEventListener("hashchange", onHashChange)

    });
    // 2、组件销毁过后的生命周期
    onUnmounted(() => {
        window.removeEventListener("hashchange", onHashChange)
    });
    const filteredTodosRef = computed(() => {  // 筛选列表
        return filter(todosRef.value, visibilityRef.value)
    });
    const remainingRef = computed(() => {  // 未完成项
        return filter(todosRef.value, "active").length
    });
    const completedRef = computed(() => {
        return filter(todosRef.value,'completed').length
    });
    return {
        visibilityRef,
        filteredTodosRef,
        remainingRef,
        completedRef
    }
}