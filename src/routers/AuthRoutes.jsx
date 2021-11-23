import { Route, Routes } from "react-router";
import Inicio from "../pages/Inicio"

const AuthRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />}>
                </Route>
            </Routes>
        </>
    )
}

export default AuthRoutes
