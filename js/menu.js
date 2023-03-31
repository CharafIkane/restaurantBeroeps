function delay(time) {return new Promise(resolve => setTimeout(resolve, time));}

async function addProduct(element) {
    const title = element.getElementsByClassName("titel")[0].innerHTML
    const price = element.getElementsByClassName("price")[0].innerHTML
    const data = {title, price}
    let currentdata = localStorage.getItem('cart')

    if (currentdata == null || currentdata == 'null') {
        currentdata = []
    } else {
        currentdata = JSON.parse(currentdata)
    }
    currentdata.push(data)

    stringData = JSON.stringify(currentdata)
    localStorage.setItem('cart', stringData);
    element.style.transform = "scale(1.1)"
    await delay(100)
    element.style.transform = ""
}

