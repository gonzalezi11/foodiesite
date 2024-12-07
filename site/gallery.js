const restaurants = [
    {
        name: "No anchovies",
        menuPdf: "NO+CHOVES+MENU+PDF.pdf",
        photos: ["anchov-pic1.jpeg", "anchov-pic2.jpeg", "anchov-pic3.jpeg", "anchov-pic4.jpeg"]
    },
    {
        name: "Illegal Petes",
        menuPdf: "https://www.illegalpetes.com/menu",
        photos: ["pete-pic1.png", "pete-pic2.png", "pete-pic3.png", "pete-pic4.png"]
    },
    {
        name: "Frog & Firken",
        menuPdf: "Frog & Firkin - Food Menu.pdf",
        photos: ["frog-pic1.jpg", "frog-pic2.jpg", "frog-pic3.jpg", "frog-pic4.jpg"]
    },
    {
        name: "Agave House",
        menuPdf: "agave-house-menu.pdf",
        photos: ["agave-pic1.png", "agave-pic2.png", "agave-pic3.png", "agave-pic4.png"]
    },
    {
        name: "Bacio Italiano",
        menuPdf: "bacio-menu.pdf",
        photos: ["bacio-pic1.png", "bacio-pic2.png", "bacio-pic3.png", "bacio-pic4.png"]
    },
    {
        name: "Gentle Ben's",
        menuPdf: "gentle-bens-menu.pdf",
        photos: ["ben-pic1.png", "ben-pic2.png", "ben-pic3.png", "ben-pic4.png"]
    },
];

let current = 0;

function updateGallery() {
    document.getElementById('restaurantName').textContent = restaurants[current].name;
    document.getElementById('menuFrame').src = restaurants[current].menuPdf;
    
    document.getElementById('photo1').src = restaurants[current].photos[0];
    document.getElementById('photo2').src = restaurants[current].photos[1];
    document.getElementById('photo3').src = restaurants[current].photos[2];
    document.getElementById('photo4').src = restaurants[current].photos[3];
}

function nextRestaurant() {
    current = (current + 1) % restaurants.length;
    updateGallery();
}

function prevRestaurant() {
    current = (current - 1 + restaurants.length) % restaurants.length;
    updateGallery();
}

window.onload = updateGallery;