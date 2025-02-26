const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};


const lifestyles = [
    {
        img: "https://ru8studio.com/wp-content/uploads/2025/02/slide01-1024x693.jpg",
        name: "​隈研吾建築師跨領域與Sharp推出了空氣清淨機",
    },
    {
        img: "https://ru8studio.com/wp-content/uploads/2024/12/%E6%93%B7%E5%8F%96-1.png",
        name: "梵谷也瘋日本浮世繪！穿越時空地理的藝術交會",       
    },
    {
        img: "https://ru8studio.com/wp-content/uploads/2025/02/image-768x1167.png",
        name: "《我的完美日常》裡不能不知的「THE TOKYO TOILET」企劃",
    },
    {
        img: "https://ru8studio.com/wp-content/uploads/2025/02/f04d09eea3ddfd5b892ddc4feade3e60-731x1024.jpg",
        name: "Taiwan Lantern 匠心工藝與創新，台灣燈籠文化綻放光采",
    },
    
]


let html = "";
for (let i = 0; i < lifestyles.length; i++) {
    
    html +=
    `
    <div class="col-md-12 col-lg-4">
        <div class="card m-1">
            <div class="card-top">
                <img src="${lifestyles[i].img}" class="card-img-top img-responsive" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${lifestyles[i].name}</h5>
                <a href="./lifestyle_article.html?id=${i}" class="btn btn-primary">Read More</a>
            </div>
        </div>
    </div>
    `;
}

document.querySelector('.row').innerHTML = html;