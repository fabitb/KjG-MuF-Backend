import {Beverage, BeverageInterface} from "../../models/beverage/beverageSchema";

export module beverageRepository {

    export async function getBeverages(): Promise<BeverageInterface[]> {
        return Beverage.find().exec();
    }

}