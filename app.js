// Three glossary variants, switchable with ?variant=A|B|C on the existing glossary route.
const logoPath = "assets/logo.png"

const stages = [
  { id: "00", slug: "stage-00.html", title: "開發準備", summary: "選擇 AI 工具、模型策略與工作空間", input: "一個想做系統的大概方向", output: "工具與專案工作空間", terms: ["AI 助手", "大模型", "Token", "工作空間"], steps: ["依讀檔、寫檔、圖片與執行能力選工具", "重要規格使用高能力模型，大量局部工作使用合適的執行型模型", "建立獨立專案資料夾並讓 AI 開啟正確工作空間", "移除密碼、金鑰、個資與公司機密"], prompt: "請協助我檢查開發前準備\n\n我的系統方向：＿＿＿＿＿＿＿＿\n我的電腦平台：Windows／macOS\n我使用的 AI 工具：＿＿＿＿＿＿＿＿\n\n請逐項確認工具是否能讀寫檔案、查看圖片、執行程式與保存專案文件\n發現缺少條件時只列出修正方法，不要開始開發" },
  { id: "01", slug: "stage-01.html", title: "需求訪談", summary: "讓 AI 一題一題問出真正需求", input: "系統方向與初步想法", output: "完整需求文件", terms: ["目標使用者", "使用情境", "需求範圍", "驗收條件"], steps: ["先說明想做哪一類系統", "要求 AI 每次只問一個問題", "回答模糊時繼續追問具體情境", "資訊足夠後輸出完整需求文件"], prompt: "請用一問一答方式收集我想開發系統的需求\n每次只輸出一個問題，等我回覆後再問下一題\n提問需涵蓋目標使用者、真實痛點、使用場景、需要與不要的功能、運行設備、參考產品與特殊限制\n我回答模糊時請追問細節\n資訊足夠後輸出一份結構完整的需求文件讓我確認\n\n我準備做的系統：＿＿＿＿＿＿＿＿\n我的初步想法：＿＿＿＿＿＿＿＿\n\n現在開始第一個問題" },
  { id: "02", slug: "stage-02.html", title: "功能清單", summary: "把首頁改版拆成可驗收的內容、導覽、雙角色引導、圖卡與響應式功能", input: "已確認的首頁與角色設計方向", output: "首頁功能清單 v1.2", terms: ["一級模組", "二級功能", "三級子功能", "P0／P1／P2"], steps: ["依首頁區塊拆出內容、導覽、角色、圖像與發布路線模組", "把隼鳥的 AI 教學分工與 Eddy 的學習分工列成可檢查能力", "標記 P0 的可讀性、透明插圖與手機版排版規則", "每次調整後更新完整清單，不只補一張卡"], prompt: "你是資深產品經理，請根據已確認的 AI 系統開發實戰學院首頁與角色系統輸出完整功能清單\n\n已確認規則\n- 隼鳥 v2 是 AI 教學引導者，Eddy 是人類學習者與實作回饋\n- 隼鳥網站素材只使用透明輸出；Eddy 三視圖與手勢庫是後續繪製依據\n- Eddy 左手戴智慧手錶、右手無錶；手勢與隼鳥表情必須對應內容\n- 首頁在桌面三欄、平板雙欄、手機單欄都必須可讀\n\n要求\n1 依一級模組、二級功能、三級子功能拆分\n2 標記 P0、P1、P2\n3 每項寫能力、使用者價值與驗收點\n4 不描述未確認的後端或商業規則\n5 輸出完整版本" },
  { id: "03", slug: "stage-03.html", title: "PRD", summary: "把首頁改版、雙角色分工與驗收條件寫成可交付的產品規則", input: "首頁功能清單 v1.2", output: "首頁產品需求文件 PRD v1.2", terms: ["PRD", "正常場景", "異常場景", "非功能需求"], steps: ["定義首頁的導覽、學習路徑、雙角色引導、感謝來源與延伸路線", "逐區塊寫清楚內容、連結目的、角色用途與驗收條件", "補齊圖片載入失敗、窄螢幕與外部連結的處理", "把已確認的角色與視覺邏輯列為品質需求，而非新增功能"], prompt: "你是資深產品經理，請將 AI 系統開發實戰學院首頁功能清單轉為 PRD v1.2\n\n本次已確認範圍\n- 首頁 Hero、雙角色學習引導、來源與致謝、六張系統類型卡、開發流程圖、兩張學習入口卡、三張手機發布卡\n- 隼鳥 v2 為 AI 教學者；Eddy 為人類學習與實作回饋；兩者不取代文字或 CTA\n- 系統類型卡使用專屬介紹文字，卡片高度依內容自適應\n\n請包含背景、目標使用者、產品目標、範圍、功能需求、互動流程、內容規則、響應式與無障礙要求、正常與異常場景、可驗收條件。\n未確認事項標示【需確認】，不要補造功能。" },
  { id: "04", slug: "stage-04.html", title: "互動原型", summary: "把首頁改版與雙角色引導轉成可直接檢查區塊、連結與響應式狀態的原型規格", input: "首頁 PRD v1.2", output: "首頁互動原型規格 v1.2", terms: ["原型", "元件", "彈窗", "抽屜"], steps: ["列出首頁區塊順序與每一張卡的預設內容", "定義主導覽、CTA、角色引導、卡片連結與手機選單的跳轉結果", "明確標示角色不遮文字、卡片高度收合與圖片替代文字", "先確認資訊架構與互動閉環，再進入 UI 視覺細節"], prompt: "你是產品原型專家，請根據 AI 系統開發實戰學院首頁 PRD v1.2 輸出原型規格。\n\n請逐一列出 Hero、雙角色引導、來源與致謝、系統類型卡、流程圖、學習入口卡、手機發布卡、頁尾。\n每個區塊必須說明：位置、內容、初始狀態、可點擊元件、跳轉目標、桌面與手機排列、空白或圖片失敗時的替代狀態。\nEddy 與隼鳥是靜態情境引導，不新增 PRD 外的功能。" },
  { id: "05", slug: "stage-05.html", title: "UI 設計", summary: "把首頁原型轉成雙角色、插圖與介面一致，且可在桌面與手機閱讀的 UI 規格", input: "首頁 PRD 與互動原型 v1.2", output: "首頁 UI 設計規格 v1.2", terms: ["UI", "設計系統", "響應式", "空狀態"], steps: ["固定首頁的深藍、電藍、青綠、金黃與留白視覺語言", "定義 Hero、雙角色引導、流程卡與資訊卡的文字層級、圓角、陰影與間距", "讓透明插圖依卡片容器比例縮放並留出文字安全區", "驗證桌面三欄、平板雙欄與手機單欄的閱讀順序"], prompt: "請根據 AI 系統開發實戰學院首頁 PRD v1.2 與原型規格輸出 UI 設計規格。\n\n已確認設計語言\n- Eddy 為捲髮、透明飛行眼鏡、紅色機能外套、左手智慧手錶與黑色慢跑鞋的教學者\n- 隼鳥 v2 使用一般衣袖、皮革手套、深色慢跑鞋，並以表情回饋學習狀態\n- 深藍為主要文字與結構色，電藍、青綠作操作與分段色，金黃作提示色\n- 角色不可遮住文字或彼此臉部，卡片高度依內容收合，桌面三欄、平板雙欄、手機單欄\n\n請列出色彩、字級、間距、卡片、按鈕、角色與插圖、響應式與無障礙規格；不得新增未確認功能。" },
  { id: "06", slug: "stage-06.html", title: "TRD", summary: "把產品規則轉成技術施工圖", input: "PRD、原型與 UI 規格", output: "技術需求文件 TRD", terms: ["TRD", "前端", "後端", "API", "資料模型"], steps: ["逐項對照 PRD 功能", "定義前端、後端與資料模型", "列出 API、輸入驗證與錯誤處理", "補充權限、日誌、測試與技術風險"], prompt: "你是資深系統架構師，請把已確認 PRD 轉成 TRD\n逐項列出前端、後端、資料模型、API、輸入驗證、錯誤處理、權限、日誌、測試與風險\n忠實轉換產品需求，不自行新增功能\n不確定的技術選擇列為待確認" },
  { id: "07", slug: "stage-07.html", title: "開發計畫", summary: "把大系統拆成可以逐步驗收的工作", input: "PRD 與 TRD", output: "里程碑與任務清單", terms: ["里程碑", "任務依賴", "垂直切片", "P0"], steps: ["先排最小可驗收垂直切片", "整理任務前後依賴", "每項任務設定驗收條件", "避免一次開發全部功能"], prompt: "請根據 PRD 與 TRD 產生開發實施計畫\n先安排一個可操作、可保存、可驗收的最小垂直切片\n再依前置依賴拆分後續任務\n每項標示輸入、產物、相關檔案、測試與驗收條件" },
  { id: "08", slug: "stage-08.html", title: "Web 開發與測試", summary: "一次只完成一段真實可操作功能", input: "完整文件與開發計畫", output: "可操作 Web 系統", terms: ["Web", "自動測試", "資料持久化", "回歸測試"], steps: ["先交叉檢查全部規格", "每輪只做一個垂直切片", "同步完成程式與測試", "使用實際操作證據確認功能"], prompt: "請先交叉檢查需求、功能清單、PRD、原型、UI、TRD 與開發計畫\n列出衝突、缺失與待確認\n確認後只實作本輪指定垂直切片\n先列修改檔案與驗收條件，再進行開發與測試" },
  { id: "09", slug: "stage-09.html", title: "驗收與版本", summary: "用證據分清楚完成、失敗與待確認", input: "可操作 Web 系統", output: "驗收報告與版本紀錄", terms: ["驗收", "版本管理", "測試證據", "回歸"], steps: ["分開檢查功能、資料、畫面與平台", "保存測試輸出與實際畫面", "每次變更產生完整版本", "未實際檢查的項目標記待確認"], prompt: "請只做驗收，不要修改程式\n分開回報自動測試、功能、資料持久化、指定頁面、桌面與手機寬度\n分類為已通過、失敗、待確認、下一步\n沒有實際操作或畫面證據的項目不得標示為已驗收" },
  { id: "10", slug: "stage-10.html", title: "Web 上線與使用", summary: "公開、備份並進入真實日常使用", input: "已通過驗收的 Web 系統", output: "正式網址與更新流程", terms: ["GitHub Pages", "部署", "備份", "回復"], steps: ["公開前掃描私人資料與金鑰", "建立可回復的正式版本", "完成實際網址與手機驗收", "使用一段時間後記錄問題並安排網站更新"], prompt: "Web 版本已通過驗收，請產生公開發布與日常使用計畫\n列出發布目標、建置、環境設定、資料備份、版本更新、失敗回復與發布後驗收\n不得把本機可啟動宣稱為正式網站已發布\n正式外部操作前先等待我確認" }
]

const termCatalog = [
  { slug: "ai-assistant", name: "AI 助手", aliases: ["AI Agent", "Agent"], stage: "階段 0", meaning: "能理解指令，並在授權範圍內協助讀檔、寫檔、看圖、執行與整理工作的開發工具", use: "依任務能力與資料安全需求選擇工具，再開啟正確的專案資料夾", mistake: "只比較模型名稱，卻沒有確認 Agent 能否操作本機專案" },
  { slug: "language-model", name: "大模型", aliases: ["AI 模型", "模型"], stage: "階段 0", meaning: "AI Agent 用來理解文字、圖片、推理與產生內容的核心模型", use: "先確認任務需要的理解與推理能力，再確認承載模型的 Agent 有哪些操作權限", mistake: "把模型名稱直接當成工具能力，忽略 Agent 權限、介面與執行環境" },
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
  { slug: "restore", name: "回復", stage: "階段 10", meaning: "部署失敗或版本異常時回到上一個可用狀態", use: "發布前先指定可回復版本、資料處理與執行步驟", mistake: "問題發生後才開始尋找上一版與資料備份" },
  { slug: "agent-skill", name: "Agent Skill", aliases: ["Skill"], stage: "跨階段工具", meaning: "把重複使用的提示、規則與參考資料封裝成可由 AI Agent 載入的工作能力", use: "確認工具正式支援的格式與安裝位置，再安裝完整 Skill 資料夾並驗證可被識別", mistake: "只複製 SKILL.md，遺漏它引用的 references、assets 或其他必要檔案" },
  { slug: "github-discussions", name: "GitHub Discussions", stage: "完成與作品分享", meaning: "GitHub 儲存庫提供的公開討論區，可建立主題、附加圖片或連結並留言交流", use: "啟用作品分享分類後，讓學習者用自己的 GitHub 帳號分享公開成果", mistake: "把 Discussions 當成網站內聊天室，或在尚未啟用時直接導向 404" },
  { slug: "official-source", name: "官方來源", stage: "模型指南與發布", meaning: "由產品或平台官方維護、可用來核對功能與規則的文件或公告", use: "模型能力、平台政策與發布要求都要保留官方網址並定期重新核對", mistake: "只引用社群貼文、影片或二手整理，就標示為已完成現況驗證" },
  { slug: "verification-date", name: "最後驗證日期", stage: "模型指南與發布", meaning: "維護者最後一次實際核對官方資料的日期", use: "與官方來源一起顯示，提醒讀者能力與政策可能在日期之後變更", mistake: "只寫最新或目前可用，卻沒有留下核對日期與來源" }
]

const findTerm = name => termCatalog.find(term => term.name === name || term.aliases?.includes(name))

const caseStudyThemes = {
  "case-management": {
    "key": "case-management",
    "label": "管理系統",
    "name": "客戶與案件管理系統",
    "goal": "讓每個案件都有下一次跟進",
    "audience": "負責客戶與案件追蹤的工作室管理者",
    "modules": "客戶名單、案件清單、跟進紀錄與管理總覽",
    "entities": "客戶、案件、跟進紀錄",
    "action": "新增示範客戶、建立案件、記錄跟進與更新案件狀態",
    "intro": "我把客戶、案件與跟進放在同一個地方，先釐清誰負責、下一步是什麼，再把日常追蹤做成系統。",
    "art": "management-system-v1.png",
    "flow": [
      "收到客戶需求",
      "建立客戶與案件",
      "跟進資訊完整？",
      "安排下一次跟進",
      "查看案件總覽"
    ],
    "branch": "補齊負責人與紀錄",
    "focus": [
      "確認管理者與使用範圍",
      "釐清接案與跟進情境",
      "拆分客戶、案件與跟進",
      "定義狀態與存取規則",
      "走一次新增案件流程",
      "區分案件狀態與優先級",
      "設計關聯資料與權限",
      "依案件流程安排任務",
      "實作客戶到案件的流程",
      "驗證關聯與狀態一致",
      "準備內部使用與回復"
    ],
    "steps": [
      "客戶需求",
      "建立案件",
      "安排跟進",
      "更新進度",
      "檢查結果",
      "案件回顧"
    ],
    "diagram": "assets/diagrams/cases/case-management-character-flow.png"
  },
  "case-teaching": {
    "key": "case-teaching",
    "label": "教學網站",
    "name": "課程學習網站",
    "goal": "讓學習者知道下一課要做什麼",
    "audience": "整理教材的教學者與依序練習的學習者",
    "modules": "課程總覽、單課教材、練習任務與學習進度",
    "entities": "課程、章節、練習任務與學習進度",
    "action": "選擇課程、閱讀單課、查看練習任務與更新閱讀進度",
    "intro": "我把課程、教材與練習串成一條學習路線，讓學習者從入口走到完成一次練習。",
    "art": "teaching-site-v1.png",
    "flow": [
      "選擇學習課程",
      "閱讀教材並練習",
      "符合練習條件？",
      "記錄學習進度",
      "前往下一課"
    ],
    "branch": "返回教材修正練習",
    "focus": [
      "確認教材與工作空間",
      "釐清學習對象與目標",
      "拆分課程與學習功能",
      "定義進度與完成規則",
      "走一次選課與閱讀流程",
      "安排教材層級與閱讀寬度",
      "設計課程與進度資料",
      "依學習路線拆分任務",
      "實作課程到練習流程",
      "驗證導覽與進度界線",
      "準備教材發布與更新"
    ],
    "steps": [
      "選擇課程",
      "閱讀教材",
      "完成練習",
      "檢查成果",
      "記錄進度",
      "繼續學習"
    ],
    "diagram": "assets/diagrams/cases/case-teaching-character-flow.png"
  },
  "case-data": {
    "key": "case-data",
    "label": "資料整理工具",
    "name": "資料匯入與分類搜尋工具",
    "goal": "把零散資料整理成找得到的內容",
    "audience": "需要整理工作資料的單一使用者",
    "modules": "檔案匯入、欄位預覽、分類搜尋與結果匯出",
    "entities": "匯入批次、資料列、欄位、分類標籤與匯出紀錄",
    "action": "匯入示範 CSV、預覽欄位、分類搜尋與匯出整理結果",
    "intro": "我先預覽資料，再處理欄位與分類，保留原始檔案，讓每次整理都能追溯來源。",
    "art": "data-organizer-v1.png",
    "flow": [
      "選擇示範資料檔",
      "預覽欄位與資料列",
      "欄位檢查通過？",
      "分類與搜尋",
      "匯出整理結果"
    ],
    "branch": "回報錯誤並重新對應",
    "focus": [
      "準備去識別化資料樣本",
      "釐清資料來源與用途",
      "拆分匯入、分類與匯出",
      "定義欄位與錯誤處理",
      "走一次預覽到匯出流程",
      "凸顯資料錯誤與處理狀態",
      "設計批次與原始資料保存",
      "按資料處理依賴排程",
      "實作匯入到搜尋流程",
      "核對筆數、欄位與匯出",
      "準備本機使用與備份"
    ],
    "steps": [
      "匯入資料",
      "預覽欄位",
      "檢查錯誤",
      "分類整理",
      "搜尋資料",
      "匯出結果"
    ],
    "diagram": "assets/diagrams/cases/case-data-character-flow.png"
  },
  "case-android": {
    "key": "case-android",
    "label": "Android App",
    "name": "Android 習慣追蹤 App",
    "goal": "在 Android 上記錄每天的小習慣",
    "audience": "使用 Android 手機記錄日常習慣的個人",
    "modules": "習慣清單、今日打卡、歷史紀錄與週回顧",
    "entities": "習慣、打卡紀錄、日期與回顧統計",
    "action": "新增習慣、完成今日打卡、查看歷史與週回顧",
    "intro": "我用 Android 手機記錄每天的小習慣，先把打卡流程做清楚，再驗證裝置上的保存與返回操作。",
    "art": "android-app-v1.png",
    "flow": [
      "開啟今日習慣",
      "選擇習慣並打卡",
      "今日已經打卡？",
      "保存今日紀錄",
      "查看週回顧"
    ],
    "branch": "依規則提示或修正",
    "focus": [
      "確認 Android 裝置與開發方式",
      "釐清習慣與打卡情境",
      "拆分打卡與回顧功能",
      "定義日期與重複打卡規則",
      "走一次手機打卡流程",
      "設計 Android 觸控與返回",
      "確認 Android 建置與保存方案",
      "安排 Web 驗證與 Android 延伸",
      "實作並測試 Android 操作",
      "實機驗證跨日與保存",
      "準備 Android 測試與發布"
    ],
    "steps": [
      "建立習慣",
      "今日清單",
      "完成打卡",
      "保存紀錄",
      "查看歷史",
      "每週回顧"
    ],
    "diagram": "assets/diagrams/cases/case-android-character-flow.png"
  },
  "case-ios": {
    "key": "case-ios",
    "label": "iOS App",
    "name": "iOS 習慣追蹤 App",
    "goal": "在 iPhone 上持續記錄生活習慣",
    "audience": "使用 iPhone 記錄日常習慣的個人",
    "modules": "習慣清單、今日打卡、歷史紀錄與週回顧",
    "entities": "習慣、打卡紀錄、日期與回顧統計",
    "action": "新增習慣、完成今日打卡、查看歷史與週回顧",
    "intro": "我把習慣清單放進 iPhone 的每日流程，先驗證打卡與回顧，再準備 iOS 測試和交付。",
    "art": "ios-app-v1.png",
    "flow": [
      "開啟今日習慣",
      "記錄今天的行動",
      "紀錄已成功保存？",
      "更新打卡畫面",
      "查看週回顧"
    ],
    "branch": "保留輸入並提示重試",
    "focus": [
      "確認 iPhone 與開發設備",
      "釐清手機上的習慣情境",
      "拆分習慣與回顧功能",
      "定義打卡與失敗重試規則",
      "走一次 iPhone 打卡流程",
      "設計 iOS 導覽與觸控",
      "確認 iOS 建置與保存方案",
      "安排 Web 驗證與 iOS 延伸",
      "實作並測試 iPhone 操作",
      "實機驗證中斷與保存",
      "準備 iOS 測試與發布"
    ],
    "steps": [
      "新增習慣",
      "查看今天",
      "記錄完成",
      "確認保存",
      "瀏覽紀錄",
      "回顧調整"
    ],
    "diagram": "assets/diagrams/cases/case-ios-character-flow.png"
  }
}

const staticPages = {
  prompts: { title: "我現在需要哪一段提示詞？", lead: "我會先找到正在進行的階段，再帶著上一階段的產物去和 AI 對話。", type: "prompts" },
  glossary: { title: "遇到名詞時，我先看懂再繼續", lead: "我不需要硬背術語；先用白話理解它的用途，再回到眼前的步驟。", type: "glossary" },
  modelGuide: { title: "AI 工具／模型選擇指南", lead: "先分清楚 Agent 與模型，再依任務、權限與官方資料做選擇", type: "model-guide" },
  safety: { title: "交給 AI 前，我先保護資料", lead: "開始前，我會把不能公開的內容留在專案之外，讓之後的開發更安心。", type: "safety" },
  faq: { title: "做到一半卡住了，怎麼辦？", lead: "我把第一次做系統常見的卡點拆開，讓你知道現在該回去哪一步檢查。", type: "faq" },
  complete: { title: "完成後，我想分享我的系統", lead: "我可以只分享截圖、只分享連結，或記錄這一路怎麼把想法做出來。", type: "complete" },
  maintainer: { title: "維護者簡易操作手冊", lead: "收到第一篇作品留言後，只要照五個步驟處理", type: "maintainer" },
  case: { title: "用 AI Agent 開發與改善六種網站案例", lead: "我先選一個想解決的日常問題，讓 AI Agent 協助釐清需求、整理規格、製作原型與開發，再由我實際操作確認結果。從下面六個主題，選一個開始練習。", type: "case-overview" },
  "case-workbench": { title: "AI 個人工作台實際案例", lead: "我把課程的方法套進同一套工作台，依序走過需求、規格、開發與實際使用。", type: "case" }
}

const stageCollaboration = {
  "00": { skill: "ai-personal-workbench-tutorial", skillUse: "帶我確認工具、模型、工作目錄與安全邊界。", mode: "先用單一 Agent", agentUse: "第一次先把工作目錄與權限弄清楚；還不需要多人同時修改。", roles: ["主 Agent｜確認環境", "Explorer｜只讀核對路徑"], prompt: "請先使用單一主 Agent 檢查目前工作目錄、工具能力與資料安全邊界。若需要核對多個資料夾，可委派 1 位唯讀 Explorer；先不要修改檔案。" },
  "01": { skill: "grill-me", skillUse: "一次問一題，把模糊想法問成可確認的需求。", mode: "單一訪談主線", agentUse: "需求訪談不平行，避免不同 Agent 同時追問、產生兩套產品規則。", roles: ["主 Agent｜主持訪談", "學員｜確認需求"], prompt: "$grill-me\n我的題目是個人工作台。請每次只問一個會影響需求的問題；目前只做需求訪談，不寫程式。" },
  "02": { skill: "原階段提示詞", skillUse: "先依需求拆出模組、功能、子功能與優先級。", mode: "兩位唯讀 Reviewer", agentUse: "一位找需求遺漏，一位找重複或範圍膨脹，最後由主 Agent 合併。", roles: ["Reviewer A｜檢查遺漏", "Reviewer B｜檢查重複", "主 Agent｜整合清單"], prompt: "請委派兩位唯讀子 Agent：一位對照需求找功能遺漏；一位檢查重複、越界與全部標成 P0 的問題。等待兩者完成後，由主 Agent 合併成一份問題清單，不直接新增功能。" },
  "03": { skill: "原階段提示詞", skillUse: "把功能寫成輸入、流程、輸出、限制與驗收規則。", mode: "三面向檢查", agentUse: "分別檢查正常流程、異常情境與非功能需求；產品決策仍由學員確認。", roles: ["流程 Reviewer", "異常 Reviewer", "品質 Reviewer"], prompt: "請用三位唯讀子 Agent 分別檢查正常流程、異常情境與非功能需求。等待全部結果後，依功能名稱去重；無法從需求確認的規則標記【需產品確認】。" },
  "04": { skill: "prototype（選用）", skillUse: "只在需要驗證一條特定操作流程時，建立可操作的拋棄式原型。", mode: "原型專項審查", agentUse: "分開檢查頁面入口、互動狀態與手機流程，不讓多個 Agent 同改一份原型。", roles: ["Explorer｜頁面盤點", "UX Reviewer｜狀態檢查", "主 Agent｜修改原型"], prompt: "請委派唯讀 Explorer 盤點頁面與入口，再由 UX Reviewer 檢查空白、錯誤、成功與返回狀態。兩者都不改檔，主 Agent 整合後再提出一份修改建議。" },
  "05": { skill: "ui-ux-pro-max（工作台）", skillUse: "依 PRD 與原型檢查資訊層級、元件狀態、可近用性與手機閱讀。", mode: "一個方向、兩項審查", agentUse: "先由主 Agent 確定一套設計，再分工檢查可近用性與響應式，避免各畫一套。", roles: ["主 Agent｜統一設計", "Accessibility Reviewer", "Responsive Reviewer"], prompt: "請先依已確認 PRD、原型與設計規格產生一個 UI 方向；再委派兩位唯讀子 Agent，分別檢查可近用性與桌面／手機響應式。不要產生第二套視覺方向。" },
  "06": { skill: "baoyu-diagram（圖解選用）", skillUse: "把已確認的資料流與系統關係做成說明圖；圖不代替技術決策。", mode: "技術交叉檢查", agentUse: "資料流、安全與 API 分開檢查，再由主 Agent 統一介面和資料定義。", roles: ["架構 Reviewer", "安全 Reviewer", "主 Agent｜統一 TRD"], prompt: "請委派架構與安全兩位唯讀 Reviewer。前者核對資料流、保存與 API；後者檢查權限、金鑰與錯誤處理。等待後由主 Agent 合併，衝突項目標記待確認。" },
  "07": { skill: "原階段提示詞", skillUse: "把已確認規格拆成有依賴、產物、測試與驗收的任務。", mode: "依賴盤點", agentUse: "Explorer 只讀分析前置依賴，主 Agent 排出唯一的開發計畫。", roles: ["Explorer｜找依賴", "主 Agent｜排唯一計畫"], prompt: "請委派一位唯讀 Explorer 核對文件與程式中的任務依賴，回傳阻擋項目與證據。主 Agent 依結果排出一份開發計畫，不產生互相競爭的多份計畫。" },
  "08": { skill: "frontend-design（依需要）", skillUse: "只在已有 PRD、原型與 UI 規格時實作已確認的頁面。", mode: "開發與測試分工", agentUse: "Worker 負責指定檔案，Tester 保持唯讀；主 Agent 合併後重新測試。", roles: ["Worker｜指定檔案", "Tester｜測核心流程", "主 Agent｜整合重測"], prompt: "請委派 Worker 實作本輪指定功能，清楚列出它負責的檔案；另派 Tester 只讀執行測試與操作檢查。兩者不得修改同一檔案。等待完成後由主 Agent 整合並重跑關鍵測試。" },
  "09": { skill: "web-design-guidelines（UI 稽核）", skillUse: "檢查指定頁面的介面問題；仍需另外做功能、資料與瀏覽器實測。", mode: "獨立驗收小組", agentUse: "功能、資料、畫面與回歸分開驗證，各自提供證據，由主 Agent 下結論。", roles: ["Tester｜功能與資料", "UI Reviewer｜畫面", "Code Reviewer｜回歸風險"], prompt: "請平行委派功能／資料 Tester、UI Reviewer 與 Code Reviewer。全部只做驗收，不修改程式。等待三者完成後，由主 Agent 按已通過、失敗、待確認整理證據。" },
  "10": { skill: "原操作原則", skillUse: "依已通過的驗收結果準備備份、使用、發布與回復計畫。", mode: "發布前雙重檢查", agentUse: "一位檢查公開資料，一位檢查發布與回復清單；實際發布仍等待學員確認。", roles: ["Security Reviewer｜公開資料", "Release Reviewer｜發布回復", "主 Agent｜提出最後確認"], prompt: "請委派兩位唯讀子 Agent：一位檢查公開資料與敏感資訊，一位核對發布、備份與回復清單。只回報結果，不執行發布；主 Agent 整理後等待我確認。" }
}

Object.assign(caseStudyThemes, {
  "case-members": {
    "key": "case-members",
    "label": "會員管理系統",
    "name": "會員管理系統",
    "goal": "清楚管理每位會員的資料與狀態",
    "audience": "管理會員名單的工作室管理者",
    "modules": "會員名單、會員資料、新增與編輯、狀態篩選與管理總覽",
    "entities": "會員、會員狀態、異動紀錄",
    "action": "新增示範會員、編輯資料、篩選狀態並確認保存結果",
    "intro": "我想把會員資料集中管理，能新增與編輯會員、查看狀態並快速找到資料。第一版先做管理者使用的名單，不加入付款與會員自行登入。",
    "art": "management-system-v1.png",
    "steps": [
      "新增會員",
      "檢查資料",
      "保存會員",
      "更新狀態",
      "篩選搜尋",
      "確認結果"
    ],
    "focus": [
      "準備示範會員與工作環境",
      "釐清會員管理的日常需求",
      "拆分會員名單與狀態功能",
      "定義欄位、重複資料與操作規則",
      "走一次新增與編輯會員流程",
      "統一表單與狀態的畫面規則",
      "設計會員資料、存取與保存",
      "拆成可驗收的會員管理任務",
      "實作新增、編輯與搜尋流程",
      "檢查重複資料、權限與保存結果",
      "準備使用、備份與回復"
    ]
  },
  "case-recovery": {
    "key": "case-recovery",
    "label": "既有專案檢查與接續開發",
    "name": "既有 AI 開發專案",
    "recovery": true,
    "goal": "找出卡住的位置，保留成果並接著完成",
    "audience": "已經用 AI 開發系統但中途卡住的學習者",
    "modules": "原專案已確認的功能與尚未完成的範圍",
    "entities": "現有文件、程式、測試與問題紀錄",
    "action": "重現卡點、定位原因、修正一項問題並驗證原有功能",
    "intro": "我之前已經用 AI 做過一個系統，但現在卡住了。我希望先檢查做到哪裡、缺少什麼與需要改善什麼，再沿學習地圖補齊並繼續開發，保留原本可用的成果。",
    "art": "data-organizer-v1.png",
    "steps": [
      "盤點現況",
      "對照課程",
      "找出缺口",
      "補齊前置",
      "接續開發",
      "驗證與回復"
    ],
    "focus": [
      "盤點目前階段與卡住的原因",
      "確認原本需求與現在的目標",
      "核對功能已做、缺少與需改善",
      "補齊產品規則與驗收標準",
      "檢查現有頁面與操作流程",
      "修正畫面與互動的一致性",
      "核對架構、資料與技術缺口",
      "安排修復順序與下一步",
      "逐項修復並接續開發",
      "重測問題與原有功能",
      "確認使用方式與可回復版本"
    ]
  }
})

caseStudyThemes["case-members"].diagram = "assets/diagrams/cases/case-members-character-flow.png"
caseStudyThemes["case-recovery"].diagram = "assets/diagrams/cases/case-recovery-character-flow-v2.png"

Object.entries(caseStudyThemes).forEach(([key, theme]) => { staticPages[key] = { title: theme.name + "實際案例", lead: theme.intro, type: "case", theme } })

const page = document.body.dataset.page || "home"

function navMarkup() {
  const links = [
    ["roadmap.html", "學習地圖", "roadmap"],
    ["cases.html", "實際案例", "case"],
    ["prompts.html", "提示詞", "prompts"],
    ["agent-team.html", "AI 協作", "agents"],
    ["model-guide.html", "模型指南", "model-guide"],
    ["glossary.html", "名詞", "glossary"],
    ["complete.html", "作品分享", "complete"]
  ]
  const active = page.startsWith("stage") ? "roadmap" : page === "pwa" ? "mobile" : page.startsWith("case-") ? "case" : page
  return `<header class="site-header">
    <a class="brand" href="index.html"><img src="${logoPath}" alt="猛禽隼 Logo"><span><strong>AI 系統開發實戰學院</strong><small>從想法到自己的系統</small></span></a>
    <nav class="main-nav" aria-label="主要導覽">${links.map(([href,label,key]) => `<a href="${href}" ${active===key?'aria-current="page"':''}>${label}</a>`).join("")}</nav>
    <a class="header-action" href="stage-00.html">開始學習</a>
    <button class="menu-button" type="button" aria-label="開啟選單" data-menu-open>☰</button>
  </header>
  <div class="drawer-backdrop" data-drawer-backdrop></div>
  <aside class="mobile-drawer" aria-label="手機導覽" data-mobile-drawer>
    <div class="drawer-head"><strong>教學導覽</strong><button class="drawer-close" type="button" aria-label="關閉選單" data-menu-close>×</button></div>
    <nav class="drawer-links"><a href="index.html">首頁</a><a href="roadmap.html">完整學習地圖</a><a href="cases.html">實際案例</a><a href="prompts.html">完整提示詞</a><a href="skill-guide.html">Skill 啟動與搭配</a><a href="agent-team.html">子 Agent 分工實戰</a><a href="model-guide.html">AI 工具／模型選擇指南</a><a href="glossary.html">專有名詞</a><a href="maintainer-guide.html">維護者手冊</a></nav>
  </aside>`
}

function footerMarkup() {
  return `<footer class="site-footer"><div><strong>AI 系統開發實戰學院</strong><p>網站只保存匿名階段進度，不保存你的需求、文件或作品</p></div><nav class="footer-links"><a href="skill-guide.html">Skill 教學</a><a href="agent-team.html">子 Agent 實戰</a><a href="safety.html">資料安全</a><a href="glossary.html">專有名詞</a><a href="model-guide.html">模型選擇指南</a><a href="index.html#source">首頁來源與致謝區</a><a href="maintainer-guide.html">維護者手冊</a><a href="https://github.com/kagenhsu/ai-system-development-academy/discussions" target="_blank" rel="noreferrer">GitHub Discussions ↗</a></nav></footer><div class="toast" role="status" aria-live="polite" data-toast></div>`
}

function stageSidebar(current) {
  return `<aside class="stage-sidebar"><strong>階段導覽</strong><nav>${stages.map(s=>`<a class="${s.id===current?'active':''}" href="${s.slug}">${s.id}｜${s.title}</a>`).join("")}</nav></aside>`
}

const workbenchExamples = {
  "00": ["建立個人工作台工作空間", "今日工作、專案、進度與回顧先放在同一個專案資料夾；確認 AI 只讀取這個範圍。", "工作空間與資料邊界"],
  "01": ["釐清每天要怎麼用", "以「早上排工作、白天更新專案、晚上回顧」訪談自己；先列出要解決的混亂與不做的功能。", "個人使用需求文件"],
  "02": ["拆出工作台功能", "把工作台分成今日工作、專案進度、收件匣、回顧四個模組；每個模組再寫新增、查看、更新與限制。", "P0／P1／P2 功能清單"],
  "03": ["定義資料與操作規則", "以一筆待辦為例，寫清楚建立、完成、延後、刪除、缺少標題與重複送出時的結果。", "個人工作台 PRD"],
  "04": ["查看可點擊工作台原型", "預覽今日工作、專案與回顧區塊的順序，確認新增、完成與查看詳情的操作閉環。", "頁面與互動原型"],
  "05": ["確定可閱讀的介面", "將重要工作排在第一視線，設定卡片、文字層級、狀態色與手機單欄閱讀規則。", "個人工作台 UI 規格"],
  "06": ["把規格變成施工圖", "將待辦、專案與回顧的資料欄位、保存方式、驗證與錯誤處理逐項列入技術文件。", "個人工作台 TRD"],
  "07": ["排出最小可用版本", "先完成可新增、完成與保存一筆今日工作，再安排專案與回顧功能。", "里程碑與任務依賴"],
  "08": ["完成可操作的今日工作", "只實作本輪垂直切片：新增待辦、標記完成、重新整理後仍保留，並留下測試結果。", "可操作工作台版本"],
  "09": ["驗收並留下版本證據", "檢查新增、完成、資料保存、桌面與手機畫面；每次修正建立可回復版本。", "驗收報告與版本紀錄"],
  "10": ["開始真實使用", "確認沒有個資、金鑰或公司資料後，建立備份並以正式網址或本機使用方式進入每日工作流程。", "可使用版本與更新規則"]
}

const tutorialLessons = {
  "00": { summary: "先選可操作專案檔案的 AI 開發助手，再依任務選模型，最後建立獨立工作空間。", input: "一個想做個人工作台的初步想法", output: "工具、模型與正確工作空間", actions: ["選擇能讀寫檔案、看圖與執行工作的 AI 開發助手", "架構、需求與文件使用高能力模型；大量局部執行任務使用性價比模型", "建立獨立專案資料夾並在 AI 工具中開啟它", "開始任務前確認工作空間，移除金鑰、個資與公司資料"], prompt: "請協助我完成個人工作台的開發前準備\n\n請依序確認：AI 開發助手能力、模型分工、工作空間路徑與資料安全邊界。\n資訊不足時只列出待確認項目，不要開始開發。" },
  "01": { summary: "不要一開始自己猜完整需求；先給 AI 一個方向，再由 AI 每次問一題，把真實使用情境問清楚。", input: "個人工作台的初步想法", output: "完整使用者需求文件", actions: ["說明工作台是自己使用或多人使用，以及早上、白天、晚上各自的使用情境", "讓 AI 每次只問一題，涵蓋痛點、資料、功能、不做事項、裝置與限制", "回答模糊時要求追問，不一次跳到功能或 UI", "確認 AI 輸出的完整需求文件後再進下一步"], prompt: "請用一問一答收集我想要做的應用的需求\n每次只輸出 1 個問題，等我回覆再問下一個，禁止一次輸出大量問題。\n提問覆蓋：目標用戶、真實痛點、使用場景、需要的功能、不要的功能、運行設備、參考產品、特殊限制；我回答模糊就追問。\n資訊足夠後，輸出完整需求文件給我確認。\n\n我準備做的應用：個人工作台\n我的初步想法：集中今日工作、專案進度與每日回顧。\n\n現在直接開始。" },
  "02": { summary: "把需求拆成模組、功能與子功能三層；逐條檢查缺漏後，要求 AI 回傳完整更新版本，而不是只補局部。", input: "已確認的個人工作台需求文件", output: "完整功能清單", actions: ["先拆出今日工作、專案進度、收件匣、回顧等一級模組", "每個模組拆成二級功能與三級子功能，標示 P0、P1、P2", "逐條對照真實使用情境，圈出缺少的欄位、時間、狀態或規則", "每次調整後要求輸出完整功能清單，避免只得到局部修補"], prompt: "你現在是一位資深產品經理，請幫我輸出一份完整的產品功能清單。\n\n要求：\n- 模組化拆分，分為一級模組、二級功能、三級子功能。\n- 區分核心必做功能、次要迭代功能、未來可選規劃功能，使用標籤標註。\n- 每條功能寫簡短描述，說明解決什麼使用者問題。\n- 不寫 UI 互動細節，只輸出功能能力。\n- 使用 Markdown 清楚分層，不要大段文字。\n\n產品：個人工作台；已確認需求如下：＿＿＿＿＿＿＿＿" },
  "03": { summary: "功能清單回答「要有什麼」，PRD 回答「怎麼運作」。每個功能要補齊輸入、流程、輸出、限制與正常／異常情境。", input: "完整功能清單與需求文件", output: "可交付開發與測試的個人工作台 PRD", actions: ["先寫背景、目的、使用者、範圍與不做事項", "逐一描述今日工作、專案、回顧的輸入、操作、輸出與規則", "補齊資料錯誤、缺資料、重複操作、離線與權限等例外情境", "截圖指出需要調整的功能後，要求 AI 全文更新 PRD"], prompt: "你現在是資深網際網路產品經理，請將功能清單與需求轉為標準 PRD。\n\n必須包含：文件概述、目標受眾、產品目標、功能詳細需求、業務流程、互動規則、異常場景、權限說明、非功能需求、上線約束、需求排期與備註。\n每條功能要明確寫輸入、操作流程、輸出、規則、限制，覆蓋正常與異常場景。\n資訊不全時標記【需產品確認】，不要自行刪減需求。\n\n產品：個人工作台；功能清單如下：＿＿＿＿＿＿＿＿" },
  "04": { summary: "把 PRD 轉成能直接查看與操作的原型；先驗收頁面、狀態、跳轉與資料呈現，再談視覺美化。", input: "已確認 PRD", output: "個人工作台高保真互動原型", actions: ["列出工作台首頁、今日工作、專案、回顧、設定與必要彈窗／抽屜", "為每個元件寫位置、文字、預設狀態、點擊後結果與錯誤提示", "用示範資料檢查新增、完成、返回清單等操作是否閉環", "原型改動後，回頭同步功能清單與 PRD"], prompt: "你是產品原型專家，請嚴格依據 PRD 輸出高保真產品原型設計。\n列出全部頁面、彈窗、抽屜、浮層；每個元件寫清楚位置、文字、按鈕文案、元件類型與預設狀態。\n寫清楚點擊哪個按鈕、發生什麼、跳轉何處、表單驗證提示與全域元件。\n不做 UI 視覺美化描述；PRD 資訊不足標記【需產品確認】，不腦補需求。\n\n產品：個人工作台；PRD 如下：＿＿＿＿＿＿＿＿" },
  "05": { summary: "原型確定後才進入 UI；設計必須遵守 PRD 與原型，透過風格、參考圖與 UI skill 提升品質，不可偷加功能。", input: "已確認 PRD 與互動原型", output: "個人工作台 UI 設計規格", actions: ["先決定主題、主色、輔助色與中性色", "以參考圖校準卡片、層級、留白與手機閱讀方式", "需要時使用 UI 設計 skill 協助檢查細節", "設計定稿前，系統性回寫功能清單、PRD、原型與 UI"], prompt: "你是資深前端 UI 工程師與 UI 設計師的 AI 團隊主管。\n請基於產品需求與原型輸出完整 UI 設計；頁面需求、佈局與互動必須遵守已確認 PRD 與原型。\n\n主題風格：＿＿＿＿＿＿＿＿\n配色：請依設計風格選擇主色、輔助色與中性色。\n\n產品：個人工作台；原型如下：＿＿＿＿＿＿＿＿" },
  "06": { summary: "TRD 是施工圖：忠實把 PRD 轉成可開發的技術需求，未確認的技術或業務規則必須集中標記。", input: "已確認 PRD、原型與 UI 規格", output: "技術需求文件 TRD", actions: ["寫清楚業務背景、邊界、角色與核心流程", "逐條把 PRD 功能翻成前端、後端、驗證、錯誤與異常處理需求", "整理資料模型、資料流、API 清單、非功能要求與依賴", "把模糊點統一列入待確認清單，不自行選技術方案"], prompt: "你是資深系統架構師主管，請根據完整 PRD 輸出 TRD。\n包含：文件資訊、業務分析、核心流程 Mermaid、功能模組技術分解、資料模型、API 需求、非功能需求、依賴、風險、待確認問題與測試校驗要點。\n忠實原始 PRD，不新增產品功能；模糊或缺失處標記【待產品／業務確認】並彙總可選文案。\n\nPRD：＿＿＿＿＿＿＿＿" },
  "07": { summary: "將 TRD 拆成可控的小任務、里程碑與依賴；先完成最小可驗收版本，再安排後續工作。", input: "PRD 與 TRD", output: "開發實施計畫", actions: ["先定義第一個可用的垂直切片，例如新增並完成今日工作", "把前端、後端、測試任務分開，標明前置依賴", "建立迭代週期與里程碑，讓每一步都有驗收點", "用性價比模型處理大量可拆分的執行任務"], prompt: "你是系統架構師和研發專案經理，根據 PRD 和 TRD 輸出一份開發實施計畫。\n請制定迭代計畫、迭代週期、里程碑；拆分前端、後端、測試任務並標註前置依賴。\n使用 Markdown 表格，簡潔務實，適合迭代評審。\n\nPRD／TRD：＿＿＿＿＿＿＿＿" },
  "08": { summary: "依文件與開發計畫實作與測試；先交叉檢查衝突，再按模組與優先順序開發，不私自增加功能。", input: "PRD、原型、UI、TRD 與開發計畫", output: "可操作且有測試證據的個人工作台", actions: ["開工前列出文件衝突、缺失與待確認問題", "每一模組同步完成程式、測試與自查清單", "測試用例對齊 PRD 驗收標準，再交付下一輪", "資訊不足時停下來提問，不腦補功能"], prompt: "你是開發與測試全端工程師，依照 PRD、產品原型、UI、TRD、開發計畫做開發與測試。\n先交叉校驗文件並輸出衝突、缺失問題；確認後按計畫順序與優先級開發，不私自增加功能。\n每個模組輸出程式、測試用例與自查清單；測試對齊 PRD 驗收標準。\n資訊不足直接提問，禁止腦補需求。" },
  "09": { summary: "驗收不是只看畫面；每次調整都要留下完整版本、變更摘要與可回復狀態，未驗證事項要清楚標記。", input: "可操作的個人工作台", output: "驗收結論、完整版本與回復能力", actions: ["依 PRD 檢查功能、資料、畫面、桌面與手機情境", "每次需求、文件或規則調整都建立新的完整版本", "保存版本號、時間、變更說明與完整內容，不覆蓋舊版", "可列出版本、查看差異並在需要時回復指定版本"], prompt: "你是資深開發工程師與專案經理，請在獨立工作空間內對所有驗收相關內容做版本化管理。\n每次調整都建立完整新版本，保存版本號、時間、變更說明、變更人與完整內容；支援列出版本、查看詳情、比較差異與回復指定版本。\n禁止直接覆蓋或刪除舊版本。" },
  "10": { summary: "驗收通過後才發布與使用；先確認本機使用或網站發布的方式，再完成備份、隱私檢查與發布後驗收。", input: "已驗收的個人工作台與版本紀錄", output: "可使用版本、備份與發布後更新流程", actions: ["先以本機或網站網址開啟，檢查桌面與手機瀏覽", "公開前掃描個資、金鑰、公司資料與不應發布內容", "將已驗收版本備份到指定位置，保留回復能力", "開始真實使用後，依問題回到需求、文件、開發與驗收循環"], prompt: "請根據已通過驗收的個人工作台，產生發布與日常使用計畫。\n列出發布目標、備份、資料安全檢查、版本更新、失敗回復與發布後驗收。\n不得把本機可開啟宣稱為已正式上線；任何外部發布前先等待我確認。" }
}

const firstPersonTeachingSummaries = {
  "00": "我會先選好工具與模型，再建立一個乾淨、安全的工作空間。",
  "01": "我不急著列功能；我會先讓 AI 一題一題問，找出我真正要解決的問題。",
  "02": "我會把需求逐層拆開，並在進開發前把缺漏補齊。",
  "03": "我會把功能清單轉成可交付的規則，讓設計、開發與測試都知道怎麼做。",
  "04": "我會先用可查看的原型驗證操作流程，再決定要不要寫程式。",
  "05": "我會在原型確認後才處理視覺，讓好看不會改掉已確認的功能。",
  "06": "我會先補齊施工圖，讓技術實作有清楚的邊界與待確認事項。",
  "07": "我會把大目標拆成可驗收的小任務，先完成最小可用版本。",
  "08": "我會依已確認的文件逐步開發與測試，不自行多加功能。",
  "09": "我會用實際證據驗收，並保留每次調整前後都能回復的版本。",
  "10": "我會在驗收通過後才發布，並把備份、隱私與日常使用一起準備好。"
}

const stageLearningMoments = {
  "00": "開始前，我先把工作空間整理乾淨，避免做了一半才發現工具或資料放錯地方。",
  "01": "我先不急著想功能；先把自己真正會在哪個情境打開這個系統說清楚。",
  "02": "需求有了以後，我把它拆小，才知道第一版究竟該先做哪一件事。",
  "03": "這一步，我把腦中的想法寫成別人也能照著做、照著驗收的規則。",
  "04": "還沒寫程式前，我先走一遍操作流程，及早發現會卡住的地方。",
  "05": "流程確定後，我才讓介面變得好看、清楚，而且每天看了不會累。",
  "06": "我把產品規則交給技術實作前，先把邊界、資料和例外情況寫明白。",
  "07": "我不一次把整個系統做完；先選一段真的能用、能檢查的小功能。",
  "08": "開始開發時，我只做已確認的內容，並在每一步留下可以回看的測試結果。",
  "09": "我用實際畫面與操作來說明完成，而不是憑感覺說它應該可以。",
  "10": "真正開始使用前，我先替未來的自己留好備份、更新與回復的路。"
}

const sourcePromptRanges = {
  "01": [98, 106], "02": [152, 159], "03": [181, 190], "04": [215, 222],
  "05": [261, 265], "06": [300, 361], "07": [377, 382], "08": [391, 397], "09": [421, 431]
}

const stageAcceptanceChecks = {
  "00": ["我已建立獨立的專案資料夾", "我已確認 AI 工具開啟的是正確工作空間", "我沒有把金鑰、個資或公司資料放進專案", "我已記下本輪要使用的工具與模型"],
  "01": ["我已描述至少一個真實使用情境", "我已確認第一版要做與不做的範圍", "我已檢查需求文件沒有模糊的功能名稱", "我已保存確認過的需求文件"],
  "02": ["我已依一級模組、二級功能、三級子功能拆分", "每個功能都有對應的使用者問題", "我已標記 P0、P1、P2", "我已保存完整功能清單，而不是局部修改"],
  "03": ["每個 P0 功能都有輸入、操作、輸出與規則", "我已寫出至少一種異常或缺資料情境", "未確認資訊已標記為待確認", "我已保存可交付的 PRD"],
  "04": ["我已列出必要頁面與狀態", "每個主要按鈕都有點擊後結果", "我已用示範資料走完一個核心流程", "原型變更已同步回功能清單與 PRD"],
  "05": ["UI 沒有新增 PRD 外的功能", "文字、按鈕與主要資訊有清楚層級", "我已檢查桌面與手機閱讀順序", "UI 規格已同步回相關文件"],
  "06": ["TRD 已逐項對應 PRD 功能", "資料、API、驗證與錯誤處理都有定義", "風險與依賴已列出", "不確定內容已集中標記待確認"],
  "07": ["我已定義第一個可驗收的垂直切片", "任務有前置依賴與產物", "每個里程碑都有驗收點", "我沒有把所有功能都排進第一輪"],
  "08": ["我已先列出文件衝突或待確認項目", "本輪只完成已確認的一段功能", "我有程式、測試用例與自查結果", "測試結果能對應 PRD 驗收條件"],
  "09": ["我已檢查功能、資料、畫面與裝置情境", "我已保存版本號、日期與變更摘要", "未實測項目已標示待確認", "我知道如何回復到前一個版本"],
  "10": ["我已確認本輪版本通過驗收", "我已檢查個資、金鑰與不應公開的內容", "我已建立可回復的備份", "我已選定本機使用或網站發布方式"]
}

function firstPersonAction(action) {
  const rewrites = [
    [/^回答模糊時要求/, "當我的回答不夠清楚時，我會要求"],
    [/^每次調整後要求/, "每次調整後，我會要求"],
    [/^原型改動後，/, "原型改動後，我會"],
    [/^需要時/, "需要時，我會"],
    [/^設計定稿前，/, "設計定稿前，我會"],
    [/^開工前/, "開工前，我會"],
    [/^資訊不足時/, "資訊不足時，我會"],
    [/^每次需求、文件或規則調整都/, "每次需求、文件或規則調整後，我會"],
    [/^每一模組同步/, "每完成一個模組，我會同步"],
    [/^測試用例對齊/, "我會讓測試用例對齊"],
    [/^自己使用可先以/, "我會先以"],
    [/^公開前/, "公開前，我會"],
    [/^可列出/, "我可以列出"],
    [/^每個/, "我會把每個"],
    [/^先/, "我會先"],
    [/^讓/, "我會讓"],
    [/^建立/, "我會建立"],
    [/^開始/, "我會開始"],
    [/^說明/, "我會說明"],
    [/^確認/, "我會確認"],
    [/^逐條/, "我會逐條"],
    [/^補齊/, "我會補齊"],
    [/^截圖/, "我會截圖"],
    [/^列出/, "我會列出"],
    [/^為/, "我會為"],
    [/^用/, "我會用"],
    [/^以/, "我會以"],
    [/^把/, "我會把"],
    [/^將/, "我會將"],
    [/^整理/, "我會整理"],
    [/^依/, "我會依"],
    [/^保存/, "我會保存"]
  ]
  const match = rewrites.find(([pattern]) => pattern.test(action))
  return match ? action.replace(match[0], match[1]) : `我會${action}`
}

function naturalTeachingAction(action, index) {
  const sentence = firstPersonAction(action)
  const transitions = ["一開始，", "接著，", "確認後，", "最後，"]
  if (sentence.startsWith("我會")) {
    const body = sentence.slice(2)
    const subject = index === 0 && !body.startsWith("先") ? "我先" : "我"
    return `${transitions[index] || "接著，"}${subject}${body}`
  }
  return sentence
}

function personalWorkbenchExample(stage) {
  const [title, description, output] = workbenchExamples[stage.id]
  if (stage.id === "04") {
    return `<section class="content-section workbench-example-section workbench-live-demo-section"><div class="demo-section-heading"><div><p class="eyebrow">INTERACTIVE PROTOTYPE DEMO</p><h2>直接操作「AI 個人工作台」原型</h2></div><span class="demo-mode-badge">教學 Demo｜重新整理後還原</span></div>
      <div class="workbench-demo" data-workbench-demo>
        <div class="workbench-demo-bar"><span></span><span></span><span></span><strong>AI 個人工作台・互動原型 v1</strong></div>
        <div class="workbench-demo-body">
          <aside class="workbench-demo-nav" aria-label="工作台 Demo 導覽"><div class="demo-brand">翼核工作台<small>今天先做好一件事</small></div><button class="active" type="button" data-demo-view="overview">總覽</button><button type="button" data-demo-view="today">今日工作</button><button type="button" data-demo-view="projects">專案</button><button type="button" data-demo-view="review">每日回顧</button></aside>
          <div class="workbench-demo-content">
            <section class="demo-view active" data-demo-panel="overview"><div class="demo-view-head"><div><small>2026 年 9 月 6 日</small><h3>早安，Eddy</h3><p>先完成今天最重要的一件事。</p></div><button class="demo-primary" type="button" data-demo-open-today>查看今日工作</button></div><div class="demo-metric-grid"><article><small>今日工作</small><strong data-demo-task-count>1／3</strong><span>已完成</span></article><article><small>進行中專案</small><strong>2</strong><span>一項需要確認</span></article><article><small>待整理</small><strong>4</strong><span>收件匣項目</span></article></div><div class="demo-grid"><article class="demo-card"><div class="demo-card-head"><h4>今日焦點</h4><span>可以點擊</span></div><div class="demo-task-list"><button class="demo-task" type="button" data-demo-task aria-pressed="false"><i></i><span>確認首頁互動原型</span><small>待完成</small></button><button class="demo-task done" type="button" data-demo-task aria-pressed="true"><i></i><span>整理功能清單</span><small>已完成</small></button><button class="demo-task" type="button" data-demo-task aria-pressed="false"><i></i><span>記錄測試問題</span><small>待完成</small></button></div></article><article class="demo-card demo-project-card"><div class="demo-card-head"><h4>個人工作台 v1</h4><span>進行中</span></div><div class="demo-progress"><span style="width:62%"></span></div><p>目前做到：互動原型</p><ul><li>下一步：檢查手機版</li><li>待確認：空狀態文案</li></ul></article></div></section>
            <section class="demo-view" data-demo-panel="today" hidden><div class="demo-view-head"><div><small>今日工作</small><h3>我今天要完成什麼？</h3><p>點擊工作可切換完成狀態。</p></div><button class="demo-primary" type="button" data-demo-add-task>＋ 新增示範工作</button></div><div class="demo-card"><div class="demo-task-list" data-demo-task-list><button class="demo-task" type="button" data-demo-task aria-pressed="false"><i></i><span>確認首頁互動原型</span><small>待完成</small></button><button class="demo-task done" type="button" data-demo-task aria-pressed="true"><i></i><span>整理功能清單</span><small>已完成</small></button></div></div></section>
            <section class="demo-view" data-demo-panel="projects" hidden><div class="demo-view-head"><div><small>專案</small><h3>兩個正在進行的專案</h3><p>每張卡片都說明目前階段與下一步。</p></div></div><div class="demo-grid"><article class="demo-card"><span class="demo-chip blue">互動原型</span><h4>AI 個人工作台 v1</h4><p>下一步：走完新增、完成與返回流程。</p><div class="demo-progress"><span style="width:62%"></span></div></article><article class="demo-card"><span class="demo-chip green">需求訪談</span><h4>生活資料整理器</h4><p>下一步：確認第一版不做事項。</p><div class="demo-progress"><span style="width:28%"></span></div></article></div></section>
            <section class="demo-view" data-demo-panel="review" hidden><div class="demo-view-head"><div><small>每日回顧</small><h3>今天完成了什麼？</h3><p>這個輸入只用來示範互動，不會保存或上傳。</p></div></div><div class="demo-card demo-review-card"><label>今天的成果<textarea data-demo-review>我完成了工作台原型的第一輪操作檢查。</textarea></label><label>明天的第一步<input value="補上空狀態與錯誤提示"></label><button class="demo-primary" type="button" data-demo-save-review>暫存示範回顧</button></div></section>
          </div>
        </div>
      </div><div class="demo-proof"><strong>這個 Demo 要證明什麼？</strong><span>導覽能切換頁面、工作能改變狀態、新增按鈕會產生項目、回顧操作會得到回饋。它驗證的是操作流程，不代表正式資料庫或完整工作台已完成。</span></div></section>`
  }
  return `<section class="content-section workbench-example-section"><p class="eyebrow">PERSONAL WORKBENCH EXAMPLE</p><h2>${title}</h2><p>我會把這個方法套進個人工作台：${description}</p><div class="workbench-prototype-preview" aria-label="個人工作台原型預覽"><div><small>今天</small><strong>${stage.id === "00" ? "我先確認工作空間" : "我先安排今天最重要的工作"}</strong></div><div><small>專案</small><strong>${stage.id === "02" ? "我正在拆分功能模組" : "我正在整理個人工作台 v1"}</strong></div><div><small>本階段產物</small><strong>${output}</strong></div></div><a class="button button-secondary" href="case-workbench.html">查看完整個人工作台案例 →</a></section>`
}

function collaborationPromptPanel(title, prompt) {
  return `<div class="copy-panel" data-copy-panel><div class="copy-panel-head"><div><small>可直接改寫使用</small><h3>${title}</h3></div><button class="copy-button" type="button" data-copy-snippet>複製分工指令</button></div><pre data-copy-source>${prompt}</pre></div>`
}

function stageCollaborationTeaching(stage) {
  const item = stageCollaboration[stage.id]
  if (!item) return ""
  return `<section class="content-section collaboration-section"><div class="section-head"><p class="eyebrow">SKILL &amp; AGENT COLLABORATION</p><h2>這一階段可以怎麼搭配 Skill 與子 Agent？</h2><p>先由主 Agent 釐清目標與整合結果，再把界線清楚的檢查工作分出去。這個頁面提供操作方式，不會自行啟動任何 Agent。</p></div><div class="collaboration-grid"><article class="collaboration-card skill-card"><span class="card-tag">建議 Skill</span><h3>${item.skill}</h3><p>${item.skillUse}</p><a class="card-link" href="skill-guide.html">查看 Skill 啟動教學 →</a></article><article class="collaboration-card agent-card"><span class="card-tag">Agent 模式</span><h3>${item.mode}</h3><p>${item.agentUse}</p><div class="role-pills">${item.roles.map(role => `<span>${role}</span>`).join("")}</div><a class="card-link" href="agent-team.html">查看子 Agent 分工教學 →</a></article></div>${collaborationPromptPanel(`階段 ${stage.id} 分工範例`, item.prompt)}</section>`
}

function detailedTeaching(stage) {
  const lesson = tutorialLessons[stage.id]
  return `<section class="content-section tutorial-teaching-section"><p class="eyebrow">STAGE TEACHING</p><h2>本階段詳細教學</h2><p>${stageLearningMoments[stage.id]}</p><div class="step-list">${lesson.actions.map((action, index) => `<div class="step-item"><strong>${index + 1}.</strong> ${naturalTeachingAction(action, index)}</div>`).join("")}</div><p class="teaching-outcome"><strong>做到這裡，我會得到：</strong>${lesson.output}。它會成為下一階段可以接著使用的材料。</p></section>`
}

function stagePromptSection(stage) {
  if (!sourcePromptRanges[stage.id]) {
    return `<section class="content-section" id="prompt"><div class="prompt-block"><div class="prompt-head"><div><small>原教程操作原則</small><h3>本階段沒有獨立提示詞</h3></div></div><p>這一步以教學中的工具選擇與工作空間準備／發布使用操作為主，原教程沒有提供可複製的獨立提示詞。</p></div></section>`
  }
  return `<section class="content-section" id="prompt"><div class="prompt-block"><div class="prompt-head"><div><small>原教程提示詞・不改寫</small><h3>本階段提示詞</h3></div><button class="copy-button" type="button" data-copy-prompt>複製本階段提示詞</button></div><p class="prompt-guide"><strong>使用前：</strong>先備妥上方「本階段輸入」；再貼到你正在使用的 AI 助手。<br><strong>回覆後：</strong>用本頁驗收清單檢查，再保存「本階段產物」。提示詞本身維持原教程文字，不另行改寫。</p><pre data-prompt-text data-source-prompt data-stage-id="${stage.id}">載入原教程提示詞中…</pre></div></section>`
}

function developmentAcceptanceTeaching(stage) {
  if (stage.id !== "09") return ""
  return `<section class="content-section development-acceptance-section"><p class="eyebrow">DEVELOPMENT ACCEPTANCE</p><h2>我怎麼證明每個階段真的完成？</h2><p>自我驗收幫我確認能不能往下走；開發驗收則讓我留下別人也看得懂的完成證據。每一階段都用同一張紀錄：產物、實測、結果、證據、待確認與交接結論。</p><div class="step-list"><div class="step-item"><strong>1.</strong> 我先連到本階段產物，例如需求文件、PRD、原型或測試結果。</div><div class="step-item"><strong>2.</strong> 我寫下實際操作步驟，而不是只寫「已完成」。</div><div class="step-item"><strong>3.</strong> 我保存截圖、測試輸出或版本紀錄，未測到的項目標記【待確認】。</div><div class="step-item"><strong>4.</strong> 我確認這份產物能否交給下一階段；不能就回到前一階段修正。</div></div><button class="button button-secondary" type="button" data-template-download="階段驗收紀錄">下載階段驗收紀錄模板 →</button></section>`
}

const stageFlowDescriptions = {
  "00": "檢查工具能力與工作空間；若資料安全通過就完成開發準備，否則清除敏感資料後重新檢查。",
  "01": "說明初步想法並由 AI 一題一題訪談；需求清楚就確認文件，否則繼續追問。",
  "02": "把需求拆成模組、功能與子功能；清單完整就確認，否則補齊遺漏。",
  "03": "把功能清單寫成產品規則並檢查輸入、限制與例外；完整後確認 PRD，否則回去補寫。",
  "04": "排列頁面並設定點擊結果；流程與狀態完整就確認互動原型，否則補空白、錯誤與返回。",
  "05": "確認視覺方向並套用元件層級；符合 PRD 與原型就確認 UI，否則只修正畫面。",
  "06": "讀取 PRD 並設計資料與介面；技術規則完整就確認 TRD，否則標記待確認與風險。",
  "07": "拆分任務並排列依賴與里程碑；每項都能驗收就確認計畫，否則繼續拆小。",
  "08": "依計畫開發並執行功能與資料測試；核心流程通過就留下可操作版本，否則修正後重測。",
  "09": "逐項操作驗收並整理證據與版本；全部通過就建立版本備份，否則回到受影響階段。",
  "10": "檢查隱私與備份並選擇使用方式；發布條件完成就上線後再驗收，否則停止發布並修正。"
}

function stageFlowFigure(stage) {
  const src = `assets/diagrams/stages/stage-${stage.id}-flow.png`
  const description = stageFlowDescriptions[stage.id]
  return `<figure class="explanation-figure stage-flow-figure"><a class="diagram-image-link" href="${src}" target="_blank" aria-label="開啟階段 ${stage.id} 流程圖原尺寸"><img src="${src}" alt="階段 ${stage.id} ${stage.title} 流程圖。${description}" loading="lazy"></a><figcaption><strong>階段 ${stage.id}｜${stage.title}</strong><span>${description}</span></figcaption><details class="diagram-text"><summary>閱讀圖解文字版</summary><p>${description}</p></details></figure>`
}

function homepageUpdateDocument(stageId) {
  const docs = {
    "02": `<section class="content-section homepage-update-document"><div class="document-heading"><p class="eyebrow">HOME PAGE UPDATE</p><h2>首頁功能清單 v1.2</h2><p>把內容、導覽、雙角色分工、插圖與響應式規則拆成可逐項驗收的功能。</p></div><div class="grid-3 document-card-grid"><div class="card"><span class="card-tag">P0｜內容</span><h3>學習路徑與資訊卡</h3><ul class="document-list"><li>Hero 說明從想法到 Web、Android、iOS 的路徑</li><li>六張系統類型卡各自顯示標題、專屬介紹與透明插圖</li><li>兩張學習入口與三張發布卡保留明確跳轉</li></ul></div><div class="card"><span class="card-tag">P0｜角色</span><h3>隼鳥與 Eddy 的分工</h3><ul class="document-list"><li>隼鳥負責解說、示範與確認</li><li>Eddy 負責學習、提問與實作；左手固定智慧手錶</li><li>手勢、五指、手套、慢跑鞋與表情必須維持角色母版</li></ul></div><div class="card"><span class="card-tag">P0｜適配</span><h3>可閱讀的版面</h3><ul class="document-list"><li>角色與圖示不遮臉、文字與 CTA</li><li>桌面三欄、平板雙欄、手機單欄</li><li>圖示依卡片容器縮放，保留文字安全區</li></ul></div></div><div class="document-acceptance"><strong>本階段驗收：</strong>角色符合母版；透明資產無壞圖；圖示不與文字重疊；窄螢幕不出現橫向捲動。</div></section>`,
    "03": `<section class="content-section homepage-update-document"><div class="document-heading"><p class="eyebrow">HOME PAGE UPDATE</p><h2>首頁產品需求文件 PRD v1.2</h2><p>定義首頁、雙角色引導與驗收規則；不把未確認的商業或後端功能混入首頁。</p></div><div class="grid-2 document-card-grid"><div class="card"><span class="card-tag">目標與範圍</span><h3>讓第一次做系統的人看懂下一步</h3><p>首頁需要讓讀者理解學習路徑、角色分工、系統方向，並能前往各階段、名詞與手機發布說明。</p><ul class="document-list"><li>範圍：首頁內容、雙角色靜態引導、內部導覽、外部原始影片連結</li><li>不包含：帳號、付費、資料收集、對話或系統建置服務</li></ul></div><div class="card"><span class="card-tag">核心規則</span><h3>內容先於裝飾</h3><ul class="document-list"><li>隼鳥解說、Eddy 回饋；同場景不新增第三位角色</li><li>角色不取代文字、CTA 或流程圖</li><li>手勢與表情需對應旁邊內容，不可產生相反意思</li><li>外部連結清楚標示為外部來源</li></ul></div></div><div class="document-acceptance"><strong>正常場景：</strong>讀者可由 Hero、角色引導、卡片與導覽進入對應教學頁。<br><strong>異常場景：</strong>角色素材失敗時仍可讀到替代文字與功能內容；手機版改為單欄，導覽收進選單。</div></section>`,
    "04": `<section class="content-section homepage-update-document"><div class="document-heading"><p class="eyebrow">HOME PAGE UPDATE</p><h2>首頁互動原型規格 v1.2</h2><p>先確認區塊、角色分工、點擊結果與窄螢幕狀態，再進入 UI 細節。</p></div><div class="prototype-flow"><div>固定導覽<small>學習路線、提示詞、AI 協作、名詞、手機 App</small></div><div>Hero CTA<small>進入階段 0／完整路線</small></div><div>角色引導<small>隼鳥解說／Eddy 回饋</small></div><div>系統卡與流程圖<small>閱讀方向與階段連結</small></div></div><div class="grid-2 document-card-grid"><div class="card"><span class="card-tag">桌面原型</span><h3>主內容由左至右閱讀</h3><ul class="document-list"><li>Hero 文案在左、流程卡在右</li><li>角色引導置於 Hero 後，只支援閱讀理解</li><li>角色、插圖與文字保留安全區</li></ul></div><div class="card"><span class="card-tag">手機原型</span><h3>以單欄維持閱讀順序</h3><ul class="document-list"><li>主導覽收合為可開關選單</li><li>所有卡片改單欄，按鈕維持可點擊高度</li><li>角色縮放但不可遮住標題、內文或 CTA</li></ul></div></div><div class="document-acceptance"><strong>互動驗收：</strong>角色本身沒有點擊功能；所有 CTA 與卡片連結指向正確頁面；選單可開關。</div></section>`,
    "05": `<section class="content-section homepage-update-document"><div class="document-heading"><p class="eyebrow">HOME PAGE UPDATE</p><h2>首頁 UI 設計規格 v1.2</h2><p>以雙角色、既有插圖、留白與藍綠色系為基準，讓後續頁面延續同一套介面語言。</p></div><div class="ui-token-grid"><div class="token-card token-ink"><strong>深藍</strong><small>結構、標題、主要文字</small></div><div class="token-card token-blue"><strong>電藍</strong><small>主要按鈕、流程與互動</small></div><div class="token-card token-teal"><strong>青綠</strong><small>分段、次要狀態與提示</small></div><div class="token-card token-yellow"><strong>金黃</strong><small>靈感、提醒與小互動點</small></div></div><div class="grid-2 document-card-grid"><div class="card"><span class="card-tag">角色規格</span><h3>AI 教學者與人類學習者</h3><ul class="document-list"><li>Eddy 固定捲髮、飛行眼鏡、紅外套、左手手錶與黑色慢跑鞋</li><li>隼鳥 v2 固定皮革手套、一般衣袖、深色慢跑鞋與對應表情</li><li>紅色與藍綠色維持分離，角色不遮文字、臉或手勢</li></ul></div><div class="card"><span class="card-tag">響應式規格</span><h3>先確保內容可讀</h3><ul class="document-list"><li>桌面：三欄卡片與完整主導覽</li><li>平板：雙欄卡片，保留角色與文字安全區</li><li>手機：單欄卡片、導覽收合、角色依容器縮放</li></ul></div></div><div class="document-acceptance"><strong>UI 驗收：</strong>文字與背景對比清楚；所有圖片有替代文字；角色不遮內容；桌面、平板、手機的閱讀順序一致。</div></section>`
  }
  return docs[stageId] || ""
}

function stagePage(stage) {
  const index = stages.findIndex(s => s.id === stage.id)
  const prev = stages[index - 1]
  const next = stages[index + 1]
  const lesson = tutorialLessons[stage.id]
  return `${navMarkup()}<main class="page-shell">
    <section class="page-hero"><p class="breadcrumb"><a href="roadmap.html">學習地圖</a> ／ 階段 ${stage.id}</p><p class="eyebrow">STAGE ${stage.id}</p><div class="practice-subject"><span>本課練習主題</span><strong>AI 個人工作台</strong></div><h1>${stage.title}</h1><p class="lead">${firstPersonTeachingSummaries[stage.id]}</p></section>
    <div class="stage-layout">${stageSidebar(stage.id)}<article class="stage-main">
      <div class="input-output"><div class="io-card"><small>本階段輸入</small><strong>${lesson.input}</strong></div><div class="io-card"><small>本階段產物</small><strong>${lesson.output}</strong></div></div>
      ${detailedTeaching(stage)}
      <section class="content-section"><h2>本階段操作流程</h2><p>先看圖走一次；遇到判斷點時，依「是／否」分支決定往下或回頭修正。</p>${stageFlowFigure(stage)}</section>
      ${personalWorkbenchExample(stage)}
      ${stageCollaborationTeaching(stage)}
      <section class="content-section"><h2>這一頁會看到的名詞</h2><div class="term-list">${stage.terms.map(name=>{ const term = findTerm(name); return `<a class="term" href="${term ? `term-${term.slug}.html` : 'glossary.html'}">${name}</a>` }).join("")}</div></section>
      ${stagePromptSection(stage)}
      ${developmentAcceptanceTeaching(stage)}
      <section class="content-section"><h2>本階段驗收</h2><p>請先實際檢查自己的產物；這個勾選只保存在目前瀏覽器，不會上傳文件或替你驗收。</p><div class="checklist" data-checklist data-stage="${stage.id}">${stageAcceptanceChecks[stage.id].map((x,i)=>`<label class="check-row"><input type="checkbox" data-check="${i}"><span>${x}</span></label>`).join("")}</div><div class="button-row"><button class="button button-primary" type="button" data-complete-stage>標記本階段完成</button><a class="button button-secondary" href="progress.html">查看匿名進度</a></div></section>
      <nav class="lesson-nav">${prev?`<a class="button button-secondary" href="${prev.slug}">← ${prev.title}</a>`:'<span></span>'}${next?`<a class="button button-primary" href="${next.slug}">${next.title} →</a>`:`<a class="button button-teal" href="pwa-install.html">先加入手機主畫面 →</a>`}</nav>
    </article></div></main>${footerMarkup()}`
}

function homePage() {
  return `${navMarkup()}<main class="page-shell"><section class="hero"><div><p class="eyebrow">AI SYSTEM DEVELOPMENT ACADEMY</p><h1>從模糊想法<br>走到自己的系統</h1><p class="lead">我不需要一開始就懂技術；我會先把想做的事說清楚，一步一步完成可操作、可驗收的網站，學會測試、備份與日常更新。</p><div class="button-row"><a class="button button-primary" href="stage-00.html">從我的第一關開始</a><a class="button button-secondary" href="roadmap.html">先看學習地圖</a></div></div><div class="hero-board"><h3>我會走完的一條路</h3><div class="board-flow"><span>先說清楚我想做什麼</span><span>再把規格整理完整</span><span>完成並驗收 Web</span><span>備份版本並準備網站使用</span></div></div></section>
    <section class="role-guide-section" aria-labelledby="role-guide-title"><div class="role-guide-copy"><p class="eyebrow">AI LEARNING GUIDE</p><h2 id="role-guide-title">隼鳥教 Eddy 學 AI</h2><p>隼鳥是學院的 AI 教學者，負責說明、示範與確認；Eddy 是人類學習者，負責提問、思考與實作。重要規則仍以頁面文字與 CTA 為準。</p><div class="role-guide-tags"><span>隼鳥｜教學・示範・確認</span><span>Eddy｜學習・提問・實作</span></div></div><div class="role-guide-art"><img class="role-guide-interaction" src="assets/characters/eddy/falcon-teaches-eddy-ai-v1.png" alt="隼鳥吉祥物指向 AI 學習步驟進行教學，Eddy 以思考姿勢專注學習"></div></section>
    <section class="section home-source-section" id="source" aria-labelledby="source-title"><figure class="mascot-thanks" aria-hidden="true"><img src="assets/mascot/falcon-v2/transparent/falcon-happy-v2.png" alt=""><span class="thanks-badge thanks-badge-word">謝謝</span><span class="thanks-badge thanks-badge-heart">♥</span><span class="thanks-badge thanks-badge-star">✦</span><span class="thanks-badge thanks-badge-share">分享</span></figure><div class="source-copy"><p class="eyebrow">SOURCE &amp; THANKS</p><h2 id="source-title">謝謝原作者提供這套方法的資訊起點</h2><p class="source-lead">感謝 Daju_ai 在 TikTok 帳號 @daju_shouai 分享《0 基礎做 App 保姆級教程》，讓更多人看見可以運用 AI，從想法開始建立網站與 App。</p><p>本站正在實際驗證這套方式是否能被整理成一套可重複、可逐步驗收的方法。我們希望用它發展更多與日常工作和生活息息相關的網頁系統，從簡單工具，逐步延伸成更龐大、更細緻、可持續成長，而且每天真正用得到的系統。</p><p class="source-boundary"><strong>整理與驗證聲明：</strong>本站依實作結果重新分類、結構化並補充現況驗證；內容不是原影片逐字重製，也不代表原作者替本站全部內容背書。本站不公開完整字幕、不嵌入或備份原始影片。</p><div class="button-row"><a class="button button-secondary" href="https://www.tiktok.com/@daju_shouai/video/7673534003223383317" target="_blank" rel="noopener noreferrer">查看 TikTok 原始影片 ↗</a><a class="button button-primary" href="model-guide.html">查看本站工具與模型驗證</a></div></div></section>
    <section class="section"><div class="section-head"><p class="eyebrow">START HERE</p><h2>我想做什麼樣的系統？</h2><p>個人工作台只是我們一起練習的例子；我也能把相同方法換成管理系統、教學網站或自己的工具。</p></div><div class="grid-3">${[["個人工作台","personal-workbench-v1.png","我把今天待辦、專案進度與筆記放在同一個地方，慢慢建立自己的工作節奏。"],["管理系統","management-system-v1.png","我整理客戶、案件與團隊流程，讓每天的追蹤不再散落各處。"],["教學網站","teaching-site-v1.png","我把課程、教材與學習任務串起來，做成可以持續更新的教學網站。"],["資料整理工具","data-organizer-v1.png","我把零散資料匯入、分類與搜尋，讓它們變成真正找得到的工作資產。"],["Android App","android-app-v1.png","我用習慣追蹤 App 練習打卡與回顧，再驗證 Android 操作與發布流程。"],["iOS App","ios-app-v1.png","我用習慣追蹤 App 練習 iPhone 打卡流程，再準備 iOS 測試與發布。"]].map(([x,art,description], index)=>`<a class="card system-type-card" href="${["case-workbench.html", "case-management.html", "case-teaching.html", "case-data.html", "case-android.html", "case-ios.html"][index]}"><img class="card-illustration" src="assets/illustrations/${art}" alt="${x}插圖"><span class="card-tag">實際案例</span><h3>${x}</h3><p>${description}</p><span class="card-link">查看完整案例 →</span></a>`).join("")}</div></section>
    <section class="section"><div class="section-head"><p class="eyebrow">TEXT DIAGRAM</p><h2>先用圖看懂整條開發路線</h2><p>每個節點直接寫出階段名稱、用途與產物，圖片下方另有完整文字版。</p></div>${roadmapVisualFigure(["第一段：開發準備、需求訪談、功能清單、PRD，把需求說清楚。","第二段：互動原型、UI 設計、TRD、開發計畫，把規格變成施工圖。","第三段：Web 開發與測試、驗收與版本、Web 上線，留下證據並正式交付。","每一步的產物都是下一步的輸入；未確認時不要跳到開發或發布。"])}<div class="grid-2 learning-entry-grid"><div class="card learning-entry-card"><img class="card-illustration card-illustration-small" src="assets/illustrations/glossary-v1.png" alt="專有名詞說明插圖"><span class="card-tag">白話解釋</span><h3>看不懂專有名詞？</h3><p>每個名詞都有獨立頁面，說明定義、用途、常見錯誤與相關階段。</p><a class="button button-secondary" href="glossary.html">查看專有名詞</a></div><div class="card learning-entry-card"><img class="card-illustration card-illustration-small" src="assets/illustrations/model-choice-v1.png" alt="模型選擇插圖"><span class="card-tag">工具選擇</span><h3>Agent 和模型差在哪裡？</h3><p>先分清楚操作工具與推理模型，再依任務與權限選擇。</p><a class="button button-primary" href="model-guide.html">查看模型選擇指南</a></div><div class="card resource-entry-card"><span class="resource-symbol">SK</span><span class="card-tag">工作方法</span><h3>Skill 要怎麼啟動？</h3><p>從尋找、載入到實際驗證，一步一步確認 Skill 真的可用。</p><a class="button button-secondary" href="skill-guide.html">查看 Skill 教學</a></div><div class="card resource-entry-card"><span class="resource-symbol">AG</span><span class="card-tag">協作分工</span><h3>子 Agent 可以做什麼？</h3><p>學會把設計、測試與回報分出去，再由主 Agent 整合與交付。</p><a class="button button-primary" href="agent-team.html">查看 Agent 分工</a></div></div></section>
    <section class="section"><div class="section-head"><p class="eyebrow">MOBILE APP</p><h2>先選簡單安裝，或走商店發布</h2><p>如果只是自己或小範圍使用，可以先把 Web 加入主畫面，需要商店曝光再走 Android／iOS 發布</p></div><div class="grid-3"><div class="platform-card"><img class="platform-illustration" src="assets/illustrations/home-screen-v1.png" alt="加入主畫面插圖"><h3>網頁加入主畫面</h3><ul><li>不需要先上架商店</li><li>保留同一套 Web</li><li>Android 與 iPhone 都能使用</li><li>最快開始真實使用</li></ul><a class="button button-secondary" href="pwa-install.html">查看加入主畫面</a></div><div class="platform-card"><img class="platform-illustration" src="assets/illustrations/android-release-v1.png" alt="Android 發布插圖"><h3>Android／Google Play</h3><ul><li>Android App Bundle</li><li>Play App Signing</li><li>測試軌與資料安全</li><li>正式發布與版本更新</li></ul><a class="button button-primary" href="android-publish.html">查看 Android 原型</a></div><div class="platform-card"><img class="platform-illustration" src="assets/illustrations/ios-release-v1.png" alt="iOS 發布插圖"><h3>iPhone／App Store</h3><ul><li>macOS 與 Xcode</li><li>App Store Connect</li><li>TestFlight</li><li>App Review 與正式發布</li></ul><a class="button button-teal" href="ios-publish.html">查看 iOS 原型</a></div></div></section></main>${footerMarkup()}`
}

function roadmapPage() {
  let progress = {}
  try { progress = JSON.parse(localStorage.getItem("academyPrototypeProgressV1") || "{}") } catch { progress = {} }
  const completed = stages.filter(stage => progress[stage.id]).length
  const phaseFor = id => Number(id) <= 3 ? "區域一｜把想法說清楚" : Number(id) <= 7 ? "區域二｜做成施工圖" : "區域三｜開發與交付"
  return `${navMarkup()}<main class="page-shell"><section class="page-hero map-hero"><p class="eyebrow">LEARNING MAP</p><h1>我的 AI 系統開發學習地圖</h1><p class="lead">我會依序通過十一關，每一關都取得一份可檢查的產物；完成網站驗收後，準備網站使用、備份與更新。</p><div class="map-progress" aria-label="目前完成 ${completed} 關，共 11 關"><strong>${completed}／11</strong><span>目前過關進度</span></div></section><section class="section learning-map-section"><div class="map-legend"><span><i class="legend-dot current"></i>可進入關卡</span><span><i class="legend-dot complete"></i>已完成</span><span>每一關的產物會成為下一關的輸入</span></div><div class="learning-map">${stages.map((s,index)=>{ const lesson = tutorialLessons[s.id]; return `<article class="map-stage${progress[s.id] ? " done" : ""}" data-route-stage="${s.id}"><div class="map-node"><span>${s.id}</span><small>第 ${index + 1} 關</small></div><div class="map-card-content"><span class="map-region">${phaseFor(s.id)}</span><h3>${s.title}</h3><p>${lesson.summary}</p><div class="map-reward"><small>過關產物</small><strong>${lesson.output}</strong></div></div><a class="button ${progress[s.id] ? "button-teal" : "button-secondary"}" href="${s.slug}">${progress[s.id] ? "再次查看" : "進入關卡"}</a></article>` }).join("")}</div><div class="map-finish"><span>WEB 完成點</span><h2>十一關通過後，確認網站可以使用</h2><p>我會實際檢查網站操作、資料保存與手機瀏覽，留下可回復版本；確認後才決定是否發布。</p></div></section><section class="section map-side-quests"><div class="grid-3"><div class="platform-card"><div class="platform-symbol">＋</div><span class="card-tag">支線 A</span><h3>加入手機主畫面</h3><p>我沿用已完成的 Web，不必先上架商店，就能開始每天使用。</p><a class="button button-secondary" href="pwa-install.html">開啟這條支線</a></div><div class="platform-card"><div class="platform-symbol">A</div><span class="card-tag">支線 B</span><h3>Android 發布</h3><p>我會從 App 建置、AAB、測試，一路準備到 Google Play 正式發布。</p><a class="button button-primary" href="android-publish.html">開啟這條支線</a></div><div class="platform-card"><div class="platform-symbol">iOS</div><span class="card-tag">支線 C</span><h3>iOS 發布</h3><p>我會依序處理 Xcode、TestFlight、App Review 與 App Store。</p><a class="button button-teal" href="ios-publish.html">開啟這條支線</a></div></div></section></main>${footerMarkup()}`
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
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="breadcrumb"><a href="roadmap.html">完整路線</a> ／ 加入主畫面</p><p class="eyebrow">PWA INSTALL</p><h1>我先把網頁放進手機主畫面</h1><p class="lead">當我還不需要商店上架時，我可以先用主畫面圖示快速開啟自己的 Web 系統，讓它開始進入日常。</p><div class="button-row"><button class="button button-primary" type="button" data-install-pwa disabled>等待瀏覽器提供安裝</button><a class="button button-secondary" href="#manual-install">查看我的手動安裝方式</a></div></section>
    <section class="section"><div class="section-head"><h2>這條路適合什麼時候</h2></div><div class="grid-3"><div class="card"><span class="card-tag">最快開始</span><h3>自己使用</h3><p>先驗證系統是否每天真的有用，不必立即處理商店審查</p></div><div class="card"><span class="card-tag">保留 Web</span><h3>同一套版本</h3><p>桌面瀏覽器與手機主畫面共用同一套網站與更新</p></div><div class="card"><span class="card-tag">清楚邊界</span><h3>不是商店上架</h3><p>加入主畫面仍是 Web App，不代表已發布到 Google Play 或 App Store</p></div></div></section>
    <section class="section"><div class="section-head"><h2>網站要先準備什麼</h2></div>${diagramFigure("assets/diagrams/pwa-preparation-flow.png", "加入手機主畫面前的準備", "隼鳥把 Web 圖示放進手機主畫面，Eddy 檢查 HTTPS、Manifest 與圖示；不能正常安裝時回去補設定。", ["確認 HTTPS。", "準備 Web App Manifest。", "放入 192 與 512 圖示。", "可以安裝就用手機實際開啟。", "不能安裝就補設定後重試。"])}</section>
    <section class="section" id="manual-install"><div class="section-head"><h2>Android 與 iPhone 安裝方式</h2></div><div class="grid-2"><div class="card"><span class="card-tag">Android／Chrome</span><h3>從瀏覽器安裝</h3><div class="step-list"><div class="step-item">使用 Chrome 開啟網站</div><div class="step-item">點選瀏覽器提供的安裝 App 或加入主畫面</div><div class="step-item">確認網站名稱與圖示</div><div class="step-item">回到主畫面點擊圖示開啟</div></div></div><div class="card"><span class="card-tag">iPhone／Safari</span><h3>從分享選單加入</h3><div class="step-list"><div class="step-item">使用 Safari 開啟網站</div><div class="step-item">點選更多或分享</div><div class="step-item">選擇加入主畫面</div><div class="step-item">開啟以 Web App 使用後點選加入</div></div></div></div></section>
    <section class="section"><div class="policy-note"><strong>瀏覽器呈現會不同</strong><br>Android 的安裝按鈕與選單名稱會依瀏覽器變化，iPhone 不會出現同樣的自動安裝提示，需要從 Safari 分享選單操作</div></section>
    <section class="section"><div class="section-head"><h2>官方來源</h2></div><div class="source-list"><a class="source-link" href="https://web.dev/learn/pwa/installation" target="_blank" rel="noreferrer">PWA 安裝方式 ↗</a><a class="source-link" href="https://web.dev/learn/pwa/web-app-manifest" target="_blank" rel="noreferrer">Web App Manifest ↗</a><a class="source-link" href="https://support.apple.com/guide/iphone/iphea86e5236/ios" target="_blank" rel="noreferrer">iPhone Safari 加入主畫面 ↗</a></div></section>
    <section class="section"><div class="lesson-nav"><a class="button button-secondary" href="stage-10.html">← Web 上線</a><a class="button button-primary" href="mobile-app.html">比較三種手機路線 →</a></div></section></main>${footerMarkup()}`
}

function mobileOverview() {
  const choice = diagramFigure("assets/diagrams/mobile-path-choice.png", "Web 放進手機的選擇", "從驗收 Web 開始，依是否只想快速使用、是否需要商店發布，選擇加入主畫面、Android、iOS 或維持 Web 的流程圖。", ["先驗收 Web。", "只想快速使用就加入手機主畫面。", "需要商店發布再選 Android 或 iOS。", "不需要商店就維持 Web 使用。"])
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="breadcrumb"><a href="roadmap.html">完整路線</a> ／ 手機 App</p><p class="eyebrow">MOBILE EXTENSION</p><h1>我的系統要怎麼放進手機？</h1><p class="lead">我先確認 Web 已經能用，再比較加入主畫面、Android 商店與 iOS 商店，選一條符合現在目的的路。</p></section><section class="section">${choice}</section><section class="section"><div class="grid-3"><div class="platform-card"><div class="platform-symbol">＋</div><h3>網頁加入主畫面</h3><p>我用最少的發布工作，先在自己的手機上驗證它是否真的有用。</p><a class="button button-secondary" href="pwa-install.html">查看加入主畫面</a></div><div class="platform-card"><div class="platform-symbol">A</div><h3>Android／Google Play</h3><p>我可以在 Windows 或 macOS 開發 Android，正式發布時再使用 Google Play Console。</p><a class="button button-primary" href="android-publish.html">了解 Android 發布</a></div><div class="platform-card"><div class="platform-symbol">iOS</div><h3>iOS／App Store</h3><p>我要正式建置與上傳 iOS 時，才需要 macOS、Xcode 與 Apple Developer 流程。</p><a class="button button-teal" href="ios-publish.html">了解 iOS 發布</a></div></div></section><section class="section"><div class="policy-note"><strong>我會在發布前重新核對官方要求</strong><br>Google Play 與 Apple 的規則會更新，所以我不把本網站上的版本號或門檻當成永久規則。</div></section></main>${footerMarkup()}`
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
  const releaseFlow = diagramFigure(android ? "assets/diagrams/android-publish-flow.png" : "assets/diagrams/ios-publish-flow.png", android ? "Android 發布流程" : "iOS 發布流程", android ? "隼鳥駕駛 Android 測試車運送 AAB，Eddy 準備商店資料；審查未通過時修正後重送。" : "隼鳥把 App Build 推上 TestFlight，Eddy 使用 Xcode 提交審查；未通過時修正後重送。", android ? ["驗收 Web。", "建立 Android 專案。", "完成真機與測試軌。", "準備商店資料。", "審查通過後正式發布，否則修正重送。"] : ["驗收 Web。", "建立 Xcode 專案。", "完成真機與 TestFlight。", "準備商店資料。", "審查通過後發布 App Store，否則修正重送。"])
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="breadcrumb"><a href="mobile-app.html">手機 App</a> ／ ${android?'Android':'iOS'}</p><p class="eyebrow">${android?'ANDROID':'IOS'} RELEASE</p><h1>${title}</h1><p class="lead">${lead}</p></section>
    <section class="section"><div class="section-head"><h2>完整發布路線</h2><p>先測試，再準備商店資料與簽署版本，通過審查後才算正式發布</p></div>${releaseFlow}</section>
    <section class="section"><div class="grid-2"><div><div class="section-head"><h2>手機版原型預覽</h2><p>這個畫面示範學習者在手機上查看發布進度</p></div><div class="phone-preview"><div class="phone-notch"></div><div class="phone-screen"><p class="eyebrow">${android?'GOOGLE PLAY':'APP STORE'}</p><h3>${android?'Android 發布進度':'iOS 發布進度'}</h3>${steps.slice(0,6).map(([n,t],i)=>`<div class="mini-step ${i===2?'active':''}">${n} ${t}</div>`).join("")}<button class="button button-primary" type="button" style="width:100%;margin-top:10px">繼續目前步驟</button></div></div></div><div><div class="section-head"><h2>每一步要留下什麼</h2></div><div class="step-list">${steps.map(([,t,d])=>`<div class="step-item"><strong>${t}</strong><br><span>${d}</span></div>`).join("")}</div></div></div></section>
    <section class="section"><div class="policy-note"><strong>發布前重新核對官方要求</strong><br>${android?'Google Play 的測試門檻、目標 API、資料安全與帳號驗證可能變更':'Apple 的 Xcode、SDK、App Review 與商店資料要求可能變更'}</div></section>
    <section class="section"><div class="section-head"><h2>官方來源</h2><p>教學頁只整理操作順序，正式送審時以官方文件為準</p></div><div class="source-list">${sources.map(([label,url])=>`<a class="source-link" href="${url}" target="_blank" rel="noreferrer">${label} ↗</a>`).join("")}</div></section>
    <section class="section"><div class="lesson-nav"><a class="button button-secondary" href="mobile-app.html">← 手機 App 總覽</a><a class="button ${android?'button-teal':'button-primary'}" href="${android?'ios-publish.html':'complete.html'}">${android?'繼續看 iOS →':'完成與作品分享 →'}</a></div></section></main>${footerMarkup()}`
}

function diagramFigure(src, title, alt, textSteps) {
  const caption = src.includes("/cases/") ? "隼鳥與 Eddy 依主題示範操作；依 01–06 順序閱讀，點圖可放大。" : src.startsWith("diagram/") ? "先看圖中的主題與操作關係，再展開下方文字步驟；點圖可放大。" : "角色會依任務改變姿勢；判斷點以「是／否」顯示下一步。"
  return `<figure class="explanation-figure generated-flow-figure"><a class="diagram-image-link" href="${src}" target="_blank" aria-label="開啟${title}原尺寸"><img src="${src}" alt="${alt}" loading="lazy"></a><figcaption><strong>${title}</strong><span>${caption}</span>${src.startsWith("diagram/") ? `<a href="${src.replace(".svg", "@2x.png")}" download>下載 PNG 圖檔</a>` : ""}</figcaption><details class="diagram-text"><summary>閱讀圖解文字版</summary><ol>${textSteps.map(step=>`<li>${step}</li>`).join("")}</ol></details></figure>`
}

function roadmapVisualFigure(textSteps) {
  return `<figure class="explanation-figure generated-roadmap-figure"><img src="assets/diagrams/falcon-teaches-eddy-development-roadmap-v2.png" alt="亮色流程圖：隼鳥教學者帶著 Eddy 從階段 00 開發準備依序理解至階段 10 Web 上線"><figcaption><strong>從想法到可發布系統</strong><span>以隼鳥教 Eddy 的互動帶領三段式開發流程；每一段均列出階段名稱與方向。</span></figcaption><details class="diagram-text"><summary>閱讀圖解文字版</summary><ol>${textSteps.map(step=>`<li>${step}</li>`).join("")}</ol></details></figure>`
}

function glossaryPrototype() {
  const raw = new URLSearchParams(location.search).get("variant")?.toUpperCase()
  const variant = ["A", "B", "C"].includes(raw) ? raw : "A"
  const labels = { A: "分類卡片", B: "索引與內容", C: "流程優先" }
  const termFlow = diagramFigure("assets/diagrams/term-learning-flow.png", "如何理解一個專有名詞", "遇到名詞後開啟說明頁、理解定義用途錯誤，再返回學習階段的四步驟流程圖", ["遇到不懂的名詞：例如 PRD、API、AI Agent。","開啟名詞說明頁：先看白話定義與出現階段。","比較正確用法與常見錯誤，必要時閱讀等價文字流程。","回到相關階段，把理解套入文件、畫面或測試並留下證據。"])
  let body = ""
  if (variant === "A") body = `<div class="section-head"><p class="eyebrow">VARIANT A</p><h2>依階段瀏覽名詞卡片</h2><p>適合第一次進入名詞庫，直接從白話摘要判斷要查看哪一個名詞。</p></div><div class="template-grid">${termCatalog.map(term=>`<article class="card"><span class="card-tag">${term.stage}</span><h3>${term.name}</h3><p>${term.meaning}</p><a class="card-link" href="term-${term.slug}.html">查看名詞說明 →</a></article>`).join("")}</div>`
  if (variant === "B") {
    const first = termCatalog[0]
    body = `<div class="section-head"><p class="eyebrow">VARIANT B</p><h2>左邊找名詞，右邊先看重點</h2><p>適合已經知道名詞名稱，想快速掃描定義與常見錯誤。</p></div><div class="glossary-index-layout"><aside class="glossary-index" aria-label="專有名詞索引">${termCatalog.map(term=>`<a href="term-${term.slug}.html">${term.name}<small>${term.stage}</small></a>`).join("")}</aside><article class="glossary-preview"><span class="card-tag">預覽第一筆</span><h2>${first.name}</h2><p class="lead">${first.meaning}</p><div class="grid-2"><div class="card"><h3>實際用途</h3><p>${first.use}</p></div><div class="card"><h3>常見錯誤</h3><p>${first.mistake}</p></div></div><a class="button button-primary" href="term-${first.slug}.html">開啟完整說明</a></article></div>`
  }
  if (variant === "C") {
    const groups = stages.map(stage => ({
      stage,
      terms: termCatalog.filter(term => term.stage.split("與").map(value => value.trim()).includes(`階段 ${Number(stage.id)}`))
    }))
    const extras = termCatalog.filter(term=>!/^階段/.test(term.stage))
    body = `<div class="section-head"><p class="eyebrow">VARIANT C</p><h2>先看開發流程，再找該階段名詞</h2><p>適合正在走十階段流程，想知道目前階段會遇到哪些名詞。</p></div>${diagramFigure("assets/diagrams/development-roadmap.svg", "十一階段開發路線", "從階段零到階段十的完整開發流程圖，每個節點包含名稱用途與產物", ["階段 0 至 3：把需求說清楚。","階段 4 至 7：把規格變成原型、技術文件與開發計畫。","階段 8 至 10：實作、驗收、建立版本並上線。"])}<div class="glossary-stage-groups">${groups.map(({stage,terms})=>`<section id="glossary-stage-${stage.id}" class="stage-term-group"><div><span class="card-tag">階段 ${stage.id}</span><h3>${stage.title}</h3><p>${tutorialLessons[stage.id]?.summary || stage.summary}</p></div><div class="term-list">${terms.map(term=>`<a class="term" href="term-${term.slug}.html">${term.name}</a>`).join("") || '<span class="muted-text">目前沒有獨立名詞頁</span>'}</div></section>`).join("")}${extras.length?`<section class="stage-term-group"><div><span class="card-tag">跨階段</span><h3>工具與社群</h3></div><div class="term-list">${extras.map(term=>`<a class="term" href="term-${term.slug}.html">${term.name}</a>`).join("")}</div></section>`:""}</div>`
  }
  return `${termFlow}<section class="content-section">${body}</section><div class="prototype-switcher" data-prototype-switcher data-current-variant="${variant}" aria-label="專有名詞頁原型方案"><button type="button" aria-label="上一個原型方案" data-variant-direction="-1">←</button><strong>${variant}｜${labels[variant]}</strong><button type="button" aria-label="下一個原型方案" data-variant-direction="1">→</button></div>`
}

function modelGuidePage() {
  const comparisons = [
    { type: "AI Agent", name: "Codex", tags: "需求與架構,程式開發與執行,圖片理解", use: "瀏覽儲存庫、編輯檔案、執行指令與測試。", limit: "權限、沙箱、介面與可選模型會影響實際能力。", image: "可使用螢幕截圖或圖表作為工作資料；依當前介面與模型為準。", source: "https://openai.com/codex/", sourceLabel: "Codex 官方資料" },
    { type: "AI Agent", name: "Claude Code", tags: "需求與架構,程式開發與執行", use: "讀取程式庫、跨檔案修改、執行指令與整合開發工具。", limit: "權限模式、介面與設定會影響實際操作。", image: "圖片能力依使用介面與所選模型而異，需由官方文件核對。", source: "https://docs.anthropic.com/en/docs/claude-code/overview", sourceLabel: "Claude Code 官方資料" },
    { type: "AI 模型", name: "OpenAI GPT 系列", tags: "需求與架構,原型與 UI,圖片理解", use: "理解文字或圖片、推理、整理規格與產生內容。", limit: "不同型號的速度、推理、上下文與工具能力不同；本頁不自動推薦型號。", image: "是否支援圖片輸入需依所選型號與介面確認。", source: "https://platform.openai.com/docs/models", sourceLabel: "OpenAI 模型官方資料" },
    { type: "AI 模型", name: "Anthropic Claude 系列", tags: "需求與架構,原型與 UI,圖片理解", use: "理解長文件、圖片與需求脈絡，協助分析及產生內容。", limit: "不同型號與方案的能力、用量及可用工具不同。", image: "是否支援圖片或 PDF 需依所選型號與介面確認。", source: "https://docs.anthropic.com/en/docs/about-claude/models", sourceLabel: "Claude 模型官方資料" }
  ].map(item => `<tr data-model-tags="${item.tags}"><th scope="row"><strong>${item.name}</strong><br><span class="card-tag">${item.type}</span><br><small>${item.name.includes("Claude") ? "Anthropic" : "OpenAI"}</small></th><td>${item.use}</td><td>${item.tags.split(",").join("、")}</td><td>${item.image}</td><td>${item.limit}</td><td><a href="${item.source}" target="_blank" rel="noopener noreferrer">${item.sourceLabel} ↗</a><br><small>資料驗證：2026-09-01</small></td></tr>`).join("")
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="breadcrumb"><a href="index.html">首頁</a> ／ 模型選擇指南</p><p class="eyebrow">AGENT &amp; MODEL GUIDE</p><h1>我該選哪個 AI 工具與模型？</h1><p class="lead">先分清楚「在哪裡操作」與「由哪個模型理解」，再依任務、權限、限制與官方資料做決定。</p></section>
    <section class="section">${diagramFigure("assets/diagrams/agent-model-relationship-flow.png", "AI Agent、模型與專案環境的關係", "使用者任務交給 AI Agent，Agent 呼叫模型理解並在權限範圍操作檔案終端瀏覽器，產物回到使用者確認的關係圖", ["使用者說明目標、限制與資料，並決定是否接受結果。","AI Agent 管理工具、上下文與操作流程；可做的事受權限限制。","AI 模型負責理解文字或圖片、推理與生成，本身不等於取得檔案或終端權限。","專案環境包含檔案、終端機、瀏覽器與外部工具；敏感操作仍需人工核准。","產物與證據回到使用者，由使用者確認、要求修正或進入下一步。"])}</section>
    <section class="section"><div class="grid-2"><article class="card"><span class="card-tag">操作工具</span><h2><a class="inline-term" href="term-ai-assistant.html">AI Agent｜查看名詞說明</a></h2><p>你實際操作的工具或執行環境，負責管理檔案、終端機、瀏覽器與權限。</p></article><article class="card"><span class="card-tag">推理核心</span><h2><a class="inline-term" href="term-language-model.html">AI 模型｜查看名詞說明</a></h2><p>負責理解、推理與生成；實際能不能改檔或跑程式，仍要看 Agent 的工具與權限。</p></article></div></section>
    <section class="section"><div class="section-head"><h2>各家 AI 工具與模型比較</h2><p>橫向對照用途、任務、圖片支援與限制。Agent 是操作工具，模型是推理核心；表格依既有官方資料整理，並非效能排名。手機可左右滑動查看完整表格。</p></div><div class="task-tabs" role="group" aria-label="任務分類"><button class="active" type="button" data-model-task="全部">全部比較</button><button type="button" data-model-task="需求與架構">需求與架構</button><button type="button" data-model-task="原型與 UI">原型與 UI</button><button type="button" data-model-task="程式開發與執行">程式開發與執行</button><button type="button" data-model-task="圖片理解">圖片理解</button></div><div class="model-table-scroll" role="region" aria-label="AI 比較表，可左右捲動" tabindex="0"><table class="model-comparison-table" data-model-table><caption>OpenAI 與 Anthropic：操作工具與模型系列比較</caption><thead><tr><th scope="col">工具／模型與廠商</th><th scope="col">主要用途</th><th scope="col">對應任務</th><th scope="col">圖片支援</th><th scope="col">使用限制</th><th scope="col">官方資料</th></tr></thead><tbody>${comparisons}</tbody></table></div><p class="policy-note" data-model-empty hidden>目前沒有符合條件且已完成官方資料驗證的項目。</p></section>
    <section class="section"><div class="lesson-nav"><a class="button button-secondary" href="index.html#source">← 查看首頁來源與致謝區</a><a class="button button-primary" href="glossary.html">查看專有名詞 →</a></div></section></main>${footerMarkup()}`
}

const learningTemplates = {
  "需求文件": `# 需求文件\n\n## 我想解決的問題\n- \n\n## 誰會使用\n- \n\n## 真實使用情境\n- 何時：\n- 為了什麼：\n- 現在怎麼處理：\n\n## 第一版要做\n- \n\n## 第一版不做\n- \n\n## 完成判斷\n- `,
  "功能清單": `# 功能清單\n\n## 模組：\n### 功能：\n- 子功能：\n- 優先級：P0／P1／P2\n- 解決的使用者問題：\n\n## 待確認\n- `,
  "PRD": `# 產品需求文件 PRD\n\n## 背景與目標\n\n## 目標使用者\n\n## 範圍與不做事項\n\n## 功能需求\n### 功能名稱\n- 輸入：\n- 操作：\n- 輸出：\n- 規則與限制：\n- 正常情境：\n- 異常情境：\n- 驗收條件：\n\n## 待確認\n- `,
  "原型規格": `# 互動原型規格\n\n## 頁面：\n### 元件\n- 位置：\n- 預設狀態：\n- 使用者操作：\n- 操作後結果：\n- 驗證或錯誤提示：\n\n## 全域導覽與返回規則\n- `,
  "UI 規格": `# UI 設計規格\n\n## 視覺方向\n- 主色：\n- 輔助色：\n- 中性色：\n\n## 文字與間距\n- \n\n## 元件規格\n### 元件名稱\n- 狀態：\n- 桌面：\n- 手機：\n\n## 無障礙與響應式檢查\n- `,
  "TRD": `# 技術需求文件 TRD\n\n## 系統邊界\n\n## 功能技術分解\n### 功能名稱\n- 前端：\n- 後端：\n- 資料：\n- 驗證與錯誤處理：\n\n## API 與資料模型\n\n## 風險、依賴與待確認\n- `,
  "開發計畫": `# 開發實施計畫\n\n## 第一個可驗收垂直切片\n- 使用者可以：\n- 驗收證據：\n\n## 任務清單\n| 任務 | 前置依賴 | 產物 | 測試 | 驗收條件 |\n| --- | --- | --- | --- | --- |\n|  |  |  |  |  |\n\n## 里程碑\n- `,
  "驗收報告": `# 驗收報告\n\n## 版本資訊\n- 版本號：\n- 日期：\n- 變更摘要：\n\n## 驗收結果\n| 項目 | 操作與證據 | 結果 | 待處理 |\n| --- | --- | --- | --- |\n|  |  | 通過／失敗／待確認 |  |\n\n## 回歸檢查\n- `,
  "階段驗收紀錄": `# 階段驗收紀錄\n\n## 階段 NN｜名稱\n\n### 產物連結\n- \n\n### 實測步驟\n1. \n\n### 預期結果與實際結果\n- 預期：\n- 實際：\n\n### 證據位置\n- 截圖／測試輸出／版本：\n\n### 待確認\n- 【待確認】\n\n### 交接結論\n- [ ] 可以把產物交給下一階段\n- [ ] 必須回到前一階段修正`,
  "版本紀錄": `# 版本紀錄\n\n| 版本 | 日期 | 變更內容 | 驗收狀態 | 回復方式 |\n| --- | --- | --- | --- | --- |\n| v0.1 |  |  | 待確認 |  |\n\n## 不可覆蓋的舊版本位置\n- `
}

function skillGuidePage() {
  const concepts = [
    ["Agent", "負責理解任務、操作工具並交付結果的工作者。"],
    ["Skill", "教 Agent 依固定方法完成某一類工作的操作手冊。"],
    ["MCP／工具", "讓 Agent 可以讀取資料或執行特定動作的連接能力。"],
    ["AGENTS.md", "目前專案的合作規則、限制與交付格式。"]
  ]
  const designSkills = [
    ["工作台與產品介面", "ui-ux-pro-max", "先整理資訊層級、互動狀態、響應式與無障礙規則。"],
    ["品牌頁與形象頁", "design-taste-frontend", "建立清楚的視覺方向，再落成可使用的前端。"],
    ["依圖片還原介面", "image-to-code", "先確認必要依賴能運作，再把參考畫面轉成介面。"],
    ["流程圖與說明圖", "baoyu-diagram", "把複雜流程整理成可閱讀的圖與文字替代說明。"],
    ["完成後的介面稽核", "web-design-guidelines", "檢查導覽、可讀性、操作回饋、手機版與無障礙。"]
  ]
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="eyebrow">SKILL GUIDE</p><h1>Skill 怎麼找到、啟動與確認？</h1><p class="lead">我先理解 Skill 是一份工作方法，再確認它能被目前的 Agent 找到，最後用一個小任務驗證結果。</p></section>
    <section class="section"><div class="section-head"><h2>先分清楚四個角色</h2><p>它們會一起工作，但負責的事情不同。</p></div><div class="concept-grid">${concepts.map(([title, body]) => `<article class="card"><span class="concept-label">${title}</span><p>${body}</p></article>`).join("")}</div></section>
    <section class="section"><div class="section-head"><p class="eyebrow">ACTIVATION FLOW</p><h2>我用六步確認 Skill 真的可用</h2></div>${diagramFigure("assets/diagrams/skill-activation-flow.png", "Skill 啟動流程", "隼鳥拿出 Skill 使用手冊，Eddy 在終端機試跑小任務，依是否跑通決定記錄用法或檢查依賴與權限。", ["說明要用的 Skill。", "讀取使用規則。", "用小任務試跑。", "真的跑通就記錄可用方式。", "沒有跑通就檢查依賴與權限後重試。"])}<div class="boundary-note"><strong>完成標準：</strong>看到 Skill 名稱只代表「找得到」；必須真的完成任務並檢查輸出，才能標記為已驗證。</div></section>
    <section class="section"><div class="section-head"><h2>實際啟動方式</h2><p>介面名稱可能隨工具版本調整，所以我會先查看目前可用的 Skill 清單，再指定名稱。</p></div><div class="grid-2"><article class="card"><span class="card-tag">Codex</span><h3>直接在任務中指定</h3><p>輸入 <code>$Skill名稱</code>，接著寫清楚目標、可修改範圍與交付物；也可以從 Skill 清單選擇。</p></article><article class="card"><span class="card-tag">其他 Agent 工具</span><h3>先查看支援方式</h3><p>若介面支援斜線指令，就從 Skill 或 Commands 清單啟動；若沒有，就把 Skill 規則與任務要求一起交給主 Agent。</p></article></div>${collaborationPromptPanel("Skill 啟動範例", `請使用 $ui-ux-pro-max 協助我檢查這個教學頁。\n\n目標：讓第一次學 AI 系統開發的人看得懂下一步。\n範圍：只檢查資訊層級、操作回饋、手機版與無障礙。\n交付：列出問題、建議修改與驗證方法。\n限制：不要直接改變已確認的產品規則。`)}</section>
    <section class="section"><div class="section-head"><h2>設計工作可以怎麼選 Skill？</h2><p>先依任務選擇一個主要 Skill；遇到不同專業檢查，再依序補上。</p></div><div class="skill-selection-list">${designSkills.map(([task, skill, use]) => `<article><div><small>${task}</small><h3>${skill}</h3></div><p>${use}</p></article>`).join("")}</div></section>
    <section class="section"><div class="section-head"><h2>我會記錄到哪一層？</h2></div><div class="verification-levels">${[["1", "來源已確認"], ["2", "已安裝／可被找到"], ["3", "規則已載入"], ["4", "小任務已跑通"], ["5", "輸出已人工驗證"]].map(([number, text]) => `<div><strong>${number}</strong><span>${text}</span></div>`).join("")}</div><div class="lesson-nav"><a class="button button-secondary" href="stage-00.html">回到階段 00</a><a class="button button-primary" href="agent-team.html">下一步：安排子 Agent →</a></div></section></main>${footerMarkup()}`
}

function agentTeamPage() {
  const team = [
    ["主 Agent", "釐清目標、分派任務、整合差異，對最後答案負責。"],
    ["設計 Agent", "檢查資訊層級、畫面狀態、手機版與無障礙。"],
    ["測試 Agent", "依驗收條件操作，記錄通過、失敗與可重現步驟。"],
    ["回報 Agent", "把變更、證據、風險與待確認整理成可審查紀錄。"]
  ]
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="eyebrow">SUBAGENT GUIDE</p><h1>讓子 Agent 分擔設計、測試與回報</h1><p class="lead">我把能獨立完成、交付物清楚的工作交給子 Agent；主 Agent 負責整合，我仍然負責最後確認。</p></section>
    <section class="section"><div class="section-head"><h2>整個合作流程</h2><p>每一次分工都要回到同一份目標與驗收條件。</p></div>${diagramFigure("assets/diagrams/agent-collaboration-flow.png", "主 Agent 與子 Agent 分工", "隼鳥像指揮者一樣分派設計、測試與回報工作，Eddy 根據三份證據做最後驗收；證據不一致時回去處理衝突。", ["我說明目標與完成標準。", "主 Agent 分派設計、測試與回報。", "子 Agent 分別執行並交回證據。", "證據一致就整合交付。", "證據不一致就處理衝突後再整合。"])}</section>
    <section class="section"><div class="section-head"><h2>哪些工作適合分出去？</h2></div><div class="grid-2"><article class="card good-fit"><span class="card-tag">適合</span><h3>邊界清楚、可以獨立檢查</h3><ul><li>檢查特定頁面的手機版</li><li>依驗收條件跑一組測試</li><li>比較兩份文件的衝突</li><li>整理已完成項目與證據</li></ul></article><article class="card caution-fit"><span class="card-tag">先由主 Agent 處理</span><h3>需要共同決策或會互相衝突</h3><ul><li>尚未確認的產品方向</li><li>多人同時修改同一個檔案</li><li>發布、付款、刪除或對外承諾</li><li>沒有驗收條件的模糊任務</li></ul></article></div></section>
    <section class="section"><div class="section-head"><h2>一個實用的小隊配置</h2><p>初學時先從二到三個角色開始，角色越多，主 Agent 整合成本也越高。</p></div><div class="agent-team-grid">${team.map(([title, body], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${body}</p></article>`).join("")}</div>${collaborationPromptPanel("子 Agent 分工範例", `請由主 Agent 協調三項工作：\n\n1. 設計檢查：只檢查這個頁面的資訊層級、手機版與無障礙。\n2. 測試檢查：依既有驗收條件操作並留下失敗步驟。\n3. 回報整理：整理變更、證據、風險與待確認。\n\n每個子 Agent 都要回報：檢查範圍、發現、證據、建議。\n主 Agent 最後合併重複項目並指出衝突，不要把子 Agent 的回覆直接當成驗收通過。`)}</section>
    <section class="section"><div class="section-head"><h2>我怎麼判斷分工有成功？</h2></div><div class="status-ladder four-steps">${["任務邊界與交付物已寫清楚", "每位 Agent 都回報範圍與證據", "主 Agent 已處理衝突與重複", "我依完成標準做最後驗收"].map((text, index) => `<div class="status-step"><strong>${index + 1}</strong><span>${text}</span></div>`).join("")}</div><div class="boundary-note"><strong>網站能力界線：</strong>這是教學與範例頁，無法從靜態網頁直接建立子 Agent。我要把範例指令貼到支援多 Agent 的開發工具中執行。</div><div class="lesson-nav"><a class="button button-secondary" href="skill-guide.html">← 先學 Skill 啟動</a><a class="button button-primary" href="stage-02.html">從功能清單開始練習 →</a></div></section></main>${footerMarkup()}`
}

const casePromptSkills = {
  "00": "$find-skills", "01": "$grill-me", "02": "$doc-coauthoring",
  "03": "$doc-coauthoring", "04": "$prototype", "05": "$ui-ux-pro-max",
  "06": "$doc-coauthoring", "07": "$writing-plans",
  "08": "$executing-plans 與 $test-driven-development",
  "09": "$verification-before-completion 與 $web-design-guidelines",
  "10": "$verification-before-completion"
}

function caseCoursePromptPanel(id, theme) {
  const name = theme ? theme.name : "AI 個人工作台"
  const hasSource = Boolean(sourcePromptRanges[id])
  let operation = id === "00"
    ? `請使用 ${casePromptSkills[id]}，協助我準備開發「${name}」。\n先確認 AI 工具與模型是否適合、能否讀寫檔案及執行程式，再確認獨立專案資料夾與工作路徑。使用示範資料，排除密碼、金鑰與私人資料。缺少資訊時一次問我一題；這一步先完成準備，不開始開發。`
    : `請使用 ${casePromptSkills[id]}，協助我開始使用已完成驗收的「${name}」。\n先核對驗收結果與完整版本，再問我要在哪個設備與位置使用。確認後提供啟動、備份、更新與回復步驟，並實測核心操作與資料保存。需要上傳或公開發布時，先列出目的地與內容給我確認。`
  if (theme?.recovery) operation = id === "00"
    ? `請使用 $systematic-debugging，協助我檢查目前開啟的既有 AI 開發專案。先確認專案名稱、路徑、啟動方式及我卡住的操作；不清楚時一次問我一題。先唯讀盤點需求、功能清單、PRD、原型、UI、TRD、開發計畫、程式、測試與發布紀錄，不修改或覆蓋成果，不讀取密碼與金鑰。\n依學習地圖 00 開發準備、01 需求訪談、02 功能清單、03 PRD、04 互動原型、05 UI、06 TRD、07 開發計畫、08 開發、09 測試與版本、10 上線逐項列出：已完成及證據、缺少內容、需要改善、尚未驗證。先確認執行方式，再在安全的測試環境重現卡點，區分啟動、路徑、服務、權限或功能問題。沒有執行的測試標記待確認。\n指出最早缺少的前置階段與原因，給我一個最小修復建議和應接續的階段編號。已完成且有證據的成果沿用；不要把整個專案重做。等我確認盤點結果後再接續。`
    : `請使用 $verification-before-completion，核對目前既有專案的修復與驗收紀錄。列出通過、失敗與未測試項目；未通過時回到最早受影響的課程階段，不宣稱已完成。確認原有功能與修復流程都可用後，整理目前版本、啟動方式、備份、更新與回復步驟。發布前先讓我確認目的地與內容，保留原本可用版本。`
  return `<div class="copy-panel" data-copy-panel><div class="copy-panel-head"><div><small>${hasSource ? "" : "依課程操作原則整理"}</small><h3>提示詞</h3></div><button class="copy-button" type="button" data-copy-snippet data-copy-feedback="提示詞已複製" aria-label="複製階段 ${id} 提示詞" ${hasSource ? "disabled" : ""}>複製提示詞</button></div><pre data-copy-source ${hasSource ? `data-source-prompt data-case-key="${theme ? theme.key : "case"}" data-stage-id="${id}"` : ""}>${hasSource ? "載入提示詞中…" : operation.replaceAll("\\n", "\n")}</pre></div>`
}

function integrateCaseIntoCourse(source, stageId, key) {
  const theme = caseStudyThemes[key] || { name: "AI 個人工作台", modules: "總覽、今日工作、專案與每日回顧", intro: "我希望每天看到最重要工作、追蹤專案，並在下班前留下簡短回顧。" }
  const name = `「${theme.name}」`
  let text = source.replace(/^「(?:提示詞|題示詞)[:：]?\s*/, "").replace(/^「/, "").replace(/」\s*$/, "").trim()
  const skill = casePromptSkills[stageId]
  if (stageId === "01") {
    text = text.replace("請用一問一答收集我想要做的應用的需求", `請使用 ${skill}，用一問一答收集我想要做的${name}的需求`)
      .replace("我準備做一個應用：__________________", `我準備做一個應用：${theme.name}`)
      .replace("我目前的初步想法：__________________", `我目前的初步想法：${theme.intro}希望包含${theme.modules}。`)
  } else if (stageId === "02") {
    text = `請使用 ${skill}，根據已確認的需求，輸出${name}的完整功能清單。\n\n${text}`
  } else {
    const changes = {
      "03": ["請嚴格照以下規則執行：", `請使用 ${skill}，根據${name}已確認的需求與功能清單撰寫完整 PRD，嚴格照以下規則執行：`],
      "04": ["嚴格依據PRD輸出高保真產品原型設計", `請使用 ${skill}，嚴格依據${name}的 PRD 輸出高保真產品原型設計`],
      "05": ["基於產品需求與原型，輸出完整UI設計", `請使用 ${skill}，基於${name}的產品需求與原型，輸出完整 UI 設計`],
      "06": ["負責把產品PRD转化", ""],
      "07": ["根據PRD和TRD輸出一份開發實施計劃", `請使用 ${skill}，根據${name}的 PRD 和 TRD 輸出一份開發實施計畫`],
      "08": ["依照產品需求文檔PRD、產品原型、UI設計、TRD、開發計畫做開發與測試工作", `請使用 ${skill}，依照${name}的產品需求文檔 PRD、產品原型、UI 設計、TRD、開發計畫做開發與測試工作`],
      "09": ["在獨立工作空間內，對所有驗收相關內容全部做版本化管理", `請使用 ${skill}，在${name}的獨立工作空間內，對所有驗收相關內容全部做版本化管理`]
    }
    if (stageId === "06") text = text.replace("負責把產品PRD轉化為", `請使用 ${skill}，負責把${name}的產品 PRD 轉化為`)
    else text = text.replace(...changes[stageId])
    if (stageId === "05") text = text.replace("主題風格：＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿", `主題風格：適合${theme.name}的清楚易讀介面，沿用已確認的風格與參考圖。`)
  }
  // Fix source transcription typos, while preserving every course requirement.
  const typos = { "結構畫完整": "結構完整", "案這模組化": "按照模組化", "修求": "需求", "正是PRD": "正式 PRD", "系統框架師": "系統架構師", "文檔TPD": "文檔 TRD", "腦捕是": "腦補", "單完測試": "單元測試", "自側核對": "自測核對", "菸收": "驗收", "升成": "生成", "全部理歷史": "全部歷史" }
  Object.entries(typos).forEach(([from, to]) => { text = text.replaceAll(from, to) })
  if (theme.recovery) {
    text = text.replace("我準備做一個應用：", "我要接續的專案：").replace("我想要做的", "我正在接續的")
    text = text.replace("若我提供的功能清單訊息不全，請基於主流產品邏輯合理補充", "若既有功能清單訊息不全，請列出缺口並標記【需產品確認】，確認後再補齊")
    text += `\n\n沿用階段 00 已確認的專案名稱與盤點結果。先對照本階段的既有成果，列出已完成的證據、缺少與需改善的項目；已確認且可用的內容保留，只補齊缺口。若前置文件缺失或互相衝突，指出要回到的階段並先確認，不猜測產品規則。涉及改檔時先保留可回復版本，按已確認範圍修改。完成後對照本階段要求檢查，列出結果、未解決問題與下一階段編號；未通過先修正，不直接跳到開發或發布。`
  }
  return text
}

function caseOverviewPage() {
  const topics = [{ label: "個人工作台", key: "case-workbench", art: "personal-workbench-v1.png", intro: "把今日工作、專案與每日回顧放在一起，先練習新增一項工作、完成它並查看結果。" }, ...Object.values(caseStudyThemes).filter(theme => !["case-android", "case-ios"].includes(theme.key))]
  return `<section class="case-intro-section"><div class="section-head"><h2>我說明需求，AI Agent 協助一步一步做出來</h2><p>AI Agent 能在具備相應工具與權限的環境中讀取專案、整理文件、修改程式與執行測試。我不用一次把整個系統想完，每次確認一個小流程，再繼續下一步。</p></div>
  <div class="grid-3"><article class="card"><span class="card-tag">先說清楚</span><h3>從一個使用情境開始</h3><p>我描述誰會用、什麼時候用，以及要解決什麼問題。AI 透過訪談整理需求，我確認第一版要做與不做的範圍。</p></article>
  <article class="card"><span class="card-tag">一起實作</span><h3>沿課程提示詞與 Skill 推進</h3><p>我依學習地圖完成文件與原型，再讓 AI 按確認的計畫開發。每個案例都把相關 Skill 指令與主題情境放進可複製提示詞。</p></article>
  <article class="card"><span class="card-tag">實際確認</span><h3>跑通一個簡單流程</h3><p>我親自操作並檢查保存結果。AI 協助找問題、修正與留下版本，通過驗收後才考慮發布或延伸功能。</p></article></div></section>
  <section class="section" id="case-topics"><div class="section-head"><p class="eyebrow">CHOOSE A CASE</p><h2>選一個主題，開始或接續我的案例</h2><p>一般案例從 01 需求訪談開始，沿用學習地圖的 01–10 流程；既有專案另外保留 00 現況盤點，提供主題說明、流程圖與融入案例情境的課程提示詞。</p></div>
  <div class="grid-3">${topics.map(topic => `<article class="card system-type-card"><img class="card-illustration" src="assets/illustrations/${topic.art}" alt="${topic.label}插圖"><span class="card-tag">${topic.key === "case-workbench" ? "含可操作原型" : "主題教學案例"}</span><h3>${topic.label}</h3><p>${topic.intro}</p><a class="button button-primary" href="${topic.key}.html">查看${topic.label}案例 →</a></article>`).join("")}</div></section>
  <div class="boundary-note"><strong>目前提供：</strong>六個主題的開發教學與提示詞；個人工作台另有可操作原型。其餘主題尚未交付完成的網站系統，需依步驟實作與驗收。</div>`
}

function personalWorkbenchCaseStudy(theme = null) {
  let caseStages = [
    ["00", "先把開發環境準備好", "確認使用瀏覽器版工作台，建立獨立專案資料夾，排除密碼、金鑰與私人資料。", "開發準備清單", "文件示範"],
    ["01", "找出每天真正會使用的情境", "Eddy 每天需要查看最重要工作、追蹤專案，並在下班前留下簡短回顧。", "需求文件", "文件示範"],
    ["02", "把需求拆成第一版功能", "第一版只保留總覽、今日工作、專案與每日回顧；提醒、自動排程與多人協作延後。", "P0 功能清單", "文件示範"],
    ["03", "寫清楚每個操作的產品規則", "定義工作如何新增、完成與顯示；沒有資料時要提供下一步，重新整理後是否保存也要說清楚。", "PRD", "文件示範"],
    ["04", "先用可操作原型走一次流程", "切換四個頁面、完成一項工作、新增示範工作並暫存回顧，檢查每個操作是否得到回饋。", "互動原型", "可操作 Demo"],
    ["05", "統一工作台的畫面規則", "以深藍、電藍與青綠區分結構、操作與狀態；桌面雙欄、手機單欄，按鈕與文字保持可讀。", "UI 規格", "文件示範"],
    ["06", "決定資料與系統怎麼運作", "列出工作、專案、回顧的欄位與狀態，以及前端、資料保存、錯誤處理與測試方式。", "TRD", "文件示範"],
    ["07", "拆成能逐項驗收的開發工作", "先完成新增一項工作並在總覽看見，再依序加入完成狀態、專案與每日回顧。", "開發計畫", "文件示範"],
    ["08", "完成一段真實可操作功能", "依計畫開發後，實際操作新增、完成、返回與重新整理，分開記錄畫面呈現和資料保存結果。", "可操作 Web", "流程示範"],
    ["09", "用證據判斷是否完成", "記錄測試步驟、預期結果、實際結果與畫面證據；失敗項目回到受影響階段修正。", "驗收與版本紀錄", "流程示範"],
    ["10", "準備上線與日常使用", "公開前檢查私人資料，建立可回復版本，再檢查正式網址、桌面與手機；未發布前保持為規劃。", "使用與發布計畫", "規劃示範"]
  ]

  if (theme) {
    caseStages = caseStages.map(([id, title, detail, artifact], index) => [id, theme.focus[index], `${theme.name}：${theme.focus[index]}。依上一階段確認結果推進。`, artifact, "教學案例"])
  }
  if (!theme?.recovery) caseStages = caseStages.filter(([id]) => id !== "00")
  const intro = theme ? `${theme.diagram ? diagramFigure(theme.diagram, `${theme.name}主題流程圖`, `隼鳥與 Eddy 示範${theme.name}，依序呈現：${theme.steps.join("、")}。`, theme.steps) : `<section class="section"><div class="section-head"><h2>${theme.label}的流程</h2></div><ol class="grid-3">${theme.steps.map(step => `<li class="card">${step}</li>`).join("")}</ol></section>`}<section class="section case-intro-section"><div class="grid-2"><div class="card"><span class="card-tag">案例目標</span><h3>${theme.goal}</h3><p>${theme.intro}</p></div><div class="card"><span class="card-tag">教學案例</span><h3>依課程做出自己的版本</h3><p>本頁提供完整提示詞與主題圖解；產品原型、資料保存與發布結果，需依課程實作並驗證。</p><a class="card-link" href="cases.html">返回實際案例總覽 →</a></div></div></section>` : `${diagramFigure("assets/diagrams/personal-workbench-growth-flow.png", "個人工作台成長流程", "隼鳥整理每日紀錄、待辦與專案卡，Eddy 比較 AI 建議後做最後決定；沒有重複卡點時持續觀察。", ["每天記錄工作、專案與生活。", "持續使用以發現重複與卡點。", "出現卡點時加入 AI 協助。", "沒有卡點時繼續觀察。", "AI 提出建議，我做最後決定。"])}
    <section class="section case-intro-section"><div class="grid-2"><div class="card"><span class="card-tag">案例目標</span><h3>每天先完成最重要的一件事</h3><p>這套工作台把今日工作、專案進度與每日回顧放在同一個地方，讓 Eddy 每天都能照固定流程使用。</p></div><div class="card"><span class="card-tag">目前可操作</span><h3>階段 04 工作台 Demo</h3><p>目前網站已提供原型操作；資料庫、正式保存與公開上線仍要在後續階段驗證。</p><a class="card-link" href="stage-04.html">直接操作原型 →</a></div></div></section>
`
  return `${intro}
    <section class="section case-journey-section"><div class="section-head"><p class="eyebrow">${theme?.recovery ? "00–10" : "01–10"} CASE JOURNEY</p><h2>${theme ? theme.name : "同一個工作台"}怎麼一步一步完成？</h2><p>按順序複製提示詞給 AI，確認結果後再進入下一步。每份都已填入${theme ? theme.name : "個人工作台"}的內容。</p></div><div class="case-stage-list">${caseStages.map(([id,title,detail,artifact,status], index) => `<article class="case-stage-card"><div class="case-stage-number"><strong>${id}</strong><span>${status}</span></div><div class="case-stage-body"><h3>${title}</h3><p>${detail}</p>${caseCoursePromptPanel(id, theme)}</div></article>`).join("")}</div><div class="boundary-note"><strong>案例狀態：</strong>${theme ? "本頁是主題教學與提示詞案例；尚未提供此主題的可操作產品，也未完成資料保存與發布驗收。" : "階段 04 是目前可直接操作的教學 Demo；其餘內容用來示範文件與流程。尚未完成正式資料庫、真實部署與發布後驗收。"}</div></section>`
}

function staticPage(config) {
  let content = ""
  if (config.type === "prompts") content = `<div class="grid-2">${stages.map(s=>{ const lesson = tutorialLessons[s.id]; const hasPrompt = Boolean(sourcePromptRanges[s.id]); return `<div class="card"><span class="card-tag">階段 ${s.id}</span><h3>${s.title}</h3><p>${lesson.summary}</p><a class="card-link" href="${s.slug}#prompt">${hasPrompt ? "查看原教程提示詞 →" : "查看操作原則 →"}</a></div>` }).join("")}</div>`
  if (config.type === "glossary") content = glossaryPrototype()
  if (config.type === "safety") content = `<div class="grid-2"><div class="card"><h3>不要交給 AI</h3><ul><li>密碼與 API 金鑰</li><li>個資與公司機密</li><li>未公開合約與內部資料</li></ul></div><div class="card"><h3>公開前要檢查</h3><ul><li>截圖是否有真實姓名</li><li>網址是否包含內部主機</li><li>程式是否含 Token</li></ul></div></div>`
  if (config.type === "faq") content = `<div class="faq-list">${[["AI 只更新局部內容怎麼辦","我會把已確認的完整文件再貼回去，明確要求 AI 輸出「全文更新版」。如果它仍只改局部，我先確認自己是否提供了完整輸入。"],["提示詞複製後要貼到哪裡","我會貼到自己正在使用的 AI 助手，並先填好提示詞中需要的上一階段文件或空白欄位。"],["文件互相衝突怎麼辦","我不急著往下做；我先列出衝突位置，回到最早受影響的需求、功能清單或 PRD 重新確認。"],["Web 驗收後如何做 Android","我先決定是否真的需要商店發布；若需要，再到 Android 發布路線準備建置、測試與 Play Console 資料。"],["iOS 為什麼需要 macOS","我需要使用 Apple 的 Xcode 建置與上傳 iOS App；只做 Web 或加入主畫面時，則不必先處理這一步。"],["GitHub Discussions 收到作品怎麼處理","我先檢查分享內容是否有敏感資料，再依維護者手冊回覆、分類或處理。"]].map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`
  if (config.type === "complete") content = `<div class="grid-2"><div class="card"><span class="card-tag">作品分享</span><h3>分享作品截圖或連結</h3><p>可以只放截圖、只放作品連結，或同時分享兩者</p><button class="button button-primary" type="button" data-share-open>分享作品</button></div><div class="card"><span class="card-tag">學習心得</span><h3>記錄你怎麼完成系統</h3><p>分享遇到的問題、解決方式與下一版計畫</p><button class="button button-secondary" type="button" data-share-open>分享學習心得</button></div></div>`
  if (config.type === "maintainer") content = `<div class="step-list">${["確認圖片與作品連結能開啟","檢查是否包含敏感資料","使用固定文案感謝分享","分類錯誤時移到正確分類","違規或洩密時關閉或刪除"].map(x=>`<div class="step-item">${x}</div>`).join("")}</div><section class="content-section"><h2>固定回覆文案</h2><div class="prompt-block"><pre>謝謝分享，你已完成自己的第一個系統，也歡迎補充後續更新與使用心得</pre></div></section><section class="content-section"><h2>什麼時候才要置頂</h2><p>第一版不要求你立即學會置頂，作品內容完整、安全且對其他學習者有幫助時再使用</p><a class="button button-secondary" href="https://docs.github.com/en/discussions/managing-discussions-for-your-community/managing-discussions" target="_blank" rel="noreferrer">查看 GitHub 官方操作 ↗</a></section>`
  if (config.type === "case-overview") content = caseOverviewPage()
  if (config.type === "case") content = personalWorkbenchCaseStudy(config.theme)
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="eyebrow">LEARNING RESOURCE</p><h1>${config.title}</h1><p class="lead">${config.lead}</p></section><section class="section">${content}</section></main>${footerMarkup()}`
}

function progressPage() {
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="eyebrow">LOCAL PROGRESS</p><h1>匿名學習進度</h1><p class="lead">只保存完成哪些階段，不保存姓名、文件、截圖或作品</p></section><section class="section"><div class="route-list">${stages.map(s=>`<div class="route-item" data-progress-row="${s.id}"><div class="route-number">${s.id}</div><div><h3>${s.title}</h3><p data-progress-label>尚未完成</p></div><a class="button button-secondary" href="${s.slug}">查看階段</a></div>`).join("")}</div><div class="button-row"><button class="button button-secondary" type="button" data-reset-progress>清除匿名進度</button></div></section></main>${footerMarkup()}`
}

function termPage(slug) {
  const term = termCatalog.find(item => item.slug === slug) || termCatalog[0]
  const stageNumber = term.stage.match(/階段 (\d+)/)?.[1]
  const relatedStage = stageNumber === undefined ? "roadmap.html" : `stage-${String(stageNumber).padStart(2, "0")}.html`
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="breadcrumb"><a href="glossary.html">專有名詞總覽</a> ／ ${term.name}</p><p class="eyebrow">GLOSSARY</p><h1>${term.name}</h1><p class="lead">用白話了解這個名詞在系統開發中的用途與使用方式</p></section>
    <section class="section"><div class="grid-2"><article class="card"><span class="card-tag">白話定義</span><h2>${term.name}是什麼</h2><p>${term.meaning}</p></article><article class="card"><span class="card-tag">出現階段</span><h2>${term.stage}</h2><p>回到學習路線時，依照這個階段的文件與操作一起理解。</p><a class="card-link" href="${relatedStage}">查看相關學習階段 →</a></article></div></section>
    <section class="section"><div class="section-head"><h2>怎麼使用這個名詞</h2><p>圖中每一步都有文字；下方還能展開完全相同的文字流程。</p></div>${diagramFigure("assets/diagrams/term-learning-flow.png", `${term.name}的理解與使用流程`, `從遇到${term.name}、開啟說明、比較用法錯誤到返回相關階段的四步驟流程圖`, [`遇到「${term.name}」：先不要猜意思，從教材中的名詞連結進入本頁。`,`閱讀白話定義並確認它出現在「${term.stage}」。`,`正確用法：${term.use}`,`常見錯誤：${term.mistake}`,"回到相關階段，用文件、畫面或測試留下可驗收證據。"])} </section>
    <section class="section"><div class="grid-2"><article class="card"><span class="card-tag">正確使用</span><h2>實際做法</h2><p>${term.use}</p></article><article class="card"><span class="card-tag">常見錯誤</span><h2>避免這樣做</h2><p>${term.mistake}</p></article></div></section>
    <section class="section"><div class="lesson-nav"><a class="button button-secondary" href="glossary.html">← 回到名詞總覽</a><a class="button button-primary" href="${relatedStage}">查看相關學習階段 →</a></div></section></main>${footerMarkup()}`
}

const deferredAppPages = ["mobile", "android", "ios", "pwa", "case-android", "case-ios"]
function render() {
  if (deferredAppPages.includes(page)) return `${navMarkup()}<main class="page-shell"><section class="page-hero"><h1>這一版先完成網站</h1><p class="lead">App 延伸內容暫不開放。本課程先帶你把網站做出來、完成驗收與版本備份；想深入 App 開發時，可以再自行探索。</p><a class="button button-primary" href="roadmap.html">回到網站學習地圖</a></section></main>${footerMarkup()}`

  if (page === "home") return homePage()
  if (page === "roadmap") return roadmapPage()
  if (page === "pwa") return pwaInstallPage()
  if (page === "mobile") return mobileOverview()
  if (page === "android") return platformPublish("android")
  if (page === "ios") return platformPublish("ios")
  if (page === "progress") return progressPage()
  if (page === "model-guide") return modelGuidePage()
  if (page === "skills") return skillGuidePage()
  if (page === "agents") return agentTeamPage()
  if (page === "term") return termPage(document.body.dataset.termSlug)
  if (page.startsWith("stage-")) {
    const id = page.split("-")[1]
    return stagePage(stages.find(s => s.id === id) || stages[0])
  }
  return staticPage(staticPages[page] || staticPages.faq)
}

function webEditionMarkup(markup) {
  const template = document.createElement("template")
  template.innerHTML = markup
  const root = template.content
  root.querySelectorAll(".map-side-quests").forEach(node => node.remove())
  root.querySelectorAll(".eyebrow").forEach(node => {
    if (node.textContent.trim() === "MOBILE APP") node.closest("section")?.remove()
  })
  const routes = ["mobile-app.html", "android-publish.html", "ios-publish.html", "pwa-install.html", "case-android.html", "case-ios.html"]
  root.querySelectorAll("a[href]").forEach(link => {
    if (!routes.includes(link.getAttribute("href").split("#")[0])) return
    const card = link.closest(".system-type-card, .platform-card")
    ;(card || link).remove()
  })
  root.querySelectorAll(".faq-list details").forEach(item => { if (/Android|iOS/.test(item.querySelector("summary")?.textContent || "")) item.remove() })
  return template.innerHTML
}
document.getElementById("app").innerHTML = webEditionMarkup(render())

function applyHumanVoice() {
  const copyByPage = {
    pwa: {
      title: "我先把網頁放進手機主畫面",
      lead: "當我還不需要商店上架時，我可以先用主畫面圖示快速開啟自己的 Web 系統，讓它開始進入日常。"
    },
    mobile: {
      title: "我的系統要怎麼放進手機？",
      lead: "我先確認 Web 已經能用，再比較加入主畫面、Android 商店與 iOS 商店，選一條符合現在目的的路。"
    },
    android: {
      title: "我怎麼把系統帶到 Android？",
      lead: "我會先確認 Web 已驗收，再依序準備 Android 建置、測試與 Google Play 發布，不跳過任何一個檢查點。"
    },
    ios: {
      title: "我怎麼把系統帶到 iPhone？",
      lead: "我會先確認 Web 已驗收，再用 macOS、Xcode 與 TestFlight 走完測試和 App Store 發布流程。"
    },
    "model-guide": {
      title: "我現在需要哪個 AI 工具與模型？",
      lead: "我先分清楚誰負責操作、誰負責理解，再依任務、權限與官方資料做選擇，不只看模型名稱。"
    },
    progress: {
      title: "我已經走到哪一步？",
      lead: "我只在這台瀏覽器記下完成的階段；文件、截圖與作品仍留在自己的專案裡。"
    }
  }
  const copy = copyByPage[page]
  if (!copy) return
  const hero = document.querySelector(".page-hero")
  if (!hero) return
  const title = hero.querySelector("h1")
  const lead = hero.querySelector(".lead")
  if (title) title.textContent = copy.title
  if (lead) lead.textContent = copy.lead
}

if (!deferredAppPages.includes(page)) applyHumanVoice()

async function loadSourcePrompts() {
  const targets = [...document.querySelectorAll("[data-source-prompt]")]
  if (!targets.length) return

  try {
    const response = await fetch("assets/source/0-basic-app-tutorial-source.txt")
    if (!response.ok) throw new Error(`Source tutorial unavailable: ${response.status}`)
    const lines = (await response.text()).replace(/\r\n?/g, "\n").split("\n")

    targets.forEach((target) => {
      const range = sourcePromptRanges[target.dataset.stageId]
      const source = range ? lines.slice(range[0] - 1, range[1]).join("\n") : ""
      if (!source) throw new Error("Missing course prompt")
      target.textContent = target.dataset.caseKey ? integrateCaseIntoCourse(source, target.dataset.stageId, target.dataset.caseKey) : source
      const button = target.closest("[data-copy-panel]")?.querySelector("[data-copy-snippet]")
      if (button) button.disabled = false
    })
  } catch (error) {
    targets.forEach((target) => {
      target.textContent = "原教程提示詞載入失敗。請確認來源檔案可用後再複製。"
    })
  }
}

loadSourcePrompts()

const mascotProfiles = {
  idea: { src: "assets/mascot/falcon-v2/transparent/falcon-master-v2.png", symbols: ["✦", "◌", "⌁", "＋"], bulb: true },
  code: { src: "assets/mascot/falcon-v2/transparent/falcon-focused-v2.png", symbols: ["&lt;/&gt;", "⌘", "⌁", "＋"] },
  verify: { src: "assets/mascot/falcon-v2/transparent/falcon-focused-v2.png", symbols: ["✓", "◎", "⌁", "＋"] },
  celebrate: { src: "assets/mascot/falcon-v2/transparent/falcon-happy-v2.png", symbols: ["✓", "✦", "✦", "＋"] }
}

function mascotProfileForPage() {
  if (["complete", "android", "ios"].includes(page)) return mascotProfiles.celebrate
  if (["progress", "pwa", "stage-08", "stage-09", "stage-10"].includes(page)) return mascotProfiles.verify
  if (["mobile", "model-guide", "stage-04", "stage-05", "stage-06", "stage-07"].includes(page)) return mascotProfiles.code
  return mascotProfiles.idea
}

function mascotHeroMarkup(profile, compact = false) {
  return `<figure class="mascot-hero ${compact ? "mascot-hero-compact" : ""}" aria-hidden="true">
    <div class="mascot-orbit mascot-orbit-one"></div><div class="mascot-orbit mascot-orbit-two"></div>
    <img src="${profile.src}" alt="">
    ${profile.bulb ? '<span class="mascot-bulb">💡</span>' : ""}
    <div class="mascot-interactions">${profile.symbols.map((symbol, index) => `<span class="mascot-symbol mascot-symbol-${index + 1}">${symbol}</span>`).join("")}</div>
  </figure>`
}

const activeMascotProfile = mascotProfileForPage()
const pageHero = document.querySelector(".page-hero")
if (pageHero) {
  pageHero.classList.add("with-mascot-hero")
  pageHero.insertAdjacentHTML("beforeend", mascotHeroMarkup(activeMascotProfile))
}
const homeHeroBoard = document.querySelector(".hero-board")
if (homeHeroBoard) {
  homeHeroBoard.classList.add("with-mascot-board")
  homeHeroBoard.insertAdjacentHTML("afterbegin", mascotHeroMarkup(mascotProfiles.idea, true))
}

// Match learning artwork to the page; keep existing subject-specific illustrations.
const learningSceneByPage = {
  prompts: ["prompt-learning.webp", "隼鳥與 Eddy 一起整理目標、背景與預期結果，練習撰寫提示詞"],
  skills: ["skill-learning.webp", "隼鳥與 Eddy 選用 Skill，操作後一起檢查結果"],
  agents: ["skill-learning.webp", "隼鳥與 Eddy 分工操作工具，核對共同任務的結果"],
  "model-guide": ["ai-learning.webp", "隼鳥與 Eddy 對談，學習如何使用 AI 助手"],
  glossary: ["glossary-v1.png", "用圖解認識系統開發名詞"],
  term: ["glossary-v1.png", "認識本頁的系統開發名詞，連結用途與學習階段"],
  pwa: ["home-screen-v1.png", "將網頁加入手機主畫面"],
  android: ["android-release-v1.png", "準備 Android 測試與發布"],
  ios: ["ios-release-v1.png", "準備 iOS 測試與發布"],
  roadmap: ["ai-learning.webp", "隼鳥與 Eddy 一起學習，逐步確認下一個目標"],
  faq: ["ai-learning.webp", "隼鳥與 Eddy 對談，釐清學習中遇到的問題"],
  safety: ["skill-learning.webp", "隼鳥與 Eddy 核對工具與操作清單，使用前先確認資料安全"],
  progress: ["ai-learning.webp", "隼鳥與 Eddy 一起回顧學習進度"],
  complete: ["ai-learning.webp", "隼鳥與 Eddy 分享學習成果"],
  maintainer: ["skill-learning.webp", "隼鳥與 Eddy 按操作清單檢查工具與結果"]
}
const learningMain = document.querySelector("main")
const existingSubjectArt = learningMain?.querySelector("img:not(.mascot-hero img)")
const learningScene = learningSceneByPage[page]
if (learningMain && learningScene && !existingSubjectArt) {
  const compact = !learningScene[0].endsWith(".webp")
  const markup = `<figure class="learning-scene${compact ? " learning-scene-compact" : ""}"><img src="assets/illustrations/${learningScene[0]}" alt="${learningScene[1]}" loading="lazy" decoding="async" width="${compact ? 512 : 1672}" height="${compact ? 512 : 941}"></figure>`
  const hero = learningMain.querySelector(".page-hero")
  if (hero) hero.insertAdjacentHTML("afterend", markup)
  else learningMain.insertAdjacentHTML("afterbegin", markup)
}

const progressKey = "academyPrototypeProgressV1"
const loadProgress = () => {
  try {
    const value = JSON.parse(localStorage.getItem(progressKey) || "{}")
    if (!value || typeof value !== "object" || Array.isArray(value)) return {}
    return Object.fromEntries(Object.entries(value).filter(([id, done]) => /^(0[0-9]|10)$/.test(id) && done === true))
  } catch { return {} }
}
const saveProgress = value => { try { localStorage.setItem(progressKey, JSON.stringify(value)); return true } catch { return false } }
const showToast = message => { const toast = document.querySelector("[data-toast]"); if (!toast) return; toast.textContent = message; toast.classList.add("show"); setTimeout(()=>toast.classList.remove("show"), 2200) }

const workbenchDemo = document.querySelector("[data-workbench-demo]")
if (workbenchDemo) {
  const showDemoView = view => {
    workbenchDemo.querySelectorAll("[data-demo-view]").forEach(button => button.classList.toggle("active", button.dataset.demoView === view))
    workbenchDemo.querySelectorAll("[data-demo-panel]").forEach(panel => {
      const active = panel.dataset.demoPanel === view
      panel.hidden = !active
      panel.classList.toggle("active", active)
    })
  }
  const updateDemoCount = () => {
    const tasks = [...workbenchDemo.querySelectorAll('[data-demo-panel="overview"] [data-demo-task]')]
    const complete = tasks.filter(task => task.classList.contains("done")).length
    const counter = workbenchDemo.querySelector("[data-demo-task-count]")
    if (counter) counter.textContent = `${complete}／${tasks.length}`
  }
  workbenchDemo.querySelectorAll("[data-demo-view]").forEach(button => button.addEventListener("click", () => showDemoView(button.dataset.demoView)))
  workbenchDemo.querySelector("[data-demo-open-today]")?.addEventListener("click", () => showDemoView("today"))
  workbenchDemo.addEventListener("click", event => {
    const task = event.target.closest("[data-demo-task]")
    if (!task) return
    const label = task.querySelector("span")?.textContent
    const done = !task.classList.contains("done")
    workbenchDemo.querySelectorAll("[data-demo-task]").forEach(candidate => {
      if (candidate.querySelector("span")?.textContent !== label) return
      candidate.classList.toggle("done", done)
      candidate.setAttribute("aria-pressed", String(done))
      const status = candidate.querySelector("small")
      if (status) status.textContent = done ? "已完成" : "待完成"
    })
    updateDemoCount()
  })
  workbenchDemo.querySelector("[data-demo-add-task]")?.addEventListener("click", event => {
    const list = workbenchDemo.querySelector("[data-demo-task-list]")
    if (!list || list.querySelector('[data-demo-added="true"]')) {
      showToast("示範工作已經加入")
      return
    }
    const task = document.createElement("button")
    task.className = "demo-task"
    task.type = "button"
    task.dataset.demoTask = ""
    task.dataset.demoAdded = "true"
    task.setAttribute("aria-pressed", "false")
    task.innerHTML = "<i></i><span>整理明天的第一步</span><small>待完成</small>"
    list.append(task)
    event.currentTarget.disabled = true
    event.currentTarget.textContent = "已新增示範工作"
    showToast("已加入示範工作；重新整理後會還原")
  })
  workbenchDemo.querySelector("[data-demo-save-review]")?.addEventListener("click", () => showToast("示範回顧已暫存；重新整理後會還原"))
  updateDemoCount()
}

document.querySelector("[data-menu-open]")?.addEventListener("click", () => {
  document.querySelector("[data-mobile-drawer]")?.classList.add("open")
  document.querySelector("[data-drawer-backdrop]")?.classList.add("open")
})
const closeMenu = () => { document.querySelector("[data-mobile-drawer]")?.classList.remove("open"); document.querySelector("[data-drawer-backdrop]")?.classList.remove("open") }
document.querySelector("[data-menu-close]")?.addEventListener("click", closeMenu)
document.querySelector("[data-drawer-backdrop]")?.addEventListener("click", closeMenu)
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && document.querySelector("[data-mobile-drawer]")?.classList.contains("open")) {
    closeMenu()
    document.querySelector("[data-menu-open]")?.focus()
  }
})

const prototypeSwitcher = document.querySelector("[data-prototype-switcher]")
if (prototypeSwitcher) {
  const variants = ["A", "B", "C"]
  const current = prototypeSwitcher.dataset.currentVariant || "A"
  const moveVariant = direction => {
    const next = variants[(variants.indexOf(current) + direction + variants.length) % variants.length]
    const url = new URL(location.href)
    url.searchParams.set("variant", next)
    location.href = url.toString()
  }
  prototypeSwitcher.querySelectorAll("[data-variant-direction]").forEach(button => button.addEventListener("click", () => moveVariant(Number(button.dataset.variantDirection))))
  document.addEventListener("keydown", event => {
    const target = event.target
    if (target instanceof HTMLElement && (target.matches("input, textarea, [contenteditable='true']") || target.isContentEditable)) return
    if (event.key === "ArrowLeft") moveVariant(-1)
    if (event.key === "ArrowRight") moveVariant(1)
  })
}

const modelTaskButtons = [...document.querySelectorAll("[data-model-task]")]
if (modelTaskButtons.length) {
  const filterModels = task => {
    let visible = 0
    document.querySelectorAll("[data-model-tags]").forEach(row => {
      const show = task === "全部" || row.dataset.modelTags.split(",").includes(task)
      row.hidden = !show
      if (show) visible += 1
    })
    const empty = document.querySelector("[data-model-empty]")
    if (empty) empty.hidden = visible > 0
    modelTaskButtons.forEach(button => {
      const active = button.dataset.modelTask === task
      button.classList.toggle("active", active)
      button.setAttribute("aria-pressed", String(active))
    })
  }
  modelTaskButtons.forEach(button => button.addEventListener("click", () => filterModels(button.dataset.modelTask)))
  filterModels(modelTaskButtons[0].dataset.modelTask)
}

document.querySelector("[data-copy-prompt]")?.addEventListener("click", async () => {
  const text = document.querySelector("[data-prompt-text]")?.textContent || ""
  try { await navigator.clipboard.writeText(text); showToast("提示詞已複製") } catch { showToast("複製失敗，請手動選取提示詞") }
})

document.querySelectorAll("[data-copy-snippet]").forEach(button => button.addEventListener("click", async () => {
  const text = button.closest("[data-copy-panel]")?.querySelector("[data-copy-source]")?.textContent || ""
  try { await navigator.clipboard.writeText(text); showToast(button.dataset.copyFeedback || "分工指令已複製") } catch { showToast("複製失敗，請手動選取內容") }
}))

const checklist = document.querySelector("[data-checklist]")
if (checklist) {
  const id = checklist.dataset.stage
  const progress = loadProgress()
  if (progress[id]) checklist.querySelectorAll("input").forEach(input => input.checked = true)
  document.querySelector("[data-complete-stage]")?.addEventListener("click", () => {
    const checks = [...checklist.querySelectorAll("input")]
    if (!checks.every(input => input.checked)) return showToast("請先完成本階段四項檢查")
    const latestProgress = loadProgress()
    latestProgress[id] = true
    if (saveProgress(latestProgress)) showToast("本階段已完成")
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

document.querySelectorAll("[data-template-download]").forEach(button => button.addEventListener("click", () => {
  const name = button.dataset.templateDownload
  const content = learningTemplates[name]
  if (!content) return showToast("找不到這份模板")
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" })
  const link = document.createElement("a")
  const url = URL.createObjectURL(blob)
  link.href = url
  link.download = `${name}-template.md`
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 0)
  showToast(`${name}模板已下載，請保存到自己的專案資料夾`)
}))

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
