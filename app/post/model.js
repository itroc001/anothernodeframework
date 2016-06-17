class Post {

    constructor(attrs) {
        this.data = {
            title: attrs.title,
            body: attrs.body,
            author: attrs.author,
            isPublished: attrs.isPublished,
            updatedAt: Date.now()
        }
    }

}

module.exports = Post;