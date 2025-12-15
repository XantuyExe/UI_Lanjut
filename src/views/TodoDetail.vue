<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTodoStore } from '../stores/todoStore'

const route = useRoute()
const router = useRouter()
const store = useTodoStore()

const todo = computed(() => store.getById(route.params.id))

function toggle() {
  if (!todo.value) return
  store.toggleComplete(todo.value.id)
}

function removeTodo() {
  if (!todo.value) return
  store.removeTodo(todo.value.id)
  router.push('/')
}
</script>

<template>
  <main class="page">
    <div class="card">
      <div class="card__head">
        <div class="eyebrow">Detail Todo</div>
        <RouterLink class="link" to="/">← Kembali ke daftar</RouterLink>
      </div>

      <div v-if="todo" class="detail">
        <div class="detail__title">
          <span class="pill" :class="todo.completed ? 'pill--done' : 'pill--active'">
            {{ todo.completed ? 'Selesai' : 'Aktif' }}
          </span>
          <h1>{{ todo.title }}</h1>
        </div>

        <p class="desc">{{ todo.description || 'Tidak ada deskripsi.' }}</p>

        <dl class="meta">
          <div>
            <dt>Prioritas</dt>
            <dd>{{ todo.priority || 'Sedang' }}</dd>
          </div>
          <div>
            <dt>Due Date</dt>
            <dd>{{ todo.dueDate || 'Tidak ditentukan' }}</dd>
          </div>
        </dl>

        <div class="actions">
          <button type="button" @click="toggle">
            {{ todo.completed ? 'Tandai belum selesai' : 'Tandai selesai' }}
          </button>
          <button class="ghost" type="button" @click="removeTodo">Hapus</button>
        </div>
      </div>

      <div v-else>
        <p>Todo tidak ditemukan.</p>
        <RouterLink class="link" to="/">Kembali</RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.page {
  width: min(800px, 100%);
  margin: 0 auto;
}

.card {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(16, 24, 40, 0.08);
  border: 1px solid #e5e7eb;
}

.card__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
  color: #778195;
}

.link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}

.detail__title h1 {
  margin: 8px 0 12px 0;
}

.desc {
  color: #4a5568;
  margin: 0 0 12px 0;
}

.meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin: 0 0 16px 0;
}

dt {
  color: #6b7280;
  font-size: 13px;
}

dd {
  margin: 2px 0 0 0;
  font-weight: 600;
}

.pill {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid transparent;
}

.pill--done {
  background: #ecfdf3;
  color: #0f9b48;
  border-color: #a2e5b9;
}

.pill--active {
  background: #eef2ff;
  color: #4338ca;
  border-color: #c7d2fe;
}

.actions {
  display: flex;
  gap: 10px;
}

button {
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  background: #2563eb;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background: #1d4ed8;
}

button.ghost {
  background: #fff;
  color: #d92d20;
  border: 1px solid #fca5a5;
}

button.ghost:hover {
  background: #fff1f2;
}
</style>
