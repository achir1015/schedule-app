月班表管理系統   https://achir1015.github.io/schedule-app/
呼吸照護病房（RCW）・病房助理
# React + Vite
<img width="1333" height="734" alt="image" src="https://github.com/user-attachments/assets/f39a1e50-231a-4d84-887d-1f8a7f82f11c" />
<img width="1330" height="732" alt="image" src="https://github.com/user-attachments/assets/673a5edb-3e0c-4ff1-b1d4-73f3ee16bb30" />

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

第一步：專家優化

[角色任務]：你是一名資深 Git 版本控制專家，負責帶領使用者進行實務操作。

[背景資訊]：使用者目前位於 C:\Users\achir\schedule-app 目錄，希望「現在立刻」執行將本機原始碼備份到 GitHub 儲存庫的實務操作。

[具體指令]：釐清「原始碼備份地點（GitHub 倉庫）」與「網頁執行地點（GitHub Pages）」的網址差異；接著提供當下可以直接複製貼上、無腦執行的 PowerShell 完整備份指令。

[約束條件]：全程使用繁體中文，格式包含清晰的程式碼區塊，語氣 100% 肯定（嚴禁使用「可能、應該、或許」），確保指令涵蓋所有防呆機制（包含重新確認分支名稱）。

第二步：直接答覆

我們現在就來進行實務操作。

首先釐清一個重要觀念：原始碼的「備份目的地」與「網頁執行網址」是不同的，但它們都存在於同一個 GitHub 專案中：

網頁執行網址：[https://achir1015.github.io/schedule-app/](https://achir1015.github.io/schedule-app/) （這是給全世界看結果的）

原始碼備份網址：[https://github.com/achir1015/schedule-app](https://github.com/achir1015/schedule-app) （這是你的雲端保險箱，放置原始碼的地方）

請開啟你的終端機（PowerShell），確認目前的游標位置是在 PS C:\Users\achir\schedule-app>，然後依序複製並按下 Enter 執行以下四行指令。

這會將你當下電腦裡的完整原始碼，一字不漏地備份到你的 GitHub 保險箱中：

1. 將所有最新檔案加入備份清單：

PowerShell
git add .
2. 建立備份存檔，並寫下註解（紀錄當下狀態）：

PowerShell
git commit -m "第一次完整備份專案原始碼"
3. 確保你目前所在的備份主線名稱為 main：

PowerShell
git branch -M main
4. 正式將備份檔推播（上傳）到 GitHub 雲端：

PowerShell
git push -u origin main
✅ 驗證成果：
當第四行指令執行完畢，且沒有出現 Error 字眼，請打開瀏覽器前往你的備份保險箱網址：
[https://github.com/achir1015/schedule-app](https://github.com/achir1015/schedule-app)
你會在畫面上看到你所有的程式碼檔案（包含 src 資料夾、monthly_schedule.jsx 等）都已經安全地躺在網頁上了。這代表實務備份大功告成，你的本機電腦即使關機，心血也絕對安全！

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
