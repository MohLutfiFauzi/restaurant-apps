import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantItemTemplate = (restaurant) => `
<div  class="card">
    <div class="card-image">
        <img src="${restaurant.pictureId}" alt="${restaurant.name}">
    </div>
    <div class="content-restaurant">
        <h3 tabindex="0">${restaurant.name}</h3>
        <p class="rating">rating : ${restaurant.rating}/5.0</p>
        <p class="kota">kota : ${restaurant.city}</p>
    </div>
</div>
  `;

const createRestaurantDetailTemplate = (restaurant) => `
  <img 
      src="${API_ENDPOINT.IMAGE_RESTAURANT + restaurant.pictureId}" 
      alt="${restaurant.name}"
      class="detail-image">

  <div class="information">
      <h3>Resturant Name</h3>
      <p>${restaurant.name}</p>
      <h3>Rating</h3>
      <p>${restaurant.rating} / 5.0</p>
      <h3>City</h3>
      <p>${restaurant.city}</p>
      <h3>Address</h3>
      <p>${restaurant.address}</p>
      <h3>Deskripsi</h3>
      <p class="desc">${restaurant.description}</p>
  </div>
  <div class="menu">
      <h3>MENU</h3>
      <div class="container-menu">
          <div class="card-menu">
              <h4>Makanan</h4>
              <p>${restaurant.menus.foods.name}</p>
          </div>
          <div class="card-menu">
              <h4>Minuman</h4>
              <p>${restaurant.menus.drinks.name}</p>
          </div>
      </div>
  </div>
  <div class="reviews">
      <h3>REVIEWS</h3>
      <div class="comment-review">
          <p class="name">${restaurant.customerReviews.name}</p>
          <p class="date">${restaurant.customerReviews.date}</p>
          <p class="comment">${restaurant.customerReviews.review}</p>
      </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
