let tweets = [];

// Load tweets on page load
renderTweets();

// Add tweet
function addTweet() {
    let input = document.getElementById("tweetInput");
    let text = input.value.trim();

    if (text === "") {
        alert("Please write something");
        return;
    }

    let tweet = {
        id: Date.now(),
        text: text,
        likes: 0,
        liked: false
    };

    tweets.unshift(tweet);

    input.value = "";
    renderTweets();
}

// Render tweets
function renderTweets() {
    let feed = document.getElementById("feed");
    feed.innerHTML = "";

    for (let i = 0; i < tweets.length; i++) {
        let t = tweets[i];

        let div = document.createElement("div");
        div.className = "tweet";

        div.innerHTML = `
            <p>${t.text}</p>
            <button onclick="likeTweet(${t.id})">
                ❤️ ${t.likes}
            </button>
        `;

        feed.appendChild(div);
    }
}

// Like tweet
function likeTweet(id) {
    for (let i = 0; i < tweets.length; i++) {
        if (tweets[i].id === id) {

            tweets[i].liked = !tweets[i].liked;

            if (tweets[i].liked) {
                tweets[i].likes++;
            } else {
                tweets[i].likes--;
            }
        }
    }

    renderTweets();
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}