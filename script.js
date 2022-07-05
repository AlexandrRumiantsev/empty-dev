const HOTEL_CONAINER = document.querySelector(".catalog-page__products");

const getJSON = function (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    const status = xhr.status;
    if (status === 200) {
      callback(null, JSON.parse(xhr.response));
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

const renderProducts = (data) => {
  return (
  `<div class="product">
      <a class="product__link" href="#">
        <img
          class="product__image"
          src="img/products/${data.img}"
          width="360"
          height="380"
          alt="${data.title}"
        >
        <span class="button product__more-button ">
          Подробнее
        </span>
        <div class="product__details">
          <h3 class="product__title">
            ${data.title}
          </h3>
          <span class="product__price">
            ${data.price} ₽
          </span>
        </div>
       </a>
    </div>
  `);
};



getJSON(`${window.location.origin}/data.json`, function (err, data) {
  console.log(data)
  data.forEach(element => {
    HOTEL_CONAINER.innerHTML += renderProducts(element);
  });
});
