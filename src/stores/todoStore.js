import { defineStore } from 'pinia'

const STORAGE_KEY = 'ui_lanjut_todos'

function loadTodos() {
  if (typeof localStorage === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : null
  } catch (err) {
    console.warn('Gagal parse todos dari localStorage', err)
    return null
  }
}

function persistTodos(todos) {
  if (typeof localStorage === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } catch (err) {
    console.warn('Gagal menyimpan todos ke localStorage', err)
  }
}

function seedTodos() {
  return [
    {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      title: 'Belajar Vue',
      description: 'Baca dokumentasi dasar Vue 3 dan coba contoh sederhana.',
      dueDate: '2025-12-01',
      priority: 'Tinggi',
      completed: false,
    },
    {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + 1),
      title: 'Review Komponen',
      description: 'Pahami pemisahan komponen TodoInput dan TodoList.',
      dueDate: '2025-12-03',
      priority: 'Sedang',
      completed: false,
    },
    {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + 2),
      title: 'Coba Routing',
      description: 'Tambahkan rute detail untuk setiap todo.',
      dueDate: '2025-12-05',
      priority: 'Rendah',
      completed: true,
    },
  ]
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: loadTodos() || seedTodos(),
  }),
  getters: {
    activeCount: (state) => state.todos.filter((t) => !t.completed).length,
    completedCount: (state) => state.todos.filter((t) => t.completed).length,
    getById: (state) => {
      return (id) => state.todos.find((t) => t.id === id)
    },
  },
  actions: {
    addTodo(payload) {
      const todo = {
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        title: payload.title.trim(),
        description: payload.description.trim(),
        dueDate: payload.dueDate || '',
        priority: payload.priority || 'Sedang',
        completed: false,
      }
      this.todos.push(todo)
      persistTodos(this.todos)
    },
    toggleComplete(id) {
      const todo = this.todos.find((t) => t.id === id)
      if (!todo) return
      todo.completed = !todo.completed
      persistTodos(this.todos)
    },
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id)
      persistTodos(this.todos)
    },
  },
})
