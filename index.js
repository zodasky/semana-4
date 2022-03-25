async function loadImage(id) {

    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    const json = await res.json();

    const images = Object.values(json.sprites).filter(img => img != null && typeof img === "string");
    
    render({
        name: json.name,
        images
    });
}

function render(data) {
    const container = document.querySelector(".image__holder");
    container.innerHTML = "";
    for (let i = 0; i < data.images.length; i++) {
        const img = document.createElement("img");
        container.appendChild(img);
        img.className = "image";
        img.src = data.images[i];
        img.width="300"
    }
    document.querySelector("#pokename").textContent = data.name;
}

document.addEventListener("DOMContentLoaded", function() {
    loadImage(150);
});

document.querySelector("select")
.addEventListener("change", function(event) {
    loadImage(event.target.value);
});