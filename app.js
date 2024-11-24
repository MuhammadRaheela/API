const cards = document.getElementById("cards")


function Api() {

    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    try {
        fetch("https://fakestoreapi.com/products", requestOptions)
            .then((response) => response.json())
            // .then((result) => console.log(result))
            .then((result) => {
                console.log(result.length);
                for (const item of result)
                    // console.log(item);
                cards.innerHTML += `
                <div class="col col-lg-4 pt-5" id="hero" >
                    <div class="card" style="width: 18rem; margin-left: 20px;">
                        <img src="${item.image}" class="card-img-top" alt="Product image">
                             <h5 class="card-title" style="font-size:15px; font-weight:1000; justify-content:center; text-align:center;">${item.title}</h5>
                             <p class="card-text" style="margin-left: 10px;">${item.description.substring(0, 100)}...</p>
                             <p class="card-text" style="margin-left: 20px;"><strong>Price:</strong> $${item.price}</p>
                            <a href="#" class="btn btn-primary" style="  width:90px; margin-left: 10px;">Buy Now</a>
                    </div>
                </div>
            `;

            })

    }
    catch (e) {
        console.log(e);

    }
}


window.onload = function () {
    Api()
}


















