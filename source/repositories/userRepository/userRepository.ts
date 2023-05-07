import { MiscellaneousExpressionOperatorReturningNumber } from "mongoose";
import { Miles, MilesInterface } from "../../models/miles/milesSchema";
import { User, UserInterface } from "../../models/user/userSchema";

export module userRepository {

    export async function getPopulatedUserByID(userName: string): Promise<UserInterface | null> {
        let user = await User.findOne({userName: userName})
            .populate({
                path: 'miles',
                populate: {
                    path: 'transactions'
                }
            })
            .exec()
        console.log(user)
        return user
    }

    export async function getMilesByUserName(userName: string): Promise<MilesInterface | null> {
        let user = await User.findOne({userName: userName}).exec()
        return user ? user.miles : null;
    }

    export async function createNewUser(userName: String): Promise<UserInterface> {
        let miles = new Miles();
        miles.save()
        let newUser = new User({
            userName: userName,
            miles: miles
        })
        newUser.update
        await newUser.save()
        return newUser
    }

    export async function deleteUserByID(user: UserInterface): Promise<boolean> {
        let result = await User.findByIdAndDelete(user._id)
        return (result != undefined)
    }

    export async function addMilesTransaction(user: UserInterface, transactionID: any): Promise<UserInterface> {
        user.miles.transactions.push(transactionID)
        await user.miles.save()
        return user
    }

}