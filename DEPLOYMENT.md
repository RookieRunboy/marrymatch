# 项目部署说明

## 已上传的文件

本次上传包含了项目的核心文件：

### 配置文件
- `README.md` - 项目说明文档
- `.gitignore` - Git忽略文件配置
- `frontend/package.json` - 前端依赖配置
- `frontend/vite.config.js` - Vite构建配置
- `frontend/index.html` - 应用入口HTML

### 核心代码
- `frontend/src/main.js` - Vue应用入口
- `frontend/src/App.vue` - 主应用组件
- `frontend/src/router/index.js` - 路由配置
- `frontend/src/stores/appStore.js` - Pinia状态管理

### 文档
- `docs/01-project-overview.md` - 项目概述文档

## 下一步操作

1. **克隆仓库到本地**：
   ```bash
   git clone https://github.com/RookieRunboy/marrymatch.git
   cd marrymatch
   ```

2. **安装依赖**：
   ```bash
   cd frontend
   npm install
   ```

3. **启动开发服务器**：
   ```bash
   npm run dev
   ```

## 剩余文件上传

由于GitHub API的限制，还有一些文件需要手动上传或通过Git推送：

- 其他Vue组件文件 (`frontend/src/components/`, `frontend/src/views/`)
- 服务层文件 (`frontend/src/services/`)
- 常量定义文件 (`frontend/src/constants/`)
- 项目文档 (`.kiro/` 目录下的文档)
- 后端代码 (`backend/` 目录)

建议使用Git命令行工具将本地完整项目推送到GitHub仓库。