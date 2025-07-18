# MARRYMATCH - 相亲评分系统

## 项目概述

MARRYMATCH是一个基于Vue 3的男女双方评分系统。

## 技术栈

- **前端**: Vue 3, Pinia, Vue Router, Element Plus
- **构建工具**: Vite
- **测试**: Vitest
- **后端**: Java Spring Boot (待开发)

## 项目结构

```
match/
├── frontend/           # Vue 3前端应用
│   ├── src/           # 源代码
│   ├── public/        # 静态资源
│   └── package.json   # 依赖配置
├── backend/           # Java后端应用 (待开发)
├── .kiro/            # 项目文档和规范
│   ├── specs/        # 需求规格
│   └── steering/     # 开发指南
└── .trae/            # 项目规则
```

## 快速开始

### 前端开发

1. 进入前端目录
```bash
cd frontend
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 构建生产版本
```bash
npm run build
```

### 测试

```bash
npm run test
```

## 开发规范

1. **代码风格**: 遵循Vue 3组合式API的最佳实践
2. **命名规范**: 使用驼峰命名法，组件使用PascalCase
3. **文件组织**: 按功能模块组织代码
4. **注释**: 为函数和复杂逻辑添加清晰的注释
5. **文档**: 所有需求文档、设计文档和任务文档必须使用中文编写

## 功能特性

- 📊 量化评分系统
- 🎯 精细化物质条件对比
- 📱 响应式设计
- 🔧 模块化架构
- ✅ 单元测试覆盖

## 贡献指南

请参考 `.kiro/steering/` 目录下的开发指南文档。

## 许可证

本项目仅供学习和研究使用。
