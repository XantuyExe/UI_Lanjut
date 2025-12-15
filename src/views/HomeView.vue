<script setup>
import { computed } from 'vue'
import { useTodoStore } from '../stores/todoStore'
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'

const store = useTodoStore()

const todos = computed(() => store.todos)
const activeCount = computed(() => store.activeCount)
const completedCount = computed(() => store.completedCount)

function handleAdd(payload) {
  store.addTodo(payload)
}

function handleRemove(id) {
  store.removeTodo(id)
}

function handleToggle(id) {
  store.toggleComplete(id)
}
</script>

<template>
  <main class="page">
    <header class="page__header">
      <div>
        <p class="eyebrow">Extend Your To-Do</p>
        <h1>Todos dengan Routing & Pinia</h1>
        <p class="lead">
          Tambah tugas, buka halaman detail, dan kelola status dengan state global.
        </p>
      </div>
      <div class="stats">
        <div class="stat">
          <span>Aktif</span>
          <strong>{{ activeCount }}</strong>
        </div>
        <div class="stat">
          <span>Selesai</span>
          <strong>{{ completedCount }}</strong>
        </div>
      </div>
    </header>

    <section class="card">
      <div class="card__head">
        <div>
          <p class="eyebrow">Fitur baru</p>
          <h2>Buat todo dengan deskripsi, prioritas, dan due date</h2>
        </div>
      </div>
      <TodoInput @add-todo="handleAdd" />
    </section>

    <section class="card">
      <div class="card__head">
        <div>
          <p class="eyebrow">Daftar</p>
          <h2>Todo terkini</h2>
        </div>
      </div>
      <TodoList
        :items="todos"
        @remove-item="handleRemove"
        @toggle-item="handleToggle"
      />
    </section>
  </main>
</template>

<style scoped>
.page {
  width: min(960px, 100%);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.page__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 0;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
  color: #778195;
  margin: 0 0 4px 0;
}

.lead {
  margin: 0;
  color: #4a5568;
}

.card {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(16, 24, 40, 0.08);
  border: 1px solid #e5e7eb;
}

.card__head h2 {
  margin: 0;
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 10px;
}

.stat {
  background: #f5f7fb;
  border-radius: 12px;
  padding: 12px 16px;
  border: 1px solid #e0e5f2;
}

.stat span {
  display: block;
  color: #6b7280;
  font-size: 13px;
}

.stat strong {
  font-size: 24px;
  color: #111827;
}

@media (max-width: 720px) {
  .page__header {
    flex-direction: column;
  }
  .stats {
    width: 100%;
  }
}
</style>
