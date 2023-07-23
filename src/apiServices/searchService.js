import * as request from '~/utils/request';

export const search = async (player_name, type = 'less') => {
    try {
        const response = await request.get('', {
            params: {
                action: 'get_players',
                player_name,
                type,
            },
        });
        if (type === 'less') {
            return Array.isArray(response.data) ? response.data.slice(0, 5) : [];
        } else {
            return Array.isArray(response.data) ? response.data : [];
        }
    } catch (err) {
        console.log(err);
    }
};
