// 1- Fetch , load and show categories on html
//  create loadcatagories

const loadCategories = () =>{

    const url = 'https://openapi.programming-hero.com/api/phero-tube/categories';
    fetch(url)
    .then(res => res.json())
    .then(data =>displayCategories(data.categories
    ))
    .catch((error) => console.log(error))
    // console.log("load categories created");
}
// create displayCategories

const displayCategories = (data) =>{
    // console.log("display categories created");
}
// call function loadCategories
loadCategories();

//  call function display categories
// displayCategories();

// console.log("video script added file ");
// let videos = [];
//         let activeCategory = null;

//         async function loadCategories() {
//             const categories = [
//                 { id: 1, name: "Technology" },
//                 { id: 2, name: "Science" },
//                 { id: 3, name: "Business" },
//                 { id: 4, name: "Entertainment" }
//             ];
            
//             const categoryContainer = document.getElementById("category-buttons");
//             categoryContainer.innerHTML = "";
//             categories.forEach(category => {
//                 const button = document.createElement("button");
//                 button.className = "btn btn-outline btn-primary";
//                 button.textContent = category.name;
//                 button.onclick = () => loadCategoryVideos(category.id, button);
//                 categoryContainer.appendChild(button);
//             });
//         }

//         async function loadCategoryVideos(categoryId, activeButton) {
//             document.querySelectorAll(".btn").forEach(btn => btn.classList.remove("btn-active"));
//             activeButton.classList.add("btn-active");
//             activeCategory = categoryId;
            
//             videos = [
//                 { title: "AI in Tech", views: 12000, verified: true, duration: "10:45", author: "John Doe", category: 1 },
//                 { title: "Quantum Physics", views: 5000, verified: false, duration: "8:20", author: "Jane Smith", category: 2 }
//             ].filter(video => video.category === categoryId);
            
//             displayVideos();
//         }

//         function displayVideos() {
//             const videoContainer = document.getElementById("video-container");
//             const noVideo = document.getElementById("no-video");
//             videoContainer.innerHTML = "";
            
//             if (videos.length === 0) {
//                 noVideo.classList.remove("hidden");
//                 return;
//             }
//             noVideo.classList.add("hidden");
            
//             videos.forEach(video => {
//                 const card = document.createElement("div");
//                 card.className = "border p-4 rounded shadow";
//                 card.innerHTML = `
//                     <h2 class="text-lg font-bold">${video.title}</h2>
//                     <p class="text-sm">Views: ${video.views}</p>
//                     ${video.verified ? '<span class="text-green-500">✔ Verified</span>' : ''}
//                     ${video.duration ? `<p class="text-xs">Duration: ${video.duration}</p>` : ''}
//                     <button onclick="showVideoDetails('${video.title}', '${video.author}')" class="btn btn-sm btn-primary mt-2">Details</button>
//                 `;
//                 videoContainer.appendChild(card);
//             });
//         }

//         function showVideoDetails(title, author) {
//             document.getElementById("modal-title").textContent = title;
//             document.getElementById("modal-author").textContent = "Author: " + author;
//             document.getElementById("modal-description").textContent = "Detailed video information goes here.";
//             document.getElementById("video-modal").showModal();
//         }

//         function searchVideos() {
//             const query = document.getElementById("search-input").value.toLowerCase();
//             activeCategory = null;
//             document.querySelectorAll(".btn").forEach(btn => btn.classList.remove("btn-active"));
//             videos = videos.filter(video => video.title.toLowerCase().includes(query));
//             displayVideos();
//         }

//         function sortVideos() {
//             videos.sort((a, b) => b.views - a.views);
//             displayVideos();
//         }

//         loadCategories();