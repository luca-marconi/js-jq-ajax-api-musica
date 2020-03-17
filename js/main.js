$(document).ready(function() {
    var source = $("#card-template").html();
    var cardTemplate = Handlebars.compile(source);

    $.ajax({
        url:'https://flynn.boolean.careers/exercises/api/array/music',
        method:'GET',
        success:function (data) {
            console.log(data);                           //stampo il contenuto della api
            var albums = data.response;                 // estraggo il contenuto della api e me la salvo in albums
            for (var i = 0; i < albums.length; i++) {   // ciclo l array albums
                var album = albums[i];                  // e assegno ad album il contenuto di album iesimo
                console.log(album);                     // stampo gli oggetti (album)
                var albumTemplate = {                   // creo il mio oggetto albumTemplate
                    immagineAlbum: album.poster,        // e assegno alla chiave immagineAlbum(utilizzata in html x handlebars) il corrispondete valore della api(poster)
                    nomeAlbum: album.title,             // e assegno alla chiave nomeAlbum(utilizzata in html x handlebars) il corrispondete valore della api(title)
                    autore: album.author,               // e assegno alla chiave autore(utilizzata in html x handlebars) il corrispondete valore della api(author)
                    anno: album.year,                   // e assegno alla chiave anno(utilizzata in html x handlebars) il corrispondete valore della api(year)
                }
                var cardAlbum = cardTemplate(albumTemplate);    // popolo cardTemplate con le chiavi di albumTemplate
                $('.container-card').append(cardAlbum);         // appendo a container-card la variabile compilata cardAlbum
            }
        },
        error: function () {
            alert('Errore');

        }
    })
});
