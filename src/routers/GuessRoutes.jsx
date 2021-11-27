import { Route, Routes } from "react-router";
import Login from "../components/Login";
import NotFound404 from "../components/PageNotFound";
import Register from "../components/Register";
import Blog from "../pages/Blog";
import Caballero from "../pages/Caballero";
import Contacto from "../pages/Contacto";
import Dama from "../pages/Dama";
import Inicio from "../pages/Inicio"
import ProductDetail from "../pages/ProductDetail";

const GuessRoutes = () => {
    return (
        <>
            <Routes>
            <Route path="/" element={<Inicio />}>
                </Route>
                <Route path="contact" element={<Contacto />}>
                </Route>
                <Route path="blog" element={<Blog />}>
                </Route>
                <Route path="login" element={<Login />}>
                </Route>
                <Route path="register" element={<Register />}>
                </Route>
                <Route path="gentlemen" element={<Caballero />}>
                </Route>
                <Route path="ladies" element={<Dama />}>
                </Route>
                <Route path="details-product" element={<ProductDetail />}>
                </Route>
                <Route path="*" element={<NotFound404 />}>
                </Route>
            </Routes>
        </>
    )
}

export default GuessRoutes
