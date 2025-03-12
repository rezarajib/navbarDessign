// console.log("added new button for the clicked");
// Fetch load and show categories on html


// two function create 
//  create loadCategories
// create displayCategories

// crate arrow function 

const crateCategories = () => {
    //  fetch data load 

    const url = 'https://openapi.programming-hero.com/api/phero-tube/categories';
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.categories))
        .catch(err => console.log(err))
}
const crateVideos = () => {
    //  fetch data load 

    const url = 'https://openapi.programming-hero.com/api/phero-tube/videos';
    fetch(url)
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.log(err))
}

const carDemo ={
    "category_id": "1001",
    "video_id": "aaag",
    "thumbnail": "https://i.ibb.co/DRxB1Wm/sunris.jpg",
    "title": "Sunrise Reverie",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/yQFJ42h/ava.jpg",
            "profile_name": "Ava Johnson",
            "verified": false
        }
    ],
    "others": {
        "views": "1.1K",
        "posted_date": "16950"
    },
    "description": "'Sunrise Reverie' by Ava Johnson takes listeners on a serene journey through tranquil melodies and soft harmonies. With 1.1K views, this track is perfect for morning relaxation or an evening wind-down. Ava's heartfelt lyrics and soothing voice create a sense of peace, making it a go-to for fans seeking calm and inspiration in their musical choices."
}
const displayVideos = (videos) => {
    const videosContainer = document.getElementById('videosContainer');
    videos.forEach(elementVideos => {
        console.log(elementVideos);
        const card = document.createElement('div');
        card.classList = 'card bg-base-100 w-96 shadow-sm';
        card.innerHTML = `
          <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src=${elementVideos.thumbnail
      }
      class="h-full w-full object-cover">
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img src = "" />
    <div>
    <h2> </h2> 
  </div>
</div>
        `
        videosContainer.appendChild(card);
    });
    //    console.log(videos);
}
const displayData = (categories) => {

    // create Categories id by container
    const categoriesContainer = document.getElementById('categories');

    categories.forEach(categoriesItem => {
        console.log(categoriesItem);
        // create every button for every item create button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = categoriesItem.category;
        categoriesContainer.appendChild(button);

    });
    //  console.log(data)
}




crateCategories();
crateVideos();