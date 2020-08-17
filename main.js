document.getElementById('srcBtn').addEventListener('click', function () {
    const src = 'https://api.lyrics.ovh/suggest/';
    const inputLyrics = document.getElementById('inputLyrics').value;
    console.log(src + inputLyrics);
    fetch(src + inputLyrics)
        .then(response => response.json())
        .then(data => getLyrics(data))
})
// console.log(src + inputLyrics);
function getLyrics(lyricInfo) {
    let finalArray = lyricInfo.data.slice(0, 10)
    const loopFor = finalArray.map(function (y) {
        const getTitle = y.title
        const getArtist = y.artist.name
        // console.log(getTitle, getArtist);
        const div = document.getElementById('wrapper');
        const lyrics = 'https://api.lyrics.ovh/v1/'
        const lyricsLink = lyrics + getArtist + '/' + getTitle;
        div.innerHTML += `<li>
        <div class="left">
        <p><strong>${getTitle}</strong></p>
        <p>Album by ${getArtist}</p>
        </div>
        <div class="right"><a href="${lyricsLink}"><span>get lyrics</span></a></div>
        </li>`

        fetch(lyricsLink)
            .then(response => response.json)
            .then(data => console.log(data))

    })
}