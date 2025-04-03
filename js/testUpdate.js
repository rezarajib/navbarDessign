//  user arrow function for load data category api data 

const loadCategories = () => {
    // load data for api category for fetch
    const url = 'https://openapi.programming-hero.com/api/phero-tube/categories';
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}

// use arrow function load video data
const videoCategories = () => {
    // load data for api category for fetch
    const url = 'https://openapi.programming-hero.com/api/phero-tube/videos';
    fetch(url)
        .then(res => res.json())
        .then(data => videoDisplay(data.videos))
        .catch(error => console.log(error))
}

// display video data 

const videoDisplay = (videos) => {

    const videosContainer = document.getElementById('videosContainer');
    // console.log(videos);
    videos.forEach(elementVideo => {
        console.log(elementVideo);
        const card = document.createElement('div');
        card.classList = 'card bg-base-100 w-96 shadow-sm';
        card.innerHTML = `
         <figure>
    <img
      src="${elementVideo.thumbnail}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        
        `

        videosContainer.appendChild(card);
    });
}
//  display category data 

const displayCategories = (categories) => {
    // console.log(categories)

    categories.forEach(element => {
        console.log(element)
        const categoriesContainer = document.getElementById('categoriesContainer');
        const button = document.createElement('button');
        button.classList = 'btn'
        button.innerText = element.category;
        categoriesContainer.appendChild(button);

    });
}

//  cal the arrow function for category data 
loadCategories();
videoCategories();