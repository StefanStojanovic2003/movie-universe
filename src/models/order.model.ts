import { CinemasModel } from "./cinemas.model"

export interface OrderModel{
    title: string
    startDate: string
    runTime: string
    cinema: CinemasModel
    count: number
    pricePerItem: string
    status: 'ordered' | 'watched' | 'canceled'
    rating: null | boolean
}