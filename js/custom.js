function customScroller() {
    var windowWidth = $(window).width();
    if (windowWidth > 1024) {
        $('.animated-section, .single-page-content').each(function () {
            $(this).perfectScrollbar('update');
        });
    } else {
        $('.animated-section, .single-page-content').each(function () {
            $(this).perfectScrollbar('destroy');
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    axios.all([axios.get("./sections/home.md"),
            axios.get("./sections/news.md"),
            axios.get("./sections/research.md"),
            axios.get("./sections/publication.md"),
            axios.get("./sections/recognitions.md"),
            axios.get("./sections/services.md"),
            axios.get("./sections/teaching.md"),
            axios.get("./sections/team.md"),
            axios.get("./sections/positions.md"),
            axios.get("./sections/contact.md")
        ])
        .then(axios.spread((zeroResponse, firstResponse, secondResponse, thirdResponse, forthResponse, fifthResponse, sixthResponse, seventhResponse, eighthResponse, ninthResponse) => {
            var md = new window.markdownit("commonmark", {html: true, breaks: true, linkify: true, typographer: true});
            var mdAttr = window.markdownItAttrs;
            md.use(mdAttr);


            var elem0 = document.querySelector('#home-container');
            var html0 = md.render(zeroResponse.data);
            elem0.innerHTML = html0;

            var elem1 = document.querySelector('#news-container');
            var html1 = md.render(firstResponse.data);
            elem1.innerHTML = html1;

            var elem2 = document.querySelector('#research-container');
            var html2 = md.render(secondResponse.data);
            elem2.innerHTML = html2;

            var elem3 = document.querySelector('#publication-container');
            var html3 = md.render(thirdResponse.data);
            elem3.innerHTML = html3;

            var elem4 = document.querySelector('#recognitions-container');
            var html4 = md.render(forthResponse.data);
            elem4.innerHTML = html4;

            var elem5 = document.querySelector('#services-container');
            var html5 = md.render(fifthResponse.data);
            elem5.innerHTML = html5;

            var elem6 = document.querySelector('#teaching-container');
            var html6 = md.render(sixthResponse.data);
            elem6.innerHTML = html6;

            var elem7 = document.querySelector('#team-container');
            var html7 = md.render(seventhResponse.data);
            elem7.innerHTML = html7;

            var elem8 = document.querySelector('#positions-container');
            var html8 = md.render(eighthResponse.data);
            elem8.innerHTML = html8;

            var elem9 = document.querySelector('#contact-container');
            var html9 = md.render(ninthResponse.data);
            elem9.innerHTML = html9;


            customScroller();

            const tooltipTriggerListAjax = document.querySelectorAll('[data-bs-toggle="tooltip"]');
            const tooltipListAjax = [...tooltipTriggerListAjax].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
        }))
        .catch(error => console.log(error));
}, false);

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
