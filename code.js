const populate = async (value, currency, endCurrency) => {
    let myStr = "";
    const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_fq9RrJarnGcswzbjluFX92oyOHR8MqctXTSwyGnX&base_currency=${currency}`;

        let response = await fetch(url);
        let rJson = await response.json();
        document.querySelector(".output").style.display="block"
        if (rJson.data[endCurrency]) {
            const currencyData = rJson.data[endCurrency];
            const convertedValue = (currencyData.value * value).toFixed(2);
            const tableBody = document.querySelector("tbody");
            tableBody.innerHTML = `
                <tr>
                    <td>${currency}</td>
                    <td>${currencyData.code}</td>
                    <td>${convertedValue}</td>
                </tr>`;}
};

const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const currency = document.querySelector("select[name='Currency']").value;
    const quantityInput = document.querySelector("input[name='quantity']");
    const endCurrency = document.querySelector("select[name='EndCurrency']").value;

    
    if (quantityInput) {
        const value = parseInt(quantityInput.value);
        
        if (!isNaN(value)) {
            populate(value, currency, endCurrency); 
        } 
    } 
    
});
