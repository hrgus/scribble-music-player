let base_URL = 'https://api.deezer.com'
const brewList = document.getElementById('search-list');
const searchForm = document.querySelector('.searchForm');

// Info brought over from html/css

const searchBar = document.querySelector('.submitButton').value;
// const searchBarValue = searchBar.value



// function getTracksByTitle(title){
//    fetch(base_UR + " " + title, {
//       // headers: 'Access-Control-Allow-Origin'
//    })
//    .then(resp => resp.json())
//    // .then(tracks => { console.log(tracks)});
// }

// // Event Listeners

function search(e) {
   e.preventDefault();

   let query = document.querySelector('#search-Input')

   searchForm.reset();

   fetch(base_URL + `/search?q=track:${query}`)
   .then(resp => resp.json())
   .then(result => {
      console.log(result);
   });
}

searchForm.addEventListener('click', search);
