var products = [];
function saveProduct() {
  var a = {
    productId: document.getElementById('productId').value,
    productName: document.getElementById('productName').value,
    productCode: document.getElementById('productCode').value,
    productPrice: document.getElementById('productPrice').value,
    productImages: document.getElementById('productImages').files[0]
  };
console.log(a);
products.push(a);
}
  
function showProducts() {
  var html = '';
  for (let i = 0; i < products.length; i++) {
    html += '<div class="col-3">';
    html += '<div class="card" style="width: 18rem;margin-bottom: 20px;">';
    var img = new Image();
    if (products[i].productImages) {
      img.src = window.URL.createObjectURL(products[i].productImages);
      img.classList.add("card-img-top");
      img.style.height = "300px";
      html += '<div>';
      html += img.outerHTML;
      html += '</div>';
    }
    html += '<div class="card-body">';
    html += '<div class="card-title">' + products[i].productName + '</h5>';
    html += '<p class="card-text">' + products[i].productPrice + ' vnđ</p>';
    html += '<p class="card-text">' + products[i].productCode + '</p>';
    html += '<a href="#" class="btn btn-danger" onclick="order()">Đặt mua</a>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
  }
  document.getElementById('productList').innerHTML = html;
}
function resetForm() {
  document.getElementById('productId').value = '';
  document.getElementById('productName').value = '';
  document.getElementById('productCode').value = '';
  document.getElementById('productPrice').value = '';
  document.getElementById('productImages').file[0] = '';
  // products = [];

  // var productList = document.getElementById('productList');
  // productList.innerHTML = '';

  // alert('Đã xóa các sản phẩm');
}