window.addEventListener('DOMContentLoaded', (event) => {
    var div = document.createElement('div');
    div.setAttribute('class', 'header-container');

    document.body.appendChild(div);

    var h1 = document.createElement('h1');
    var tH1 = document.createTextNode("This is an h1.");
    h1.appendChild(tH1);
    div.appendChild(h1);
    h1.setAttribute('class', 'h1');

    var h2 = document.createElement('h2');
    var tH2 = document.createTextNode('This is an h2.')
    h2.appendChild(tH2);
    div.appendChild(h2);
    h2.setAttribute('class', 'h2');

    var h3 = document.createElement('h3');
    var tH3 = document.createTextNode('This is an h3.')
    h3.appendChild(tH3);
    div.appendChild(h3);
    h3.setAttribute('class', 'h3');

    var h4 = document.createElement('h4');
    var tH4 = document.createTextNode('This is an h4.')
    h4.appendChild(tH4);
    div.appendChild(h4);
    h4.setAttribute('class', 'h4');

    var h5 = document.createElement('h5');
    var tH5 = document.createTextNode('This is an h5.')
    h5.appendChild(tH5);
    div.appendChild(h5);
    h5.setAttribute('class', 'h5');

    var h6 = document.createElement('h6');
    var tH6 = document.createTextNode('This is an h6.')
    h6.appendChild(tH6);
    div.appendChild(h6);
    h6.setAttribute('class', 'h6');

    let colorArr = ['#32CD32', '#FF1493', '#FFFF00', '#00FFFF', '#ADD8E6', '#FFA500', '#4B0082', '#000080']
    let arr = [h1, h2, h3, h4, h5, h6]

    arr.forEach(function (element) {
        element.addEventListener('dblclick', function () {
            let randomIndex = Math.floor(Math.random() * 9);
            element.style.color = colorArr[randomIndex] //randomIndex gives index number 0-8
        });
    });

  
    // let button = document.body.getElementsByClassName('listButton')[0];
    // button.addEventListener('click', addListItem);

    let index = 1;

    function changeColor() {
        let colorIndex = Math.floor(Math.random() * Math.floor(9));
        document.getElementsByClassName(this)[0].style.color = colorArr[colorIndex];
    };

    function addListItem() {
        var listItem = document.createElement('li');
        listItemText = document.createTextNode('this is list item ' + index);
        
        listItem.className = 'li' + index;
        listItem.addEventListener('click', changeColor.bind(listItem.className));
        listItem.addEventListener('dblclick', removeListItem.bind(listItem.className));
        listItem.appendChild(listItemText);
        document.body.appendChild(listItem);
        index++;
    };

    let button = document.body.getElementsByClassName('listButton')[0];
    button.addEventListener('click', addListItem);

    function removeListItem() {
        document.getElementsByClassName(this)[0].remove()
    }

    // document.getElementsByClassName('newItem')[0].addEventListener("click", addListItem);

   
    // document.getElementsByClassName('newItem')[0].addEventListener("dblclick", removeListItem);
    

});
