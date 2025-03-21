import axios from "axios";

const client = axios.create({

    baseURL : 'https://movie.pequla.com/api',
    headers : {
        'Accept' : 'application/json',
        'X-Client-Name' : 'MOVIEUNIVERSE' 
    },
    validateStatus : (status : number) => {
        return status === 200
    }

})

export class MovieService{

    static async getMovies(page : number = 0, size : number = 10){

        return client.request({

            url: '/movie',
            method: 'GET',
            params: {
                'page': page,
                'size': size,
                'sort': 'startDate,asc'
            }

        })
    
    }

    static async getMovieById(movieId: number){

        return client.get(`/movie/${movieId}`)

    }

    static async getGenres(){
        return client.get('/genre')
    }

    static async getDirectors() {
        return client.get('/director');
    }
    
    static async getActors() {
        return client.get('/actor');
    }
    
    static async getRuntimes() {
        return client.get('/movie/runtime');
    }
    
    static async searchMovies(filters: any) {
        return client.get('/movie', { params: filters });
    }

}