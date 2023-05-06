const loadNews = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => displayNews(data.data));
  }


 let activeSection;

function home() {
  const all = document.getElementById('all-news');
  const home = document.getElementById('home');
  if (activeSection) {
    activeSection.classList.remove('nav-section-colors');
  }
  document.getElementById('break').classList.remove('nav-section-colors');
  document.getElementById('regular').classList.remove('nav-section-colors');

  home.classList.add('nav-section-colors');
  all.innerHTML = '';
  const url = `https://openapi.programming-hero.com/api/news/category/01`;
  loadNews(url);
  activeSection = home;
}

function breaking() {
  const all = document.getElementById('all-news');
  const breakSection = document.getElementById('break');
  if (activeSection) {
    activeSection.classList.remove('nav-section-colors');
  }
  document.getElementById('home').classList.remove('nav-section-colors');
  document.getElementById('regular').classList.remove('nav-section-colors');

  breakSection.classList.add('nav-section-colors');
  all.innerHTML = '';
  const url = `https://openapi.programming-hero.com/api/news/category/02`;
  loadNews(url);
  activeSection = breakSection;
}

function regularNews() {
  const all = document.getElementById('all-news');
  const regular = document.getElementById('regular');
  if (activeSection) {
    activeSection.classList.remove('nav-section-colors');
  }
  document.getElementById('home').classList.remove('nav-section-colors');
  document.getElementById('break').classList.remove('nav-section-colors');

  regular.classList.add('nav-section-colors');
  all.innerHTML = '';
  const url = `https://openapi.programming-hero.com/api/news/category/03`;
  loadNews(url);
  activeSection = regular;
}



function internationalNews() {
    const all = document.getElementById('all-news');
    const international = document.getElementById('international');
    if (activeSection) {
      activeSection.classList.remove('nav-section-colors');
    }
    document.getElementById('home').classList.remove('nav-section-colors');
    document.getElementById('break').classList.remove('nav-section-colors');
    document.getElementById('regular').classList.remove('nav-section-colors');
  
    international.classList.add('nav-section-colors');
    all.innerHTML = '';
    const url = `https://openapi.programming-hero.com/api/news/category/04`;
    loadNews(url);
    activeSection = international;
  }
function sports() {
    const all = document.getElementById('all-news');
    const sports = document.getElementById('sports');
    if (activeSection) {
      activeSection.classList.remove('nav-section-colors');
    }
    document.getElementById('home').classList.remove('nav-section-colors');
    document.getElementById('break').classList.remove('nav-section-colors');
    document.getElementById('regular').classList.remove('nav-section-colors');
    sports.classList.add('nav-section-colors');
  
    
    all.innerHTML = '';
    const url = `https://openapi.programming-hero.com/api/news/category/05`;
    loadNews(url);
    activeSection = sports;
  }
  
function culture() {
    const all = document.getElementById('all-news');
    const culcture = document.getElementById('culcture');
    if (activeSection) {
      activeSection.classList.remove('nav-section-colors');
    }
    document.getElementById('home').classList.remove('nav-section-colors');
    document.getElementById('break').classList.remove('nav-section-colors');
    document.getElementById('regular').classList.remove('nav-section-colors');
    document.getElementById('sports').classList.remove('nav-section-colors');
    culcture.classList.add('nav-section-colors');
  
    
    all.innerHTML = '';
    const url = `https://openapi.programming-hero.com/api/news/category/06`;
    loadNews(url);
    activeSection = culcture;
  }
function arts() {
    const all = document.getElementById('all-news');
    const arts = document.getElementById('arts');
    if (activeSection) {
      activeSection.classList.remove('nav-section-colors');
    }
    document.getElementById('home').classList.remove('nav-section-colors');
    document.getElementById('break').classList.remove('nav-section-colors');
    document.getElementById('regular').classList.remove('nav-section-colors');
    document.getElementById('sports').classList.remove('nav-section-colors');
    arts.classList.add('nav-section-colors');
  
    
    all.innerHTML = '';
    const url = `https://openapi.programming-hero.com/api/news/category/07`;
    loadNews(url);
    activeSection = arts;
  }
function allNews1() {
    const all = document.getElementById('all-news');
    const allNews = document.getElementById('all-news1');
    if (activeSection) {
      activeSection.classList.remove('nav-section-colors');
    }
    document.getElementById('home').classList.remove('nav-section-colors');
    document.getElementById('break').classList.remove('nav-section-colors');
    document.getElementById('regular').classList.remove('nav-section-colors');
    document.getElementById('sports').classList.remove('nav-section-colors');
    document.getElementById('culcture').classList.remove('nav-section-colors');

    allNews.classList.add('nav-section-colors');
  
    
    all.innerHTML = '';
    const url = `https://openapi.programming-hero.com/api/news/category/08`;
    loadNews(url);
    activeSection = allNews;
  }
  



const displayNews = news => {
    const totalNewsLength = news.length;
    const totalFound = document.getElementById('total-item-found');
    totalFound.innerText = totalNewsLength;
    console.log(news);
    const newsDiv = document.getElementById('all-news');
    let html = '';
    news.forEach(newsAll => {
      html += `
        <div class="card mb-3" style="max-width: 1140px">
          <div class="row g-0">
            <div class="col-md-4 h-100">
              <img src="${newsAll.thumbnail_url}" class="img-fluid rounded-start" alt="${newsAll.title}" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${newsAll.title}</h5>
                <p class="card-text" style="color: #a8a8a8">${newsAll.short_description}</p>
                <p class="card-text mt-5" style="color: #a8a8a8">${newsAll.long_description}</p>
                <div class="mt-4">
                  <div style="margin-top: 120px; display: flex">
                    <img src="${newsAll.author.img}" style="height: 38px; width: 38px; border-radius: 24px" alt="${newsAll.author.name}" />
                    <div class="ms-2">
                      <span class="fw-bold">${newsAll.author.name}</span><br />
                      <span class="">${(newsAll.author.published_date)}</span>
                    </div>
                    <div class="" style="margin-left: 200px">
                      <i class="fa-sharp fa-solid fa-eye fw-bolder"></i>
                      <span>${newsAll.total_view}</span>
                    </div>
                    <div class="" style="margin-left: 200px">
                      <i style="color: #5d5fef" class="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    newsDiv.innerHTML = html;
  };
  const question = [
    {
      difference: `var and let create variables that can be reassigned another value.
    const creates "constant" variables that cannot be reassigned another value.`,
      question: `What is the difference between var, let, const`,
      img: "https://miro.medium.com/v2/resize:fit:1400/1*Ar-csKEfB3-kBE3pbV6ahA.jpeg",
      answer: `var and let create variables that can be reassigned another value. const creates "constant" variables that cannot be reassigned another value.`,
    },
    {
      difference: `var and let create variables that can be reassigned another value.
    const creates "constant" variables that cannot be reassigned another value.`,
      question: `What is the difference between Arrow function and Normal Function`,
      img: "https://jsonworld.com/content/uploads/image/arrow-functions-vs-regular-functions.jpg",
      answer: `arguments object inside the regular functions contains the arguments in an array-like object. The arrow function, on the opposite, doesn't define arguments (but you can easily access the arrow function arguments using a rest parameter ... args )`,
    },
    {
      difference: `var and let create variables that can be reassigned another value.
    const creates "constant" variables that cannot be reassigned another value.`,
      question: `Why should we use js template string`,
      img: "https://wesbos.com/static/f6c4acd96a3aafd5e1b0cc8710c9f776/76434/template-html.png",
      answer: `Template strings are a powerful feature of modern JavaScript released in ES6. It lets us insert/interpolate variables and expressions into strings without needing to concatenate like in older versions of JavaScript. It allows us to create strings that are complex and contain dynamic elements args )`,
    }
  ];
  
  console.log(question.length);
  const newsec = () => {
    const newsDiv = document.getElementById("all-news");
    newsDiv.innerHTML = '';
    const totalNewsLength = ''.length;
    const totalFound = document.getElementById('total-item-found');
    totalFound.innerText = totalNewsLength;
    document.getElementById('news-sec').classList.add('top-nav-section');
    document.getElementById('blog-sec').classList.remove('top-nav-section');
    const categoryNav = document.getElementById("category-nav");
    categoryNav.innerHTML = `    <div class="container-fluid">
    <div class="collapse navbar-collapse ms-1" id="navbarNav">
      <ul class="navbar-nav">
        <div class="d-flex container me-auto">
          <div class="ms-5">
            <li id="home" class="nav-item rounded">
              <a
                class="nav-link active"
                onclick="home()"
                aria-current="page"
                href="#"
                >Home</a
              >
            </li>
          </div>
          <div class="ms-5">
            <li class="nav-item" id="break">
              <a
                class="nav-link active"
                onclick="breaking()"
                aria-current="page"
                href="#"
                >Breaking news</a
              >
            </li>
          </div>
          <div class="ms-5">
            <li class="nav-item" id="regular">
              <a
                class="nav-link active"
                onclick="regularNews()"
                aria-current="page"
                href="#"
                >Regular news</a
              >
            </li>
          </div>
          <div class="ms-5">
            <li class="nav-item" id="international">
              <a
                class="nav-link active"
                onclick="internationalNews()"
                aria-current="page"
                href="#"
                >International news</a
              >
            </li>
          </div>
          <div class="ms-5">
            <li class="nav-item" id="sports">
              <a
                class="nav-link active"
                onclick="sports()"
                aria-current="page"
                href="#"
                >Sports</a
              >
            </li>
          </div>
          <div class="ms-5">
            <li class="nav-item" id="culcture">
              <a
                class="nav-link active"
                onclick="culture()"
                aria-current="page"
                href="#"
                >Culture</a
              >
            </li>
          </div>
          <div class="ms-5">
            <li class="nav-item" id="arts">
              <a
                class="nav-link active"
                onclick="arts()"
                aria-current="page"
                href="#"
                >Arts</a
              >
            </li>
          </div>
          <div class="ms-5">
            <li class="nav-item" id="all-news1">
              <a
                class="nav-link active"
                onclick="allNews1()"
                aria-current="page"
                href="#"
                >All news</a
              >
            </li>
          </div>
        </div>
      </ul>
    </div>
  </div>`;
  }
  const blogsec = () => {
    const newsDiv = document.getElementById("all-news");
    const categoryNav = document.getElementById("category-nav");
    categoryNav.innerHTML = '';
    newsDiv.innerHTML = '';
    document.getElementById('news-sec').classList.remove('top-nav-section');
    document.getElementById('blog-sec').classList.add('top-nav-section');
    const totalNewsLength = question.length;
    const totalFound = document.getElementById('total-item-found');
    totalFound.innerText = totalNewsLength;
  
    question.forEach((q) => {
      newsDiv.innerHTML += `
        <div class="card mb-3" style="max-width: 1140px">
          <div class="row g-0">
            <div class="col-md-4 h-100">
              <img src="${q.img}" class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${q.question}</h5>
                <p class="card-text" style="color: #a8a8a8">${q.answer}</p>
                <p class="card-text mt-5" style="color: #a8a8a8"></p>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  };
  

  

 

