---
status: confirmed
version: 1.0
updated: 2026-09-01
---

# TRD：AI 個人工作台教學網站

## 技術邊界

- 使用原生 HTML、CSS、JavaScript，不引入框架或第三方追蹤。
- 網站可由靜態 HTTP Server 提供。
- 進度只保存於瀏覽器 localStorage，鍵名固定為 `ai-personal-workbench-tutorial-progress-v1`。
- 圖片使用專案內 Logo 與 SVG 圖卡。

## 前端資料模型

```js
{
  id: Number,
  label: String,
  title: String,
  summary: String,
  goal: String,
  output: String[],
  prompt: String
}
```

## 進度資料

```js
completed = Number[]
```

只保存已勾選的階段編號。資料不存在、格式錯誤或 localStorage 不可用時，使用空集合繼續顯示網站。

## 路由與元件

本輪是多頁靜態教學網站，不建立後端 API。每個主題都有獨立 HTML 網址，主要元件為：

- Header 導覽。
- Hero 與品牌 Logo。
- 快速上手卡。
- 工作台／駕駛艙比較卡。
- 十階段 `details` 看板。
- 提示詞選擇器與複製按鈕。
- Windows／macOS／Web 平台切換器。
- 驗收證據卡。

## 安全與相容性

- 不接收或傳送正式工作資料。
- 不保存密碼、Token、API Key 或 Vault 路徑。
- 所有使用者可見文字以 `textContent` 或靜態模板呈現。
- 需檢查 JavaScript 語法、靜態檔案引用、鍵盤操作與窄螢幕版面。
