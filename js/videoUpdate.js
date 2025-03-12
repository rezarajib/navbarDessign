//  the fetch data load get categories 
const loadCategories = () =>{
    const url = 'https://openapi.programming-hero.com/api/phero-tube/categories';
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}



//  call the arrow function loadCategories data 

loadCategories()
