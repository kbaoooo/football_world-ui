//src
import Home from '~/pages/Home';
import PLayers from '~/pages/Players';
import Clubs from '~/pages/Clubs';
import Kits from '~/pages/Kits';
import DetailPlayers from '~/pages/DetailPlayers';
import { DetailLayout } from '~/layouts';

// nhung routes khong can dang nhap van vao duoc
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/players',
        component: PLayers,
    },
    {
        path: '/clubs',
        component: Clubs,
    },
    {
        path: '/kits',
        component: Kits,
    },
    {
        path: '/:playername',
        component: DetailPlayers,
        layout: DetailLayout
    },
]

// nhung routes buoc nguoi dung phai dang nhap, neu chua dang nhap se bi chuyen sang trang login
const privateRoutes = []

export {publicRoutes, privateRoutes};