//src
import Home from '~/pages/Home';
import PLayers from '~/pages/Players';
import Clubs from '~/pages/Clubs';
import Kits from '~/pages/Kits';
import DetailPlayers from '~/pages/DetailPlayers';
import { DetailLayout } from '~/layouts';
import { routesConfig } from '~/configs';

// nhung routes khong can dang nhap van vao duoc
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.players,
        component: PLayers,
    },
    {
        path: routesConfig.clubs,
        component: Clubs,
    },
    {
        path: routesConfig.kits,
        component: Kits,
    },
    {
        path: routesConfig.detailPlayers,
        component: DetailPlayers,
        layout: DetailLayout
    },
]

// nhung routes buoc nguoi dung phai dang nhap, neu chua dang nhap se bi chuyen sang trang login
const privateRoutes = []

export {publicRoutes, privateRoutes};