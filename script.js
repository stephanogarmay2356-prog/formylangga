const messageText = `HI LANG! 💗,

I just want to say how thankful I am to have you in my life. 
You bring light, laughter, and love wherever you go. 
Even if I can’t be there in person, I hope this little surprise makes you smile. 

You deserve all the happiness in the world. 
Happy Birthday, my dear — today is all about you! 🎉🎂💐

I’m really sorry I can’t be there in person to celebrate with you. It’s not because I don’t want to — believe me, I really do — but I just can’t make it right now. Still, I didn’t want your day to pass without doing something special, so I made a little website just for you. 💻✨

It’s my way of showing that even if I’m not there physically, I’m still celebrating with you in my own way.

Also, I know you’ve been wanting that makeup, and I wish I could give it to you right now — but hopefully, this small effort makes you smile just as much. 🥰

Enjoy your day to the fullest! You deserve all the happiness, love, and blessings today and always. 💐💖

With all my love, 
— From PANCHAY!! 💞`;

const messageElement = document.getElementById("message");
const button = document.getElementById("revealBtn");
let index = 0;

button.addEventListener("click", () => {
    button.style.display = "none";
    typeLetter();
    createHearts();
});

function typeLetter() {
    if (index < messageText.length) {
        messageElement.innerHTML += messageText.charAt(index);
        index++;
        setTimeout(typeLetter, 40);
    }
}

// Floating hearts animation
function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 400);
}

// Lightbox (Fullscreen image + message)
const photos = document.querySelectorAll(".photo");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxMessage = document.getElementById("lightbox-message");
const closeBtn = document.querySelector(".close");

photos.forEach(photo => {
    photo.addEventListener("click", () => {
        const imgSrc = photo.querySelector("img").src;
        const msg = photo.getAttribute("data-message");

        lightboxImg.src = imgSrc;
        lightboxMessage.textContent = msg;
        lightbox.classList.add("show");
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
});
