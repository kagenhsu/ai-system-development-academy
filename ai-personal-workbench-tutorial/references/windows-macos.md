# Windows 與 macOS 操作差異

## 共通前提

先在專案根目錄執行，確認 Node.js 與 npm 可用，再啟動本機 Web。不要把服務啟動當成完整驗收。

## Windows PowerShell

```powershell
node --version
npm --version
npm install
npm run dev
```

停止服務使用 `Ctrl+C`。路徑示例使用 `D:\Projects\ai-personal-workbench`，實際路徑以使用者確認為準。

## macOS Terminal

```bash
node --version
npm --version
npm install
npm run dev
```

停止服務使用 `Control+C`。路徑示例使用 `/Users/username/Projects/ai-personal-workbench`，不要把 Windows 磁碟路徑直接套用。

## 需分開驗收

- 路徑與檔案權限。
- Node.js 版本與啟動腳本。
- 本機服務埠是否被占用。
- 瀏覽器重新整理後資料是否仍存在。
- 桌面封裝的檔案存放、更新與備份方式。

## 安全邊界

不要把密碼、API Key、真實 Vault 路徑或公司機密放進命令列、前端、localStorage 或 Git。正式資料寫入前先用測試資料驗證。
