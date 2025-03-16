import { CinemasModel } from "./cinemas.model"

export interface OrderModel{
    id : number
    movieId: number
    title: string
    startDate: string
    runTime: number
    cinema: CinemasModel
    count: number
    pricePerItem: number
    status: 'ordered' | 'watched' | 'canceled'
    rating: null | boolean
}