// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Dancing Queen", artist: "ABBA", genre: "Pop" },
    { title: "Under Pressure", artist: "Queen & David Bowie", genre: "Rock" },
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
    { title: "Boogie Wonderland", artist: "Earth, Wind & Fire", genre: "R&B" },
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" }
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Predefined playlists for each guardian
    const playlists = {
        "Star-Lord": ["Moonage Daydream", "Come and Get Your Love", "The Chain"],
        "Gamora": ["Hooked on a Feeling", "I Want You Back"],
        "Drax": ["Ain't No Mountain High Enough"],
        "Rocket": ["Moonage Daydream", "Come and Get Your Love", "The Chain"],
        "Groot": ["Hooked on a Feeling", "I Want You Back"]
    };
     // Iterate through each guardian in the guardians object
    for (const guardian in guardians) {
        // Retrieve the preferred genre for the current guardian
        const playlist = playlists[guardian];
    // Use the map() function to create playlists for each Guardian
    // Your code here
        // Filter songs array to include only songs matching the preferred genre
        // Map filtered songs to a formatted string containing title and artist
        const filteredSongs = songs.filter(song => playlist.includes(song.title));
        
        
        // Create a new <div> element for the playlist
        const playlistDiv = document.createElement('div');
        // Add 'playlist' class to the playlist <div>
        playlistDiv.classList.add('playlist');

        // Create a new <h2> element for the playlist title
        const playlistTitle = document.createElement('h2');
        // Set the text content of the playlist title to the guardian's name followed by 's Playlist
        playlistTitle.textContent = `${guardian}'s Playlist`;

        // Create a new <p> element for the playlist songs
        const playlistSongs = document.createElement('p');
        // Set the text content of the playlist songs to the formatted playlist array joined by newline character
        playlistSongs.innerHTML = filteredSongs.map(song => `<span class="song-title">${song.title} by <span class="artist-name">${song.artist}</span></span>`).join('<br>');

        // Append the playlist title and playlist songs to the playlist <div>
        playlistDiv.appendChild(playlistTitle);
        playlistDiv.appendChild(playlistSongs);

        playlistDiv.style.margin = '10px'; // Adjusted margin
        playlistDiv.style.padding = '10px'; // Adjusted padding

        // Append the playlist <div> to the element with id 'playlists' in the HTML document
        document.getElementById('playlists').appendChild(playlistDiv);
    }
}


// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


