// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function truncateString(string, maxLength = 25) {

    return string.split(" ").splice(0,maxLength).join(" ");
}

function loadShows() {
    // on window load, send ajax request to api.tvmaze.com/shows
    if (localStorage.getItem('allShows') != null) {
        // check for age
        var lastSavedTime = new Date(localStorage.getItem('currentTime'));
        var nextUpdateTime = new Date(new Date(lastSavedTime).getTime() + 60 * 60 * 24 * 1000); // last saved plus 24 hours
        var currentDate = new Date();
        if(currentDate > nextUpdateTime) {
            // Do Upgrade
            if (window.XMLHttpRequest) {
                // code for modern browsers
                var xmlhttp = new XMLHttpRequest();
            } else {
                // code for old IE browsers
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // store in localStorage
                    localStorage.setItem('allShows', this.responseText);
                    // save the current time to localStorage
                    localStorage.setItem('currentTime', new Date());
                    // Generate DOM
                    generateDOM(JSON.parse(this.responseText));
                    
                }
            };
            xmlhttp.open("GET", "http://api.tvmaze.com/shows", true);
            xmlhttp.send();
        } else {
            if (window.XMLHttpRequest) {
                // code for modern browsers
                var xmlhttp = new XMLHttpRequest();
            } else {
                // code for old IE browsers
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // store in localStorage
                    localStorage.setItem('allShows', this.responseText);
                    // save the current time to localStorage
                    localStorage.setItem('currentTime', new Date());
                    // Generate DOM
                    generateDOM(JSON.parse(localStorage.getItem('allShows')));
                    
                }
            };
            xmlhttp.open("GET", "http://api.tvmaze.com/shows", true);
            xmlhttp.send();
        }
    }
}

function generateDOM(json) {
    const perPage = 30;
    for (let i = 0; i < perPage; i+=3) {
        document.getElementById('rowItem').innerHTML +=
        '<div class="w3-row-padding"> \
            <div class="w3-third w3-container w3-margin-bottom"> \
                <img src="'+json[i].image.medium+'" alt="'+json[i].name+'" style="width:100%" class="w3-hover-opacity" onclick="loadSingleShow('+json[i].id+')"> \
                <div class="w3-container w3-white"> \
                    <p><b><a href="#">'+json[i].name+'</a></b></p> \
                    '+truncateString(json[i].summary)+' [ ... ] \
                </div> \
            </div> \
            <div class="w3-third w3-container w3-margin-bottom"> \
                <img src="'+json[i+1].image.medium+'" alt="'+json[i+1].name+'" style="width:100%" class="w3-hover-opacity" onclick="loadSingleShow('+json[i+1].id+')"> \
                <div class="w3-container w3-white"> \
                    <p><b><a href="#">'+json[i+1].name+'</a></b></p> \
                    '+truncateString(json[i+1].summary)+' [ ... ] \
                </div> \
            </div> \
            <div class="w3-third w3-container w3-margin-bottom"> \
                <img src="'+json[i+2].image.medium+'" alt="'+json[i+2].name+'" style="width:100%" class="w3-hover-opacity" onclick="loadSingleShow('+json[i+2].id+')"> \
                <div class="w3-container w3-white"> \
                    <p><b><a href="#">'+json[i+2].name+'</a></b></p> \
                    '+truncateString(json[i+2].summary)+' [ ... ] \
                </div> \
            </div> \
        </div>';      
    }
}

function loadSingleShow(show_id) {
    // on window load, send ajax request to api.tvmaze.com/shows/{show_id}
    // store in localStorage
    // create our DOM
    alert(show_id);
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