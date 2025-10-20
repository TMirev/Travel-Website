document.addEventListener("DOMContentLoaded", function () {
    // Initialize map
    const map = L.map("map").setView([48.8566, 2.3522], 4); // Paris

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // Add sample markers
    const destinations = [
        { name: "Paris", coords: [48.8566, 2.3522] },
        { name: "Rome", coords: [41.9028, 12.4964] },
        { name: "Barcelona", coords: [41.3851, 2.1734] }
    ];

    destinations.forEach(dest => {
        L.marker(dest.coords)
            .addTo(map)
            .bindPopup(`<b>${dest.name}</b>`)
            .openPopup();
    });
});

