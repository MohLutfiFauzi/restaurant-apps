import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div  class="card">
    <div class="card-image">
        <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
    </div>
    <div class="content-restaurant">
        <h3><a tabindex="0" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p class="rating">rating : ⭐️${restaurant.rating}/5.0</p>
        <p class="kota">kota : ${restaurant.city}</p>
    </div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail-image">
    <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
</div>
<div class="information">
    <h3>Resturant Name</h3>
    <p>${restaurant.name}</p>
    <h3>Rating</h3>
    <p>⭐️${restaurant.rating} / 5.0</p>
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
            ${restaurant.menus.foods
    .map((food) => `
                <p>${food.name}</p>`)
    .join('')}
        </div>
        <div class="card-menu">
            <h4>Minuman</h4>
            ${restaurant.menus.drinks
    .map((drink) => `
            <p>${drink.name}</p>`)
    .join('')}
            
        </div>
    </div>
</div>
<div class="reviews">
    <h3>REVIEWS</h3>
    <div class="comment-review">
    ${restaurant.customerReviews
    .map((review) => `
    <p class="name">${review.name}</p>
    <p class="date">${review.date}</p>
    <p class="comment">${review.review}</p>`)
    .join('')}
    </div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
