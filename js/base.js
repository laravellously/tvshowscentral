// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function loadShows() {
    // on window load, send ajax request to api.tvmaze.com/shows
    // if (window.XMLHttpRequest) {
    //     // code for modern browsers
    //     var xmlhttp = new XMLHttpRequest();
    //   } else {
    //     // code for old IE browsers
    //     var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    // }
    // xmlhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         // store in localStorage
    //         localStorage.setItem('allShows', this.responseText);
    //         // save the current time to localStorage
    //         localStorage.setItem('currentTime',Date.now());
    //         // create our DOM
    //         var output = JSON.parse(localStorage.getItem('allShows'));
    //         // Generate DOM
    //         generateDOM(output);
            
    //     }
    // };
    var lastSavedTime = JSON.parse(localStorage.getItem('currentTime'));
    if(Date.now > lastSavedTime) {
        // xmlhttp.open("GET", "http://api.tvmaze.com/shows", true);
        // xmlhttp.send();
        console.log("Date.now is greater");
        var aDayPlus = Number(lastSavedTime) + (1000 * 60) * 60 * 24; 
        console.log(aDayPlus);
        console.log(lastSavedTime);
    } else { console.log("Not greater"); }
}

function generateDOM(json) {
    const perPage = 30;
    for (let i = 0; i < perPage; i++) {
        document.getElementById('rowItem').innerHTML +=
        '<div class="w3-third w3-container w3-margin-bottom"> \
            <img src="'+json[i].image.medium+'" alt="'+json[i].name+'" style="width:100%" class="w3-hover-opacity"> \
            <div class="w3-container w3-white"> \
                <p><b><a href="#">'+json[i].name+'</a></b></p> \
                '+json[i].summary+' \
            </div> \
        </div>';        
    }
}

function loadSingleShow(show_id) {
    // on window load, send ajax request to api.tvmaze.com/shows/{show_id}
    // store in localStorage
    // create our DOM
}

function loadEpisodes() {
    // on window load, send ajax request to api.tvmaze.com/people
    // store in localStorage
    // save the current time to localStorage
    // create our DOM
}

function searchShows(searchValue) {
    // send api request to http://api.tvmaze.com/search/shows?q={searchValue}
    // store in localStorage
    // save the current time to localstorage
    // create our DOM
}

function loadPeople() {
    // on window load, send ajax request to api.tvmaze.com/people
    // store in localStorage
    // save the current time to localStorage
    // create our DOM
}

function loadPerson(id) {
    // on window load, send ajax request to api.tvmaze.com/people/{id}
    // store in localStorage
    // save the current time to localStorage
    // create our DOM
}

function searchPeople(searchValue) {
    // send api request to http://api.tvmaze.com/search/people?q={searchValue}
    // store in localStorage
    // save the current time to localstorage
    // create our DOM
}