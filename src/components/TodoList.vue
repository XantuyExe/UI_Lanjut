<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['remove-item', 'toggle-item'])
</script>

<template>
  <ul class="todo-list">
    <li v-for="item in items" :key="item.id" :class="{ done: item.completed }">
      <div class="todo">
        <div class="todo__head">
          <span class="status" :class="item.completed ? 'status--done' : 'status--active'">
            {{ item.completed ? 'Selesai' : 'Aktif' }}
          </span>
          <RouterLink class="title" :to="`/todo/${item.id}`">{{ item.title }}</RouterLink>
        </div>
        <p class="desc">{{ item.description || 'Tidak ada deskripsi' }}</p>
        <div class="meta">
          <span class="pill">Prioritas: {{ item.priority || 'Sedang' }}</span>
          <span class="pill">Due: {{ item.dueDate || 'Tidak ditentukan' }}</span>
        </div>
      </div>
      <div class="actions">
        <button type="button" @click="emit('toggle-item', item.id)">
          {{ item.completed ? 'Belum selesai' : 'Tandai selesai' }}
        </button>
        <button class="ghost" type="button" @click="emit('remove-item', item.id)">Hapus</button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.todo-list li {
  background: #fffaf0;
  padding: 12px;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: flex-start;
  border: 1px solid #ffe3b3;
}

.todo-list li.done {
  opacity: 0.85;
}

.todo__head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.title {
  font-weight: 700;
  color: #111827;
  text-decoration: none;
}

.title:hover {
  color: #2563eb;
}

.desc {
  margin: 0 0 6px 0;
  color: #4b5563;
}

.meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 13px;
}

.pill {
  background: #fff;
  border-radius: 10px;
  padding: 4px 8px;
  border: 1px solid #f0d48c;
}

.status {
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  font-weight: 700;
}

.status--active {
  background: #eef2ff;
  color: #4338ca;
}

.status--done {
  background: #ecfdf3;
  color: #047857;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

button {
  padding: 8px 10px;
  border-radius: 8px;
  border: none;
  background: #2563eb;
  color: #fff;
  font-weight: 700;
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

@media (max-width: 640px) {
  .todo-list li {
    grid-template-columns: 1fr;
  }

  .actions {
    flex-direction: row;
  }
}
</style>
