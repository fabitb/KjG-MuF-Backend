import { commentRepository } from "../../repositories/commentRepository/commentRepository";
import * as errors from "../errors/kjgBackendError";

export module commentDeleteController {
    
    export async function deleteComment(req, res) {

        if(!req.params.commentID) {
            throw errors.UnprocessableEntity("Mandatory value missing, cannot delete comment. Please provide an commentID")
        } 

        let comment = await commentRepository.getCommentByID(req.params.commentID)
        if(!comment) {
            throw errors.NotFound(Comment.name, "Comment could not be found")
        }

        if(!await commentRepository.deleteCommentByID(comment)) throw errors.InternalError(new Error("Could not delete comment"), "Could not delete comment")
    
        res.status(200).json()
    }

}