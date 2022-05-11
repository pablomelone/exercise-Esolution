var form = document.querySelector('#form');
var elements = form.elements;

infoToSend = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var data = {};
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.type !== 'submit') {
            data[element.name] = element.value;
        }
    }
    infoToSend.push(data);
    console.log(infoToSend);
}
);