import {beverageRepository} from "../../repositories/beverageRepository/beverageRepository";

export module beverageGetController {

    export async function getBeverages(req, res) {

        let beverages = await beverageRepository.getBeverages();
        if (beverages) {
            res.status(200).json(beverages)
        }

    }

}