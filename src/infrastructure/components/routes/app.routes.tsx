import { Route, Routes } from "react-router-dom";
import HomePage from "../../../features/page/home.page";
import FavoritesPage from "../../../features/page/favorites.page";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="Home">
                <Route index element={<HomePage></HomePage>}></Route>
            </Route>
            <Route
                path="Favorites"
                element={<FavoritesPage></FavoritesPage>}
            ></Route>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="*" element={<h1>ERROR</h1>}></Route>
        </Routes>
    );
}
