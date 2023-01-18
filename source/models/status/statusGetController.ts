export module statusGetController {

    export async function getStatus(req, res) {
        res.status(200).json("OK_NEU")
    }

}