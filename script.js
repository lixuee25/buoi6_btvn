var products = [];

function saveProduct() {
  // Lấy giá trị từ các trường input
  var productId = document.getElementById('productId').value;
  var productName = document.getElementById('productName').value;
  var productCode = document.getElementById('productCode').value;
  var productPrice = document.getElementById('productPrice').value;
  var productImages = document.getElementById('productImages').files;

  // Tạo một đối tượng sản phẩm mới
  var newProduct = {
    id: productId,
    name: productName,
    code: productCode,
    price: productPrice,
    images: productImages
  };

  // Thêm sản phẩm vào mảng products
  products.push(newProduct);

  // Xóa giá trị của các trường input
  document.getElementById('productId').value = '';
  document.getElementById('productName').value = '';
  document.getElementById('productCode').value = '';
  document.getElementById('productPrice').value = '';
  document.getElementById('productImages').value = '';

  alert('Sản phẩm đã được lưu');
}

function showProducts() {
  var productList = document.getElementById('productList');
  
  // Xóa các sản phẩm hiện có trong danh sách
  productList.innerHTML = '';

  // Lặp qua danh sách các sản phẩm
  for (var i = 0; i < products.length; i++) {
    var product = products[i];

    // Tạo một phần tử danh sách và gán nội dung
    var listItem = document.createElement('li');
    listItem.textContent = 'ID: ' + product.id + ', Tên: ' + product.name + ', Mã: ' + product.code + ', Giá: ' + product.price;

    // Tạo một container cho hình ảnh
    var imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    // Lặp qua danh sách các hình ảnh
    for (var j = 0; j < product.images.length; j++) {
      var image = product.images[j];
      
      // Tạo một phần tử hình ảnh và gán nguồn dữ liệu
      var img = document.createElement('img');
      img.src = URL.createObjectURL(image);
      img.classList.add('product-image');

      // Thêm hình ảnh vào container
      imageContainer.appendChild(img);
    }

    // Thêm container hình ảnh vào phần tử danh sách
    listItem.appendChild(imageContainer);

    // Thêm phần tử danh sách vào danh sách sản phẩm
    productList.appendChild(listItem);
  }
}

function resetForm() {
  // Xóa giá trị của các trường input
  document.getElementById('productId').value = '';
  document.getElementById('productName').value = '';
  document.getElementById('productCode').value = '';
  document.getElementById('productPrice').value = '';
  document.getElementById('productImages').value = '';

  // Xóa danh sách sản phẩm
  products = [];

  // Xóa danh sách sản phẩm hiển thị trên giao diện
  var productList = document.getElementById('productList');
  productList.innerHTML = '';

  alert('Đã xóa các sản phẩm');
}