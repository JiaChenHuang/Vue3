const LOCAL_KEY = 'todomvc';


export function fetch() {
    const result = localStorage.getItem(LOCAL_KEY)
    if (result) {
        return JSON.parse(result)
    }
    return [];
}
export function save(todos) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos))
}