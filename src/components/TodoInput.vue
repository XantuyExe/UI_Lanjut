<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['add-todo'])

const form = reactive({
  title: '',
  description: '',
  dueDate: '',
  priority: 'Sedang',
})

function reset() {
  form.title = ''
  form.description = ''
  form.dueDate = ''
  form.priority = 'Sedang'
}

function kirim() {
  const title = form.title.trim()
  if (!title) return

  emit('add-todo', {
    title,
    description: form.description.trim(),
    dueDate: form.dueDate,
    priority: form.priority,
  })

  reset()
}
</script>

<template>
  <form class="form" @submit.prevent="kirim">
    <label class="field">
      <span>Judul</span>
      <input v-model="form.title" placeholder="Tambah todo..." />
    </label>
    <label class="field">
      <span>Deskripsi</span>
      <textarea
        v-model="form.description"
        rows="2"
        placeholder="Apa yang perlu dilakukan?"
      />
    </label>
    <div class="grid">
      <label class="field">
        <span>Due date</span>
        <input v-model="form.dueDate" type="date" />
      </label>
      <label class="field">
        <span>Prioritas</span>
        <select v-model="form.priority">
          <option>Sedang</option>
          <option>Tinggi</option>
          <option>Rendah</option>
        </select>
      </label>
    </div>
    <div class="actions">
      <button type="submit">Tambah</button>
      <button type="button" class="ghost" @click="reset">Bersihkan</button>
    </div>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 600;
  color: #111827;
}

.field span {
  font-size: 14px;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d8dce8;
  font-size: 14px;
  background: #f7f8fc;
}

textarea {
  resize: vertical;
  min-height: 64px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.actions {
  display: flex;
  gap: 10px;
}

button {
  padding: 10px 14px;
  border-radius: 10px;
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
  color: #4b5563;
  border: 1px solid #e5e7eb;
}
</style>
