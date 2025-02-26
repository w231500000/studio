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


const cards = [
    {
        img: "https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_00_29_09.Still012-1024x576.jpg",
        name: "​​將療癒小島搬進了屋裡，有陽光、空氣與綠意享受時光",
    },
    {
        img: "https://ru8studio.com/wp-content/uploads/2025/02/%E6%95%99%E5%AE%A4%E5%A4%96%E7%89%8601-1024x570.jpg",
        name: "探索知識的領航站！新知與創意在這裡起飛降落",       
    },
    {
        img: "https://ru8studio.com/wp-content/uploads/2024/12/LINE_ALBUM_58%E8%99%9F%E4%BD%8F%E5%AE%85%E5%8F%83%E8%80%83%E7%85%A7%E7%89%87_221227_2-1024x683.jpg",
        name: "辦公室兼休憩場所的一樓街屋，生活與建築的關係半開放滲透出來",
    },
    {
        img: "https://ru8studio.com/wp-content/uploads/2024/12/1-1-1024x941.jpg",
        name: "旅外設計師返鄉回屏東深根，將設計結合在地創生，與當地居民、文化連結",
    },
    
]


let html = "";
for (let i = 0; i < cards.length; i++) {
    
    html +=
    `
    <div class="col-md-12 col-lg-6">
        <div class="card my-1">
            <div class="card-top">
                <img src="${cards[i].img}" class="card-img-top img-responsive" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${cards[i].name}</h5>
                <a href="./index_article.html?id=${i}" class="btn btn-primary">Read More</a>
            </div>
        </div>
    </div>

    `;
}

document.querySelector('.row').innerHTML = html;

