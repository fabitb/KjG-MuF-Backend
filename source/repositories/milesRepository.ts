import { MilesTransaction, MilesTransactionInterface } from "../models/miles/milesSchema"

export module milesRepository {

    export async function createNewTransaction(miles: number, description: string): Promise<MilesTransactionInterface> {
        let newTransaction = new MilesTransaction({
            milesTransacted: miles,
            description: description
        })
        await newTransaction.save()
        return newTransaction
    }

}