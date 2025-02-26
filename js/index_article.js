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
    <h1 class="fw-bold">將療癒小島搬進了屋裡，有陽光、空氣與綠意享受時光</h1>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_00_29_09.Still012-1024x576.jpg" alt="">
    <br>
    <h3 class="fw-bold">若你有一座小島，上面會有什麼？</h3>                                       
    <p>
        KYT design 畇室設計像是說故事的旅人，將療癒的小島搬進生活，以簡單純粹的方式帶領人們回歸內心的平靜，享受與自我相處的時光。                    
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_01_24_15.Still020-1024x576.jpg" alt="">                   
    <p>
        以白色牆面與灰色無接縫地坪為整體空間奠定了寧靜的基調，如同踩在島嶼的沙灘與岩石，每一步都能感受到安穩與舒適。
    </p>
    <div class="d-flex justify-content-between gap-2">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_01_11_07.Still018-1024x576.jpg" alt="">                      
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_01_15_16.Still019-1024x576.jpg" alt="">                   
    </div>
    <p>
        14坪的場域關係，如同海浪輕畫沙灘般被重新梳理。以書櫃代替隔間並調整臥室門口的位置， 同時將臥房地板架高，彷彿一處抬頭可見的高地，界定了公私領域的柔和過渡。
    </p>
    <div class="d-flex justify-content-between gap-2">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/Before-1024x724.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/After-1024x724.jpg" alt="">                   
    </div>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_08_11_23.Still067-1024x576.jpg" alt="">                   
    <p>
        廚房的尺度被放大，輕盈的不銹鋼搭配長型磁磚延展了視覺感受，既實用又富有流動感。衛浴空間延續公領域的材質語彙，訂製的洗手乳掛架兼具美觀與機能。
    </p>   
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_02_07_02.Still027-1024x576.jpg" alt="">                   
    <p>
        中島不僅是備餐的舞台，也是摺衣服的輕巧工作站，串聯了生活的脈絡，到了下午光線延伸照進小島，內心清出能量與空間。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_02_42_23.Still032-1024x576.jpg" alt="">                                              
    <h3 class="fw-bold">每件家具像是在島上拾起的珍貴寶物，充滿了獨特的語言</h3>
    <p>
        綠色的TOGO沙發或坐或躺，散發著慵懶的氣息靠窗180公分的工作桌如一片開闊的海灘，讓人願意停下腳步，與自己的思緒展開對話。搭配不同坐感的椅子，隨時為使用者提供切換心境的可能性。
    </p>   
    <div class="d-flex justify-content-between gap-1">
        <img class="img-fluid mb-2 img-w-32" src="https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_01_35_21.Still022-1024x576.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-32" src="https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_03_14_24.Still036-1024x576.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-32" src="https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_03_34_15.Still039-1024x576.jpg" alt="">                   
    </div>
    <p>
        精心挑選三盞吊燈，分別懸掛在中島、餐桌以及主臥，微光的聚點柔和地灑落於空間中，帶來了溫暖與靜謐。胡桃木層架提供屋主擺品，木質色調如記憶的年輪，將生活的碎片凝聚於此，，家成為了與自然共存的和諧場域。
    </p>
    <div class="d-flex justify-content-between gap-1">
        <img class="img-fluid mb-2 img-w-32" src="https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_07_25_14.Still064-576x1024.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-32" src="https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_07_27_25.Still066-576x1024.jpg" alt="">                   
        <img class="img-fluid mb-2 img-w-32" src="https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_07_30_14.Still065-576x1024.jpg" alt="">                   
    </div>
    <p>
        這片生活的島，寧靜得像海浪輕輕拍打著岸邊，讓人不知不覺地放下心中的喧囂，回到最純粹的自己。彷彿暫時抽離了人生煩惱，只需享受片刻的寧靜。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/1-Copy-01.00_06_22_17.Still063-1024x576.jpg" alt="">    
    <p>
        ｜室內設計公司｜ <a href="https://www.instagram.com/kytdesign/">KYT DESIGN STUDIO 畇室室內設計</a>
    </p>               
</div>                     
    `,

    `
<div class="article">
    <h1 class="fw-bold">探索知識的領航站！新知與創意在這裡起飛降落</h1>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/classroomoutside-1024x570.jpg" alt="">
    <p>
        教學模式大幅變革的今天，環境品質及美學與教育同等重要。位在新北的竹林小學創校至今已 66 年，力於提供學生優質的學習環境，這次邀請3+2 Design
        Studio為校園注入一場夢幻的宇宙冒險，重點改造中和校區的『師生活動區與圖書區域』及『原先中學縫紉教室』，將空間轉化為探索與想像的航空站。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/%E4%B8%8B%E5%B1%A4%E5%9C%96%E6%9B%B8%E9%A4%A8-%E4%BD%BF%E7%94%A8%E7%8B%80%E6%85%8B02-1024x683.jpg" alt="">
    <h3 class="fw-bold">格局的重新配置：另闢通道打開了更多可能性</h3>                        
    <p>
        原先70坪的空間師生活動範圍重疊，導致活動過程容易受到干擾降低使用效率。3+2 Design Studio重新編織了通往知識的道路，將師生原先需要穿過活動區進到圖書區域的路徑取消，從走廊改闢另一條新的出入口，以改善路線重複的困擾。                    
    </p>
    <div class="d-flex justify-content-between gap-2">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/%E6%88%AA%E5%9C%96-2025-02-07-%E4%B8%8B%E5%8D%881.47.02-1024x712.png" alt="">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2025/02/%E6%88%AA%E5%9C%96-2025-02-07-%E4%B8%8B%E5%8D%881.47.07-1024x702.png" alt="">
    </div>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/%E7%A9%BA%E9%96%93%E8%B5%B0%E5%BB%8A-%E4%BD%BF%E7%94%A8%E6%83%85%E5%A2%83-1024x645.jpg" alt="">
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/%E7%A9%BA%E9%96%93%E6%8B%9B%E7%89%8C%E7%85%A7%E7%89%87-1024x683.jpg" alt="">
    <p>
        兩個空間設計成航空站艦，搭配竹林校徽的太空藍，想像學生們沿著這條通道進入未知星域，探索知識的無限可能。                    
    </p>
    <h2 class="fw-bold">第一站：星際師生活動區域</h2>                                          
    <p>
        『星際師生活動區』安排了整面落地鏡牆，如星空般映照著學生的身影，老師是航行的領航員，即時指引學生調整動作，不僅增加學習力也延伸整體空間的層次感。
    </p>                        
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/%E7%B6%9C%E5%90%88%E4%B8%AD%E5%BF%83%E8%B7%B3%E8%88%9E%E7%85%A7%E7%89%87-1024x693.jpg" alt="">
    <p>
        重新配置天花板色塊與整體照明，頭頂的天花板如同點亮的星雲，光線灑滿整個空間，每位學生都能在無垠宇宙中自由翱翔。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/%E7%B6%9C%E5%90%88%E4%B8%AD%E5%BF%83%E6%B4%BB%E5%8B%95%E7%85%A7%E7%89%87-1024x683.jpg" alt="">
    <p>
        活動區新增了儲藏雙面的空間：一面除了可以放置書本，同時也可以擺放活動式的桌椅，另一面，則是擺放歷屆相關的獎盃，彷彿宇宙探索者的戰利品，象徵竹林小學對每位孩子的努力與夢想的珍視。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/%E7%B6%9C%E5%90%88%E4%B8%AD%E5%BF%83-%E4%BD%BF%E7%94%A8%E6%83%85%E5%A2%83-04-1024x683.jpg" alt="">
    <h2 class="fw-bold">第二站：『太空圖書區域』</h2>
    <p>
        過去圖書區的動線不順暢、借閱系統混亂，透過本次的重新規劃打開新的廊道，讓師生有舒適的進場走道。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/%E4%B8%8A%E5%B1%A4%E5%9C%96%E6%9B%B8%E9%A4%A8%E5%85%A5%E5%8F%A3-%E6%83%85%E5%A2%83-1024x672.jpg" alt="">
    <p>
        入口左右均可掛畫與金屬板張貼公告海報，更有太空總署站的氣息。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/%E4%B8%8A%E5%B1%A4%E5%9C%96%E6%9B%B8%E9%A4%A8-%E5%80%9F%E9%82%84%E6%9B%B8-1024x683.jpg" alt="">
    <p>
        館內藏書達一萬冊，透過分層規劃，將閱讀區與藏書區上下錯落設計，休憩區讓學生在宇宙艙內靜靜閱讀，享受星際旅程，同時增設老師辦公區與借還書櫃檯，讓知識流動自如。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/%E4%B8%8A%E5%B1%A4%E5%9C%96%E6%9B%B8%E9%A4%A8-%E4%BD%BF%E7%94%A8%E6%83%85%E5%A2%83-1024x683.jpg" alt="">
    <h2 class="fw-bold">『光影之夢-圖書舞台』</h2>                        
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/%E6%95%99%E5%AE%A4%E5%A4%96%E7%89%8602-1024x683.jpg" alt="">
    <p>
        3+2 Design Studio將佔地約36坪的中學縫紉教室，改造成了劇場式圖書館，以溫暖的木質調鋪陳空間基底，搭配天空藍與舞台魔力紅，學生或坐或躺，沉浸在書籍的星辰大海中。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/%E8%A8%8E%E8%AB%96%E8%88%87%E4%B8%8A%E8%AA%B2%E5%8D%80%E5%9F%9F-%E4%BD%88%E5%91%8A%E6%AC%84%E8%88%87%E6%9B%B8%E6%AB%83-1024x693.jpg" alt="">
    <p>
        把狹長型的Ｌ型空間規劃成『創意劇場』，樓層板內部可以擺放多種書籍，讓小朋友們任意在階梯上愜意閱讀。拉下紅色拉簾，劇場瞬間化身為孩子們表現自我的舞台。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/%E6%9B%B8%E6%AB%83%E9%9A%8E%E6%A2%AF%E5%BC%8F-%E4%BD%BF%E7%94%A8%E6%83%85%E5%A2%83-%E8%A8%8E%E8%AB%96-1024x636.jpg" alt="">
    <p>
        透過多角型的家具擺設創造出不一樣的教學模式，各自分組或團隊圍繞，增加上課時的效率，也培養學生合作精神與空間收納習慣。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2025/02/%E6%9B%B8%E6%AB%83%E9%9A%8E%E6%A2%AF%E5%BC%8F-%E4%BD%BF%E7%94%A8%E6%83%85%E5%A2%83-05-1024x644.jpg" alt="">
    <p>
        竹林小學的改造不僅讓學生享受學習，更是一場探索未來的旅程。與孩子一起一同穿越星辰大海，飛向無垠宇宙，讓夢想在星光下閃耀。
    </p>
    <br>
    <p>
        ｜設計公司｜3+2 Design Studio 
    </p>
</div>
    `,

    `
<div class="article">
    <h1 class="fw-bold">辦公室兼休憩場所的一樓街屋，生活與建築的關係半開放滲透出來</h1>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/LINE_ALBUM_58%E8%99%9F%E4%BD%8F%E5%AE%85%E5%8F%83%E8%80%83%E7%85%A7%E7%89%87_221227_2-1024x683.jpg" alt="">                   
    <p>
        門口的空心磚立面不經讓人駐足觀賞，這個位於東海藝術商圈附近的一樓老街屋，是楓川秀雅一家人的休憩書房，也是他們設計的<第58號住宅>。
    </p>
    <p>
        他們將原本的兩房改成了一房，拆除後面房間及頂板。剛好結構柱和管線柱在中央，就用來界定公私領域。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/LINE_ALBUM_58%E8%99%9F%E4%BD%8F%E5%AE%85%E5%8F%83%E8%80%83%E7%85%A7%E7%89%87_221227_0-1024x675.jpg" alt="">                   
    <p>
        前方退出了一個玄關，方便放置腳踏車或植栽，後方則建造了一個小庭院，種了台灣的山馬茶，拆除兩間房間後，光線可以順利進入室內，從進門處一路貫穿到後院，同時讓視覺感放到最大。小宅內推空間讓給玄關與後院是比較少見的作法，但在僅21坪的空間裡卻退了4坪出來，這是因為他們希望能與社區互動、讓孩子們能與自然親密接觸。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/LINE_ALBUM_58%E8%99%9F%E4%BD%8F%E5%AE%85%E5%8F%83%E8%80%83%E7%85%A7%E7%89%87_221227_11-1024x683.jpg" alt="">                   
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/LINE_ALBUM_58%E8%99%9F%E4%BD%8F%E5%AE%85%E5%8F%83%E8%80%83%E7%85%A7%E7%89%87_221227_18-683x1024.jpg" alt="">  
    <p>
        延續自然的主題，在材質上面也挑選了、輕透的空間介質，空心磚立面是利用矽膠模灌纖維混擬土，直接呈現的原始建築質感，同時將內部的生活感滲透出來。空心磚也兼具作為收納用途，像是門口可以吊掛植物，廚房可以放置調味品。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/LINE_ALBUM_58%E8%99%9F%E4%BD%8F%E5%AE%85%E5%8F%83%E8%80%83%E7%85%A7%E7%89%87_221227_16-682x1024.jpg" alt="">
    <p>
        讓人好奇的是，空心磚立面如何被完成的。設計師提到，一般住宅的混擬土抗壓強度大約是4500磅，而空心磚的抗壓強度達10000磅，裡面拌有纖維、米糠、鐵絲以及碳纖維，他們花了兩年多嘗試，最終澆灌出了這道磚牆。
    </p>
    <div class="d-flex justify-content-between gap-2">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2024/12/LINE_ALBUM_58%E8%99%9F%E4%BD%8F%E5%AE%85%E5%8F%83%E8%80%83%E7%85%A7%E7%89%87_221227_15-1024x740.jpg" alt="">
        <img class="img-fluid mb-2 img-w-48" src="https://ru8studio.com/wp-content/uploads/2024/12/LINE_ALBUM_58%E8%99%9F%E4%BD%8F%E5%AE%85%E5%8F%83%E8%80%83%E7%85%A7%E7%89%87_221227_14-1024x740.jpg" alt="">
    </div>
    <p>
        一進屋可以聞到木頭香味，他們將許多木質元素放進空間中，像是主臥床架使用台灣紅檜、層架使用加拿大側柏。餐桌是寮國香杉板材製成的，桌腳利用建築常見的桁架、斜撐架構，支撐總長三米四左右的桌板。家人的互動都圍繞在這張餐桌，工作、寫作業，架起網子也能打乒乓球。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/LINE_ALBUM_58%E8%99%9F%E4%BD%8F%E5%AE%85%E5%8F%83%E8%80%83%E7%85%A7%E7%89%87_221227_13-1024x801.jpg" alt="">  
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/LINE_ALBUM_58%E8%99%9F%E4%BD%8F%E5%AE%85%E5%8F%83%E8%80%83%E7%85%A7%E7%89%87_221227_8-1024x683.jpgg" alt="">  
    <p>
        收納上以開放式為主，擺放蒐藏、書籍及孩子們的畫作。仍有一些衣物收納的需求，就在主臥設計一面衣櫃，並用一道四米長的實木格柵做為門片，拉門連接餐桌後方，當客人來訪需要乾淨的背景時，就可以把他拉過去使用。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/LINE_ALBUM_58%E8%99%9F%E4%BD%8F%E5%AE%85%E5%8F%83%E8%80%83%E7%85%A7%E7%89%87_221227_7-1024x761.jpg" alt="">  
    <p>
        經過許多案例的設計，這次他們設計自己的房子，打造了一處開放的空間，讓我們看到了更多生活的可能性。
    </p>
    <br>
    <p>
        設計公司｜<a href="https://www.instagram.com/fchy_arch/">楓川秀雅建築室內研究室</a>
    </p>
</div>
    `,

    `
<div class="article">
    <h1 class="fw-bold">旅外設計師返鄉回屏東深根，將設計結合在地創生，與當地居民、文化連結</h1>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/1-1-1024x941.jpg" alt=""> 
    <div class="border-custom">
        <h4><i>設計結合在地創生，與當地居民、文化連結</i></h4>        
    </div>         
    <p>
        2016年開始，許多觸及地方創生議題的活動在屏東盛行，這一年恰好也是拾五設計的仲凱與文珊返台。仲凱是在地屏東人、文珊是馬來西亞人，他們相識於西班牙，從他們的家可以看見不同文化背景交織出的痕跡。
    </p>
    </div>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/1-1024x941.jpg" alt="">                   
    <div class="border-custom">
        <h4><i>因應氣候善用材料特性，異材質堆疊空間層次</i></h4>        
    </div> 
    <p>
        他們說最想保留這個房子的採光與挑高優勢，格局上把原先4房改成2房，一樓規劃餐廚區與小孩房，二樓則是客廳、主臥與工作間。南台灣的天氣潮濕炎熱，他們善用了材料的本質，依特性適切地組合運用。像是櫃子使用樺木合板，硬度高耐濕氣，能適應悶熱的氣候；牆面選用礦物漆，吸濕排水不用擔心潮濕剝落的問題；沖孔版透氣讓光線得以穿透，並增加了空氣對流。二樓的隔牆用了布簾取代，為這個家增加了一些柔軟度，打開成為客廳的延伸，拉起來又能兼顧隱私。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/6-1024x683.jpg" alt="">                   
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/7-1024x683.jpg" alt="">  
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/20-1024x683.jpg" alt="">  
    <div class="border-custom">
        <h4><i>文化與過往經驗結合</i></h4>        
    </div>         
    <p>
        定錨在空間中心的餐桌，是他們一家三口最常待在一起的地方。桌腳靈感來自於台灣辦桌的「剪刀腳」，從日常生活取材，展現臺灣在地的筵席文化。一般辦桌是圓桌，桌腳可以開90度，長桌則在短邊加了洞洞板，加強穩固以外也增加收納的實用性。文珊分享，家中最不可或缺的單品就是吊扇，因為馬來西亞的天氣潮濕，通常會用吊扇來驅趕蚊子，剛好跟屏東氣候很像，就把它們也帶入了家裡。兩人曾在西班牙留學，也將所見的設計思維應用在家。台灣因為下雨通常會把窗簾裝在室內，西班牙會把竹簾裝在室外擋住日照跟熱氣，他們沿用這個思維，裝設在家中陽台，起到防曬的效果。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/4-1024x683.jpg" alt="">  
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/25-683x1024.jpg" alt="">  
    <div class="border-custom">
        <h4><i>文化與過往經驗結合</i></h4>        
    </div>
    <p>
        二樓工作間櫃子放了一幅瀨戶內藝術祭的畫作，背後是做在地創生的故事，仲凱與文珊分享，他們初回到屏東，便開始認識在屏東生活的年輕人，像是美菊麵店、大小港邊、繫。本屋，長安製麵…，藉由他們重新認識屏東，並影響設計的思考。期許未來的設計也能像這個家，透過時間的累積，慢慢的把多元的元素置入自己的空間當中，拼湊出只屬於他們的樣貌。
    </p>
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/18-1024x683.jpg" alt="">  
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/17-1024x683.jpg" alt="">  
    <img class="img-fluid mb-2 col-12" src="https://ru8studio.com/wp-content/uploads/2024/12/14-683x1024.jpg" alt="">
    <p>
        設計公司｜<a href="https://www.instagram.com/atelierboter/">拾五設計Atelier Boter</a>
        <br>
        圖片｜<a href="https://www.instagram.com/linkerker/">林科呈• James Lin</a> 
    </p>    
        
</div>
    `,

    `
    <h1 class="fw-bold">旅外設計</h1>
    <img class="img-fluid mb-2" src="https://ru8studio.com/wp-content/uploads/2024/12/1-1-1024x941.jpg" alt="">                   
    <p>
        2016年開始，許多觸及地方創生議題的活動在屏東盛行，這一年恰好也是拾五設計的仲凱與文珊返台。仲凱是在地屏東人、文珊是馬來西亞人，他們相識於西班牙，從他們的家可以看見不同文化背景交織出的痕跡。
    </p>
    <img class="img-fluid mb-2" src="" alt="">                   
    <img class="img-fluid mb-2" src="" alt="">                   
    <img class="img-fluid mb-2" src="" alt="">  
</div>
    `
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
        name: "旅外設計師返鄉回屏東深根，將設計結合在地創生，與當地文化連結",
    },
    {
        img: "https://ru8studio.com/wp-content/uploads/2024/12/1-1-1024x941.jpg",
        name: "旅外設計師返鄉回屏東深根，將設計結合在地創生，與當地居民、文化連結",
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
                <a href="./index_article.html?id=${currentIndex - 1}" ${currentIndex === 0 ? 'style="pointer-events: none; display:none;"' : ''}>← 上一篇 文章</a>
            </h5>
        </button>
        <button class="col-6 btn nextLink" ${currentIndex >= cards.length - 1 ? 'disabled' : ''}>
            <h5 class="text-end">
                <a href="./index_article.html?id=${currentIndex + 1}" ${currentIndex >= cards.length - 1 ? 'style="pointer-events: none; display:none;"' : ''}>下一篇 文章 →</a>
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
                <a href="./index_article.html?id=${i}">
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
        <button class="btn btn-danger btn-sm float-end" onclick="deleteComment(${index})">刪除</button>
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