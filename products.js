function getSave(s) {
    const like = s.likes.find(l => l.username==localStorage.username);
    const title = like==undefined ? "Like" : "Unlike";
    const likeId = like==undefined ? 0 : like._id
    return `
        <div data-post_id="${s._id}" class="save">
            LIKES: ${m.likes.length}
            <button class="likeBtn btn btn-outline-primary" data-like_id="${likeId}" data-post_id="${s._id}">${title}</button>
            </div>
    `;.
}
