# 網頁插圖資產總表 v1.1

狀態：UI 設計階段的素材基線。先盤點、不搬檔、不刪檔；新圖片必須先登錄本表，才能接入網頁。

## 使用規則

- `-source.png`、角色三視圖、手勢庫及候選稿只供製作參考，不直接放進網頁。
- 網站使用隼鳥時，只可用 `mascot/falcon-v2/transparent/` 內有 alpha 通道的版本。
- 隼鳥是 AI 教學者；Eddy 是人類學習者。雙角色畫面只能有這兩位。
- 任何頁面重要資訊必須由 HTML 文字與 CTA 提供；插圖只用於理解與情境。

## 75 頁網頁 × 插圖對照

本表依 `prototype/*.html` 與 `app.js` 的實際渲染邏輯整理。共 75 頁：首頁 1、階段頁 11、名詞頁 47、其他功能頁 16。

| 頁面群組 | 頁數 | 實際插圖／角色動作 | 狀態 |
| --- | ---: | --- | --- |
| `index.html` | 1 | Logo、11 張功能插圖、`falcon-teaches-eddy-development-roadmap-v2.png`、隼鳥教 Eddy 互動圖、隼鳥基準／快樂圖 | 已接入 |
| `stage-00.html`～`stage-03.html` | 4 | 隼鳥基準／靈感圖 | 已接入 |
| `stage-04.html`～`stage-07.html` | 4 | 隼鳥專注圖 | 已接入 |
| `stage-08.html`～`stage-10.html` | 3 | 隼鳥專注／驗證圖 | 已接入 |
| `term-*.html` | 47 | 隼鳥基準／靈感圖＋`term-learning-flow.svg` | 已接入；共用視覺 |
| `android-publish.html`、`ios-publish.html`、`complete.html` | 3 | 隼鳥快樂／慶祝圖 | 已接入 |
| `mobile-app.html`、`model-guide.html`、`templates.html` | 3 | 隼鳥專注圖；模型指南另有 `agent-model-relationship.svg` | 已接入 |
| `progress.html`、`pwa-install.html` | 2 | 隼鳥專注／驗證圖 | 已接入 |
| `roadmap.html`、`glossary.html`、`prompts.html`、`case.html`、`faq.html`、`safety.html`、`maintainer-guide.html` | 7 | 隼鳥基準／靈感圖；`roadmap.html` 另有開發路線流程圖 | 已接入 |
| `credits.html` | 1 | 無獨立頁面識別碼，實際回退成首頁渲染 | **待修正**；不能當作正常獨立頁盤點 |

### 名詞頁完整清單（47）

`term-acceptance-criteria.html`、`term-acceptance.html`、`term-agent-skill.html`、`term-ai-assistant.html`、`term-api.html`、`term-automated-testing.html`、`term-backend.html`、`term-backup.html`、`term-component.html`、`term-data-model.html`、`term-data-persistence.html`、`term-deployment.html`、`term-design-system.html`、`term-drawer.html`、`term-empty-state.html`、`term-exception-scenario.html`、`term-frontend.html`、`term-github-discussions.html`、`term-github-pages.html`、`term-language-model.html`、`term-level-one-module.html`、`term-level-three-subfeature.html`、`term-level-two-feature.html`、`term-milestone.html`、`term-modal.html`、`term-non-functional-requirements.html`、`term-normal-scenario.html`、`term-official-source.html`、`term-prd.html`、`term-priority.html`、`term-prototype.html`、`term-regression-testing.html`、`term-requirement-scope.html`、`term-responsive-design.html`、`term-restore.html`、`term-target-user.html`、`term-task-dependency.html`、`term-test-evidence.html`、`term-token.html`、`term-trd.html`、`term-ui.html`、`term-use-scenario.html`、`term-verification-date.html`、`term-version-control.html`、`term-vertical-slice.html`、`term-web.html`、`term-workspace.html`。

### 其他功能頁完整清單（16）

`android-publish.html`、`case.html`、`complete.html`、`credits.html`、`faq.html`、`glossary.html`、`ios-publish.html`、`maintainer-guide.html`、`mobile-app.html`、`model-guide.html`、`progress.html`、`prompts.html`、`pwa-install.html`、`roadmap.html`、`safety.html`、`templates.html`。

## 首頁與功能卡插圖（已接入）

| 圖片 | 對應網頁位置 | 替代文字／用途 | 規格 |
| --- | --- | --- | --- |
| `illustrations/personal-workbench-v1.png` | 首頁系統類型卡 | 個人工作台插圖 | 1254×1254、透明 |
| `illustrations/management-system-v1.png` | 首頁系統類型卡 | 管理系統插圖 | 1254×1254、透明 |
| `illustrations/teaching-site-v1.png` | 首頁系統類型卡 | 教學網站插圖 | 1254×1254、透明 |
| `illustrations/data-organizer-v1.png` | 首頁系統類型卡 | 資料整理工具插圖 | 1254×1254、透明 |
| `illustrations/android-app-v1.png` | 首頁系統類型卡 | Android App 插圖 | 1254×1254、透明 |
| `illustrations/ios-app-v1.png` | 首頁系統類型卡 | iOS App 插圖 | 1254×1254、透明 |
| `illustrations/glossary-v1.png` | 首頁學習入口 | 專有名詞說明插圖 | 1254×1254、透明 |
| `illustrations/model-choice-v1.png` | 首頁學習入口 | 模型選擇插圖 | 1254×1254、透明 |
| `illustrations/home-screen-v1.png` | 首頁手機發布卡 | 加入主畫面插圖 | 1254×1254、透明 |
| `illustrations/android-release-v1.png` | 首頁手機發布卡 | Android 發布插圖 | 1254×1254、透明 |
| `illustrations/ios-release-v1.png` | 首頁手機發布卡 | iOS 發布插圖 | 1254×1254、透明 |

## 流程與系統說明圖（已接入）

| 圖片 | 對應網頁位置 | 用途 | 規格 |
| --- | --- | --- | --- |
| `diagrams/development-roadmap.svg` | 首頁、學習路線 | 十一階段開發流程 | 1160×760 SVG |
| `diagrams/agent-model-relationship.svg` | 模型指南 | Agent、模型與環境關係 | 1080×610 SVG |
| `diagrams/term-learning-flow.svg` | 名詞頁 | 名詞理解與返回階段流程 | 1040×430 SVG |
| `diagrams/falcon-teaches-eddy-development-roadmap-v2.png` | 首頁開發路線視覺 | 亮色底；隼鳥講解、Eddy 跟著筆記的 00–10 流程 | 1672×941、非透明 |

### 2026-09-06 角色情境流程圖

- `diagrams/stages/stage-00-flow.png`～`stage-10-flow.png`：十一個學習階段各一張；每張都有階段物件、是／否判斷與不同人物動作。
- `skill-activation-flow.png`、`agent-collaboration-flow.png`、`agent-model-relationship-flow.png`：Skill 啟動、子 Agent 分工、Agent／模型／環境關係。
- `term-learning-flow.png`、`personal-workbench-growth-flow.png`、`homepage-prototype-flow.png`：名詞學習、案例成長與首頁原型檢查。
- `mobile-path-choice.png`、`pwa-preparation-flow.png`、`android-publish-flow.png`、`ios-publish-flow.png`：手機選路、加入主畫面及兩個商店發布流程。
- 全部為 1672×940 或接近比例的 16:9 PNG；網站提供原尺寸連結及 HTML 等價文字。

## 角色插圖（已接入）

| 圖片 | 對應網頁位置 | 角色分工 | 規格 |
| --- | --- | --- | --- |
| `characters/eddy/falcon-teaches-eddy-ai-v1.png` | 首頁「AI LEARNING GUIDE」 | 隼鳥指向 AI 步驟教學；Eddy 思考學習 | 1536×1024、淺色卡片背景 |
| `mascot/falcon-v2/transparent/falcon-master-v2.png` | 首頁 Hero／一般教學頁 | 隼鳥基準、靈感引導 | 1024×1536、透明 |
| `mascot/falcon-v2/transparent/falcon-focused-v2.png` | 模型、階段、驗證相關頁 | 隼鳥專注／確認 | 1024×1536、透明 |
| `mascot/falcon-v2/transparent/falcon-happy-v2.png` | 完成與慶祝頁 | 隼鳥完成／慶祝 | 1024×1536、透明 |

## 製作參考（禁止直接接入）

| 資產群組 | 用途 | 規則 |
| --- | --- | --- |
| `illustrations/*-source.png` | 11 張功能插圖的來源檔 | 只供重新裁切或再製，不做網站引用。 |
| `characters/eddy/eddy-character-design-sheet-v1.png`、`v2.png` | Eddy 外觀、服裝、臉部表情與配件母版 | 不作情境插圖。 |
| `characters/eddy/eddy-turnaround-detail-v2.png` | Eddy 正面、側面、背面細節 | 後續動作與建模依據。 |
| `characters/eddy/eddy-hand-pose-library-v1.png` | Eddy 八種手勢 | 左手手錶、右手無錶、五指自然。 |
| `mascot/falcon-v2/*.png`（非 `transparent/`） | 隼鳥表情候選稿 | 不接入網站；網站只取透明輸出。 |
| `diagrams/falcon-development-roadmap-v1.png` | 舊版深色流程圖 | 已由亮色 v2 取代；保留作為可回復參考，不直接接入。 |
| `mascot/falcon-v2/transparent/falcon-angry-v2.png`、`worried-v2.png`、`pleading-v2.png` | 隼鳥情緒庫 | 已備妥但尚未接入；使用前須有對應內容情境。 |

## 不接入候選

- `characters/eddy/eddy-falcon-learning-interaction-v1.png`：角色權責相反，隼鳥不是學習者。
- `characters/eddy/eddy-falcon-ai-teaching-interaction-v1.png`：角色關係正確，但棋盤格背景被畫進圖片。

## 完整教學圖文提案登錄（2026-09-05）

以下僅是待審閱的製作項目，沒有新檔案、沒有接入頁面；不可併入上方「已接入」清單。每個 ID 的內容、用途、放置章節與驗收依 [整站逐頁大綱](teaching-site-outline.md)。

| 提案 ID | 用途／頁面 | 製作型態 | 狀態 |
| --- | --- | --- | --- |
| D-SK01、D-SK02 | 00／模型指南的工具與 Skill 分工；05 的設計 Skill 選路 | 說明圖＋HTML 等價文字，依 [Skill 教學表](skill-teaching-map.md) | 待內容確認／待製作 |
| S-SK01、S-SK02 | 各平台查找／取得／啟動，以及成功與未生效處理 | 實際操作截圖組；平台與版本分開 | 未擷取、未實測 |
| D-AG01–D-AG03 | Agent／Skill／工具關係、單／多 Agent選路、委派至整合驗證流程 | 說明圖＋HTML 等價文字，依 [子 Agent 教學表](subagent-teaching-map.md) | 待內容確認／待製作 |
| S-AG01–S-AG03 | App／CLI 子 Agent操作與成功／失敗案例 | 實際操作截圖組；平台與版本分開 | 未擷取、未實測 |
| D00–D10、D09V | 對應 00–10 課的工作空間、需求、功能、規則、原型、UI、資料流、計畫、開發、驗收、發布及版本回復 | 角色情境 PNG＋HTML 等價文字 | D00–D10 已接入；D09V 另案 |
| D-H、D-P、D-F、D-S、D-M | 產物交接、提示詞使用、故障分類、安全示例、手機選路 | 說明圖／文字對照；多頁共用 | 待內容確認／待製作 |
| D-A、D-I | Android／iOS 建置、測試與發布分支 | 角色情境 PNG＋HTML 等價文字 | 已接入 |
| S00、S04、S05、S08、S09、S10 | 準備、原型、UI、開發、驗收、使用／發布的實際案例畫面組 | 實際操作截圖＋步驟標註 | 待案例／版本確認，未擷取 |
| S-P、S-A、S-I | 主畫面安裝與 Android／iOS 工具操作 | 實機／真實工具截圖組 | 待平台與測試環境確認，未擷取 |

沿用既有 Logo、功能卡圖、角色母版、亮色總路線與 Agent 關係圖；名詞頁按大綱共用相關知識圖，不新增 47 張裝飾圖。新圖完成後須在本表補實際路徑、圖說、alt、尺寸、版本及檢查結果，才能接入。

## UI 第五步檢查

- [ ] 每一張接入圖片都存在、尺寸正確且沒有壞圖。
- [ ] 功能卡只用同名的透明 `-v1.png`，不使用 `-source.png`。
- [ ] 角色圖符合「隼鳥教學、Eddy 學習」，不出現展翼手臂。
- [ ] 桌面、平板、手機的圖片不遮文字、按鈕或角色臉部。
- [ ] 新插圖先登錄本表，再修改頁面引用。
