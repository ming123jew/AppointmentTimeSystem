import logo from './logo.svg'
import './App.css'

import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'

import HomeRoutes from './router/home'
import MemberRoutes from './router/member'

import Home from "./pages/Home/home"

//路由配置文件
function AppRoutes () {
  return (
    <>

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/404" element={<div>Page Not Found</div>} />
            <Route path="*" element={<Navigate replace to="/404" />} />
            {HomeRoutes.map((item, index) => {
              return (
                <Route key={index} path={item.path} exact={item.exact} element={item.component}></Route>
              )
            })}

            {MemberRoutes.map((item, index) => {
              return (
                <Route key={index} path={item.path} exact={item.exact} element={item.component}></Route>
              )
            })}

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default AppRoutes
