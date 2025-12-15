# UI_Lanjut — Todo App (Routing + Pinia)

Proyek ini memperluas todo list dasar dengan state management Pinia dan routing Vue Router.

## Cara jalan
```bash
npm install
npm run dev
```

## Fitur baru
- State global dengan Pinia (`src/stores/todoStore.js`) dan persistensi localStorage.
- Routing Vue Router: halaman utama (`/`) dan halaman detail per todo (`/todo/:id`).
- Todo sekarang punya deskripsi, due date, prioritas, status selesai/aktif.
- Halaman detail memungkinkan toggle status dan hapus todo.

## Struktur utama
- `src/router/index.js` — definisi rute.
- `src/stores/todoStore.js` — state todo + actions.
- `src/views/HomeView.vue` — form tambah todo dan daftar todo.
- `src/views/TodoDetail.vue` — detail tiap todo.
- `src/components/TodoInput.vue` — form todo baru.
- `src/components/TodoList.vue` — daftar dengan tautan detail dan aksi.

## Loom
<div style="position: relative; padding-bottom: 43.125%; height: 0;"><iframe src="https://www.loom.com/embed/4768ad9da093423c8241223931f9bdeb" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
