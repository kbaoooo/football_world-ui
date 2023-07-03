//src
import images from '~/assets/imgs';
import Card from '../components/Card';
import styles from './Home.module.scss';
import PageTitle from '../components/PageTitle';
import { routesConfig } from '~/configs';

//lib
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PLAYERS_DATA = [
    {
        image: images.card,
        name: 'Neymar JR',
        desc: { club: 'PSG', nationality: 'Brazil' },
        to: routesConfig.detailPlayers,
    },
    {
        image: images.card,
        name: 'Neymar JR',
        desc: { club: 'PSG', nationality: 'Brazil' },
        to: routesConfig.detailPlayers,
    },
    {
        image: images.card,
        name: 'Neymar JR',
        desc: { club: 'PSG', nationality: 'Brazil' },
        to: routesConfig.detailPlayers,
    },
    {
        image: images.card,
        name: 'Neymar JR',
        desc: { club: 'PSG', nationality: 'Brazil' },
        to: routesConfig.detailPlayers,
    },
    {
        image: images.card,
        name: 'Neymar JR',
        desc: { club: 'PSG', nationality: 'Brazil' },
        to: routesConfig.detailPlayers,
    },
];

const KITS_DATA = [
    {
        image: images.kits,
        name: 'Argentina',
        to: routesConfig.detailPlayers,
    },
    {
        image: images.kits,
        name: 'Argentina',
        to: routesConfig.detailPlayers,
    },
    {
        image: images.kits,
        name: 'Argentina',
        to: routesConfig.detailPlayers,
    },
    {
        image: images.kits,
        name: 'Argentina',
        to: routesConfig.detailPlayers,
    },
    {
        image: images.kits,
        name: 'Argentina',
        to: routesConfig.detailPlayers,
    },
];

function Home() {
    return (
        <div className={cx('wrapper')}>
            {/* POTW */}
            <div className={cx('potw')}>
                <PageTitle content="Players of the week" />
                <div className={cx('players')}>
                    {PLAYERS_DATA.map((data, index) => {
                        return <Card key={index} data={data} />;
                    })}
                </div>
            </div>
            {/* END POTW */}

            {/* POTW */}
            <div className={cx('new-kits')}>
                <PageTitle content="New Kits" />
                <div className={cx('kits')}>
                    {KITS_DATA.map((data, index) => {
                        return <Card key={index} data={data} />;
                    })}
                </div>
            </div>
            {/* END POTW */}
        </div>
    );
}

export default Home;
