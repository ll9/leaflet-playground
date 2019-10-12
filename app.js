const map = L.map('map', {
    center: [47.81, 12.37],
    zoom: 15
});

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo( map );

L.marker([47.81, 12.37], {draggable: true}).addTo(map);