// Three glossary variants, switchable with ?variant=A|B|C on the existing glossary route.
const logoPath = "assets/logo.png"

const stages = [
  { id: "00", slug: "stage-00.html", title: "開發準備", summary: "選擇 AI 工具、模型策略與工作空間", input: "一個想做系統的大概方向", output: "工具與專案工作空間", terms: ["AI 助手", "大模型", "Token", "工作空間"], steps: ["依讀檔、寫檔、圖片與執行能力選工具", "重要規格使用高能力模型，大量局部工作使用合適的執行型模型", "建立獨立專案資料夾並讓 AI 開啟正確工作空間", "移除密碼、金鑰、個資與公司機密"], prompt: "請協助我檢查開發前準備\n\n我的系統方向：＿＿＿＿＿＿＿＿\n我的電腦平台：Windows／macOS\n我使用的 AI 工具：＿＿＿＿＿＿＿＿\n\n請逐項確認工具是否能讀寫檔案、查看圖片、執行程式與保存專案文件\n發現缺少條件時只列出修正方法，不要開始開發" },
  { id: "01", slug: "stage-01.html", title: "需求訪談", summary: "讓 AI 一題一題問出真正需求", input: "系統方向與初步想法", output: "完整需求文件", terms: ["目標使用者", "使用情境", "需求範圍", "驗收條件"], steps: ["先說明想做哪一類系統", "要求 AI 每次只問一個問題", "回答模糊時繼續追問具體情境", "資訊足夠後輸出完整需求文件"], prompt: "請用一問一答方式收集我想開發系統的需求\n每次只輸出一個問題，等我回覆後再問下一題\n提問需涵蓋目標使用者、真實痛點、使用場景、需要與不要的功能、運行設備、參考產品與特殊限制\n我回答模糊時請追問細節\n資訊足夠後輸出一份結構完整的需求文件讓我確認\n\n我準備做的系統：＿＿＿＿＿＿＿＿\n我的初步想法：＿＿＿＿＿＿＿＿\n\n現在開始第一個問題" },
  { id: "02", slug: "stage-02.html", title: "功能清單", summary: "把首頁改版拆成可驗收的內容、導覽、圖卡與響應式功能", input: "已確認的首頁改版方向", output: "首頁功能清單 v1.1", terms: ["一級模組", "二級功能", "三級子功能", "P0／P1／P2"], steps: ["依首頁區塊拆出內容、導覽、圖像與發布路線模組", "把每張資訊卡的標題、專屬介紹與連結列成可檢查能力", "標記 P0 的可讀性、透明插圖與手機版排版規則", "每次調整後更新完整清單，不只補一張卡"], prompt: "你是資深產品經理，請根據已確認的 AI 系統開發實戰學院首頁改版輸出完整功能清單\n\n已確認規則\n- 吉祥物、卡片插圖與流程圖必須維持同一套深藍、電藍、青綠、金黃的插圖語言\n- 系統類型、學習入口與手機發布卡都要有對應透明插圖，置於右上角且不遮住文字\n- 卡片文字依標題提供專屬介紹，卡高依內容收合\n- 首頁在桌面三欄、平板雙欄、手機單欄都必須可讀\n\n要求\n1 依一級模組、二級功能、三級子功能拆分\n2 標記 P0、P1、P2\n3 每項寫能力、使用者價值與驗收點\n4 不描述未確認的後端或商業規則\n5 輸出完整版本" },
  { id: "03", slug: "stage-03.html", title: "PRD", summary: "把首頁改版的內容、互動與驗收條件寫成可交付的產品規則", input: "首頁功能清單 v1.1", output: "首頁產品需求文件 PRD v1.1", terms: ["PRD", "正常場景", "異常場景", "非功能需求"], steps: ["定義首頁的導覽、學習路徑、感謝來源與延伸路線", "逐區塊寫清楚內容、連結目的、插圖用途與驗收條件", "補齊圖片載入失敗、窄螢幕與外部連結的處理", "把已確認的視覺邏輯列為品質需求，而非新增功能"], prompt: "你是資深產品經理，請將 AI 系統開發實戰學院首頁功能清單轉為 PRD v1.1\n\n本次已確認範圍\n- 首頁 Hero、來源與致謝、六張系統類型卡、開發流程圖、兩張學習入口卡、三張手機發布卡\n- 每張有插圖的卡片採右上角圖示與左下文字的斜對角資訊層級\n- 系統類型卡使用專屬介紹文字，卡片高度依內容自適應\n\n請包含背景、目標使用者、產品目標、範圍、功能需求、互動流程、內容規則、響應式與無障礙要求、正常與異常場景、可驗收條件。\n未確認事項標示【需確認】，不要補造功能。" },
  { id: "04", slug: "stage-04.html", title: "互動原型", summary: "把首頁改版轉成可直接檢查區塊、連結與響應式狀態的原型規格", input: "首頁 PRD v1.1", output: "首頁互動原型規格 v1.1", terms: ["原型", "元件", "彈窗", "抽屜"], steps: ["列出首頁區塊順序與每一張卡的預設內容", "定義主導覽、CTA、卡片連結與手機選單的跳轉結果", "明確標示圖示不遮文字、卡片高度收合與圖片替代文字", "先確認資訊架構與互動閉環，再進入 UI 視覺細節"], prompt: "你是產品原型專家，請根據 AI 系統開發實戰學院首頁 PRD v1.1 輸出原型規格。\n\n請逐一列出 Hero、來源與致謝、系統類型卡、流程圖、學習入口卡、手機發布卡、頁尾。\n每個區塊必須說明：位置、內容、初始狀態、可點擊元件、跳轉目標、桌面與手機排列、空白或圖片失敗時的替代狀態。\n卡片採右上圖示／左下文字的斜對角布局；不新增 PRD 外的功能。" },
  { id: "05", slug: "stage-05.html", title: "UI 設計", summary: "把首頁原型轉成與吉祥物插圖一致、可在桌面與手機閱讀的 UI 規格", input: "首頁 PRD 與互動原型 v1.1", output: "首頁 UI 設計規格 v1.1", terms: ["UI", "設計系統", "響應式", "空狀態"], steps: ["固定首頁的深藍、電藍、青綠、金黃與留白視覺語言", "定義 Hero、流程卡與資訊卡的文字層級、圓角、陰影與間距", "讓透明插圖依卡片容器比例縮放並留出文字安全區", "驗證桌面三欄、平板雙欄與手機單欄的閱讀順序"], prompt: "請根據 AI 系統開發實戰學院首頁 PRD v1.1 與原型規格輸出 UI 設計規格。\n\n已確認設計語言\n- 深藍為主要文字與結構色，電藍、青綠作操作與分段色，金黃作提示色\n- 吉祥物與所有小圖示使用一致的 3D 插圖風格，透明背景\n- 資訊卡的插圖固定在右上角，文字由左下向右上建立斜對角閱讀動線\n- 圖示大小使用容器比例自適應；不得遮住標題、內文或吉祥物臉部\n- 卡片高度依內容收合，桌面三欄、平板雙欄、手機單欄\n\n請列出色彩、字級、間距、卡片、按鈕、插圖、響應式與無障礙規格；不得新增未確認功能。" },
  { id: "06", slug: "stage-06.html", title: "TRD", summary: "把產品規則轉成技術施工圖", input: "PRD、原型與 UI 規格", output: "技術需求文件 TRD", terms: ["TRD", "前端", "後端", "API", "資料模型"], steps: ["逐項對照 PRD 功能", "定義前端、後端與資料模型", "列出 API、輸入驗證與錯誤處理", "補充權限、日誌、測試與技術風險"], prompt: "你是資深系統架構師，請把已確認 PRD 轉成 TRD\n逐項列出前端、後端、資料模型、API、輸入驗證、錯誤處理、權限、日誌、測試與風險\n忠實轉換產品需求，不自行新增功能\n不確定的技術選擇列為待確認" },
  { id: "07", slug: "stage-07.html", title: "開發計畫", summary: "把大系統拆成可以逐步驗收的工作", input: "PRD 與 TRD", output: "里程碑與任務清單", terms: ["里程碑", "任務依賴", "垂直切片", "P0"], steps: ["先排最小可驗收垂直切片", "整理任務前後依賴", "每項任務設定驗收條件", "避免一次開發全部功能"], prompt: "請根據 PRD 與 TRD 產生開發實施計畫\n先安排一個可操作、可保存、可驗收的最小垂直切片\n再依前置依賴拆分後續任務\n每項標示輸入、產物、相關檔案、測試與驗收條件" },
  { id: "08", slug: "stage-08.html", title: "Web 開發與測試", summary: "一次只完成一段真實可操作功能", input: "完整文件與開發計畫", output: "可操作 Web 系統", terms: ["Web", "自動測試", "資料持久化", "回歸測試"], steps: ["先交叉檢查全部規格", "每輪只做一個垂直切片", "同步完成程式與測試", "使用實際操作證據確認功能"], prompt: "請先交叉檢查需求、功能清單、PRD、原型、UI、TRD 與開發計畫\n列出衝突、缺失與待確認\n確認後只實作本輪指定垂直切片\n先列修改檔案與驗收條件，再進行開發與測試" },
  { id: "09", slug: "stage-09.html", title: "驗收與版本", summary: "用證據分清楚完成、失敗與待確認", input: "可操作 Web 系統", output: "驗收報告與版本紀錄", terms: ["驗收", "版本管理", "測試證據", "回歸"], steps: ["分開檢查功能、資料、畫面與平台", "保存測試輸出與實際畫面", "每次變更產生完整版本", "未實際檢查的項目標記待確認"], prompt: "請只做驗收，不要修改程式\n分開回報自動測試、功能、資料持久化、指定頁面、桌面與手機寬度\n分類為已通過、失敗、待確認、下一步\n沒有實際操作或畫面證據的項目不得標示為已驗收" },
  { id: "10", slug: "stage-10.html", title: "Web 上線與使用", summary: "公開、備份並進入真實日常使用", input: "已通過驗收的 Web 系統", output: "正式網址與更新流程", terms: ["GitHub Pages", "部署", "備份", "回復"], steps: ["公開前掃描私人資料與金鑰", "建立可回復的正式版本", "完成實際網址與手機驗收", "使用一段時間後再決定桌面與 App 延伸"], prompt: "Web 版本已通過驗收，請產生公開發布與日常使用計畫\n列出發布目標、建置、環境設定、資料備份、版本更新、失敗回復與發布後驗收\n不得把本機可啟動宣稱為正式網站已發布\n正式外部操作前先等待我確認" }
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

const staticPages = {
  prompts: { title: "完整提示詞庫", lead: "每個階段都能在自己的頁面直接複製，這裡提供集中查找", type: "prompts" },
  templates: { title: "範例文件與空白模板", lead: "網站不收集你的文件，只提供去識別化範例與 Markdown 空白模板", type: "templates" },
  glossary: { title: "系統開發專有名詞", lead: "看到不熟悉的名詞，可以先用白話理解用途再回到開發流程", type: "glossary" },
  modelGuide: { title: "AI 工具／模型選擇指南", lead: "先分清楚 Agent 與模型，再依任務、權限與官方資料做選擇", type: "model-guide" },
  safety: { title: "資料安全與公開檢查", lead: "把資料交給 AI 或 GitHub 前，先移除不能公開的內容", type: "safety" },
  faq: { title: "常見問題", lead: "整理第一次做系統最常遇到的阻礙與下一步", type: "faq" },
  complete: { title: "完成後分享你的系統", lead: "可以使用截圖、作品連結或兩者一起分享開發成果", type: "complete" },
  maintainer: { title: "維護者簡易操作手冊", lead: "收到第一篇作品留言後，只要照五個步驟處理", type: "maintainer" },
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
    ["model-guide.html", "模型指南", "model-guide"],
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
    <nav class="drawer-links"><a href="index.html">首頁</a><a href="index.html#source">首頁來源與致謝區</a><a href="roadmap.html">完整學習路線</a>${stages.map(s=>`<a href="${s.slug}">階段 ${s.id}｜${s.title}</a>`).join("")}<a href="prompts.html">完整提示詞</a><a href="model-guide.html">AI 工具／模型選擇指南</a><a href="glossary.html">專有名詞</a><a href="pwa-install.html">網頁加入主畫面</a><a href="mobile-app.html">手機 App 總覽</a><a href="android-publish.html">Android 發布</a><a href="ios-publish.html">iOS 發布</a><a href="maintainer-guide.html">維護者手冊</a></nav>
  </aside>`
}

function footerMarkup() {
  return `<footer class="site-footer"><div><strong>AI 系統開發實戰學院</strong><p>網站只保存匿名階段進度，不保存你的需求、文件或作品</p></div><nav class="footer-links"><a href="safety.html">資料安全</a><a href="glossary.html">專有名詞</a><a href="model-guide.html">模型選擇指南</a><a href="index.html#source">首頁來源與致謝區</a><a href="maintainer-guide.html">維護者手冊</a><a href="https://github.com/kagenhsu/ai-system-development-academy/discussions" target="_blank" rel="noreferrer">GitHub Discussions ↗</a></nav></footer><div class="toast" role="status" aria-live="polite" data-toast></div>`
}

function stageSidebar(current) {
  return `<aside class="stage-sidebar"><strong>階段導覽</strong><nav>${stages.map(s=>`<a class="${s.id===current?'active':''}" href="${s.slug}">${s.id}｜${s.title}</a>`).join("")}</nav></aside>`
}

function homepageUpdateDocument(stageId) {
  const docs = {
    "02": `<section class="content-section homepage-update-document"><div class="document-heading"><p class="eyebrow">HOME PAGE UPDATE</p><h2>首頁功能清單 v1.1</h2><p>以目前首頁實作為基準，將內容、插圖與響應式規則拆成可逐項驗收的功能。</p></div><div class="grid-3 document-card-grid"><div class="card"><span class="card-tag">P0｜內容</span><h3>學習路徑與資訊卡</h3><ul class="document-list"><li>Hero 說明從想法到 Web、Android、iOS 的路徑</li><li>六張系統類型卡各自顯示標題、專屬介紹與透明插圖</li><li>兩張學習入口與三張發布卡保留明確跳轉</li></ul></div><div class="card"><span class="card-tag">P0｜插圖</span><h3>一致的視覺資產</h3><ul class="document-list"><li>吉祥物、流程圖與小圖示維持同一套色彩與 3D 插圖語言</li><li>所有小圖示位於卡片右上角，不遮標題與內文</li><li>圖片有替代文字；載入失敗時仍保留文字與連結</li></ul></div><div class="card"><span class="card-tag">P0｜適配</span><h3>可閱讀的版面</h3><ul class="document-list"><li>卡片高度由內容決定，不保留無意義空白</li><li>桌面三欄、平板雙欄、手機單欄</li><li>圖示依卡片容器縮放，保留文字安全區</li></ul></div></div><div class="document-acceptance"><strong>本階段驗收：</strong>六張卡均有專屬介紹；11 張透明插圖無壞圖；圖示不與文字重疊；窄螢幕不出現橫向捲動。</div></section>`,
    "03": `<section class="content-section homepage-update-document"><div class="document-heading"><p class="eyebrow">HOME PAGE UPDATE</p><h2>首頁產品需求文件 PRD v1.1</h2><p>定義本次首頁的內容目的、功能邊界與可驗收規則；不把未確認的商業或後端功能混入首頁。</p></div><div class="grid-2 document-card-grid"><div class="card"><span class="card-tag">目標與範圍</span><h3>讓第一次做系統的人看懂下一步</h3><p>首頁需要讓讀者理解學習路徑、選擇可套用的系統方向，並能前往各階段、名詞與手機發布說明。</p><ul class="document-list"><li>範圍：首頁內容、內部導覽、外部原始影片連結</li><li>不包含：帳號、付費、資料收集或系統建置服務</li></ul></div><div class="card"><span class="card-tag">核心規則</span><h3>內容先於裝飾</h3><ul class="document-list"><li>每張卡必須有標題、專屬介紹、圖示與可讀的對比</li><li>流程圖需顯示階段名稱、方向與產物</li><li>吉祥物為單一主角色，各區不超過 3 至 5 個小互動點</li><li>外部連結清楚標示為外部來源</li></ul></div></div><div class="document-acceptance"><strong>正常場景：</strong>讀者可由 Hero、卡片與導覽進入對應教學頁。<br><strong>異常場景：</strong>插圖失敗時仍可讀到替代文字與功能內容；手機版改為單欄，導覽收進選單。</div></section>`,
    "04": `<section class="content-section homepage-update-document"><div class="document-heading"><p class="eyebrow">HOME PAGE UPDATE</p><h2>首頁互動原型規格 v1.1</h2><p>先確認每一區塊的位置、點擊結果與窄螢幕狀態，再進入 UI 細節。</p></div><div class="prototype-flow"><div>固定導覽<small>學習路線、十階段、名詞、手機 App</small></div><div>Hero CTA<small>進入階段 0／完整路線</small></div><div>系統卡與流程圖<small>閱讀方向與階段連結</small></div><div>學習與發布卡<small>前往說明頁</small></div></div><div class="grid-2 document-card-grid"><div class="card"><span class="card-tag">桌面原型</span><h3>主內容由左至右閱讀</h3><ul class="document-list"><li>Hero 文案在左、流程卡在右</li><li>系統類型與發布路線採三欄</li><li>插圖固定右上，文字由左下延伸</li></ul></div><div class="card"><span class="card-tag">手機原型</span><h3>以單欄維持閱讀順序</h3><ul class="document-list"><li>主導覽收合為可開關選單</li><li>所有卡片改單欄，按鈕維持可點擊高度</li><li>圖示縮放但不可遮住標題、內文或吉祥物臉部</li></ul></div></div><div class="document-acceptance"><strong>互動驗收：</strong>所有 CTA 與卡片連結指向正確頁面；選單可開關；Esc 或取消操作不保留未儲存狀態。</div></section>`,
    "05": `<section class="content-section homepage-update-document"><div class="document-heading"><p class="eyebrow">HOME PAGE UPDATE</p><h2>首頁 UI 設計規格 v1.1</h2><p>以首頁既有的吉祥物插圖、留白與藍綠色系為唯一基準，讓後續頁面能延續同一套介面語言。</p></div><div class="ui-token-grid"><div class="token-card token-ink"><strong>深藍</strong><small>結構、標題、主要文字</small></div><div class="token-card token-blue"><strong>電藍</strong><small>主要按鈕、流程與互動</small></div><div class="token-card token-teal"><strong>青綠</strong><small>分段、次要狀態與提示</small></div><div class="token-card token-yellow"><strong>金黃</strong><small>靈感、提醒與小互動點</small></div></div><div class="grid-2 document-card-grid"><div class="card"><span class="card-tag">元件規格</span><h3>卡片、按鈕與插圖</h3><ul class="document-list"><li>卡片使用白底、圓角、柔和陰影與內容自適應高度</li><li>圖示採透明 PNG、右上定位、容器比例縮放</li><li>按鈕維持主要藍、次要白、輔助青綠三種層級</li></ul></div><div class="card"><span class="card-tag">響應式規格</span><h3>先確保內容可讀</h3><ul class="document-list"><li>桌面：三欄卡片與完整主導覽</li><li>平板：雙欄卡片，保留圖示與文字安全區</li><li>手機：單欄卡片、導覽收合、文字與按鈕不縮小到難以操作</li></ul></div></div><div class="document-acceptance"><strong>UI 驗收：</strong>文字與背景對比清楚；所有圖片有替代文字；右上圖示不遮內容；桌面、平板、手機的閱讀順序一致。</div></section>`
  }
  return docs[stageId] || ""
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
      ${homepageUpdateDocument(stage.id)}
      <section class="content-section"><h2>這一頁會看到的名詞</h2><div class="term-list">${stage.terms.map(name=>{ const term = findTerm(name); return `<a class="term" href="${term ? `term-${term.slug}.html` : 'glossary.html'}">${name}</a>` }).join("")}</div></section>
      <section class="content-section"><div class="prompt-block"><div class="prompt-head"><div><small>本網站原創內容</small><h3>本階段完整提示詞</h3></div><button class="copy-button" type="button" data-copy-prompt>複製完整提示詞</button></div><pre data-prompt-text>${stage.prompt}</pre></div></section>
      <section class="content-section"><h2>工作台／駕駛艙案例</h2><div class="card"><span class="card-tag">去識別化參考案例</span><h3>${stage.title}如何套用到個人工作台</h3><p>使用今日工作、專案、進度與回顧作為示範資料，AI 只產生草稿，正式決定由使用者確認</p><a class="card-link" href="case.html">查看完整案例 →</a></div></section>
      <section class="content-section"><h2>範例文件與空白模板</h2><div class="grid-2"><div class="card"><h3>查看完成範例</h3><p>了解本階段產物完成後應包含哪些內容</p><a class="card-link" href="case.html">查看案例文件 →</a></div><div class="card"><h3>下載空白模板</h3><p>下載後在自己的專案資料夾填寫，網站不保存文件</p><a class="card-link" href="templates.html">前往模板頁 →</a></div></div></section>
      <section class="content-section"><h2>本階段驗收</h2><div class="checklist" data-checklist data-stage="${stage.id}">${["我已閱讀本階段說明","我已在自己的 AI 工具使用提示詞","我已完成本階段產物","我已自行確認內容"].map((x,i)=>`<label class="check-row"><input type="checkbox" data-check="${i}"><span>${x}</span></label>`).join("")}</div><div class="button-row"><button class="button button-primary" type="button" data-complete-stage>標記本階段完成</button><a class="button button-secondary" href="progress.html">查看匿名進度</a></div></section>
      <nav class="lesson-nav">${prev?`<a class="button button-secondary" href="${prev.slug}">← ${prev.title}</a>`:'<span></span>'}${next?`<a class="button button-primary" href="${next.slug}">${next.title} →</a>`:`<a class="button button-teal" href="pwa-install.html">先加入手機主畫面 →</a>`}</nav>
    </article></div></main>${footerMarkup()}`
}

function homePage() {
  return `${navMarkup()}<main class="page-shell"><section class="hero"><div><p class="eyebrow">AI SYSTEM DEVELOPMENT ACADEMY</p><h1>從模糊想法<br>走到自己的系統</h1><p class="lead">第一次做系統也能從工具準備、需求、功能、PRD、原型一路完成 Web，再分別延伸 Android 與 iOS App</p><div class="button-row"><a class="button button-primary" href="stage-00.html">從階段 0 開始</a><a class="button button-secondary" href="roadmap.html">查看完整路線</a></div></div><div class="hero-board"><h3>一條可以逐步驗收的路</h3><div class="board-flow"><span>先說清楚要做什麼</span><span>再建立完整規格</span><span>完成並驗收 Web</span><span>最後延伸 Android／iOS</span></div></div></section>
    <section class="section home-source-section" id="source" aria-labelledby="source-title"><figure class="mascot-thanks" aria-hidden="true"><img src="assets/mascot/falcon-thanks-v4.png" alt=""><span class="thanks-badge thanks-badge-word">謝謝</span><span class="thanks-badge thanks-badge-heart">♥</span><span class="thanks-badge thanks-badge-star">✦</span><span class="thanks-badge thanks-badge-share">分享</span></figure><div class="source-copy"><p class="eyebrow">SOURCE &amp; THANKS</p><h2 id="source-title">謝謝原作者提供這套方法的資訊起點</h2><p class="source-lead">感謝 Daju_ai 在 TikTok 帳號 @daju_shouai 分享《0 基礎做 App 保姆級教程》，讓更多人看見可以運用 AI，從想法開始建立網站與 App。</p><p>本站正在實際驗證這套方式是否能被整理成一套可重複、可逐步驗收的方法。我們希望用它發展更多與日常工作和生活息息相關的網頁系統與 App，從簡單工具，逐步延伸成更龐大、更細緻、可持續成長，而且每天真正用得到的系統。</p><p class="source-boundary"><strong>整理與驗證聲明：</strong>本站依實作結果重新分類、結構化並補充現況驗證；內容不是原影片逐字重製，也不代表原作者替本站全部內容背書。本站不公開完整字幕、不嵌入或備份原始影片。</p><div class="button-row"><a class="button button-secondary" href="https://www.tiktok.com/@daju_shouai/video/7673534003223383317" target="_blank" rel="noopener noreferrer">查看 TikTok 原始影片 ↗</a><a class="button button-primary" href="model-guide.html">查看本站工具與模型驗證</a></div></div></section>
    <section class="section"><div class="section-head"><p class="eyebrow">START HERE</p><h2>你可以開發不同類型的系統</h2><p>工作台與駕駛艙是參考案例，你可以替換成管理系統、教學網站或其他工具</p></div><div class="grid-3">${[["個人工作台","personal-workbench-v1.png","集中今天待辦、專案進度與筆記，建立自己的工作節奏。"],["管理系統","management-system-v1.png","整理客戶、案件與團隊流程，讓日常管理有一致的追蹤方式。"],["教學網站","teaching-site-v1.png","把課程、教材與學習任務整理成可持續更新的教學網站。"],["資料整理工具","data-organizer-v1.png","匯入、分類與搜尋資料，讓零散資訊變成可查找的工作資產。"],["Android App","android-app-v1.png","把已驗收的 Web 延伸為 Android 體驗，逐步準備測試與發布。"],["iOS App","ios-app-v1.png","規劃 iPhone 使用流程，銜接 TestFlight 與 App Store 的發布準備。"]].map(([x,art,description])=>`<div class="card system-type-card"><img class="card-illustration" src="assets/illustrations/${art}" alt="${x}插圖"><span class="card-tag">可套用</span><h3>${x}</h3><p>${description}</p></div>`).join("")}</div></section>
    <section class="section"><div class="section-head"><p class="eyebrow">TEXT DIAGRAM</p><h2>先用圖看懂整條開發路線</h2><p>每個節點直接寫出階段名稱、用途與產物，圖片下方另有完整文字版。</p></div>${roadmapVisualFigure(["第一段：開發準備、需求訪談、功能清單、PRD，把需求說清楚。","第二段：互動原型、UI 設計、TRD、開發計畫，把規格變成施工圖。","第三段：Web 開發與測試、驗收與版本、Web 上線，留下證據並正式交付。","每一步的產物都是下一步的輸入；未確認時不要跳到開發或發布。"])}<div class="grid-2 learning-entry-grid"><div class="card learning-entry-card"><img class="card-illustration card-illustration-small" src="assets/illustrations/glossary-v1.png" alt="專有名詞說明插圖"><span class="card-tag">白話解釋</span><h3>看不懂專有名詞？</h3><p>每個名詞都有獨立頁面，說明定義、用途、常見錯誤與相關階段。</p><a class="button button-secondary" href="glossary.html">查看專有名詞</a></div><div class="card learning-entry-card"><img class="card-illustration card-illustration-small" src="assets/illustrations/model-choice-v1.png" alt="模型選擇插圖"><span class="card-tag">工具選擇</span><h3>Agent 和模型差在哪裡？</h3><p>先分清楚操作工具與推理模型，再依任務與權限選擇。</p><a class="button button-primary" href="model-guide.html">查看模型選擇指南</a></div></div></section>
    <section class="section"><div class="section-head"><p class="eyebrow">MOBILE APP</p><h2>先選簡單安裝，或走商店發布</h2><p>如果只是自己或小範圍使用，可以先把 Web 加入主畫面，需要商店曝光再走 Android／iOS 發布</p></div><div class="grid-3"><div class="platform-card"><img class="platform-illustration" src="assets/illustrations/home-screen-v1.png" alt="加入主畫面插圖"><h3>網頁加入主畫面</h3><ul><li>不需要先上架商店</li><li>保留同一套 Web</li><li>Android 與 iPhone 都能使用</li><li>最快開始真實使用</li></ul><a class="button button-secondary" href="pwa-install.html">查看加入主畫面</a></div><div class="platform-card"><img class="platform-illustration" src="assets/illustrations/android-release-v1.png" alt="Android 發布插圖"><h3>Android／Google Play</h3><ul><li>Android App Bundle</li><li>Play App Signing</li><li>測試軌與資料安全</li><li>正式發布與版本更新</li></ul><a class="button button-primary" href="android-publish.html">查看 Android 原型</a></div><div class="platform-card"><img class="platform-illustration" src="assets/illustrations/ios-release-v1.png" alt="iOS 發布插圖"><h3>iPhone／App Store</h3><ul><li>macOS 與 Xcode</li><li>App Store Connect</li><li>TestFlight</li><li>App Review 與正式發布</li></ul><a class="button button-teal" href="ios-publish.html">查看 iOS 原型</a></div></div></section></main>${footerMarkup()}`
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

function diagramFigure(src, title, alt, textSteps) {
  return `<figure class="explanation-figure"><img src="${src}" alt="${alt}"><figcaption><strong>${title}</strong><span>圖中的每個節點都包含名稱與用途文字。</span></figcaption><details class="diagram-text"><summary>閱讀圖解文字版</summary><ol>${textSteps.map(step=>`<li>${step}</li>`).join("")}</ol></details></figure>`
}

function roadmapVisualFigure(textSteps) {
  return `<figure class="explanation-figure generated-roadmap-figure"><img src="assets/diagrams/falcon-development-roadmap-v1.png" alt="從想法到可發布系統：先把想法說清楚、再把規格變成施工圖、完成驗收再發布的三段式流程圖"><figcaption><strong>從想法到可發布系統</strong><span>以吉祥物帶領三段式開發流程；每一段均列出階段名稱與方向。</span></figcaption><details class="diagram-text"><summary>閱讀圖解文字版</summary><ol>${textSteps.map(step=>`<li>${step}</li>`).join("")}</ol></details></figure>`
}

function glossaryPrototype() {
  const raw = new URLSearchParams(location.search).get("variant")?.toUpperCase()
  const variant = ["A", "B", "C"].includes(raw) ? raw : "A"
  const labels = { A: "分類卡片", B: "索引與內容", C: "流程優先" }
  const termFlow = diagramFigure("assets/diagrams/term-learning-flow.svg", "如何理解一個專有名詞", "遇到名詞後開啟說明頁、理解定義用途錯誤，再返回學習階段的四步驟流程圖", ["遇到不懂的名詞：例如 PRD、API、AI Agent。","開啟名詞說明頁：先看白話定義與出現階段。","比較正確用法與常見錯誤，必要時閱讀等價文字流程。","回到相關階段，把理解套入文件、畫面或測試並留下證據。"])
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
    body = `<div class="section-head"><p class="eyebrow">VARIANT C</p><h2>先看開發流程，再找該階段名詞</h2><p>適合正在走十階段流程，想知道目前階段會遇到哪些名詞。</p></div>${diagramFigure("assets/diagrams/development-roadmap.svg", "十一階段開發路線", "從階段零到階段十的完整開發流程圖，每個節點包含名稱用途與產物", ["階段 0 至 3：把需求說清楚。","階段 4 至 7：把規格變成原型、技術文件與開發計畫。","階段 8 至 10：實作、驗收、建立版本並上線。"])}<div class="glossary-stage-groups">${groups.map(({stage,terms})=>`<section id="glossary-stage-${stage.id}" class="stage-term-group"><div><span class="card-tag">階段 ${stage.id}</span><h3>${stage.title}</h3><p>${stage.summary}</p></div><div class="term-list">${terms.map(term=>`<a class="term" href="term-${term.slug}.html">${term.name}</a>`).join("") || '<span class="muted-text">目前沒有獨立名詞頁</span>'}</div></section>`).join("")}${extras.length?`<section class="stage-term-group"><div><span class="card-tag">跨階段</span><h3>工具與社群</h3></div><div class="term-list">${extras.map(term=>`<a class="term" href="term-${term.slug}.html">${term.name}</a>`).join("")}</div></section>`:""}</div>`
  }
  return `${termFlow}<section class="content-section">${body}</section><div class="prototype-switcher" data-prototype-switcher data-current-variant="${variant}" aria-label="專有名詞頁原型方案"><button type="button" aria-label="上一個原型方案" data-variant-direction="-1">←</button><strong>${variant}｜${labels[variant]}</strong><button type="button" aria-label="下一個原型方案" data-variant-direction="1">→</button></div>`
}

function modelGuidePage() {
  const comparisons = [
    { type: "AI Agent", name: "Codex", tags: "需求與架構,程式開發與執行,圖片理解", use: "瀏覽儲存庫、編輯檔案、執行指令與測試。", limit: "權限、沙箱、介面與可選模型會影響實際能力。", image: "可使用螢幕截圖或圖表作為工作資料；依當前介面與模型為準。", source: "https://openai.com/codex/", sourceLabel: "Codex 官方資料" },
    { type: "AI Agent", name: "Claude Code", tags: "需求與架構,程式開發與執行", use: "讀取程式庫、跨檔案修改、執行指令與整合開發工具。", limit: "權限模式、介面與設定會影響實際操作。", image: "圖片能力依使用介面與所選模型而異，需由官方文件核對。", source: "https://docs.anthropic.com/en/docs/claude-code/overview", sourceLabel: "Claude Code 官方資料" },
    { type: "AI 模型", name: "OpenAI GPT 系列", tags: "需求與架構,原型與 UI,圖片理解", use: "理解文字或圖片、推理、整理規格與產生內容。", limit: "不同型號的速度、推理、上下文與工具能力不同；本頁不自動推薦型號。", image: "是否支援圖片輸入需依所選型號與介面確認。", source: "https://platform.openai.com/docs/models", sourceLabel: "OpenAI 模型官方資料" },
    { type: "AI 模型", name: "Anthropic Claude 系列", tags: "需求與架構,原型與 UI,圖片理解", use: "理解長文件、圖片與需求脈絡，協助分析及產生內容。", limit: "不同型號與方案的能力、用量及可用工具不同。", image: "是否支援圖片或 PDF 需依所選型號與介面確認。", source: "https://docs.anthropic.com/en/docs/about-claude/models", sourceLabel: "Claude 模型官方資料" }
  ].map(item => `<article class="model-row" data-model-tags="${item.tags}"><div><span class="card-tag">${item.type}</span><h3>${item.name}</h3></div><p><strong>用途：</strong>${item.use}</p><p><strong>限制：</strong>${item.limit}</p><p><strong>圖片：</strong>${item.image}</p><p><a class="inline-term" href="term-official-source.html">官方來源</a>｜<a href="${item.source}" target="_blank" rel="noopener noreferrer">查看${item.sourceLabel} ↗</a>｜<a class="inline-term" href="term-verification-date.html">最後驗證</a>：2026-09-01</p></article>`).join("")
  return `${navMarkup()}<main class="page-shell"><section class="page-hero"><p class="breadcrumb"><a href="index.html">首頁</a> ／ 模型選擇指南</p><p class="eyebrow">AGENT &amp; MODEL GUIDE</p><h1>我該選哪個 AI 工具與模型？</h1><p class="lead">先分清楚「在哪裡操作」與「由哪個模型理解」，再依任務、權限、限制與官方資料做決定。</p></section>
    <section class="section">${diagramFigure("assets/diagrams/agent-model-relationship.svg", "AI Agent、模型與專案環境的關係", "使用者任務交給 AI Agent，Agent 呼叫模型理解並在權限範圍操作檔案終端瀏覽器，產物回到使用者確認的關係圖", ["使用者說明目標、限制與資料，並決定是否接受結果。","AI Agent 管理工具、上下文與操作流程；可做的事受權限限制。","AI 模型負責理解文字或圖片、推理與生成，本身不等於取得檔案或終端權限。","專案環境包含檔案、終端機、瀏覽器與外部工具；敏感操作仍需人工核准。","產物與證據回到使用者，由使用者確認、要求修正或進入下一步。"])}</section>
    <section class="section"><div class="grid-2"><article class="card"><span class="card-tag">操作工具</span><h2><a class="inline-term" href="term-ai-assistant.html">AI Agent｜查看名詞說明</a></h2><p>你實際操作的工具或執行環境，負責管理檔案、終端機、瀏覽器與權限。</p></article><article class="card"><span class="card-tag">推理核心</span><h2><a class="inline-term" href="term-language-model.html">AI 模型｜查看名詞說明</a></h2><p>負責理解、推理與生成；實際能不能改檔或跑程式，仍要看 Agent 的工具與權限。</p></article></div></section>
    <section class="section"><div class="section-head"><h2>依任務查看已驗證資料</h2><p>按鈕只篩選頁面內容，不會呼叫 API，也不會替你自動決定。</p></div><div class="task-tabs" role="group" aria-label="任務分類"><button class="active" type="button" data-model-task="需求與架構">需求與架構</button><button type="button" data-model-task="原型與 UI">原型與 UI</button><button type="button" data-model-task="程式開發與執行">程式開發與執行</button><button type="button" data-model-task="圖片理解">圖片理解</button></div><div class="model-compare" data-model-table>${comparisons}</div><p class="policy-note" data-model-empty hidden>目前沒有符合條件且已完成官方資料驗證的項目。</p></section>
    <section class="section"><div class="lesson-nav"><a class="button button-secondary" href="index.html#source">← 查看首頁來源與致謝區</a><a class="button button-primary" href="glossary.html">查看專有名詞 →</a></div></section></main>${footerMarkup()}`
}

function staticPage(config) {
  let content = ""
  if (config.type === "prompts") content = `<div class="grid-2">${stages.map(s=>`<div class="card"><span class="card-tag">階段 ${s.id}</span><h3>${s.title}</h3><p>${s.summary}</p><a class="card-link" href="${s.slug}#prompt">查看並複製 →</a></div>`).join("")}</div>`
  if (config.type === "templates") content = `<div class="template-grid">${["需求文件","功能清單","PRD","原型規格","UI 規格","TRD","開發計畫","驗收報告","版本紀錄"].map(x=>`<div class="card"><span class="card-tag">Markdown</span><h3>${x}</h3><p>提供去識別化完成範例與空白結構</p><button class="button button-secondary" type="button" data-demo-download="${x}">下載空白模板</button></div>`).join("")}</div>`
  if (config.type === "glossary") content = glossaryPrototype()
  if (config.type === "safety") content = `<div class="grid-2"><div class="card"><h3>不要交給 AI</h3><ul><li>密碼與 API 金鑰</li><li>個資與公司機密</li><li>未公開合約與內部資料</li></ul></div><div class="card"><h3>公開前要檢查</h3><ul><li>截圖是否有真實姓名</li><li>網址是否包含內部主機</li><li>程式是否含 Token</li></ul></div></div>`
  if (config.type === "faq") content = `<div class="faq-list">${["AI 只更新局部內容怎麼辦","提示詞複製後要貼到哪裡","文件互相衝突怎麼辦","Web 驗收後如何做 Android","iOS 為什麼需要 macOS","GitHub Discussions 收到作品怎麼處理"].map(q=>`<details><summary>${q}</summary><p>依對應階段重新檢查輸入與產物，缺少證據時標記待確認，不直接宣稱完成</p></details>`).join("")}</div>`
  if (config.type === "complete") content = `<div class="grid-2"><div class="card"><span class="card-tag">作品分享</span><h3>分享作品截圖或連結</h3><p>可以只放截圖、只放作品連結，或同時分享兩者</p><button class="button button-primary" type="button" data-share-open>分享作品</button></div><div class="card"><span class="card-tag">學習心得</span><h3>記錄你怎麼完成系統</h3><p>分享遇到的問題、解決方式與下一版計畫</p><button class="button button-secondary" type="button" data-share-open>分享學習心得</button></div></div>`
  if (config.type === "maintainer") content = `<div class="step-list">${["確認圖片與作品連結能開啟","檢查是否包含敏感資料","使用固定文案感謝分享","分類錯誤時移到正確分類","違規或洩密時關閉或刪除"].map(x=>`<div class="step-item">${x}</div>`).join("")}</div><section class="content-section"><h2>固定回覆文案</h2><div class="prompt-block"><pre>謝謝分享，你已完成自己的第一個系統，也歡迎補充後續更新與使用心得</pre></div></section><section class="content-section"><h2>什麼時候才要置頂</h2><p>第一版不要求你立即學會置頂，作品內容完整、安全且對其他學習者有幫助時再使用</p><a class="button button-secondary" href="https://docs.github.com/en/discussions/managing-discussions-for-your-community/managing-discussions" target="_blank" rel="noreferrer">查看 GitHub 官方操作 ↗</a></section>`
  if (config.type === "case") content = `<div class="flow-diagram"><div class="flow-node">每天記錄<small>工作、專案與生活</small></div><div class="flow-node">長期使用<small>找出重複與卡關</small></div><div class="flow-node">加入 AI<small>整理、規劃、分析與提醒</small></div><div class="flow-node">使用者決定<small>像主管一樣下達指示</small></div></div><section class="section"><div class="grid-2"><div class="card"><h3>AI 個人工作台</h3><p>AI 協助設計每天可以記錄生活或工作的系統</p></div><div class="card"><h3>AI 個人駕駛艙</h3><p>使用一段時間後，再加入 AI 自動整理、規劃、分析與提醒</p></div></div></section>`
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
    <section class="section"><div class="section-head"><h2>怎麼使用這個名詞</h2><p>圖中每一步都有文字；下方還能展開完全相同的文字流程。</p></div>${diagramFigure("assets/diagrams/term-learning-flow.svg", `${term.name}的理解與使用流程`, `從遇到${term.name}、開啟說明、比較用法錯誤到返回相關階段的四步驟流程圖`, [`遇到「${term.name}」：先不要猜意思，從教材中的名詞連結進入本頁。`,`閱讀白話定義並確認它出現在「${term.stage}」。`,`正確用法：${term.use}`,`常見錯誤：${term.mistake}`,"回到相關階段，用文件、畫面或測試留下可驗收證據。"])} </section>
    <section class="section"><div class="grid-2"><article class="card"><span class="card-tag">正確使用</span><h2>實際做法</h2><p>${term.use}</p></article><article class="card"><span class="card-tag">常見錯誤</span><h2>避免這樣做</h2><p>${term.mistake}</p></article></div></section>
    <section class="section"><div class="lesson-nav"><a class="button button-secondary" href="glossary.html">← 回到名詞總覽</a><a class="button button-primary" href="${relatedStage}">查看相關學習階段 →</a></div></section></main>${footerMarkup()}`
}

function render() {
  if (page === "home") return homePage()
  if (page === "roadmap") return roadmapPage()
  if (page === "pwa") return pwaInstallPage()
  if (page === "mobile") return mobileOverview()
  if (page === "android") return platformPublish("android")
  if (page === "ios") return platformPublish("ios")
  if (page === "progress") return progressPage()
  if (page === "model-guide") return modelGuidePage()
  if (page === "term") return termPage(document.body.dataset.termSlug)
  if (page.startsWith("stage-")) {
    const id = page.split("-")[1]
    return stagePage(stages.find(s => s.id === id) || stages[0])
  }
  return staticPage(staticPages[page] || staticPages.faq)
}

document.getElementById("app").innerHTML = render()

const mascotProfiles = {
  idea: { src: "assets/mascot/falcon-idea-v1.png", symbols: ["✦", "◌", "⌁", "＋"], bulb: true },
  code: { src: "assets/mascot/falcon-code-v1.png", symbols: ["&lt;/&gt;", "⌘", "⌁", "＋"] },
  verify: { src: "assets/mascot/falcon-verify-v1.png", symbols: ["✓", "◎", "⌁", "＋"] },
  celebrate: { src: "assets/mascot/falcon-celebrate-v1.png", symbols: ["✓", "✦", "✦", "＋"] }
}

function mascotProfileForPage() {
  if (["complete", "android", "ios"].includes(page)) return mascotProfiles.celebrate
  if (["progress", "pwa", "stage-08", "stage-09", "stage-10"].includes(page)) return mascotProfiles.verify
  if (["mobile", "model-guide", "templates", "stage-04", "stage-05", "stage-06", "stage-07"].includes(page)) return mascotProfiles.code
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
      const show = row.dataset.modelTags.split(",").includes(task)
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
