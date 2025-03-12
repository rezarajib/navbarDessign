// load categories data for use fetch

const loadCategories = () => {
  const url = 'https://openapi.programming-hero.com/api/phero-tube/categories';
  fetch(url)
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error))
}

//  load video categories data for use fetch

const videoCategories = () => {
  const url = 'https://openapi.programming-hero.com/api/phero-tube/videos';
  fetch(url)
    .then(res => res.json())
    .then(data => videoDisplay(data.videos))
    .catch(error => console.log(error))
}
// const cardDemo = {
//   "category_id": "1001",
//   "video_id": "aaab",
//   "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
//   "title": "Midnight Serenade",
//   "authors": [
//       {
//           "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
//           "profile_name": "Noah Walker",
//           "verified": false
//       }
//   ],
//   "others": {
//       "views": "543K",
//       "posted_date": ""
//   },
//   "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
// }
//  display video categories data 
const videoDisplay = (videos) => {
  const videosContainer = document.getElementById('videosContainer');
  // console.log(videos)
  videos.forEach(videoItem => {
    console.log(videoItem);
    const card = document.createElement('div');
    card.classList = 'card bg-base-100 w-96 shadow-sm';
    card.innerHTML = `
        <figure class="h-[200px]">
    <img
      src=${videoItem.thumbnail}
      class ="h- full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div class ="w-10 h-10 rounded full">
  <img src= ${videoItem.authors[0].profile_picture} />
</div>
<div>
  <h2>This is a Heading 2</h2>
  <p>This is a paragraph 1</p>
  <p>This is a paragraph 2</p>
</div>
  </div>
        
        `
    videosContainer.appendChild(card);
  })


}

//  display categories data 

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById('categoriesContainer');
  // console.log(categories)
  categories.forEach(elementItem => {
    console.log(elementItem);
    // create button 
    const button = document.createElement("button");
    button.classList = 'btn';
    button.innerText = elementItem.category;
    categoriesContainer.appendChild(button);


  });
}




// call the categories function

loadCategories();
videoCategories();