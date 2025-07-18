<template>
  <div id="app">
    <AppNavigation />
    <main class="main-content">
      <router-view />
    </main>
    
    <!-- 全局通知 -->
    <div class="notifications">
      <el-alert
        v-for="notification in appStore.notifications"
        :key="notification.id"
        :title="notification.message"
        :type="notification.type"
        :closable="true"
        @close="appStore.removeNotification(notification.id)"
        class="notification-item"
      />
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import AppNavigation from './components/AppNavigation.vue'
import { useAppStore } from './stores/appStore'

export default {
  name: 'App',
  components: {
    AppNavigation
  },
  setup() {
    const appStore = useAppStore()
    
    onMounted(() => {
      appStore.initializeApp()
    })
    
    return {
      appStore
    }
  }
}
</script>

<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  background-color: #f5f5f5;
  min-height: calc(100vh - 60px);
}

.notifications {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 9999;
  max-width: 400px;
}

.notification-item {
  margin-bottom: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

body {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

/* 主题样式 */
[data-theme="dark"] {
  background-color: #1a1a1a;
  color: #ffffff;
}

[data-theme="dark"] .main-content {
  background-color: #1a1a1a;
}

[data-theme="dark"] .navigation {
  background-color: #2d2d2d;
  border-bottom-color: #404040;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .notifications {
    right: 10px;
    left: 10px;
    max-width: none;
  }
  
  .main-content {
    min-height: calc(100vh - 50px);
  }
}
</style>