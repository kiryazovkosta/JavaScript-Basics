var isLiked = false;

function like() {
    var likeButton = document.getElementById('btn-like');
    if (isLiked === true) {
        likeButton.innerHTML = 'Like';
    } else {
        likeButton.innerHTML = 'Unlike';
    }

    isLiked = !isLiked;
}

var likeButton = document.getElementById('btn-like');
likeButton.addEventListener('click', like, false);