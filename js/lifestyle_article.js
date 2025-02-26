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


const articleArray = [
    `
<div class="article">
    <h1 class="fw-bold">隈研吾建築師跨領域與Sharp推出了空氣清淨機</h1>
    <p>
        家電往往是裝修的最後一步，但卻時常被迫選擇與空間風格不匹配的產品。近年來各家廠牌都在推行美型家電，顯示人們越來越重視家電與居家空間的和諧度。                    
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/slide01-1024x693.jpg" alt="">
    <p>
        日本建築師隈研吾這次跨領域與Sharp合作，推出了空氣清淨機，以建築設計的角度出發，並結合日本傳統工藝，設計出一款高品質且與空間協調的產品，讓你可以無縫的融入家中。                    
    </p>
    <h3 class="fw-bold">靈感來自日本傳統設計</h3>                                       
    <p>
        障子門（しょうじ）以及簾虫籠(すむしこ)常出現於日式傳統房屋裡，以此做為發想，在垂直面上安排了木格柵，有效的讓光影與空氣能夠自由穿透。                    
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/image-3-1024x683.png" alt="">                   
    <h3 class="fw-bold">使用實木製作</h3> 
    <p>
        表面使用實心白橡木製成，木材的顏色也會隨著時間逐漸變得沉穩。
    </p>
    <p>
        當木材剃得越薄，越有可能變形。所以木工匠人調整各種分層方法，最終將由六塊單板以不同角度組裝起來，最大限度地防止翹曲。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdyw5QeHp5NJ9MrSRHtne_q1VQBwtMIpNbG7o3xUvrbjlG-ryDWFtrbU-YbUYOYWFyeTc8JRSQjbosFngYaNOs31gSzD2uGQsAqqjPnqqsBJqkJSs4ozk9GGZAzdPtlMWoc544cnE9OeXbfJY-oI9egaF_0?key=hJsm42MgU7O03FHYTj74bQ" alt="">                   
    <p>
        從外觀看起來就像是一款能融入於居家空間各處的家具，充分展現了建築結合家電設計的模樣。
    </p>   
    <img class="img-fluid mb-2 col-12" src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXf6qOTQMDIseXMNfPeH2rnXf8Yh2F9wiZmgrHYS0D81p1SW-_nIruodSpMPmwra5DFZ9-_EK9mpta0fwx2vwIaQSD-Gjb0M3qXY35ysfHSKTMIYoE32upseYf9LwBaZs5RA4kDPhN6DGiLBzhGPGHd7gIpv?key=hJsm42MgU7O03FHYTj74bQ" alt="">                   
   
</div>                     
    `,

    `
    <div class="article">
    <h1 class="fw-bold">梵谷也瘋日本浮世繪！穿越時空地理的藝術交會</h1>
    <h3 class="fw-bold">梵谷其實是個扎扎實實的日本迷喔！</h3> 
    <p>
        梵谷作為後印象派畫家重要的代表人物之一，從畫中能夠探索他充滿生命力的創作生涯。但你知道梵谷其實也是個扎扎實實的日本迷嗎？作品的輪廓、構圖以及用色都深受日本浮世繪的影響。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/%E6%93%B7%E5%8F%96-1.png" alt=""> 
    <div class="border-custom">
        <h4><i>「浮世繪，是灌溉我藝術的泉源。」 ——VINCENT VAN GOGH</i></h4>        
    </div>         
    <p>
        19世紀的歐洲流行日本主義（Japonisme），浮世繪也乘著海進入了印象派畫家們的生命中，成為許多西方藝術家的靈感來源，其中就包含了梵谷，據說他買了上百幅相關畫作，甚至直接臨摹過浮世繪作品，從作品的用色、輪廓都可以看見浮世繪對於他創作上面的啟發。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/%E4%B8%8B%E8%BC%89-810x1024.png" alt="">        
    <p>
        浮世繪的構圖上面通常是不對稱的，更加動態與靈活。經常會將畫面的中間留空，並且把前景中的物體會放大，或是排除地平線、突然裁切掉圖片邊緣的元素來做呈現。梵谷將這種構圖風格融入了自己的畫中，他會選擇具有低地平線構圖，並以風景或是自然物件例如花朵和昆蟲作為題材作畫。
    </P>
    <div class="d-flex justify-content-between gap-2">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/elementor/thumbs/%E6%88%AA%E5%9C%96-2024-12-24-%E4%B8%8A%E5%8D%889.29.04-qz09dyf279a9imj0c198g0co09y0h6q691pqh4dhk0.png" alt="">                   
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2024/12/%E6%93%B7%E5%8F%96-860x1024.jpg" alt="">                   
    </div>           
    <p>
        △ 上右圖為梵谷臨摹的作品《梅樹開花》。前景放置了巨大的主題，搭配遠處小景物讓畫作更有空間感。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/%E4%B8%8B%E8%BC%89-1-613x1024.png" alt="">                   
    <h3 class="fw-bold">黃色是他最愛的顏色</h3> 
    <p>
        除此之外明亮的色塊以及豐富的色彩細節也是梵谷作品的特色之一，尤其是黃色是他作品中經常出現的標誌色。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/%E8%B3%87%E7%94%A2-1-1024x948.jpg" alt="">  
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/%E8%B3%87%E7%94%A2-2-830x1024.jpg" alt="">  
    <p>
        也許是飽受精神疾病所苦，梵谷特別喜歡太陽和向日葵這種充滿活力的黃色元素，對他而言有某種神性的象徵，梵谷的畫作不僅僅是色彩與筆觸的展現，更像是他內心深處情感的外化。每幅作品都充滿了強烈的情感與生命力，透過畫布感受到了他內心的孤獨、焦慮、渴望以及對世界的熱愛。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/%E8%B3%87%E7%94%A2-5.jpg" alt="">  
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/elementor/thumbs/%E8%B3%87%E7%94%A2-4-qz0alhbie90qyiwyynkrpcampi8g0aaxnkel8cnuyw.jpg" alt="">  
    <p class="text-start">
        <a href="https://www.vangoghmuseum.nl/en/art-and-stories/stories/inspiration-from-japan">
    資料參考：Van Gogh Museum</a>
    </p>    
        
</div>

    `,

    `
<div class="article">
    <h1 class="fw-bold">《我的完美日常》裡不能不知的「THE TOKYO TOILET」企劃</h1>         
    <p>
        今年三月在台灣上映的日系電影《我的完美日常 Perfect Days》，不僅有強大的演員陣容，還獲得了不少獎項。光是片名就讓人忍不住好奇，到底什麼樣的日子才算是「完美的日常」呢？
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/image-674x1024.png" alt="">   
    <p>
        故事的主角平山是一名東京的廁所清潔工，每天做著相同的工作，下班後一個人吃飯、到澡堂洗澡，與熙來攘往的人群偶遇、再錯過，看似重複而平凡的日常，卻能夠從中發現美好。
    </p>                
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/image-1-1024x768.png" alt="">                           
    <p>
        工作累了抬頭望向天空、拿著相機捕捉陽光穿透樹葉的縫隙，開車回家的路上就撥放喜愛的磁帶音樂，睡前讀一本自己喜歡的書，搭配唯美的鏡頭與音樂，一不小心就掉進了平山的世界，生活如此愜意美好。
    </p>
    <p>
        這部電影另一個吸睛的主題是結合了「THE TOKYO TOILET」的實驗性企劃，這項計畫邀請了16為建築師對於17座公廁進行改造，以周圍環境作為靈感，提供使用者舒適的使用體驗，這次分享三個特色公廁，一起看看他們的獨特之處。
    </p>
    <h3 class="fw-bold">Architecture01. 深町小公園&はるのおがわ社區公園／建築家：坂 茂</h3> 
    <div class="d-flex justify-content-between gap-2">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/O0A1332_1-640x427-1.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/O0A1328-1-640x427-1.jpg" alt="">                   
    </div>
    <p>
        大家在使用公共廁所時，一定會敲門來確定裡面是否有人。而位於深町小公園以及はるのおがわ社區公園的公廁就免去了這個步驟。
    </p>
    <div class="d-flex justify-content-between gap-2">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/O0A1332_1-640x427-1.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/O0A1592_trim2-640x426-1.jpg" alt="">                   
    </div>
    <p>
        平常沒人使用的時候是完全透明可視的，當鎖住時玻璃就會變成不透明，到了晚上他也是一盞燈籠照亮了公園，成了公園裡的裝置藝術。
    </p>
    <h3 class="fw-bold">Architecture02.西參道／建築家：藤本壯介</h3> 
    <div class="d-flex justify-content-between gap-2">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/1G1A4824-640x426-2.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/1G1A4917-640x426-2.jpg" alt="">                   
    </div>
    <p>
        純白的設計常會讓人擔心容易弄髒，但藤本壯介卻認為白色才會讓人想要維持公廁整潔呀！
    </p>
    <div class="d-flex justify-content-between gap-1">
        <img class="img-fluid mb-2 img-w-32" src="https://ru8studio.com/wp-content/uploads/2025/02/1G1A4965-640x960-1.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-32" src="https://ru8studio.com/wp-content/uploads/2025/02/1G1A4979-640x960-1.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-32" src="https://ru8studio.com/wp-content/uploads/2025/02/1G1A4966-640x426-2.jpg" alt="">                   
    </div>
    <p>
        他將公廁作為城市中的容器，建立了一個公共的洗手設施，在向下凹折的弧線上設計不同高度與角度的水龍頭，從兒童到老人，人們聚集在容器周圍洗手、喝水並進行交談。
    </p>
    <h3 class="fw-bold">Architecture03.惠比壽東公園／建築家：槙文彥</h3>
    <div class="d-flex justify-content-between gap-2">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/O0A2175-1-640x427-1.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/O0A2195-1-640x427-1.jpg" alt="">                   
    </div>
    <p>
        惠比壽東公園裡有一座章魚遊樂設施深受兒童們喜愛，因此這座公園又稱作「章魚公園」。
    </p>
    <div class="d-flex justify-content-between gap-2">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/O0A2224-1-640x427-1.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/O0A2258-1-640x427-1.jpg" alt="">                   
    </div>
    <p>
        建築師打造了一座「魷魚公廁」來做呼應，兩側向下彎折的屋頂就像是一隻白色魷魚，這裡除了作為公共衛生間以外，也能作為公園涼亭，讓來訪的兒童、路過的上班族，都可以使用這個明亮乾淨的空間。
    </p>
    <p>
        多數人普遍對公廁的印象是骯髒以及臭味滿天飛，但每個片中登場的廁所卻極具特色，想看更多可以到官網上面觀看，也許下趟旅程到了澀谷，也可以來趟公廁之旅。
    </p>
    <p class="text-start">
        <a href="https://tokyotoilet.jp/en/">
    資料參考：THE TOKYO TOILET</a>
    </p>   
</div>

    `,

    `
<div class="article">
    <h1 class="fw-bold">Taiwan Lantern 匠心工藝與創新，台灣燈籠文化綻放光采</h1>         
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/f04d09eea3ddfd5b892ddc4feade3e60-731x1024.jpg" alt="">       
    <p>
        千百年來人們會在元宵節這天點亮燈籠，以驅散黑暗祈求美好，當紙燈從節日儀式轉換到了日常空間，其輕盈且溫暖能讓居家多一份靜謐感，為空間帶來恰到好處的光影氛圍，今天要來介紹的Taiwan Lantern 便是將這份傳統之美融入現代生活，透過精湛的工藝與創新設計，分享台灣的燈籠文化與工藝之美。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/d937168cf6bbeec76bfc0f2a2a0cfe2c.jpg" alt=""> 
    <h2 class="fw-bold">品牌故事</h2>       
    <p>
        Taiwan Lantern於2013年創立，與台灣一家手工製作燈籠的傳統工廠合作，並結合當代燈光設計，賦予了傳統燈籠新的生命。每一款燈籠皆由台灣工藝師精心製作，經歷超過190 道工序，由五位工匠耗時 5 至 6 周製作，確保每件作品的品質與獨特性。燈籠採用台灣在地天然材料，其中 95% 為永續性材質，呈現溫潤典雅的外觀。
    </p>  
    <div class="d-flex justify-content-between gap-2">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/4cbd930b01ee496635443c6581619f29-1.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/Details-of-our-Heritage-Bucket-shape-Lantern-1.jpg" alt="">                   
    </div>
    <h2 class="fw-bold">系列介紹</h2>     
    <h3 class="fw-bold">Heritage Unicolors 傳統單色</h3>                           
    <p>
        傳承經典單色設計，展現傳統之美。以中國傳統的五行學說為靈感，與相應的色彩融入設計中，每款燈具皆象徵特定的意涵。
    </p>
    <div class="d-flex justify-content-between gap-2">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/Heritage-collection.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/Earthy-tones-Heritage-Lanterns.jpg" alt="">                   
    </div>
    <p>
        黑色代表水，象徵著信任和冷靜，棕色代表土，象徵中立和好運。燈籠上塗了一層桐油，表面呈現出光滑的緞面效果。
    </p>
    <h3 class="fw-bold">Plant Dyed Unicolors 植物染色單色</h3>  
    <p>
        此系列採用台灣在地種植的天然植物進行染色，因此隨著時間的推移，可以享受自然演變產生的細微的變化。
    </p>
    <div class="d-flex justify-content-between gap-2">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/Taiwan-Lantern-Lighting-Shoulang-bucket-shape-1.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/Indigo-Mandarin-Shape-1.jpg" alt="">                  
    </div>
    <p>
        <strong>薯榔</strong>為原住民常用的染色材料，賦予燈籠溫暖的棕色調。<strong>靛藍草</strong>經過多次手工染色，呈現深沉且舒緩的靛藍色調。天然棉布經過超過 20 次的手工染色處理，最終呈現出深邃、豐富且舒緩的色彩，反映出台灣自然景觀的美麗。
    </p>
    <h3 class="fw-bold">Plant Dyed Patterns 植物染色圖案</h3> 
    <p>
        以植物染色結合獨特圖案，展現自然之美。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/7a42e9d14956f20fb18100ed0b99fc5f-1-683x1024.jpg" alt="">
    <p>
        「日月潭」圖案靈感來自湖面的漣漪，象徵寧靜與平和。工匠將布料纏繞於管子上，經過壓縮塑形，形成獨特的褶皺，每一件作品皆為手工製作，獨一無二。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/Taroko-gorge-Mandarin-shape-1.jpg" alt="">
    <p>
        「太魯閣」圖案則取材自壯麗的太魯閣峽谷與其雄偉的大理石岩層。工匠在靛藍染色前，以揉皺與綁紮技法處理布料，打造出自然流動、充滿個性的手工圖案。
    </p>
</div>
    `,


];

document.addEventListener('DOMContentLoaded', function () {
    const param = new URLSearchParams(window.location.search);
    const id = param.get('id');
    
    if (id !== null && !isNaN(id) && id >= 0 && id < articleArray.length) {
        document.getElementById('articleDiv').innerHTML = articleArray[id];
    } else {
        document.getElementById('articleDiv').innerHTML = '無效的文章ID';
    }
});


// 分享文章
// 獲取當前頁面的連結和標題
let url = encodeURIComponent(window.location.href);
let title = encodeURIComponent(document.title);
let image = encodeURIComponent("https://example.com/image.jpg"); // 替換為你的文章圖片連結

// Facebook 分享
document.getElementById("share-facebook").href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;

// Twitter 分享
document.getElementById("share-twitter").href = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;

// Pinterest 分享
document.getElementById("share-pinterest").href = `https://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${title}`;

// Instagram 分享
// Instagram 不支援直接分享連結，這裡提供一個替代方案
document.getElementById("share-instagram").href = `https://www.instagram.com/`;



const cards = [
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
];

// 獲取 URL 中的 id 參數
const urlParams = new URLSearchParams(window.location.search);
let currentIndex = parseInt(urlParams.get('id')) || 0; // 根據 URL 參數設置 currentIndex

// 上下篇文章的按鈕
let html = `
    <div class="row d-flex flex-row justify-content-between mb-3">
        <button class="col-6 btn prevLink" ${currentIndex === 0 ? 'disabled' : ''}>
            <h5 class="text-start">
                <a href="./lifestyle_article.html?id=${currentIndex - 1}" ${currentIndex === 0 ? 'style="pointer-events: none; display:none;"' : ''}>← 上一篇 文章</a>
            </h5>
        </button>
        <button class="col-6 btn nextLink" ${currentIndex >= cards.length - 1 ? 'disabled' : ''}>
            <h5 class="text-end">
                <a href="./lifestyle_article.html?id=${currentIndex + 1}" ${currentIndex >= cards.length - 1 ? 'style="pointer-events: none; display:none;"' : ''}>下一篇 文章 →</a>
            </h5>
        </button>
    </div>
`;

// 將生成的 HTML 插入到頁面中
document.querySelector('.prevnext').innerHTML = html;

// 生成相關文章的 HTML
let relatedHtml = `
    <div class="row bg-white p-4 g-3 justify-content-between">
        <div class="my-3">
            <h2 class="text-center">RELATED POSTS</h2>
        </div>
`;

// 控制顯示的相關文章數量
let displayedCount = 0;

// 遍歷 cards 陣列生成相關文章
for (let i = 0; i < cards.length && displayedCount < 3; i++) {
    if (i !== currentIndex) { // 排除當前文章
        relatedHtml += `
            <div class="col-md-12 col-lg-4">
                <a href="./lifestyle_article.html?id=${i}">
                    <div class="card">
                        <img src="${cards[i].img}" class="card-img-top" alt="${cards[i].name}">
                        <div class="card-body">
                            <h5 class="card-title">${cards[i].name}</h5>                            
                        </div>
                    </div>
                </a>
            </div>
        `;
        displayedCount++; // 增加已顯示的文章計數
    }
}

relatedHtml += `</div>`; // 關閉 row

// 將生成的 HTML 插入到頁面中
document.querySelector('.related').innerHTML = relatedHtml;





// 從 localStorage 加載留言
function loadComments() {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach((comment, index) => {
        displayComment(comment.name, comment.message, comment.timestamp, index);
    });
}

// 顯示評論的函式
function displayComment(name, message, timestamp, index) {
    // 創建一個新的評論元素
    let commentItem = document.createElement("li");
    commentItem.className = "list-group-item";

    // 格式化時間
    let timeString = new Date(timestamp).toLocaleString();

    // 設置評論內容
    commentItem.innerHTML = `
        <strong>${name}</strong>
        <p>${message}</p>
        <small class="text-muted">${timeString}</small>
        <button class="btn btn-delete btn-sm float-end" onclick="deleteComment(${index})">刪除</button>
    `;

    // 將新評論添加到評論列表中
    document.getElementById("comment-list").appendChild(commentItem);
}

// 刪除評論
function deleteComment(index) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.splice(index, 1); // 從數組中移除該評論
    localStorage.setItem("comments", JSON.stringify(comments)); // 更新 localStorage

    // 重新加載評論
    document.getElementById("comment-list").innerHTML = ""; // 清空評論列表
    loadComments(); // 重新加載評論
}

// 保存評論到 localStorage
function saveComment(name, message) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push({ 
        name, 
        message, 
        timestamp: new Date().getTime() // 存儲時間戳
    });
    localStorage.setItem("comments", JSON.stringify(comments));
}

// 頁面加載時加載留言
window.onload = loadComments;

function sendMail(event) {
    event.preventDefault(); // 阻止表單的預設提交行為

    // 獲取表單資料
    let parms = {
        user_name: document.getElementById("firstname").value,
        user_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // 顯示 Loading 狀態
    let messageAlert = document.getElementById("message-alert");
    let submitButton = document.querySelector("#comment-form button[type='submit']");
    messageAlert.style.display = "block";
    messageAlert.textContent = "發送中，請稍候...";
    messageAlert.className = "alert alert-info";

    // 禁用提交按鈕
    submitButton.disabled = true;
    submitButton.textContent = "發送中...";

    // 使用 EmailJS 發送郵件
    emailjs.send("service_22i5bzd", "template_8ni7as5", parms)
        .then(function (response) {
            // 郵件發送成功
            messageAlert.textContent = "留言發送成功！";
            messageAlert.className = "alert alert-success";

            // 清空表單
            document.getElementById("firstname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            // 將評論顯示在頁面上並保存到 localStorage
            let timestamp = new Date().getTime();
            saveComment(parms.user_name, parms.message); // 先保存評論
            let comments = JSON.parse(localStorage.getItem("comments")) || []; // 重新獲取 comments
            displayComment(parms.user_name, parms.message, timestamp, comments.length - 1); // 顯示評論
        }, function (error) {
            // 郵件發送失敗
            messageAlert.textContent = "留言發送失敗，請稍後再試。錯誤訊息：" + error.text;
            messageAlert.className = "alert alert-danger";
        })
        .finally(function () {
            // 重新啟用提交按鈕
            submitButton.disabled = false;
            submitButton.textContent = "送出";
        });
}
