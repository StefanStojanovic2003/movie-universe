import { CinemasModel } from "../models/cinemas.model";

export class CinemasService{

    static getCinemas() : CinemasModel[]{

        return [
            {
                id : 1,
                name: 'MovieUniverse Usce',
                contryOfOrigin : 'Serbia',
                city : 'Belgrade'
            },
            {
                id : 2,
                name: 'MovieUniverse Delta',
                contryOfOrigin : 'Serbia',
                city : 'Belgrade'   
            },
            {
                id : 3,
                name: 'MovieUniverse Promenada',
                contryOfOrigin : 'Serbia',
                city : 'Novi Sad'
            },
            {
                id : 4,
                name: 'MovieUniverse Delta Planet Nis',
                contryOfOrigin : 'Serbia',
                city : 'Nis'
            }
        ]

    }

}