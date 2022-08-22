class Post {
    constructor(data) {
        Object.assign(this, data)
        this.giveLike = this.giveLike.bind(this)
        // this.name = data.name
        // this.username = data.username
        // this.location = data.location
        // this.avatar = data.avatar
        // this.post = data.post
        // this.comment = data.comment
        // this.likes = data.likes
    }
    getPostHtml() {
        const {name, username, location, avatar, post, comment, heartBtn, likesEl} = this;
        let {likes} = this;
        return `<section class="section visted-user-section">
                    <div class="flex-container">
                        <img class="avatar" src="${avatar}">
                        <div>
                            <p class="bold">${name}</p>
                            <p class="font-12">${location}</p>
                        </div>
                    </div>
                </section>
                <section class="section selfie-section">
                    <img class="selfie" src="${post}">
                </section>
                <section class="section caption-section">
                    <img class="icon" id="${heartBtn}" src="images/icon-heart.png">
                    <img class="icon" src="images/icon-comment.png">
                    <img class="icon" src="images/icon-dm.png">
                    <p class="bold" id="${likesEl}">${likes} likes</p>
                    <p class="comment"><span class="bold">${username}</span> ${comment}</p>
                </section>
            `
    }
    giveLike() {
        console.log(this)
        console.log('hello')
        this.likes = this.likes + 1
        console.log(this.likes)
    }
    
}


export default Post



        