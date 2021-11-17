import { Route, Routes } from "react-router";
import Login from "../components/Login"

const GuessRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>}>
                </Route>
            </Routes>
        </>
    )
}

export default GuessRoutes
