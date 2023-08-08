const sandwichMenu = [
    {"name":"Hamburger","image":"https://static.vecteezy.com/system/resources/previews/021/665/613/original/beef-burger-isolated-png.png","price":"5$"},
    {"name":"Fajita","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsfabwzDCZqcQQ_Z66qHjvFd4lk1MiiD10Q&usqp=CAU", "price":"5$" },
    {"name":"shawerma","image":"https://pngimg.com/uploads/shawarma/shawarma_PNG2.png", "price":"5$" },
    {"name":"crispy","image":"https://toppng.com/uploads/thumbnail/mcdonalds-crispy-chicken-sandwich-11549663392vpo7cxfp3b.png", "price":"5$" },
    {"name":"Escalope","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSsnVBCEcVV2xYLWOhlgGOfweiVB0riCOK5w&usqp=CAU", "price":"5$" },
]
const rowSandwich = document.getElementById("row-sandwich");
const containerSandwich = document.getElementById("container-sandwich");
sandwichMenu.forEach(element => {
    const colSandwich = document.createElement("div");
    colSandwich.classList.add("col-12","col-sm-6","col-md-3");
    const cardSandwich = document.createElement("div");
    cardSandwich.classList.add("card","bg-light");
   const  imageSandwich = document.createElement("img"); 
    imageSandwich.src = element.image; 
    imageSandwich.alt = element.name;
   const bodySandwich = document.createElement("div");
   bodySandwich.classList.add("card-body");
   const titleSandwich = document.createElement("h5");
   titleSandwich.classList.add("card-title");
   titleSandwich.innerHTML = element.name;
   const textSandwich = document.createElement("strong");
   textSandwich.classList.add("card-text");
   textSandwich.innerHTML = element.price;
   bodySandwich.append(titleSandwich,textSandwich);
   cardSandwich.append(imageSandwich,bodySandwich);
   colSandwich.appendChild(cardSandwich);
   rowSandwich.appendChild(colSandwich);
});









const platesMenu = [
    {"name":"Farouj","image":"https://hsaa.hsobjects.com/h/menuitems/images/021/220/125/839b630f53b2dbf2643c802493cb99aa-size1200.png", "price":"5$" },
    {"name":"Pasta","image":"https://www.pngplay.com/wp-content/uploads/4/Pasta-PNG-Photos.png", "price":"5$" },
    {"name":"Pizza","image":"https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-delicious-pizza-creative-photography-png-image_6687083.png", "price":"5$" },
    {"name":"Fried Chicken","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdICtv1RROy9DE-c1hz8Zckc0gdZBgN5DRSA&usqp=CAU", "price":"5$" },
    {"name":"Biryani","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRC3PGPezH0kUFMSscbnJa6MAFcwQ2sg_WA&usqp=CAU", "price":"5$" },

]
const rowPlates = document.getElementById("row-plates");
platesMenu.forEach(element => {
 const colPlates = document.createElement("div");
 colPlates.classList.add("col-12", "col-sm-6", "col-md-3");
 const cardPlates = document.createElement("div");
 cardPlates.classList.add("card", "bg-light");
 const imagePlates = document.createElement("img");
  imagePlates.src = element.image;
  imagePlates.alt = element.image;
  const bodyPlates = document.createElement("div");
  bodyPlates.classList.add("card-body");
  const titlePlates = document.createElement("h5");
  titlePlates.classList.add("card-title");
  titlePlates.innerHTML = element.name;
  const textPlates = document.createElement("strong");
  textPlates.classList.add("card-text");
  textPlates.innerHTML = element.price;
  bodyPlates.append(titlePlates,textPlates);
  cardPlates.append(imagePlates,bodyPlates);
  colPlates.appendChild(cardPlates);
  rowPlates.appendChild(colPlates);

});

const drinkMenu = [
    {"name":"Orange","image":"https://www.freeiconspng.com/uploads/orange-juice-png-30.jpg", "price":"5$" },
    {"name":"Koktel","image":"https://www.dynamicgreens.com/app/uploads/2015/09/low-fat-smoothies.png", "price":"5$" },
    {"name":"Avocado","image":"https://avostogo.co.nz/wp-content/uploads/2021/09/healthy-juice.png", "price":"5$" },
    {"name":"Tuity-Fruity","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6c9qBGz4ICsqj-l_lDFtqaZItPd5Tpg9UA&usqp=CAU", "price":"5$" },
    {"name":"Mango","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXUsPKDey1Zqmdh4yVbx1ZWoCF7IOPt0o1w&usqp=CAU", "price":"5$" },
]
const rowDrink = document.getElementById("row-drink");
drinkMenu.forEach(element => {
 const colDrink = document.createElement("div");
 colDrink.classList.add("col-12", "col-sm-6", "col-md-3");
 const cardDrink = document.createElement("div");
 cardDrink.classList.add("card", "bg-light");
 const imageDrink = document.createElement("img");
  imageDrink.src = element.image;
  imageDrink.alt = element.image;
  const bodyDrink = document.createElement("div");
  bodyDrink.classList.add("card-body");
  const titleDrink = document.createElement("h5");
  titleDrink.classList.add("card-title");
  titleDrink.innerHTML = element.name;
  const textDrink = document.createElement("strong");
  textDrink.classList.add("card-text");
  textDrink.innerHTML = element.price;
  bodyDrink.append(titleDrink,textDrink);
  cardDrink.append(imageDrink,bodyDrink);
  colDrink.appendChild(cardDrink);
  rowDrink.appendChild(colDrink);

});
const dessertsMenu = [
    {"name":"knefe","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HcB3C1fwRCqK4tRmHUxJOIwM_FaJbQyV5g&usqp=CAU", "price":"5$" },
    {"name":"Chocolate Cake","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTsigxY2li3DbSyRK4VPreAOG66tdKj68KhA&usqp=CAU", "price":"5$" },
    {"name":"Fruits","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG16fmpQsUolJI3eOwjLPQVu0Nzeg1soMmUg&usqp=CAU", "price":"5$" },
    {"name":"Namoura","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HN5a1jKTONAh1nwsPRiVbIPk8tM_hgXphQ&usqp=CAU", "price":"5$" },
    {"name":"Donace","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQIzj5287WNOM7SuXBVZuu560sCCd-pZNUA&usqp=CAU", "price":"5$" },
]
const rowDesserts = document.getElementById("row-desserts");
dessertsMenu.forEach(element => {
 const colDesserts = document.createElement("div");
 colDesserts.classList.add("col-12", "col-sm-6", "col-md-3");
 const cardDesserts = document.createElement("div");
 cardDesserts.classList.add("card", "bg-light");
 const imageDesserts = document.createElement("img");
  imageDesserts.src = element.image;
  imageDesserts.alt = element.image;
  const bodyDesserts = document.createElement("div");
  bodyDesserts.classList.add("card-body");
  const titleDesserts = document.createElement("h5");
  titleDesserts.classList.add("card-title");
  titleDesserts.innerHTML = element.name;
  const textDesserts = document.createElement("strong");
  textDesserts.classList.add("card-text");
  textDesserts.innerHTML = element.price;
  bodyDesserts.append(titleDesserts,textDesserts);
  cardDesserts.append(imageDesserts,bodyDesserts);
  colDesserts.appendChild(cardDesserts);
  rowDesserts.appendChild(colDesserts);
// frergfer
});



// /Menu = [
//     {"name" : "Chicken sandwich", "img" : "https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png" , "price" : "3.5$"},
//        {"name" : "Chicken grill", "img" : "https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png" , "price" : "3.5$"},
//        {"name" : "Hot pizza", "img" : "https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png" , "price" : "3.5$"},
//        {"name" : "wara2 3enab", "img" : "https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png" , "price" : "3.5$"},
//        {"name" : "sawda", "img" : "https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png" , "price" : "3.5$"},
//    ]
   
//    main = document.getElementById("main");
//    myP = document.getElementById("hi");
   
//    Menu.forEach(element => {
//        names = document.createElement("h1");
//        names.innerHTML = element.name;
//        price= document.createElement("h2");
//        price.innerHTML = element.price;
//        img= document.createElement("img");
//         img.src = element.img;
//         img.alt = element.name;
//         myImg = document.createElement("div");
//         myImg.appendChild(img);
//         myImg.classList.add("roundedDiv")
//         myDiv = document.createElement("div"); 
//         myDiv.classList.add("sandwichDiv")
//        myDiv.append(names,price,myImg);
//        main.appendChild(myDiv)
       
//    });



