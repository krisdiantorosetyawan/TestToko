//Database Sementara via JS
var items = [
  ["001", "Keyboard Logitech", 60000, "Keyboard yang mantap untuk kantoran", "logitek.jpg"],
  ["002", "Keyboard MSI", 300000, "Keyboard gaming MSI mekanik", "msi.jpg"],
  ["003", "Mouse Genius", 50000, "Mouse Genius biar lebih pinter", "genius.jpeg"],
  ["004", "Mouse Jerry", 30000, "Mouse oren yang kuatnya #bukanmaen", "jerry.jpg"],
];

var tampungDagangan = document.getElementById("listBarang"); //mengambil ID listBarang untuk dijadikan variabel tampungDagangan

function printItems(data) {
  var tampung = ""; //membuat var tampung untuk looping barang
  for (var i = 0; i < data.length; i++) {
    tampung +=
      //Ini Bagian Card nya:
      `<div class ="col-4 mt-2"> 
        <div class="card" style="width: 18rem;">
            <img src="./img/${data[i][4]}" class="card-img-top" height="200px" width="200px" alt="...">
            <div class="card-body">
                <h5 class="card-title" id="itemName">${data[i][1]}</h5>
                <p class="card-text" id="itemDesc">${data[i][3]}</p>
                <p class="card-text">Rp ${data[i][2]}</p>
                <a href="#" class="btn btn-secondary" id="addCart" onclick="addQuantityToCart()">Tambahkan ke keranjang</a>
            </div>
        </div>
    </div>`;
  }
  return (tampungDagangan.innerHTML = tampung); //mengembalikan hasil looping var tampung ke tampungDagangan -> dlm bentuk HTML
}
printItems(items);

// function filterSearch(keyWords) {
//   var filteredItems = [];
//   for (x = 0; x < items.length; x++) {
//     var fromItems = items[x]; //var fromItems diisi oleh array items
//     var nameItems = fromItems[1]; //Dari var fromItems, diseleksi indeks-1 aja yang diambil, yaitu nama barangnya
//     var isMatch = nameItems.toLowerCase().includes(keyWords.toLowerCase()); //membandingkan var nameItems (dari array) vs keWords dari yg user input

//     //Logika Kondisional -> Jika nilai true maka array kosong pada var filteredItems akan dipush (dimasukkan ke daftar filtered)
//     if (isMatch === true) {
//       filteredItems.push(fromItems);
//     }
//   }
//   return filteredItems;
// }

function filterSearch(keyWords) {
  var filteredItems = items.filter(function (fromItems) {
    //array items difilter dan dimasukkan sementara
    var nameItems = fromItems[1]; // Dari var fromItems, hanya ambil indeks-1 yang merupakan nama barang
    var isMatch = nameItems.toLowerCase().includes(keyWords.toLowerCase()); // Membandingkan namaItems (dari array) dengan keyWords yang diinputkan oleh pengguna

    return isMatch;
  });

  return filteredItems;
}

//Meng-fungsionalkan fitur search button dan search bar
var searchBar = document.getElementById("formItem");
searchBar.addEventListener("submit", function (event) {
  event.preventDefault();
  inputSearch = document.getElementById("keyword").value;
  var alreadyFiltered = filterSearch(inputSearch);
  printItems(alreadyFiltered);
});

var totalCart = 0; //variabel jumlah awal di cart
function addQuantityToCart() {
  totalCart++;
  var textButtonCart = document.getElementById("cart");
  textButtonCart.innerHTML = '<i class="fas fa-shopping-cart"></i>' + totalCart;
}
