const logoPath = "assets/logo.png"

const stages = [
  { id: "00", slug: "stage-00.html", title: "開發準備", summary: "選擇 AI 工具、模型策略與工作空間", input: "一個想做系統的大概方向", output: "工具與專案工作空間", terms: ["AI 助手", "大模型", "Token", "工作空間"], steps: ["依讀檔、寫檔、圖片與執行能力選工具", "重要規格使用高能力模型，大量局部工作使用合適的執行型模型", "建立獨立專案資料夾並讓 AI 開啟正確工作空間", "移除密碼、金鑰、個資與公司機密"], prompt: "請協助我檢查開發前準備\n\n我的系統方向：＿＿＿＿＿＿＿＿\n我的電腦平台：Windows／macOS\n我使用的 AI 工具：＿＿＿＿＿＿＿＿\n\n請逐項確認工具是否能讀寫檔案、查看圖片、執行程式與保存專案文件\n發現缺少條件時只列出修正方法，不要開始開發" },
  { id: "01", slug: "stage-01.html", title: "需求訪談", summary: "讓 AI 一題一題問出真正需求", input: "系統方向與初步想法", output: "完整需求文件", terms: ["目標使用者", "使用情境", "需求範圍", "驗收條件"], steps: ["先說明想做哪一類系統", "要求 AI 每次只問一個問題", "回答模糊時繼續追問具體情境", "資訊足夠後輸出完整需求文件"], prompt: "請用一問一答方式收集我想開發系統的需求\n每次只輸出一個問題，等我回覆後再問下一題\n提問需涵蓋目標使用者、真實痛點、使用場景、需要與不要的功能、運行設備、參考產品與特殊限制\n我回答模糊時請追問細節\n資訊足夠後輸出一份結構完整的需求文件讓我確認\n\n我準備做的系統：＿＿＿＿＿＿＿＿\n我的初步想法：＿＿＿＿＿＿＿＿\n\n現在開始第一個問題" },
  { id: "02", slug: "stage-02.html", title: "功能清單", summary: "依模組、功能、子功能建立產品地基", input: "已確認需求文件", output: "完整三級功能清單", terms: ["一級模組", "二級功能", "三級子功能", "P0／P1／P2"], steps: ["把需求拆成一級模組、二級功能與三級子功能", "標記核心必做、次要迭代與未來規劃", "每項說明解決的使用者問題", "局部修正後要求重新輸出完整清單"], prompt: "你是資深產品經理，請根據已確認需求輸出完整功能清單\n\n要求\n1 依一級模組、二級功能、三級子功能拆分\n2 標記核心必做、次要迭代、未來規劃\n3 每項寫簡短能力描述與解決的使用者問題\n4 不寫 UI 位置、配色與動畫\n5 使用 Markdown 清楚分層\n6 缺少資訊標記待確認，不自行增加業務規則\n7 輸出完整版本，不只列出本次修改部分" },
  { id: "03", slug: "stage-03.html", title: "PRD", summary: "把功能清單轉成可評審的產品規則", input: "完整功能清單", output: "產品需求文件 PRD", terms: ["PRD", "正常場景", "異常場景", "非功能需求"], steps: ["說明文件背景、目的與適用範圍", "逐項定義輸入、流程、輸出與規則", "補齊正常、空資料與錯誤情境", "建立可交付測試的驗收標準"], prompt: "你是資深產品經理，請把已確認功能清單轉成標準 PRD\n逐項說明輸入、操作流程、輸出、規則、限制、正常場景與異常場景\n文件需包含背景、目的、受眾、產品目標、功能需求、業務流程、權限、非功能需求、上線約束、排期與備註\n資訊不足時標記【需產品確認】，不要自行刪減已確認需求" },
  { id: "04", slug: "stage-04.html", title: "互動原型", summary: "先看清楚頁面與操作再寫程式", input: "已確認 PRD", output: "高保真原型結構", terms: ["原型", "元件", "彈窗", "抽屜"], steps: ["列出全部頁面與全局組件", "定義每個元件的位置、文字與默認狀態", "說明點擊後的跳轉、彈窗與錯誤提示", "只描述原型結構，不描述視覺美化"], prompt: "你是產品原型專家，請嚴格依據 PRD 輸出高保真原型規格\n列出全部頁面、彈窗、抽屜與浮層\n說明每個元件的位置、文案、類型與默認狀態\n寫清楚按鈕點擊結果、頁面跳轉、表單驗證與錯誤提示\n不做 UI 視覺美化描述\nPRD 資訊不足時標記【需產品確認】" },
  { id: "05", slug: "stage-05.html", title: "UI 設計", summary: "把原型轉成一致且可閱讀的介面規格", input: "PRD 與互動原型", output: "UI 規格與完整畫面", terms: ["UI", "設計系統", "響應式", "空狀態"], steps: ["確認資訊層級與內容優先順序", "定義元件、狀態與視覺規則", "補齊桌面與手機寬度", "不為了美化新增產品功能"], prompt: "請根據已確認 PRD 與互動原型輸出完整 UI 設計規格\n必須保持頁面、功能與操作流程一致\n說明資訊層級、元件狀態、空資料、錯誤與響應式行為\n不得新增 PRD 未確認功能\n所有不確定選擇列為待確認" },
  { id: "06", slug: "stage-06.html", title: "TRD", summary: "把產品規則轉成技術施工圖", input: "PRD、原型與 UI 規格", output: "技術需求文件 TRD", terms: ["TRD", "前端", "後端", "API", "資料模型"], steps: ["逐項對照 PRD 功能", "定義前端、後端與資料模型", "列出 API、輸入驗證與錯誤處理", "補充權限、日誌、測試與技術風險"], prompt: "你是資深系統架構師，請把已確認 PRD 轉成 TRD\n逐項列出前端、後端、資料模型、API、輸入驗證、錯誤處理、權限、日誌、測試與風險\n忠實轉換產品需求，不自行新增功能\n不確定的技術選擇列為待確認" },
  { id: "07", slug: "stage-07.html", title: "開發計畫", summary: "把大系統拆成可以逐步驗收的工作", input: "PRD 與 TRD", output: "里程碑與任務清單", terms: ["里程碑", "任務依賴", "垂直切片", "P0"], steps: ["先排最小可驗收垂直切片", "整理任務前後依賴", "每項任務設定驗收條件", "避免一次開發全部功能"], prompt: "請根據 PRD 與 TRD 產生開發實施計畫\n先安排一個可操作、可保存、可驗收的最小垂直切片\n再依前置依賴拆分後續任務\n每項標示輸入、產物、相關檔案、測試與驗收條件" },
  { id: "08", slug: "stage-08.html", title: "Web 開發與測試", summary: "一次只完成一段真實可操作功能", input: "完整文件與開發計畫", output: "可操作 Web 系統", terms: ["Web", "自動測試", "資料持久化", "回歸測試"], steps: ["先交叉檢查全部規格", "每輪只做一個垂直切片", "同步完成程式與測試", "使用實際操作證據確認功能"], prompt: "請先交叉檢查需求、功能清單、PRD、原型、UI、TRD 與開發計畫\n列出衝突、缺失與待確認\n確認後只實作本輪指定垂直切片\n先列修改檔案與驗收條件，再進行開發與測試" },
  { id: "09", slug: "stage-09.html", title: "驗收與版本", summary: "用證據分清楚完成、失敗與待確認", input: "可操作 Web 系統", output: "驗收報告與版本紀錄", terms: ["驗收", "版本管理", "測試證據", "回歸"], steps: ["分開檢查功能、資料、畫面與平台", "保存測試輸出與實際畫面", "每次變更產生完整版本", "未實際檢查的項目標記待確認"], prompt: "請只做驗收，不要修改程式\n分開回報自動測試、功能、資料持久化、指定頁面、桌面與手機寬度\n分類為已通過、失敗、待確認、下一步\n沒有實際操作或畫面證據的項目不得標示為已驗收" },
  { id: "10", slug: "stage-10.html", title: "Web 上線與使用", summary: "公開、備份並進入真實日常使用", input: "已通過驗收的 Web 系統", output: "正式網址與更新流程", terms: ["GitHub Pages", "部署", "備份", "回復"], steps: ["公開前掃描私人資料與金鑰", "建立可回復的正式版本", "完成實際網址與手機驗收", "使用一段時間後再決定桌面與 App 延伸"], prompt: "Web 版本已通過驗收，請產生公開發布與日常使用計畫\n列出發布目標、建置、環境設定、資料備份、版本更新、失敗回復與發布後驗收\n不得把本機可啟動宣稱為正式網站已發布\n正式外部操作前先等待我確認" }
]

const termCatalog = [
  { slug: "ai-assistant", name: "AI 助手", stage: "階段 0", meaning: "能理解指令並協助讀檔、寫檔、看圖、執行與整理工作的開發工具", use: "依任務能力與資料安全需求選擇工具，再開啟正確的專案資料夾", mistake: "只比較模型名稱，卻沒有確認工具能否操作本機專案" },
  { slug: "language-model", name: "大模型", stage: "階段 0", meaning: "AI 助手用來理解文字、圖片與產生內容的核心推理模型", use: "全局規格使用能力較高的模型，大量局部任務再選合適模型", mistake: "把價格或排行榜當成唯一標準，忽略任務類型與圖片能力" },
  { slug: "token", name: "Token", stage: "階段 0", meaning: "模型計算輸入與輸出內容用量的基本單位", use: "用來估算長文件、對話與程式開發可能消耗的模型用量", mistake: "把 Token 直接等同固定字數，忽略語言與模型計算方式不同" },
  { slug: "workspace", name: "工作空間", stage: "階段 0", meaning: "AI 助手目前允許讀取與修改的專案資料夾範圍", use: "每個系統建立獨立資料夾，開始新任務前確認開啟正確位置", mistake: "同時混入私人資料、公司資料與其他專案檔案" },
  { slug: "target-user", name: "目標使用者", stage: "階段 1", meaning: "真正會操作系統並從功能得到價值的人", use: "描述使用者的角色、能力、工作與實際限制", mistake: "用所有人當目標，造成需求無法排序" },
  { slug: "use-scenario", name: "使用情境", stage: "階段 1", meaning: "使用者在特定時間、地點與目的下操作系統的真實狀況", use: "把誰在什麼時候為了什麼事情如何操作寫清楚", mistake: "只列功能名稱，沒有說明功能在哪個情境發生" },
  { slug: "requirement-scope", name: "需求範圍", stage: "階段 1", meaning: "本版本要做、不做與延後處理的明確邊界", use: "先限制第一版，避免開發過程持續增加未確認功能", mistake: "把未來構想全部塞入第一版" },
  { slug: "acceptance-criteria", name: "驗收條件", stage: "階段 1", meaning: "判斷需求是否完成且可使用的可檢查標準", use: "使用前提、操作、預期結果與證據描述完成狀態", mistake: "只寫功能完成，沒有可重複執行的檢查方式" },
  { slug: "level-one-module", name: "一級模組", stage: "階段 2", meaning: "依主要業務目的劃分的最大功能群組", use: "先把系統拆成任務、專案、報表等能力區域", mistake: "把按鈕或單一欄位當成一級模組" },
  { slug: "level-two-feature", name: "二級功能", stage: "階段 2", meaning: "一級模組內能獨立解決一類使用者問題的功能", use: "說明功能能力與處理的問題，不描述畫面位置", mistake: "直接進入配色與排版，漏掉業務能力" },
  { slug: "level-three-subfeature", name: "三級子功能", stage: "階段 2", meaning: "支撐二級功能完成的具體能力與規則", use: "補齊新增、修改、查詢、狀態與限制等細節", mistake: "拆得過細成為程式碼工作，或拆得太粗無法開發" },
  { slug: "priority", name: "P0／P1／P2", aliases: ["P0"], stage: "階段 2 與階段 7", meaning: "依重要性與發布順序區分核心必做、次要迭代與未來規劃", use: "先完成能形成閉環的 P0，再安排 P1 與 P2", mistake: "所有功能都標成 P0，失去排序作用" },
  { slug: "prd", name: "PRD", stage: "階段 3", meaning: "把產品目標、功能規則、流程與驗收條件寫清楚的產品需求文件", use: "讓設計、開發與測試使用同一份確認過的產品規則", mistake: "只複製功能清單，沒有輸入、輸出、限制與異常情境" },
  { slug: "normal-scenario", name: "正常場景", stage: "階段 3", meaning: "資料與操作都符合預期時的主要成功流程", use: "先說清楚正常輸入、操作步驟與成功結果", mistake: "只畫理想流程，沒有驗證結果與資料變化" },
  { slug: "exception-scenario", name: "異常場景", stage: "階段 3", meaning: "缺資料、格式錯誤、重複操作或服務失敗時的處理流程", use: "逐項定義提示、阻擋、重試與資料是否保留", mistake: "只顯示發生錯誤，沒有告訴使用者下一步" },
  { slug: "non-functional-requirements", name: "非功能需求", stage: "階段 3", meaning: "效能、安全、相容性、可用性與維護性等品質要求", use: "使用可以量測或實際驗證的條件描述", mistake: "只寫速度要快、安全要好等無法驗收的文字" },
  { slug: "prototype", name: "原型", stage: "階段 4", meaning: "在正式開發前展示頁面結構、流程與操作結果的可檢查模型", use: "用來確認頁面是否齊全、操作是否閉環與需求是否可理解", mistake: "把漂亮圖片當成可操作原型，沒有跳轉與狀態" },
  { slug: "component", name: "元件", stage: "階段 4", meaning: "畫面中可重複使用且具有特定目的的介面單位", use: "定義按鈕、輸入框、卡片與清單的文字、狀態與行為", mistake: "只寫有一個按鈕，沒有名稱、默認狀態與點擊結果" },
  { slug: "modal", name: "彈窗", stage: "階段 4", meaning: "覆蓋目前畫面並要求使用者先處理內容的介面", use: "適合確認、警告或短表單，必須定義開啟與關閉方式", mistake: "把長流程塞入彈窗，導致手機難以操作" },
  { slug: "drawer", name: "抽屜", stage: "階段 4", meaning: "從畫面側邊或底部滑出的補充操作區域", use: "常用於手機導覽、篩選或不需離開頁面的詳細資料", mistake: "沒有關閉方式或遮罩，讓使用者無法回到原內容" },
  { slug: "ui", name: "UI", stage: "階段 5", meaning: "使用者看見並直接操作的介面內容與視覺呈現", use: "在不改變 PRD 的前提下建立清楚、一致且可閱讀的畫面", mistake: "為了視覺效果自行增加未確認功能" },
  { slug: "design-system", name: "設計系統", stage: "階段 5", meaning: "共用的顏色、文字、間距、元件與狀態規則", use: "讓不同頁面維持一致，也方便後續修改與擴充", mistake: "每頁自行決定樣式，造成操作與視覺不一致" },
  { slug: "responsive-design", name: "響應式", stage: "階段 5", meaning: "介面會依桌面、平板與手機寬度重新排列與縮放", use: "逐一確認導覽、表格、圖卡、按鈕與文字在各寬度可用", mistake: "只把桌面畫面縮小，造成橫向捲動與文字過小" },
  { slug: "empty-state", name: "空狀態", stage: "階段 5", meaning: "系統尚無資料時提供的說明、示意與下一步操作", use: "告訴使用者目前為何沒有內容，以及如何建立第一筆資料", mistake: "只留下空白畫面，讓使用者以為系統故障" },
  { slug: "trd", name: "TRD", stage: "階段 6", meaning: "把產品規則轉成架構、資料、介面、錯誤處理與測試方案的技術需求文件", use: "讓開發者知道各功能如何實作與如何驗證", mistake: "直接選技術，卻沒有逐項對照 PRD 功能" },
  { slug: "frontend", name: "前端", stage: "階段 6", meaning: "在瀏覽器或 App 中呈現畫面並接收使用者操作的部分", use: "依原型與 UI 規格實作元件、狀態與資料顯示", mistake: "只完成外觀，沒有真實資料與錯誤狀態" },
  { slug: "backend", name: "後端", stage: "階段 6", meaning: "處理業務規則、資料存取、權限與系統整合的服務部分", use: "集中保護重要規則並提供前端需要的資料能力", mistake: "把需要保護的金鑰與規則放在瀏覽器前端" },
  { slug: "api", name: "API", stage: "階段 6", meaning: "讓前端、後端或外部服務用固定格式交換資料的介面", use: "定義網址、方法、輸入、輸出、錯誤與權限", mistake: "只有成功範例，沒有驗證失敗與錯誤格式" },
  { slug: "data-model", name: "資料模型", stage: "階段 6", meaning: "資料欄位、型別、關係、狀態與限制的結構定義", use: "確保前端、後端與資料庫對同一份資料理解一致", mistake: "只列欄位名稱，沒有型別、必填、唯一性與關係" },
  { slug: "milestone", name: "里程碑", stage: "階段 7", meaning: "一組工作完成後可展示、驗收或發布的重要節點", use: "每個里程碑都要有明確產物與驗收證據", mistake: "以日期當里程碑，卻沒有可檢查的完成內容" },
  { slug: "task-dependency", name: "任務依賴", stage: "階段 7", meaning: "某項工作開始前必須先完成的文件、功能或決定", use: "安排開發順序並減少等待、重做與衝突", mistake: "多人同時修改相依區域，沒有先確認介面與責任" },
  { slug: "vertical-slice", name: "垂直切片", stage: "階段 7", meaning: "從畫面、規則到資料保存都能完整操作的一小段功能", use: "先做新增一筆資料並在首頁看見等最小可驗收閉環", mistake: "先做完全部畫面，再一次補後端與資料" },
  { slug: "web", name: "Web", stage: "階段 8", meaning: "透過瀏覽器網址開啟並使用的網站或應用系統", use: "先完成跨 Windows、macOS 與手機瀏覽器可用的版本", mistake: "本機能開啟就直接宣稱已正式上線" },
  { slug: "automated-testing", name: "自動測試", stage: "階段 8", meaning: "由程式重複執行並比較預期結果的檢查", use: "保護重要規則並在修改後快速發現退步", mistake: "只看測試數量，沒有涵蓋真實關鍵流程" },
  { slug: "data-persistence", name: "資料持久化", stage: "階段 8", meaning: "關閉頁面、程式或裝置後資料仍能保存並再次讀取", use: "依資料敏感度選擇瀏覽器、本機檔案或後端資料庫", mistake: "只在畫面記憶體顯示，重新整理後資料消失" },
  { slug: "regression-testing", name: "回歸測試", aliases: ["回歸"], stage: "階段 8 與階段 9", meaning: "修改後重新檢查原本正常功能是否仍然正常", use: "每次修正問題後重跑相關功能與核心流程", mistake: "只驗證新功能，沒有檢查舊功能是否被破壞" },
  { slug: "acceptance", name: "驗收", stage: "階段 9", meaning: "依已確認條件使用實際證據判斷系統是否可交付", use: "分開檢查功能、資料、畫面、平台與正式網址", mistake: "把程式可編譯或本機能開啟當成全部驗收完成" },
  { slug: "version-control", name: "版本管理", stage: "階段 9", meaning: "保存每次程式與文件變更，能追蹤差異並回到可用版本", use: "每個可驗收變更建立清楚紀錄，再決定是否發布", mistake: "把未驗收內容與無關檔案一次混入同一版本" },
  { slug: "test-evidence", name: "測試證據", stage: "階段 9", meaning: "支援驗收結論的測試輸出、實際畫面、步驟與時間紀錄", use: "讓其他人能理解測了什麼、在哪裡測與結果如何", mistake: "只寫已測試，沒有輸出或畫面可以核對" },
  { slug: "github-pages", name: "GitHub Pages", stage: "階段 10", meaning: "由 GitHub 儲存庫建置與提供靜態網站的託管服務", use: "適合發布不需要後端伺服器的公開教學網站與文件", mistake: "把不能公開的資料、金鑰或私人逐字稿一起推送" },
  { slug: "deployment", name: "部署", stage: "階段 10", meaning: "把已驗收版本放到實際使用環境並完成設定的流程", use: "記錄建置、環境、網址、驗收與失敗回復方式", mistake: "只完成上傳，沒有檢查真正的正式網址" },
  { slug: "backup", name: "備份", stage: "階段 10", meaning: "將程式、設定與資料保存到可獨立取回的位置", use: "定期建立備份並實際測試能否還原", mistake: "備份與原始資料放在同一裝置且從未測試" },
  { slug: "restore", name: "回復", stage: "階段 10", meaning: "部署失敗或版本異常時回到上一個可用狀態", use: "發布前先指定可回復版本、資料處理與執行步驟", mistake: "問題發生後才開始尋找上一版與資料備份" }
]

const findTerm = name => termCatalog.find(term => term.name === name || term.aliases?.includes(name))

const staticPages = {
  prompts: { title: "完整提示詞庫", lead: "每個階段都能在自己的頁面直接複製，這裡提供集中查找", type: "prompts" },
  templates: { title: "範例文件與空白模板", lead: "網站不收集你的文件，只提供去識別化範例與 Markdown 空白模板", type: "templates" },
  glossary: { title: "系統開發專有名詞", lead: "看到不熟悉的名詞，可以先用白話理解用途再回到開發流程", type: "glossary" },
  safety: { title: "資料安全與公開檢查", lead: "把資料交給 AI 或 GitHub 前，先移除不能公開的內容", type: "safety" },
  faq: { title: "常見問題", lead: "整理第一次做系統最常遇到的阻礙與下一步", type: "faq" },
  complete: { title: "完成後分享你的系統", lead: "可以使用截圖、作品連結或兩者一起分享開發成果", type: "complete" },
  maintainer: { title: "維護者簡易操作手冊", lead: "收到第一篇作品留言後，只要照五個步驟處理", type: "maintainer" },
  credits: { title: "致謝與參考來源", lead: "感謝公開分享 AI 開發方法的創作者與網友", type: "credits" },
  case: { title: "工作台到駕駛艙案例", lead: "案例展示一套需求如何走完整個開發流程，不限制你只能做工作台", type: "case" }
}

const page = document.body.dataset.page || "home"

function navMarkup() {
  const links = [
    ["roadmap.html", "學習路線", "roadmap"],
    ["stage-01.html", "十階段", "stage"],
    ["pwa-install.html", "加入主畫面", "pwa"],
    ["mobile-app.html", "手機 App", "mobile"],
    ["prompts.html", "提示詞", "prompts"],
    ["glossary.html", "名詞", "glossary"],
    ["complete.html", "作品分享", "complete"]
  ]
  const active = page.startsWith("stage") ? "stage" : page
  return `<header class="site-header">
    <a class="brand" href="index.html"><img src="${logoPath}" alt="猛禽隼 Logo"><span><strong>AI 系統開發實戰學院</strong><small>從想法到自己的系統</small></span></a>
    <nav class="main-nav" aria-label="主要導覽">${links.map(([href,label,key]) => `<a href="${href}" ${active===key?'aria-current="page"':''}>${label}</a>`).join("")}</nav>
    <a class="header-action" href="stage-00.html">開始學習</a>
    <button class="menu-button" type="button" aria-label="開啟選單" data-menu-open>☰</button>
  </header>
  <div class="drawer-backdrop" data-drawer-backdrop></div>
  <aside class="mobile-drawer" aria-label="手機導覽" data-mobile-drawer>
    <div class="drawer-head"><strong>教學導覽</strong><button class="drawer-close" type="button" aria-label="關閉選單" data-menu-close>×</button></div>
    <nav class="drawer-links"><a href="index.html">首頁</a><a href="roadmap.html">完整學習路線</a>${stages.map(s=>`<a href="${s.slug}">階段 ${s.id}｜${s.title}</a>`).join("")}<a href="pwa-install.html">網頁加入主畫面</a><a href="mobile-app.html">手機 App 總覽</a><a href="android-publish.html">Android 發布</a><a href="ios-publish.html">iOS 發布</a><a href="maintainer-guide.html">維護者手冊</a></nav>
  </aside>`
}

function footerMarkup() {
  return `<footer class="site-footer"><div><strong>AI 系統開發實戰學院</strong><p>網站只保存匿名階段進度，不保存你的需求、文件或作品</p></div><nav class="footer-links"><a href="safety.html">資料安全</a><a href="maintainer-guide.html">維護者手冊</a><a href="credits.html">致謝來源</a><a href="https://github.com/kagenhsu/ai-system-development-academy/discussions" target="_blank" rel="noreferrer">GitHub Discussions ↗</a></nav></footer><div class="toast" role="status" aria-live="polite" data-toast></div>`
}

function stageSidebar(current) {
  return `<aside class="stage-sidebar"><strong>階段導覽</strong><nav>${stages.map(s=>`<a class="${s.id===current?'active':''}" href="${s.slug}">${s.id}｜${s.title}</a>`).join("")}</nav></aside>`
}

function stagePage(stage) {
  const index = stages.findIndex(s => s.id === stage.id)
  const prev = stages[index - 1]
  const next = stages[index + 1]
  return `${navMarkup()}<main class="page-shell">
    <section class="page-hero"><p class="breadcrumb"><a href="roadmap.html">完整路線</a> ／ 階段 ${stage.id}</p><p class="eyebrow">STAGE ${stage.id}</p><h1>${stage.title}</h1><p class="lead">${stage.summary}</p></section>
    <div class="stage-layout">${stageSidebar(stage.id)}<article class="stage-main">
      <div class="input-output"><div class="io-card"><small>本階段輸入</small><strong>${stage.input}</strong></div><div class="io-card"><small>本階段產物</small><strong>${stage.output}</strong></div></div>
      <section class="content-section"><h2>這一階段要做什麼</h2><p>${stage.summary}，先把內容確認完整，再進入下一階段</p></section>
      <section class="content-section"><h2>含文字流程圖</h2><div class="flow-diagram"><div class="flow-node">準備輸入<small>${stage.input}</small></div><div class="flow-node">交給 AI<small>使用本階段完整提示詞</small></div><div class="flow-node">逐項檢查<small>指出缺漏並要求完整更新</small></div><div class="flow-node">保存產物<small>${stage.output}</small></div></div></section>
      <section class="content-section"><h2>實際操作</h2><div class="step-list">${stage.steps.map(step=>`<div class="step-item">${step}</div>`).join("")}</div></section>
      <section class="content-section"><h2>這一頁會看到的名詞</h2><div class="term-list">${stage.terms.map(name=>{ const term = findTerm(name); return `<a class="term" href="${term ? `term-${term.slug}.html` : 'glossary.html'}">${name}</a>` }).join("")}</div></section>
      <section class="content-section"><div class="prompt-block"><div class="prompt-head"><div><small>本網站原創內容</small><h3>本階段完整提示詞</h3></div><button class="copy-button" type="button" data-copy-prompt>複製完整提示詞</button></div><pre data-prompt-text>${stage.prompt}</pre></div></section>
      <section class="content-section"><h2>工作台／駕駛艙案例</h2><div class="card"><span class="card-tag">去識別化參考案例</span><h3>${stage.title}如何套用到個人工作台</h3><p>使用今日工作、專案、進度與回顧作為示範資料，AI 只產生草稿，正式決定由使用者確認</p><a class="card-link" href="case.html">查看完整案例 →</a></div></section>
      <section class="content-section"><h2>範例文件與空白模板</h2><div class="grid-2"><div class="card"><h3>查看完成範例</h3><p>了解本階段產物完成後應包含哪些內容</p><a class="card-link" href="case.html">查看案例文件 →</a></div><div class="card"><h3>下載空白模板</h3><p>下載後在自己的專案資料夾填寫，網站不保存文件</p><a class="card-link" href="templates.html">前往模板頁 →</a></div></div></section>
      <section class="content-section"><h2>本階段驗收</h2><div class="checklist" data-checklist data-stage="${stage.id}">${["我已閱讀本階段說明","我已在自己的 AI 工具使用提示詞","我已完成本階段產物","我已自行確認內容"].map((x,i)=>`<label class="check-row"><input type="checkbox" data-check="${i}"><span>${x}</span></label>`).join("")}</div><div class="button-row"><button class="button button-primary" type="button" data-complete-stage>標記本階段完成</button><a class="button button-secondary" href="progress.html">查看匿名進度</a></div></section>
      <nav class="lesson-nav">${prev?`<a class="button button-secondary" href="${prev.slug}">← ${prev.title}</a>`:'<span></span>'}${next?`<a class="button button-primary" href="${next.slug}">${next.title} →</a>`:`<a class="button button-teal" href="pwa-install.html">先加入手機主畫面 →</a>`}</nav>
    </article></div></main>${footerMarkup()}`
}

function homePage() {
  return `${navMarkup()}<main class="page-shell"><section class="hero"><div><p class="eyebrow">AI SYSTEM DEVELOPMENT ACADEMY</p><h1>從模糊想法<br>走到自己的系統</h1><p class="lead">第一次做系統也能從工具準備、需求、功能、PRD、原型一路完成 Web，再分別延伸 Android 與 iOS App</p><div class="button-row"><a class="button button-primary" href="stage-00.html">從階段 0 開始</a><a class="button button-secondary" href="roadmap.html">查看完整路線</a></div></div><div class="hero-board"><img src="${logoPath}" alt="猛禽隼品牌標誌"><h3>一條可以逐步驗收的路</h3><div class="board-flow"><span>先說清楚要做什麼</span><span>再建立完整規格</span><span>完成並驗收 Web</span><span>最後延伸 Android／iOS</span></div></div></section>
    <section class="section"><div class="section-head"><p class="eyebrow">START HERE</p><h2>你可以開發不同類型的系統</h2><p>工作台與駕駛艙是參考案例，你可以替換成管理系統、教學網站或其他工具</p></div><div class="grid-3">${["個人工作台","管理系統","教學網站","資料整理工具","Android App","iOS App"].map(x=>`<div class="card"><span class="card-tag">可套用</span><h3>${x}</h3><p>使用同一套需求、文件、開發與驗收流程建立自己的版本</p></div>`).join("")}</div></section>
    <section class="section"><div class="section-head"><p class="eyebrow">MOBILE APP</p><h2>先選簡單安裝，或走商店發布</h2><p>如果只是自己或小範圍使用，可以先把 Web 加入主畫面，需要商店曝光再走 Android／iOS 發布</p></div><div class="grid-3"><div class="platform-card"><div class="platform-symbol">＋</div><h3>網頁加入主畫面</h3><ul><li>不需要先上架商店</li><li>保留同一套 Web</li><li>Android 與 iPhone 都能使用</li><li>最快開始真實使用</li></ul><a class="button button-secondary" href="pwa-install.html">查看加入主畫面</a></div><div class="platform-card"><div class="platform-symbol">A</div><h3>Android／Google Play</h3><ul><li>Android App Bundle</li><li>Play App Signing</li><li>測試軌與資料安全</li><li>正式發布與版本更新</li></ul><a class="button button-primary" href="android-publish.html">查看 Android 原型</a></div><div class="platform-card"><div class="platform-symbol">iOS</div><h3>iPhone／App Store</h3><ul><li>macOS 與 Xcode</li><li>App Store Connect</li><li>TestFlight</li><li>App Review 與正式發布</li></ul><a class="button button-teal" href="ios-publish.html">查看 iOS 原型</a></div></div></section></main>${footerMarkup()}`
}

function roadmapPage() {
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="eyebrow">ROADMAP</p><h1>從 Web 到手機主畫面與 App 商店</h1><p class="lead">先完成階段 0 與十階段 Web，再從最簡單的加入主畫面開始，或選擇 Android 與 iOS 商店發布</p></section><section class="section"><div class="route-list">${stages.map(s=>`<div class="route-item" data-route-stage="${s.id}"><div class="route-number">${s.id}</div><div><h3>${s.title}</h3><p>${s.summary}｜產物：${s.output}</p></div><a class="button button-secondary" href="${s.slug}">進入階段</a></div>`).join("")}</div></section><section class="section"><div class="section-head"><h2>Web 驗收後的三種手機路線</h2><p>只想先在自己的手機使用，就從加入主畫面開始</p></div><div class="grid-3"><div class="platform-card"><div class="platform-symbol">＋</div><h3>加入手機主畫面</h3><p>沿用已完成的 Web，不需要先上架商店，最快開始實際使用</p><a class="button button-secondary" href="pwa-install.html">先走簡單路線</a></div><div class="platform-card"><div class="platform-symbol">A</div><h3>Android 發布路線</h3><p>從 App 建置、AAB、測試到 Google Play 正式發布</p><a class="button button-primary" href="android-publish.html">查看 Android</a></div><div class="platform-card"><div class="platform-symbol">iOS</div><h3>iOS 發布路線</h3><p>從 Xcode、TestFlight、App Review 到 App Store</p><a class="button button-teal" href="ios-publish.html">查看 iOS</a></div></div></section></main>${footerMarkup()}`
}

const androidSteps = [
  ["1", "確認 Web 已驗收", "確認核心流程、資料與手機寬度"],
  ["2", "準備 Android 專案", "設定套件名稱、版本與應用圖示"],
  ["3", "真機測試", "在實際 Android 裝置檢查功能與權限"],
  ["4", "建立 Play Console App", "填寫應用名稱、分類、聯絡方式與商店資料"],
  ["5", "建立簽署 AAB", "使用 Android App Bundle 與 Play App Signing"],
  ["6", "內部與封閉測試", "依帳號資格完成測試與正式版存取要求"],
  ["7", "資料安全與政策", "完成資料安全、隱私政策與權限聲明"],
  ["8", "送交審查", "解決錯誤、警告與政策問題"],
  ["9", "正式發布", "選擇國家地區並開始 Production rollout"],
  ["10", "版本更新", "提高 versionCode，重新建置、測試與發布"]
]

const iosSteps = [
  ["1", "確認 Web 已驗收", "確認核心流程、資料與 iPhone 使用情境"],
  ["2", "準備 macOS 與 Xcode", "iOS 正式建置與上傳需要 Apple 開發工具"],
  ["3", "Apple Developer 與識別", "建立 Bundle ID、簽署與應用能力"],
  ["4", "真機測試", "在實際 iPhone 檢查功能、權限與裝置行為"],
  ["5", "建立 App Store Connect 紀錄", "填寫名稱、描述、分類、隱私與商店資料"],
  ["6", "上傳 Build", "使用 Xcode 或官方支援工具上傳建置版本"],
  ["7", "TestFlight", "安排內部或外部測試並收集回饋"],
  ["8", "選擇建置版本", "確認 App Review 資訊與必要中繼資料"],
  ["9", "送交 App Review", "Add for Review 後正式 Submit for Review"],
  ["10", "發布與更新", "核准後選擇發布方式，後續以新版本更新"]
]

function pwaInstallPage() {
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="breadcrumb"><a href="roadmap.html">完整路線</a> ／ 加入主畫面</p><p class="eyebrow">PWA INSTALL</p><h1>先把網頁加入手機主畫面</h1><p class="lead">不需要先上架 Google Play 或 App Store，也能用主畫面圖示快速開啟自己的 Web 系統</p><div class="button-row"><button class="button button-primary" type="button" data-install-pwa disabled>等待瀏覽器提供安裝</button><a class="button button-secondary" href="#manual-install">查看手動安裝</a></div></section>
    <section class="section"><div class="section-head"><h2>這條路適合什麼時候</h2></div><div class="grid-3"><div class="card"><span class="card-tag">最快開始</span><h3>自己使用</h3><p>先驗證系統是否每天真的有用，不必立即處理商店審查</p></div><div class="card"><span class="card-tag">保留 Web</span><h3>同一套版本</h3><p>桌面瀏覽器與手機主畫面共用同一套網站與更新</p></div><div class="card"><span class="card-tag">清楚邊界</span><h3>不是商店上架</h3><p>加入主畫面仍是 Web App，不代表已發布到 Google Play 或 App Store</p></div></div></section>
    <section class="section"><div class="section-head"><h2>網站要先準備什麼</h2></div><div class="flow-diagram"><div class="flow-node">HTTPS 網址<small>GitHub Pages 可提供安全連線</small></div><div class="flow-node">Web App Manifest<small>名稱、圖示、啟動網址與顯示方式</small></div><div class="flow-node">主畫面圖示<small>準備適合系統顯示的圖示尺寸</small></div><div class="flow-node">基本離線頁<small>沒有網路時提供可理解提示</small></div></div></section>
    <section class="section" id="manual-install"><div class="section-head"><h2>Android 與 iPhone 安裝方式</h2></div><div class="grid-2"><div class="card"><span class="card-tag">Android／Chrome</span><h3>從瀏覽器安裝</h3><div class="step-list"><div class="step-item">使用 Chrome 開啟網站</div><div class="step-item">點選瀏覽器提供的安裝 App 或加入主畫面</div><div class="step-item">確認網站名稱與圖示</div><div class="step-item">回到主畫面點擊圖示開啟</div></div></div><div class="card"><span class="card-tag">iPhone／Safari</span><h3>從分享選單加入</h3><div class="step-list"><div class="step-item">使用 Safari 開啟網站</div><div class="step-item">點選更多或分享</div><div class="step-item">選擇加入主畫面</div><div class="step-item">開啟以 Web App 使用後點選加入</div></div></div></div></section>
    <section class="section"><div class="policy-note"><strong>瀏覽器呈現會不同</strong><br>Android 的安裝按鈕與選單名稱會依瀏覽器變化，iPhone 不會出現同樣的自動安裝提示，需要從 Safari 分享選單操作</div></section>
    <section class="section"><div class="section-head"><h2>官方來源</h2></div><div class="source-list"><a class="source-link" href="https://web.dev/learn/pwa/installation" target="_blank" rel="noreferrer">PWA 安裝方式 ↗</a><a class="source-link" href="https://web.dev/learn/pwa/web-app-manifest" target="_blank" rel="noreferrer">Web App Manifest ↗</a><a class="source-link" href="https://support.apple.com/guide/iphone/iphea86e5236/ios" target="_blank" rel="noreferrer">iPhone Safari 加入主畫面 ↗</a></div></section>
    <section class="section"><div class="lesson-nav"><a class="button button-secondary" href="stage-10.html">← Web 上線</a><a class="button button-primary" href="mobile-app.html">比較三種手機路線 →</a></div></section></main>${footerMarkup()}`
}

function mobileOverview() {
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="breadcrumb"><a href="roadmap.html">完整路線</a> ／ 手機 App</p><p class="eyebrow">MOBILE EXTENSION</p><h1>手機使用有三條路</h1><p class="lead">先比較加入主畫面、Android 商店與 iOS 商店需要的工作，再選最符合目前目的的方式</p></section><section class="section"><div class="flow-diagram"><div class="flow-node">Web 已驗收<small>功能與資料流程先確認</small></div><div class="flow-node">只想快速使用<small>加入手機主畫面</small></div><div class="flow-node">Android 商店<small>Google Play 發布</small></div><div class="flow-node">iPhone 商店<small>App Store 發布</small></div></div></section><section class="section"><div class="grid-3"><div class="platform-card"><div class="platform-symbol">＋</div><h3>網頁加入主畫面</h3><p>最少發布工作，適合先自行使用與驗證</p><a class="button button-secondary" href="pwa-install.html">查看加入主畫面</a></div><div class="platform-card"><div class="platform-symbol">A</div><h3>Android／Google Play</h3><p>可在 Windows 或 macOS 進行 Android 開發，正式發布使用 Google Play Console</p><a class="button button-primary" href="android-publish.html">進入 Android 發布教學</a></div><div class="platform-card"><div class="platform-symbol">iOS</div><h3>iOS／App Store</h3><p>正式 iOS 建置與上傳需要 macOS、Xcode 與 Apple Developer 流程</p><a class="button button-teal" href="ios-publish.html">進入 iOS 發布教學</a></div></div></section><section class="section"><div class="policy-note"><strong>平台政策會更新</strong><br>每次正式發布前都要重新核對 Google Play 與 Apple 官方文件，不把本網站的版本號或門檻當成永久規則</div></section></main>${footerMarkup()}`
}

function platformPublish(platform) {
  const android = platform === "android"
  const steps = android ? androidSteps : iosSteps
  const title = android ? "Android App 與 Google Play 發布" : "iOS App 與 App Store 發布"
  const lead = android ? "從 Android 建置、簽署、測試軌一路走到正式發布" : "從 macOS、Xcode、TestFlight 一路走到 App Review 與正式發布"
  const sources = android ? [
    ["建立與設定 Play Console App", "https://support.google.com/googleplay/android-developer/answer/9859152"],
    ["上傳 Android App Bundle", "https://developer.android.com/studio/publish/upload-bundle"],
    ["準備與推出版本", "https://support.google.com/googleplay/android-developer/answer/9859348"],
    ["新個人帳號測試要求", "https://support.google.com/googleplay/android-developer/answer/14151465"],
    ["資料安全表單", "https://support.google.com/googleplay/android-developer/answer/10787469"]
  ] : [
    ["App Store Connect 工作流程", "https://developer.apple.com/help/app-store-connect/get-started/app-store-connect-workflow"],
    ["TestFlight 說明", "https://developer.apple.com/help/app-store-connect/test-a-beta-version/testflight-overview/"],
    ["上傳建置版本", "https://developer.apple.com/help/app-store-connect/manage-builds/upload-builds"],
    ["送交 App Review", "https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-an-app"],
    ["發布 App Store 版本", "https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/overview-of-publishing-your-app-on-the-app-store"]
  ]
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="breadcrumb"><a href="mobile-app.html">手機 App</a> ／ ${android?'Android':'iOS'}</p><p class="eyebrow">${android?'ANDROID':'IOS'} RELEASE</p><h1>${title}</h1><p class="lead">${lead}</p></section>
    <section class="section"><div class="section-head"><h2>完整發布路線</h2><p>先測試，再準備商店資料與簽署版本，通過審查後才算正式發布</p></div><div class="release-map">${steps.map(([n,t,d])=>`<div class="release-node"><b>${n} ${t}</b><small>${d}</small></div>`).join("")}</div></section>
    <section class="section"><div class="grid-2"><div><div class="section-head"><h2>手機版原型預覽</h2><p>這個畫面示範學習者在手機上查看發布進度</p></div><div class="phone-preview"><div class="phone-notch"></div><div class="phone-screen"><p class="eyebrow">${android?'GOOGLE PLAY':'APP STORE'}</p><h3>${android?'Android 發布進度':'iOS 發布進度'}</h3>${steps.slice(0,6).map(([n,t],i)=>`<div class="mini-step ${i===2?'active':''}">${n} ${t}</div>`).join("")}<button class="button button-primary" type="button" style="width:100%;margin-top:10px">繼續目前步驟</button></div></div></div><div><div class="section-head"><h2>每一步要留下什麼</h2></div><div class="step-list">${steps.map(([,t,d])=>`<div class="step-item"><strong>${t}</strong><br><span>${d}</span></div>`).join("")}</div></div></div></section>
    <section class="section"><div class="policy-note"><strong>發布前重新核對官方要求</strong><br>${android?'Google Play 的測試門檻、目標 API、資料安全與帳號驗證可能變更':'Apple 的 Xcode、SDK、App Review 與商店資料要求可能變更'}</div></section>
    <section class="section"><div class="section-head"><h2>官方來源</h2><p>教學頁只整理操作順序，正式送審時以官方文件為準</p></div><div class="source-list">${sources.map(([label,url])=>`<a class="source-link" href="${url}" target="_blank" rel="noreferrer">${label} ↗</a>`).join("")}</div></section>
    <section class="section"><div class="lesson-nav"><a class="button button-secondary" href="mobile-app.html">← 手機 App 總覽</a><a class="button ${android?'button-teal':'button-primary'}" href="${android?'ios-publish.html':'complete.html'}">${android?'繼續看 iOS →':'完成與作品分享 →'}</a></div></section></main>${footerMarkup()}`
}

function staticPage(config) {
  let content = ""
  if (config.type === "prompts") content = `<div class="grid-2">${stages.map(s=>`<div class="card"><span class="card-tag">階段 ${s.id}</span><h3>${s.title}</h3><p>${s.summary}</p><a class="card-link" href="${s.slug}#prompt">查看並複製 →</a></div>`).join("")}</div>`
  if (config.type === "templates") content = `<div class="template-grid">${["需求文件","功能清單","PRD","原型規格","UI 規格","TRD","開發計畫","驗收報告","版本紀錄"].map(x=>`<div class="card"><span class="card-tag">Markdown</span><h3>${x}</h3><p>提供去識別化完成範例與空白結構</p><button class="button button-secondary" type="button" data-demo-download="${x}">下載空白模板</button></div>`).join("")}</div>`
  if (config.type === "glossary") content = `<div class="template-grid">${termCatalog.map(term=>`<article class="card"><span class="card-tag">${term.stage}</span><h3>${term.name}</h3><p>${term.meaning}</p><a class="card-link" href="term-${term.slug}.html">查看名詞說明 →</a></article>`).join("")}</div>`
  if (config.type === "safety") content = `<div class="grid-2"><div class="card"><h3>不要交給 AI</h3><ul><li>密碼與 API 金鑰</li><li>個資與公司機密</li><li>未公開合約與內部資料</li></ul></div><div class="card"><h3>公開前要檢查</h3><ul><li>截圖是否有真實姓名</li><li>網址是否包含內部主機</li><li>程式是否含 Token</li></ul></div></div>`
  if (config.type === "faq") content = `<div class="faq-list">${["AI 只更新局部內容怎麼辦","提示詞複製後要貼到哪裡","文件互相衝突怎麼辦","Web 驗收後如何做 Android","iOS 為什麼需要 macOS","GitHub Discussions 收到作品怎麼處理"].map(q=>`<details><summary>${q}</summary><p>依對應階段重新檢查輸入與產物，缺少證據時標記待確認，不直接宣稱完成</p></details>`).join("")}</div>`
  if (config.type === "complete") content = `<div class="grid-2"><div class="card"><span class="card-tag">作品分享</span><h3>分享作品截圖或連結</h3><p>可以只放截圖、只放作品連結，或同時分享兩者</p><button class="button button-primary" type="button" data-share-open>分享作品</button></div><div class="card"><span class="card-tag">學習心得</span><h3>記錄你怎麼完成系統</h3><p>分享遇到的問題、解決方式與下一版計畫</p><button class="button button-secondary" type="button" data-share-open>分享學習心得</button></div></div>`
  if (config.type === "maintainer") content = `<div class="step-list">${["確認圖片與作品連結能開啟","檢查是否包含敏感資料","使用固定文案感謝分享","分類錯誤時移到正確分類","違規或洩密時關閉或刪除"].map(x=>`<div class="step-item">${x}</div>`).join("")}</div><section class="content-section"><h2>固定回覆文案</h2><div class="prompt-block"><pre>謝謝分享，你已完成自己的第一個系統，也歡迎補充後續更新與使用心得</pre></div></section><section class="content-section"><h2>什麼時候才要置頂</h2><p>第一版不要求你立即學會置頂，作品內容完整、安全且對其他學習者有幫助時再使用</p><a class="button button-secondary" href="https://docs.github.com/en/discussions/managing-discussions-for-your-community/managing-discussions" target="_blank" rel="noreferrer">查看 GitHub 官方操作 ↗</a></section>`
  if (config.type === "credits") content = `<div class="card"><span class="card-tag">感謝公開分享</span><h3>Daju_ai</h3><p>TikTok 帳號 @daju_shouai</p><p>本站受到公開分享的 AI 開發流程啟發，再重新驗證並製作成原創繁體中文教材，不轉載影片、逐字稿或對方完整提示詞，也不暗示原作者參與本站製作</p><a class="button button-secondary" href="https://www.tiktok.com/@daju_shouai/video/7673534003223383317" target="_blank" rel="noreferrer">查看 TikTok 原始影片 ↗</a></div>`
  if (config.type === "case") content = `<div class="flow-diagram"><div class="flow-node">每天記錄<small>工作、專案與生活</small></div><div class="flow-node">長期使用<small>找出重複與卡關</small></div><div class="flow-node">加入 AI<small>整理、規劃、分析與提醒</small></div><div class="flow-node">使用者決定<small>像主管一樣下達指示</small></div></div><section class="section"><div class="grid-2"><div class="card"><h3>AI 個人工作台</h3><p>AI 協助設計每天可以記錄生活或工作的系統</p></div><div class="card"><h3>AI 個人駕駛艙</h3><p>使用一段時間後，再加入 AI 自動整理、規劃、分析與提醒</p></div></div></section>`
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="eyebrow">LEARNING RESOURCE</p><h1>${config.title}</h1><p class="lead">${config.lead}</p></section><section class="section">${content}</section></main>${footerMarkup()}`
}

function progressPage() {
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="eyebrow">LOCAL PROGRESS</p><h1>匿名學習進度</h1><p class="lead">只保存完成哪些階段，不保存姓名、文件、截圖或作品</p></section><section class="section"><div class="route-list">${stages.map(s=>`<div class="route-item" data-progress-row="${s.id}"><div class="route-number">${s.id}</div><div><h3>${s.title}</h3><p data-progress-label>尚未完成</p></div><a class="button button-secondary" href="${s.slug}">查看階段</a></div>`).join("")}</div><div class="button-row"><button class="button button-secondary" type="button" data-reset-progress>清除匿名進度</button></div></section></main>${footerMarkup()}`
}

function termPage(slug) {
  const term = termCatalog.find(item => item.slug === slug) || termCatalog[0]
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="breadcrumb"><a href="glossary.html">專有名詞總覽</a> ／ ${term.name}</p><p class="eyebrow">GLOSSARY</p><h1>${term.name}</h1><p class="lead">用白話了解這個名詞在系統開發中的用途與使用方式</p></section>
    <section class="section"><div class="grid-2"><article class="card"><span class="card-tag">白話定義</span><h2>${term.name}是什麼</h2><p>${term.meaning}</p></article><article class="card"><span class="card-tag">出現階段</span><h2>${term.stage}</h2><p>回到學習路線時，依照這個階段的文件與操作一起理解</p></article></div></section>
    <section class="section"><div class="section-head"><h2>怎麼使用</h2></div><div class="flow-diagram"><div class="flow-node">先理解目的<small>${term.meaning}</small></div><div class="flow-node">放回流程<small>${term.stage}</small></div><div class="flow-node">實際套用<small>${term.use}</small></div><div class="flow-node">留下證據<small>用文件、畫面或測試確認結果</small></div></div></section>
    <section class="section"><div class="grid-2"><article class="card"><span class="card-tag">正確使用</span><h2>實際做法</h2><p>${term.use}</p></article><article class="card"><span class="card-tag">常見錯誤</span><h2>避免這樣做</h2><p>${term.mistake}</p></article></div></section>
    <section class="section"><div class="lesson-nav"><a class="button button-secondary" href="glossary.html">← 回到名詞總覽</a><a class="button button-primary" href="roadmap.html">查看完整學習路線 →</a></div></section></main>${footerMarkup()}`
}

function render() {
  if (page === "home") return homePage()
  if (page === "roadmap") return roadmapPage()
  if (page === "pwa") return pwaInstallPage()
  if (page === "mobile") return mobileOverview()
  if (page === "android") return platformPublish("android")
  if (page === "ios") return platformPublish("ios")
  if (page === "progress") return progressPage()
  if (page === "term") return termPage(document.body.dataset.termSlug)
  if (page.startsWith("stage-")) {
    const id = page.split("-")[1]
    return stagePage(stages.find(s => s.id === id) || stages[0])
  }
  return staticPage(staticPages[page] || staticPages.faq)
}

document.getElementById("app").innerHTML = render()

const progressKey = "academyPrototypeProgressV1"
const loadProgress = () => { try { return JSON.parse(localStorage.getItem(progressKey) || "{}") } catch { return {} } }
const saveProgress = value => { try { localStorage.setItem(progressKey, JSON.stringify(value)); return true } catch { return false } }
const showToast = message => { const toast = document.querySelector("[data-toast]"); if (!toast) return; toast.textContent = message; toast.classList.add("show"); setTimeout(()=>toast.classList.remove("show"), 2200) }

document.querySelector("[data-menu-open]")?.addEventListener("click", () => {
  document.querySelector("[data-mobile-drawer]")?.classList.add("open")
  document.querySelector("[data-drawer-backdrop]")?.classList.add("open")
})
const closeMenu = () => { document.querySelector("[data-mobile-drawer]")?.classList.remove("open"); document.querySelector("[data-drawer-backdrop]")?.classList.remove("open") }
document.querySelector("[data-menu-close]")?.addEventListener("click", closeMenu)
document.querySelector("[data-drawer-backdrop]")?.addEventListener("click", closeMenu)

document.querySelector("[data-copy-prompt]")?.addEventListener("click", async () => {
  const text = document.querySelector("[data-prompt-text]")?.textContent || ""
  try { await navigator.clipboard.writeText(text); showToast("提示詞已複製") } catch { showToast("複製失敗，請手動選取提示詞") }
})

const checklist = document.querySelector("[data-checklist]")
if (checklist) {
  const id = checklist.dataset.stage
  const progress = loadProgress()
  if (progress[id]) checklist.querySelectorAll("input").forEach(input => input.checked = true)
  document.querySelector("[data-complete-stage]")?.addEventListener("click", () => {
    const checks = [...checklist.querySelectorAll("input")]
    if (!checks.every(input => input.checked)) return showToast("請先完成本階段四項檢查")
    progress[id] = true
    if (saveProgress(progress)) showToast("本階段已完成")
    else showToast("瀏覽器無法保存匿名進度")
  })
}

const currentProgress = loadProgress()
document.querySelectorAll("[data-route-stage]").forEach(row => { if (currentProgress[row.dataset.routeStage]) row.classList.add("done") })
document.querySelectorAll("[data-progress-row]").forEach(row => {
  const done = !!currentProgress[row.dataset.progressRow]
  row.classList.toggle("done", done)
  const label = row.querySelector("[data-progress-label]")
  if (label) label.textContent = done ? "已完成" : "尚未完成"
})
document.querySelector("[data-reset-progress]")?.addEventListener("click", () => {
  if (window.confirm("要清除這個瀏覽器中的全部匿名進度嗎")) { localStorage.removeItem(progressKey); location.reload() }
})

document.querySelectorAll("[data-demo-download]").forEach(button => button.addEventListener("click", () => showToast(`${button.dataset.demoDownload}模板會在正式版提供下載`)))

document.querySelectorAll("[data-share-open]").forEach(button => button.addEventListener("click", () => {
  const ok = window.confirm("分享前請確認已移除 API 金鑰、密碼、個資、公司機密與內部資料\n\n確認後將前往 GitHub Discussions")
  if (ok) window.open("https://github.com/kagenhsu/ai-system-development-academy/discussions", "_blank", "noopener")
}))

let deferredInstallPrompt
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault()
  deferredInstallPrompt = event
  const button = document.querySelector("[data-install-pwa]")
  if (button) { button.disabled = false; button.textContent = "安裝到這台裝置" }
})
document.querySelector("[data-install-pwa]")?.addEventListener("click", async event => {
  if (!deferredInstallPrompt) return showToast("請依下方 Android 或 iPhone 手動步驟加入主畫面")
  await deferredInstallPrompt.prompt()
  await deferredInstallPrompt.userChoice
  deferredInstallPrompt = undefined
  event.currentTarget.disabled = true
  event.currentTarget.textContent = "安裝提示已完成"
})

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js").catch(() => {}))
}
