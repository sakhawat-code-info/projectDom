

function getIdShowValue(id, value) {
    document.getElementById(id).innerHTML = value;
}
function givePlaceIdCreatElementAndShow(placeId, palaceName, placeCost) {
    const selectedPlacePriceShow = document.getElementById(placeId);

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = palaceName + " = ";
    const p2 = document.createElement('p');
    p2.innerText = placeCost + "/=";
    li.appendChild(p);
    li.appendChild(p2);
    li.classList.add('flex', 'gap-3')
    selectedPlacePriceShow.appendChild(li);
}

function textIdToInt(id) {
    const idValue = document.getElementById(id).innerText;
    const idValueInt = parseInt(idValue);
    return idValueInt;
}








