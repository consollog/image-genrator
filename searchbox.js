const accesskey = "D8Q5_zjyja8en4F6riMkXZ8sJ4X8N1cFOQLBR_vbjAw";

const form = document.querySelector('#form')
const inputbox = document.querySelector("#search-input");
const searchbtn = document.querySelector("#search-button")
const serchresults = document.querySelector('.search-results');
const showmore = document.getElementById('show-more-btn');


let inputdata = "";
let page = 1;

async function searchimage() {
    inputdata = inputbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;


    // loading.classList.add('show');
    searchbtn.textContent = "Lodding..."

    setTimeout(async () => {
        const response = await fetch(url);
        const data = await response.json();

        const results = data.results;

        if (page >= 1) {
            serchresults.innerHTML = "";
        }

        results.map((result) => {
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add("search-result");
            const image = document.createElement('img');
            image.src = result.urls.small;
            image.alt = result.alt_description;
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";
            imageLink.textContent = result.alt_description;

            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);
            serchresults.appendChild(imageWrapper);
        });

        page++;
        if (page >= 1) {
            showmore.style.display = "block";
        }

        // Hide loading indicator
        // loading.classList.remove('show');
        searchbtn.textContent = "Search"
    }, 2000)

}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    page > 1;
    searchimage();
})

showmore.addEventListener('click', () => {
    searchimage();
})