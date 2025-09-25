class AniAPI{
    constructor(){
        this.BASE_URL = "https://aniapi-eight.vercel.app/api";
    }
    // type
    // airing, upcoming, tv, movie, ova, ona, special, bypopularity, favorite
    async getTopAnimes(type){
        const URL = `${this.BASE_URL}/topAnimes?type=${type}&page=1`;
        const response = await fetch(URL);
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json()
    }

    async getSearchAnime(query){
        const URL = `${this.BASE_URL}/search?q=${query}&page=1`;
        const response = await fetch(URL);
        if (!response.ok){
            throw new Error(`hTTP error! status: ${response.status}`);
        }
        return await response.json()
    }

    async getAnimeInfoByID(id){
        const URL = `${this.BASE_URL}/anime?id=${id}`;
        const response = await fetch(URL);
        if (!response.ok){
            throw new Error(`hTTP error! status: ${response.status}`);
        }
        return await response.json()
    }
}

export { AniAPI }