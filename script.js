function openReviewModal(movieTitle) {
    document.getElementById("movie-title").innerText = movieTitle;
    document.getElementById("review-modal").style.display = "block";
}

function closeReviewModal() {
    document.getElementById("review-modal").style.display = "none";
}

function submitReview() {
    let reviewText = document.getElementById("review-text").value;
    let reviewRating = document.getElementById("review-rating").value;
    if (reviewText === "" || reviewRating === "") {
        alert("Please enter both review and rating!");
        return;
    }

    let reviewContainer = document.getElementById("reviews-container");
    let newReview = document.createElement("p");
    newReview.innerHTML = `<strong>Rating:</strong> ${reviewRating}/5 <br> <strong>Review:</strong> ${reviewText}`;
    reviewContainer.appendChild(newReview);

    // Clear input fields after submission
    document.getElementById("review-text").value = "";
    document.getElementById("review-rating").value = "";

    alert("Review Submitted!");
}
