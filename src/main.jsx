import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 👇 加入這段：讓一般網頁支援 window.storage 非同步呼叫 👇
window.storage = {
  get: async (key) => {
    const val = localStorage.getItem(key);
    return { value: val };
  },
  set: async (key, value) => {
    localStorage.setItem(key, value);
  }
};
// 👆 結束 👆

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
