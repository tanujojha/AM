const mappingArr = [
    {
        src: "./public/images/img1.jpg",
        alt: "3D Visualization 1",
    },
    {
        src: "./public/images/img2.jpg",
        alt: "3D Visualization 2",
    },
    {
        src: "./public/images/img3.jpg",
        alt: "3D Visualization 3",
    },
    {
        src: "./public/images/img4.jpg",
        alt: "3D Visualization 4",
    },
    {
        src: "./public/images/img5.jpg",
        alt: "3D Visualization 5",
    },
    
];

function liCard (data){
    
    const ul = document.getElementById("mapUl")


    let li = document.createElement("li");
    li.classList.add("masonry-item","cat-1","cat-2","col-xl-3","col-lg-4","col-md-6","col-sm-12","m-b30");

    let outerDiv = document.createElement("div");
    let imgDiv = document.createElement("div");
    let headDiv = document.createElement("div");

    outerDiv.classList.add("sx-box","image-hover-block");
    imgDiv.classList.add("sx-thum-bx");
    headDiv.classList.add("sx-info","p-t20","text-white");

    let img = document.createElement("img");
    img.classList.add("w-50")
    img.setAttribute("src", data.src);
    img.setAttribute("alt", data.alt);

    let h4 = document.createElement("h4");
    h4.classList.add("sx-tilte","m-t0");

    let a1 = document.createElement("a");
    a1.innerHTML = data.alt

    let p = document.createElement("p");

    let a2 = document.createElement("a");
    a2.classList.add("mfp-link");
    a2.setAttribute("href", data.src)

    let i = document.createElement("i");
    i.classList.add("fa","fa-arrows-alt")


    a2.appendChild(i);

    h4.appendChild(a1)

    headDiv.append(h4, p);
    imgDiv.appendChild(img);
    outerDiv.append(imgDiv, headDiv, a2);

    li.appendChild(outerDiv);

    ul.appendChild(li);

}

function limapping (dataArr){
    
    dataArr.forEach((data)=>{
        console.log(data);
        liCard(data)
    })
}

limapping(mappingArr);
