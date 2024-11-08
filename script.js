
const postList = [];


async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
    const data = await response.json();
    
    for(let i = 0; i < 6; i++){
        postList[i].id = data[i].id;
        postList[i].text = data[i].title;
    }
}

async function getImgs() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=6');
    const data = await response.json();
    
    for(let i = 0; i < 6; i++){
        postList[i].img = data[i].url;
    }
      
}

async function generatePosts() {

    await getPosts(member);
    await getImgs(member);

    console.log(postList[0]);

    console.log(postList);

    for(let i = 0; i < 6; i++){
        
        document.getElementById("main").innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 card-container" id="card-${i}">
            <div class="card">
                <img src="${postList[i].img}" class="card-img" id="img-${i}">
                <div class="card-body">
                    <p class="card-text">${postList[i].text}</p>
                </div>
                <img src="./img/pin.svg" class="pin-img">
            </div>
        </div>`;
    
    }

    document.getElementById("spinner").classList.add("d-none");
    document.getElementById("main").classList.remove("d-none");

    for(let i = 0; i < 6; i++){
        
        document.getElementById(`card-${i}`).addEventListener("click", () =>{

            document.getElementById("img-overlay").src = document.getElementById(`img-${i}`).src;
            document.getElementById("overlay").classList.remove("d-none");

        });
    }

    document.getElementById("bottone").addEventListener("click", () =>{

        document.getElementById("overlay").classList.add("d-none");
    
    });
    
}

for(let i = 0; i < 6; i++){
    postList.push(member = {id: i, text: "", img: ""});
}


generatePosts();

