document.addEventListener("DOMContentLoaded", function () {
    axios.all([axios.get("/markdown/news.md"),
            axios.get("/markdown/research.md"),
            axios.get("/markdown/publication.md"),
            axios.get("/markdown/recognition.md"),
            axios.get("/markdown/services.md"),
            axios.get("/markdown/teaching.md"),
            axios.get("/markdown/positions.md")
        ])
        .then(axios.spread((firstResponse, secondResponse, thirdResponse, forthResponse, fifthResponse, sixthResponse, seventhResponse) => {
            var md = new window.markdownit("commonmark", {html: true, breaks: true, linkify: true, typographer: true});


            var elem1 = document.querySelector('#news-container');
            var html1 = md.render(firstResponse.data);;
            elem1.innerHTML = html1;

            console.log(html1);
            var elem2 = document.querySelector('#research-container');
            var html2 = md.render(secondResponse.data);;
            elem2.innerHTML = html2;

            var elem3 = document.querySelector('#publication-container');
            var html3 = md.render(thirdResponse.data);;
            elem3.innerHTML = html3;

            var elem4 = document.querySelector('#recognition-container');
            var html4 = md.render(forthResponse.data);;
            elem4.innerHTML = html4;

            var elem5 = document.querySelector('#services-container');
            var html5 = md.render(fifthResponse.data);;
            elem5.innerHTML = html5;

            var elem6 = document.querySelector('#teaching-container');
            var html6 = md.render(sixthResponse.data);;
            elem6.innerHTML = html6;

            var elem7 = document.querySelector('#positions-container');
            var html7 = md.render(seventhResponse.data);;
            elem7.innerHTML = html7;
        }))
        .catch(error => console.log(error));
}, false);
