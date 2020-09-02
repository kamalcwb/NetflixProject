const API_KEY = '65741d987bc73d9c5e06df02c1cf5a64'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [{
            slug: 'originals',
            title: 'Originais do Netflix',
            itens: await basicFetch(`/discover/tv`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            itens: []
        }, {
            slug: 'toprated',
            title: 'Em alta',
            itens: []
        }, {
            slug: 'action',
            title: 'Ação',
            itens: []
        }, {
            slug: 'comedy',
            title: 'Comédia',
            itens: []
        }, {
            slug: 'horror',
            title: 'Terror',
            itens: []
        }, {
            slug: 'romance',
            title: 'Romance',
            itens: []
        }, {
            slug: 'originals',
            title: 'Originais do Netflix',
            itens: []
        }, {
            slug: 'documentary',
            title: 'Documentários',
            itens: []
        }, {
            slug: 'anime',
            title: 'Animes',
            itens: []
        }]
    }
}