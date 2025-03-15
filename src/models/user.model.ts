export interface UserModel {
    email:string
    password:string
    orders: {
        title: string
        startDate: string
        runTime: string
        pricePerItem: string
        status: 'ordered' | 'watched' | 'canceled'
        rating: null | boolean
    }[]
}