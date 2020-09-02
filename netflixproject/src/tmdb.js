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
            itens: await basicFetch(`/discover/tv?with_network=213&language=pt-BRapi_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            itens: await basicFetch(`/trending/all/week?language=pt-BRapi_key=${API_KEY}`)
        }, {
            slug: 'toprated',
            title: 'Em alta',
            itens: await basicFetch(`/movie/top_rated?language=pt-BRapi_key=${API_KEY}`)
        }, {
            slug: 'action',
            title: 'Ação',
            itens: await basicFetch(`/discover/movie?with_genres=28&language=pt-BRapi_key=${API_KEY}`)
        }, {
            slug: 'comedy',
            title: 'Comédia',
            itens: await basicFetch(`/discover/movie?with_genres=35&language=pt-BRapi_key=${API_KEY}`)
        }, {
            slug: 'horror',
            title: 'Terror',
            itens: await basicFetch(`/discover/movie?with_genres=27&language=pt-BRapi_key=${API_KEY}`)
        }, {
            slug: 'romance',
            title: 'Romance',
            itens: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BRapi_key=${API_KEY}`)
        }, {
            slug: 'documentary',
            title: 'Documentários',
            itens: await basicFetch(`/discover/movie?with_genres=99&language=pt-BRapi_key=${API_KEY}`)
        }, {
            slug: 'animation',
            title: 'Animação',
            itens: await basicFetch(`/discover/movie?with_genres=16&language=pt-BRapi_key=${API_KEY}`)
        }]
    }
}