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
<div>
    <a href="https://www.loom.com/share/4768ad9da093423c8241223931f9bdeb">
      <p>Pengembangan Aplikasi To-Do List dengan Fitur Baru 📅 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/4768ad9da093423c8241223931f9bdeb">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/4768ad9da093423c8241223931f9bdeb-5c861ddca9116424-full-play.gif#t=0.1">
    </a>
  </div>
