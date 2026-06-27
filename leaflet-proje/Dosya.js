map.on('click', function(e) {
  var latlng = e.latlng;

  // Açıklama metni al
  var aciklama = prompt("Bu noktaya ne yazmak istersin?");

  // Marker oluştur ve açıklamayı ekle
  var marker = L.marker([latlng.lat, latlng.lng]).addTo(map);
  marker.bindPopup("<b>Açıklama:</b><br>" + aciklama).openPopup();
});
