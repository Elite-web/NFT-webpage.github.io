// Hero scetion auto type animation part 

let type = new Typed('.auto-type', {
    strings: ['part of the Nike inc.', 'Explore  Digital art.', 'Collection NFTs Art'],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
});

// Popup conncent form 
document.querySelector("#btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
});