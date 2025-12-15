<template>
  <div class="app-shell">
    <header class="topbar">
      <RouterLink to="/" class="brand">UI_Lanjut Todos</RouterLink>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
.app-shell {
  width: 100%;
}

.topbar {
  width: min(960px, 100%);
  margin: 0 auto 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
}

.brand {
  font-weight: 800;
  color: #111827;
  text-decoration: none;
}

.nav a {
  color: #4b5563;
  text-decoration: none;
  font-weight: 600;
}

.nav a.router-link-active {
  color: #2563eb;
}
</style>
