
const allBtn = document.getElementsByClassName('add_btn');

let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count++;
        getIdShowValue('cardAdded', count);

        const palaceName = e.target.parentNode.parentNode.childNodes[1].innerText;
        const placeCost = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        givePlaceIdCreatElementAndShow('selectedPlacePriceShow', palaceName, placeCost);

        const totalCost = textIdToInt('totalCost');

        const totalSum = totalCost + parseInt(placeCost);

        getIdShowValue('totalCost', totalSum);
        getIdShowValue('grandTotal', totalSum);

        const grandTotal = document.getElementById('grandTotal').innerText;

        const allVehicle = document.getElementsByClassName('vehicle');
        for (const vehicle of allVehicle) {
            vehicle.addEventListener('click', function (e) {
                ee.target.parentNode.childNodes[1].innerText;
                console.log();
                // getIdShowValue(id, value)
            })
        }


        // console.log(typeof totalCostInt, totalCostInt);
    })
}












