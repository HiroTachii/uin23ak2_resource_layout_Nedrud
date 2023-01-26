const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]
let categoryButton, categoryContent;

function makeElements(index){
    categoryButton = document.createElement("div");
    
    if(index.category === "HTML") {
        categoryButton.innerHTML = `<button class="activeB navbarButton">${index.category}</button>`;
    } else {
        categoryButton.innerHTML = `<button class="navbarButton">${index.category}</button>`;
    }

    document.getElementById("navbar").appendChild(categoryButton);
    categoryContent = document.createElement("section");
    
    categoryContent.innerHTML = `<h3>${index.category}</h3><p>${index.text}</p>
                                <ul>
                                <li><a href="${index.sources[0].url}">${index.sources[0].title}</a></li>
                                <li><a href="${index.sources[1].url}">${index.sources[1].title}</a></li>
                                <li><a href="${index.sources[2].url}">${index.sources[2].title}</a></li>
                                </ul>`;

    if(index.category === "HTML") {
        // https://stackoverflow.com/questions/5365428/how-does-s-g-replace-spaces-with-other-characters
        categoryContent.className = "activeS navbarContent " + index.category.replace(/\s+/g, '-').toLowerCase();
    } else {
        categoryContent.className = "navbarContent " + index.category.replace(/\s+/g, '-').toLowerCase();
    }

    document.getElementById("ressursOutput").appendChild(categoryContent);
}

resources.map(makeElements);

let navbarButtons = document.querySelectorAll(".navbarButton");
navbarButtons.forEach(function(index) {
    index.addEventListener("click", function(){
        if(index.classList.contains("activeB")){

        } else {
            let button = this.innerHTML.replace(/\s+/g, '-').toLowerCase()

            let activeButtons = document.querySelectorAll(".activeB")
            activeButtons.forEach(function(index){
                index.classList.remove("activeB")
            })
            let activeSections = document.querySelectorAll(".activeS")
            activeSections.forEach(function(index){
                index.classList.remove("activeS")
            })
            index.classList.add("activeB")
            document.getElementsByClassName(button)[0].classList.add("activeS")
        }
    })
})
