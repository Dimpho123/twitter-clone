document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkToggle');

  // Set initial button text
  toggle.textContent = document.body.classList.contains('dark')
    ? '☀️ Light Mode'
    : '🌙 Dark Mode';

  // Add click event
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark')
      ? '☀️ Light Mode'
      : '🌙 Dark Mode';
  });
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
    alert('Reply feature coming soon!');
  });
});


 // FOR SHARE BUTTON
document.querySelectorAll('.action.share').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Post shared!');
  });
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

  // Show feedback
  alert("Posted!");

  // Clear input
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

// Close when clicking outside
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