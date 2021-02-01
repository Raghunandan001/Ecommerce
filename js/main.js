fetch("https://raghunandan001.github.io/Ecommerce/data/data.json").then
(response=>{
    return response.json()
}).then(data=>{
    console.log(data)
    displayData(data)
})

function displayData(info){
    // console.log("Hi")
    var bodyElement =document.querySelector("body")
    var row=document.createElement("section")
    row.classList.add("row","justify-content-center");
    bodyElement.append(row)
    info.mobiles.map(value=>{
        var column=document.createElement("article")
        column.classList.add("col-sm-10","col-md-6","col-lg-3");
        row.append(column)
        //card
        var card=document.createElement("div");
        card.classList.add("card","mt-3")
        //card-body
        var cardBody=document.createElement("div");
        cardBody.classList.add("card-body")
        //Image
        var imageElement=document.createElement("img");
        imageElement.src=value.image;
        imageElement.classList.add("img-responsive")
        imageElement.alt=value.name;
        //Name
        var name=document.createElement("h2");
        name.textContent=value.name;
       name.classList.add("text-center", "text-primary")
       //Price
       var price=document.createElement("p");
       price.innerHTML="₹"+value.price+"/-";

       //oPrice
       var oPrice=document.createElement("p");
       oPrice.innerHTML= "<s>₹"+value.originalPrice+"/-</s>";
       price.classList.add("text-center","text-success")
       //price.textContent=value.price;
       
       //button
       var buttonParent=document.createElement("div")
       buttonParent.classList.add("d-grid","gap-2")
       
       var button =document.createElement("Button");
       button.classList.add("btn","btn-block","btn-outline-primary");
       button.textContent="Add to Cart"
       buttonParent.append(button)
       //buy

       var button1=document.createElement("div")
       button1.classList.add("d-grid","gap-2")
       
       var buy =document.createElement("Button");
       buy.classList.add("btn","btn-block","btn-warning");
       buy.textContent="Buy Now"
       buttonParent.append(buy)


       cardBody.append(imageElement);
        cardBody.append(name);
        cardBody.append(oPrice);
        cardBody.append(price);
        cardBody.append(buttonParent);
        card.append(cardBody);
        column.append(card);
    })

}
   
  
