import { Comment, CommentInterface } from "../../models/comment/commentSchema";

export module commentRepository {

    export async function getCommentByID(commentID: string): Promise<CommentInterface | null> {
        return await Comment.findById(commentID).exec()
    }

    export async function createNewComment(author: string, message: string): Promise<CommentInterface> {
        let newComment = new Comment({
            author: author,
            commentMessage: message
        })
        await newComment.save()
        return newComment
    }

    export async function deleteCommentByID(comment: CommentInterface): Promise<boolean> {
        let result = await Comment.findByIdAndDelete(comment._id)
        return (result != undefined)
    }

}