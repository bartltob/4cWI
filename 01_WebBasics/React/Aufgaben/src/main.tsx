import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import API_Data from "./API_Data.tsx";
//import LightSwitch from "./LightSwitch.tsx";
import List from "./components/ToDoList/list.tsx";
//import UseState from "./useState.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <List/>
  </StrictMode>,
)
