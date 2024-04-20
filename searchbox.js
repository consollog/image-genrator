const accesskey = "D8Q5_zjyja8en4F6riMkXZ8sJ4X8N1cFOQLBR_vbjAw";

const form = document.querySelector('#form')
const inputbox = document.querySelector("#search-input");
const serchresults = document.querySelector('.search-results');
const showmore = document.getElementById('show-more-btn');


let inputdata = "";
let page = 1;

async function searchimage() {
    inputdata = inputbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);
    const results = data.results;

    if (page == 1) {
        serchresults.innerHTML = "";
    }

    results.map((result) => {
        const imagewrapper = document.createElement('div');
        imagewrapper.classList.add("search-result")
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imagelink = document.createElement("a")
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.textContent = result.alt_description;

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imagelink);
        serchresults.appendChild(imagewrapper);
    });

    page++;
    if (page = 1) {
        showmore.style.display = "block";
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    page > 1;
    searchimage();
})

showmore.addEventListener('click', () => {
    searchimage();
})