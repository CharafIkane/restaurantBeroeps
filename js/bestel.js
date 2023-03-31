
function onLoad() { // voer functie af wanneer pagina is geladen
    const products = document.querySelector("products") // krijg element waar alle producten in moeten
    let currentdata = localStorage.getItem('cart') // krijg huidige cart data uit localstorage
    let addedProducts = [] // maak lijst aan voor toegevoegde producten

    if (currentdata != null && currentdata != 'null') { // als cart niet leeg is

        currentdata = JSON.parse(currentdata) // verander string naar json

        for (i=0; i < currentdata.length; i++) { // loop de cart items

            const title = currentdata[i]['title']; // krijg title data uit huidige loopende item
            const price = currentdata[i]['price']; // krijg price data uit huidige loopende item

            if (addedProducts.includes(title)) { // als al toegevoegd is aan cart
                const countEl = document.getElementById(title).getElementsByClassName("count")[0] // pak het count element via title, die als id staat
                const priceEl = document.getElementById(title).getElementsByClassName("price")[0] // pak het price element via title, die als id staat

                const newCount = parseInt(countEl.innerHTML)+1 // voeg 1 toe aan count
                const newPrice = `$${(parseInt(priceEl.innerHTML.replace("$", "")) + parseInt(price.replace("$", "")))}` // voeg price toe aan huidige price
                
                countEl.innerHTML = newCount // zet count in html
                priceEl.innerHTML = newPrice // zet price in html

            } else { // als nog niet is toegevoegd aan cart, voeg nieuw element toe

                addedProducts.push(title) // voeg title toe aan al toegevoegde producten lijst

                const product = document.createElement("product") // paak product element
                product.id = title // zet id naar de title (voor line 17 en 18)

                const titleEl = document.createElement("div") // maak titel element
                titleEl.className = "title" // zet classname naar title voor css
                titleEl.innerHTML = title // zet de innerhtml naar de titel

                const countEl = document.createElement("div") // maak coutn element
                countEl.className = "count" // zet classname naar count voor css
                countEl.innerHTML = "1" // zet de innerhtml naar 1, want eerste keer toegevoegd is altijd 1 

                const priceEl = document.createElement("div") // maak prijs element
                priceEl.className = "price" // zet classname naar price voor css
                priceEl.innerHTML = price // zet de innerhtml naar de price
        
                products.append(product) // voeg product toe aan products element
                product.append(titleEl, countEl, priceEl) // voeg elementen toe aan product
            }
        }
    }
}

function bestel() {
    console.log(localStorage.getItem('cart'))
    cart = localStorage.getItem('cart')
    if (cart != null && cart != 'null') {
        localStorage.setItem('cart', 'null');
        location.reload();
        window.alert("Bestelling geslaagd.")
    } else {
        window.alert("Cart is leeg.")
    }
}