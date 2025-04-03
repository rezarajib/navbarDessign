const categories = () => {
    const url = 'https://openapi.programming-hero.com/api/phero-tube/categories';
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}
const categoriesVideo = () => {
    const url = 'https://openapi.programming-hero.com/api/phero-tube/videos';
    fetch(url)
        .then(res => res.json())
        .then(data => displayVideo(data.videos))
        .catch(error => console.log(error))
}

const displayVideo = (video) => {

    const videosContainer = document.getElementById('videosContainer');
    console.log(video);
    video.forEach(elementId => {
        console.log(elementId);
        const card = document.createElement('div');
        card.classList = 'card bg-base-100 w-96 shadow-sm';
        card.innerHTML = `
        <figure class = "h-[200] relative">
        <img
      src="${elementId.thumbnail}"
      class = "w-full h-full object-cover"
      alt="Shoes" />
      <span class="absolute bg-gray-800 text-white rounded p-2 right-2 bottom-2">
    ${elementId.others.posted_date}
</span>

  </figure>
  <div class="flex items-center gap-10 p-3">
    <!-- Profile Image -->
    <img class="w-12 h-12 rounded-full" src="${elementId.authors[0].profile_picture}" alt="Profile Image">

    <!-- Text Content -->
    <div>
        <h2 class="font-bold text-lg">${elementId.title}</h2>

        <div class="flex items-center gap-4 text-gray-500 text-sm">
            <p>${elementId.authors[0].profile_name}</p>
            ${elementId.authors[0].verified === true
                ? `<img src='https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png'/>` 
                : ""}
            <!-- Verified Badge -->
         
        </div>

        <p class="text-gray-400 text-sm">${elementId.others.views} views</p>
    </div>
</div>

 
    `
    videosContainer.appendChild(card);

    })
}

const displayCategories = (data) => {
    const categoriesContainer = document.getElementById('categoriesContainer');
    data.forEach(element => {
        console.log(element);


        const button = document.createElement('div');
        button.classList = 'btn';
        button.innerText = element.category;
        categoriesContainer.appendChild(button);
    });
}

categories();
categoriesVideo();