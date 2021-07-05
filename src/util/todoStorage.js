const LOCAL_KEY = 'todomvc';


export function fetch() {  // 获取任务列表
    const result = localStorage.getItem(LOCAL_KEY)
    if (result) {
        return JSON.parse(result)
    }
    return [];
}
export function save(todos) {  // 保存任务至任务列表
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos))
}
export function generateId() {  // 生成一个任务的唯一编号：时间戳 + 四位随机数
    return Date.now() + Math.random().toString(16).substr(2, 4)
    // 生成一个 [0,1) 之间的随机数、转为十六进制，截取第二位到第四位
}
export function filter(todos,visibilityRef = 'all') {
    if (visibilityRef === 'all') {
        return todos
    } else if (visibilityRef === 'active') {
        return todos.filter((it) => !it.completed)
    } else if (visibilityRef === 'completed') {
        return todos.filter((it) => it.completed)
    }
    // throw new Error('invald visibility value')
}