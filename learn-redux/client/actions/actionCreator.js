//actions = events (that modify state)


//increment likes

function addLike (postIndex) {
    return {
        type: "INCREMENT_LIKES",
        postIndex
    }
}

//add comment

function addComment (postId, author, comment) {

    return {
        type: "ADD_COMMENT",
        postId,
        author,
        comment
    }
}

//remove comment


function removeComment (postId, commentIndex) {

    return {
        type: "REMOVE_COMMENT",
        postId,
        commentIndex
    }
}

//bonus: add photo?