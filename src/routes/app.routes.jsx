import { Routes, Route } from "react-router-dom";

import { SingIn } from '../pages/singIn'
import { DashBoard } from '../pages/dashboard'
import { ClientsList } from '../pages/clients'
import { Register } from '../pages/register'


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element= { <ClientsList /> }/>
            <Route path="/register" element= { <Register /> }/>
            <Route path="/dashboard/:id" element= { <DashBoard /> }/>
        </Routes>
    )
}