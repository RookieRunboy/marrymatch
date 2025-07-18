import { defineStore } from 'pinia'
import { ref } from 'vue'
import { configAPI } from '@/services/apiService'

export const useAppStore = defineStore('app', () => {
  // 状态
  const loading = ref(false)
  const theme = ref('light')
  const language = ref('zh-CN')
  const scoreConfig = ref({
    weights: {
      age: 0.15,
      salary: 0.25,
      education: 0.20,
      workUnit: 0.15,
      beijingHukou: 0.10,
      beijingHouse: 0.10,
      savings: 0.05
    },
    educationScores: {
      '高中及以下': 60,
      '大专': 70,
      '本科': 80,
      '硕士': 90,
      '博士': 100
    },
    workUnitScores: {
      '私企': 70,
      '外企': 80,
      '国企': 85,
      '事业单位': 90,
      '公务员': 95
    }
  })
  const systemConfig = ref({
    appName: 'MARRYMATCH',
    version: '1.0.0',
    maxHistoryRecords: 100,
    autoSave: true
  })
  const notifications = ref([])

  // 动作
  const setLoading = (status) => {
    loading.value = status
  }

  const setTheme = (newTheme) => {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    // 应用主题到document
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const setLanguage = (newLanguage) => {
    language.value = newLanguage
    localStorage.setItem('language', newLanguage)
  }

  const loadScoreConfig = async () => {
    try {
      setLoading(true)
      const config = await configAPI.getScoreConfig()
      scoreConfig.value = { ...scoreConfig.value, ...config }
    } catch (error) {
      console.error('加载评分配置失败:', error)
      addNotification('加载评分配置失败', 'error')
    } finally {
      setLoading(false)
    }
  }

  const updateScoreConfig = async (newConfig) => {
    try {
      setLoading(true)
      await configAPI.updateScoreConfig(newConfig)
      scoreConfig.value = { ...scoreConfig.value, ...newConfig }
      addNotification('评分配置更新成功', 'success')
    } catch (error) {
      console.error('更新评分配置失败:', error)
      addNotification('更新评分配置失败', 'error')
    } finally {
      setLoading(false)
    }
  }

  const loadSystemConfig = async () => {
    try {
      const config = await configAPI.getSystemConfig()
      systemConfig.value = { ...systemConfig.value, ...config }
    } catch (error) {
      console.error('加载系统配置失败:', error)
    }
  }

  const addNotification = (message, type = 'info', duration = 3000) => {
    const notification = {
      id: Date.now(),
      message,
      type,
      duration
    }
    notifications.value.push(notification)
    
    // 自动移除通知
    if (duration > 0) {
      setTimeout(() => {
        removeNotification(notification.id)
      }, duration)
    }
  }

  const removeNotification = (id) => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }

  const clearNotifications = () => {
    notifications.value = []
  }

  const initializeApp = () => {
    // 从localStorage恢复设置
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
    
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
    
    // 加载配置
    loadSystemConfig()
  }

  return {
    // 状态
    loading,
    theme,
    language,
    scoreConfig,
    systemConfig,
    notifications,
    // 动作
    setLoading,
    setTheme,
    setLanguage,
    loadScoreConfig,
    updateScoreConfig,
    loadSystemConfig,
    addNotification,
    removeNotification,
    clearNotifications,
    initializeApp
  }
})