export interface OrderModel{
    title: string
    startDate: string
    runTime: string
    count: number
    pricePerItem: string
    status: 'ordered' | 'watched' | 'canceled'
    rating: null | boolean
}