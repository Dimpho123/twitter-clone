const toggle = document.getElementById("darkToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggle.checked);
});

 // FOR LIKE BUTTON
document.querySelectorAll('.action.like').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');

    let count = btn.querySelector('span');
    let number = parseInt(count.textContent.replace('K','')) || 0;

    if (btn.classList.contains('liked')) {
      count.textContent = number + 1 + 'K';
    } else {
      count.textContent = number - 1 + 'K';
    }
  });
});

 // FOR RETWEET BUTTON
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".action.rt");
  if (!btn) return;

  const countSpan = btn.querySelector("span");
  let count = parseInt(countSpan.textContent);

  if (btn.classList.contains("retweeted")) {
    btn.classList.remove("retweeted");
    countSpan.textContent = count - 1;

    alert("Retweet removed");
  } else {
    btn.classList.add("retweeted");
    countSpan.textContent = count + 1;

    alert("Retweeted!");
  }
});

 // FOR REPLY CLICK

document.querySelectorAll('.action.reply').forEach(btn => {
  btn.addEventListener('click', () => {

    const tweet = btn.closest('.tweet');
    const actions = tweet.querySelector('.tweet-actions');
    const container = tweet.querySelector('.replies-container');

    
    if (tweet.querySelector('.reply-box')) return;

    const replyBox = document.createElement('div');
    replyBox.classList.add('reply-box');

    replyBox.innerHTML = `
      <input type="text" class="reply-input" placeholder="Write a reply..." />
      <button class="reply-send">Reply</button>
    `;

    
    actions.after(replyBox);

    const input = replyBox.querySelector('.reply-input');
    const button = replyBox.querySelector('.reply-send');

    button.addEventListener('click', () => {
      const text = input.value.trim();

      if (text !== "") {

       
        const reply = document.createElement('div');
        reply.classList.add('tweet');

        
        container.appendChild(reply);

        
        const countSpan = btn.querySelector('span');
        let count = parseInt(countSpan.textContent) || 0;
        countSpan.textContent = count + 1;

       
        replyBox.remove();
      }
    });

    input.focus();
  });
});


 // FOR SHARE BUTTON
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".action.share");
  if (!btn) return;

  const countSpan = btn.querySelector("span");
  let count = parseInt(countSpan.textContent);

  if (btn.classList.contains("Saved")) {
    btn.classList.remove("Saved");
    countSpan.textContent = count - 1;

    alert("Saved removed");
  } else {
    btn.classList.add("Saved");
    countSpan.textContent = count + 1;

    alert("Saved!");
  }
});


// FOR DOWNLOAD BUTTON
document.querySelectorAll('.action.download').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Downloading...');
  });
});


// FOR YOU AND FOLLOWING SECTIONS
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});


// POST BUTTON
const postBtn = document.querySelector(".compose-post-btn");
const input = document.querySelector(".compose-input");

postBtn.addEventListener("click", () => {
  const message = input.value.trim();

  if (message === "") {
    alert("Write something first!");
    return;
  }

 
  alert("Posted!");


  input.value = "";
});

  // FOR THE MORE OPTION
const moreBtn = document.querySelector(".more-btn");
const moreMenu = document.querySelector(".more-menu");

// Toggle menu
moreBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  moreMenu.classList.toggle("show");
});


document.addEventListener("click", () => {
  moreMenu.classList.remove("show");
});



// FOR THE TRENDING SECTION 
document.addEventListener("DOMContentLoaded", () => {

  const trends = document.querySelectorAll(".trend-item");
  const input = document.querySelector(".compose-input");

  trends.forEach(trend => {
    trend.addEventListener("click", () => {
      const hashtag = trend.querySelector(".trend-title").textContent;

      // Put hashtag in input
      input.value = hashtag + " ";

      // Focus input so user can type immediately
      input.focus();

      // Optional message
      showToast("Added " + hashtag);
    });
  });

});


//FOR THE EXPLORE BUTTON
document.addEventListener("DOMContentLoaded", () => {

  const navItems = document.querySelectorAll(".nav-item");

  const homePage = document.querySelector(".home-page");
  const explorePage = document.querySelector(".explore-page");

  // HOME
  navItems[0].addEventListener("click", () => {
    homePage.style.display = "block";
    explorePage.style.display = "none";
  });

  // EXPLORE 
  navItems[1].addEventListener("click", () => {
    homePage.style.display = "none";
    explorePage.style.display = "block";
  });

});





/* EXPLORE BUTTON
*/

const exploreBtn = document.querySelectorAll(".nav-item")[1];
const homePage = document.querySelector(".home-page");
const explorePage = document.querySelector(".explore-page");

exploreBtn.addEventListener("click", () => {
  homePage.style.display = "none";
  explorePage.style.display = "block";

  setupExploreTabs();
});
/*
 EXPLORE TABS FUNCTION
*/
function setupExploreTabs() {
 const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      // remove active from all tabs
      tabs.forEach(t => t.classList.remove("active"));

      // hide all content
      contents.forEach(c => c.classList.remove("active"));

      // activate clicked tab
      tab.classList.add("active");

      // show correct content
      const target = document.getElementById(tab.dataset.tab);
      if (target) {
        target.classList.add("active");
      }

    });
  });
}

 /* TRENDING LIST */
 const showMoreBtn = document.getElementById("showMoreTrends");
const moreTrends = document.getElementById("more-trends");

showMoreBtn.addEventListener("click", () => {
  moreTrends.classList.toggle("hidden");

  if (moreTrends.classList.contains("hidden")) {
    showMoreBtn.textContent = "Show more";
  } else {
    showMoreBtn.textContent = "Show less";
  }
});




