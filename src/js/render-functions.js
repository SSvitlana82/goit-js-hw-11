export const galleryList = document.querySelector('.list-gallery');
export function showGalleryMarkup(dataArray) {
  const markup = dataArray
    .map(item => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = item;
      return ` 
    <li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link"> <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
        <ul class = "gallery">
          <li>
            <h3>likes</h3>
            <p>${likes}</p>
          </li>
          <li>
            <h3>views</h3>
            <p>${views}</p>
          </li>
          <li>
            <h3>comments</h3>
            <p>${comments}</p>
          </li>
          <li>
            <h3>downloads</h3>
            <p>${downloads}</p>
          </li>
        </ul>
        </a>
      </li>
        `;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);
}
