import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <section tabindex="0" id="main-content">
          <h2>Detail Restaurant</h2>
          <div id="list-restaurant" class="container"></div>
          <div id="likeButtonContainer"></div>
        </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#list-restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        address: restaurant.address,
        city: restaurant.city,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
