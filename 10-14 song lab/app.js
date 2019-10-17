let friends = ['Cat', 'Alex', 'Jennifer', 'Cindy', 'Tyler'];
var lines = 99

window.addEventListener('DOMContentLoaded', (event) => {


    let button = document.getElementById('singBtn');

    button.addEventListener("click", createFriends);
    
    function createFriends(friend) { //passes friend through

        friends.forEach(function (friend) {
            let element = document.createElement('div');
            element.className = friend;
            document.body.appendChild(element);
            let h3 = document.createElement('h3');
            h3.innerHTML = friend
            element.appendChild(h3);
            sing(friend);
        })
    }

    function sing(friend) {
        for (i = lines; i > 0; i--) {
            var lyrics = i + ' lines of code in the file.' + friend + ' strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file.'
            if (lines === 1) {
                var lyrics = i + " line of code in the file."
            }
            let lyricParagraph = document.createElement("p")
            let lyricText = document.createTextNode(`${lyrics}`)
            lyricParagraph.appendChild(lyricText)
            document.getElementsByClassName(friend)[0].appendChild(lyricParagraph) //use 0 instead of i to only use first index of array
        }
    }





});

