<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<br />
<div align="center">
  <a href="https://github.com/KiarashS/XLab">
    <img src="img/doc/website.svg" alt="Logo" width="120" height="120">
  </a>

<h3 align="center">X-Lab's Website</h3>

  <p align="center">
    An awesome website for research labs
  </p>
</div>



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#useful-links">Useful Links</a></li>
      </ul>
    </li>
    <li><a href="#left-menu">Left Menu</a></li>
    <li>
      <a href="#sections">Sections</a>
      <ul>
        <li><a href="#home-section">Home Section</a></li>
        <li><a href="#news-section">News Section</a></li>
        <li><a href="#research-section">Research Section</a></li>
        <li><a href="#publication-section">Publication Section</a></li>
        <li><a href="#recognitions-section">Recognitions Section</a></li>
        <li><a href="#services-section">Services Section</a></li>
        <li><a href="#teaching-section">Teaching Section</a></li>
        <li><a href="#team-section">Team Section</a></li>
        <li><a href="#positions-section">Positions Section</a></li>
        <li><a href="#contact-section">Contact Section</a></li>
      </ul>
    </li>
    <li>
      <a href="#pages">Pages</a>
      <ul>
        <li><a href="#patents-page">Patents Page</a></li>
        <li><a href="#journal-page">Journal Page</a></li>
        <li><a href="#conferences-page">Conferences Page</a></li>
        <li><a href="#workshops-page">Workshops Page</a></li>
        <li><a href="#invited-papers-page">Invited Papers Page</a></li>
        <li><a href="#books-and-chapters-page">Books and Chapters Page</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<br />


## About The Project

[![Product Name Screen Shot][product-screenshot]](img/doc/screenshot.jpeg)

<p align="right">(<a href="#top">back to top</a>)</p>



## Getting Started

This document describes how you can use the website. This project includes three parts: **left menu**, **sections**, and **pages**.

### Useful Links

- Markdown Guide
  - https://www.markdownguide.org/basic-syntax/#reference-style-links
- Add classes, identifiers and attributes to your markdown
  - https://github.com/arve0/markdown-it-attrs
- Add block-level custom containers and Div tags to your markdown
  - https://github.com/markdown-it/markdown-it-container or https://github.com/kickscondor/markdown-it-div
- Add Span tags to your markdown
  - https://github.com/mb21/markdown-it-bracketed-spans
- Email Encoders
  - https://ctrlq.org/encode/
  - https://www.knechtology.com/stop-spam/email_encoder.html
- Use Bootstrap for styling your contents
  - https://getbootstrap.com/docs/
- Use Font Awesome for adding icons to your contents
  - https://fontawesome.com/search

<p align="right">(<a href="#top">back to top</a>)</p>

## Left Menu
You can edit `index.html` to update the left menu. To do this, please edit the contents inside `<header id="site_header" class="header mobile-menu-hide"> ... </header>` tag.

<p align="right">(<a href="#top">back to top</a>)</p>


## Sections

Sections are the main contents of the website. To edit each section, you must edit the corresponding markdown file in the `sections` folder.

_NOTE: You can use a combination of `HTML` and `MARKDOWN` in the markdown files._



### Home Section

You must edit the `sections/home.md` file to update the logo, title, and contents of the home section.

### News Section

You must edit the `sections/news.md` file to update the contents of the news section.

Follow up these steps to add news to your website:

1. Put this template below `<!--Put your news below this line -->` line in the `sections/news.md` file:
```
<div class="timeline timeline-second-style clearfix">
    <div class="timeline-item clearfix pb-3">
        <div class="left-part">
            <h5 class="item-period"><b>{{DATE}}</b></h5>
            <span class="item-company"><span class="badge bg-success"><i class="fa-regular fa-newspaper"></i> <b>{{TYPE}}</b></span></span>
        </div>
        <div class="divider"></div>
        <div class="right-part">
            <h4 class="item-title"><b>{{TITLE}}</b></h4>
            <p><b>{{DETAIL}}</b></p>
        </div>
    </div>
</div>
```
2. Replace `{{DATE}}`, `{{TYPE}}`, `{{TITLE}}`, and `{{DETAIL}}` variables with your contents.
3. To change the color of the `{{TYPE}}` variable, please replace `<span class="badge bg-success"> ... </span>` with an another color from https://getbootstrap.com/docs/5.2/components/badge/#background-colors
4. To change the icon of the `{{TYPE}}` variable, please replace `<i class="fa-regular fa-newspaper"></i>` with a new icon from https://fontawesome.com/search


_NOTE: The `{{DETAIL}}` variable is optional. Therefore, if your news hasn't `{{DETAIL}}` variable, you must remove `<p>{{DETAIL}}</p>`._

### Research Section

You must edit the `sections/research.md` file to update the contents of the research section.

### Publication Section

This section includes some sub-sections. To create a new sub-section, you must put the following template below `<!--Put your item below this line -->` line in the `sections/publication.md` file and change the variables (`{{...}}`) based on your needs:

```
<div class="col mt-3">
    <div class="card" style="width: 13rem;">
        <img src="./img/{{ICON_FILE}}.svg" class="card-img-top" alt="{{ALT_TEXT}}" style="padding: 1rem;" title="{{TITLE_TEXT}}">
        <div class="card-body text-center">
            <a href="pages/{{PAGE_NAME}}.html" class="btn btn-primary ajax-page-load" style="font-size: .85em;">{{BUTTON_TEXT}}</a>
        </div>
    </div>
</div>
```

_NOTE: Edit variables (`{{...}}`) based on your needs._

_NOTE2: To create a new page, create a new `HTML file (*.html)` in `pages` folder and replace its name with `{{PAGE_NAME}}` variable._

### Recognitions Section

You must edit the `sections/recognitions.md` file to update the contents of the recognitions section.

To add a new accordion item, please put the following template below `<!-- Put the accordion item below this line -->` line in the `sections/recognitions.md` file:

```
<div class="accordion-item">
  <h2 class="accordion-header" id="{{ACCORDION_ID}}">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#{{CONTAINER_ID}}" aria-expanded="true" aria-controls="{{CONTAINER_ID}}">
      {{TITLE}}
    </button>
  </h2>
  <div id="{{CONTAINER_ID}}" class="accordion-collapse collapse" aria-labelledby="{{ACCORDION_ID}}" data-bs-parent="#recognitionsAccordion">
    <div class="accordion-body">

{{CONTENT}}
    </div>
  </div>
</div>
```

_NOTE: Edit variables (`{{...}}`) based on your needs._

_NOTE2: You must replace your content with `{{CONTENT}}` variable. The content can be a `MARKDOWN` or `HTML`._

### Services Section

You must edit the `sections/services.md` file to update the contents of the services section.

To add a new accordion item, please put the following template below `<!-- Put the accordion item below this line -->` line in the `sections/services.md` file:

```
<div class="accordion-item">
  <h2 class="accordion-header" id="{{ACCORDION_ID}}">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#{{CONTAINER_ID}}" aria-expanded="true" aria-controls="{{CONTAINER_ID}}">
      {{TITLE}}
    </button>
  </h2>
  <div id="{{CONTAINER_ID}}" class="accordion-collapse collapse" aria-labelledby="{{ACCORDION_ID}}" data-bs-parent="#recognitionsAccordion">
    <div class="accordion-body">

{{CONTENT}}
    </div>
  </div>
</div>
```

_NOTE: Edit variables (`{{...}}`) based on your needs._

_NOTE2: You must replace your content with `{{CONTENT}}` variable. The content can be a `MARKDOWN` or `HTML`._

### Teaching Section

You must edit the `sections/teaching.md` to update the contents of the teaching section.

To add a new course, please put the following template below `<!-- Put your course below this line -->` line in the `sections/teaching.md` file:

```
<tr>
  <th scope="row">{{COURSE_NUMBER}}</th>
  <td>{{COURSE_NAME}}</td>
  <td>{{SEMESTERS}}</td>
  <td>{{LOCATION}}</td>
</tr>
```

_NOTE: Edit variables (`{{...}}`) based on your needs._

### Team Section

You must edit the `sections/team.md` to update the contents of the teaching section.

To create a new block in the team page, please use the following template in the `sections/team.md` file:

```
<div class="text-center"><div class="block-title"><h3>{{BLOCK_TITLE}}</h3></div></div>
  <div class="row row-cols-auto g-4 justify-content-center">
    <!-- Put the new member item below this line -->

  </div>
</div>
```

To add a new team member, please put the following template below `<!-- Put the new member item below this line -->` line in the top template or `inside the blocks` in the `sections/team.md` file: 

```
<div class="col">
  <div class="card-team">
    <img src="./img/team/{{PERSON_DISPLAY_PHOTO_NAME}}" />
    <div class="info">
      <h1>{{FULL_NAME}}</h1>
      <p>{{MEMBER_TITLE}}</p><a href="{{PERSONAL_URL}}" target="_blank">{{URL_TEXT}} <i class="fa-solid fa-caret-right"></i></a> <span data-bs-toggle="tooltip" data-bs-html="true" data-bs-custom-class="custom-info-tooltip" title="<p class='text-left text-warning'>{{ENCODED_EMAIL_ADDRESS}}</p><hr class='mt-0'><p class='text-left'>{{INFO}}</em></p>" class="info-button d-inline-block float-end"><i class="fa-solid fa-circle-info fa-lg fa-beat-fade" style="--fa-beat-fade-opacity: 0.67; --fa-beat-fade-scale: 1.075;"></i></span>
    </div>
  </div>
</div>
```

_NOTE1: `{{BLOCK_TITLE}}` variable is title of a block, for example: Ph.D. Students, Master Students, etc._

_NOTE2: `{{PERSON_DISPLAY_PHOTO_NAME}}` must be equivalent to **full name** of a person's photo which is uploaded in `img/team/` folder._

_NOTE3: If a person hasn't any of the `{{PERSONAL_URL}}` or `{{INFO}}` variables, please remove them from the template accordingly._

_NOTE4: You should encode a person's email by https://ctrlq.org/encode/ and replace it with `{{ENCODED_EMAIL_ADDRESS}}` variable._

### Positions Section

You must edit the `sections/positions.md` file to update the contents of the positions section.

### Contact Section

You must edit the `sections/contact.md` file to update the contents of the contact section.

_NOTE: Please encode your email by one of the `Email Encoders` to prevent spam._


<p align="right">(<a href="#top">back to top</a>)</p>


## Pages
Pages contain some contents, which can be loaded by ajax calls, for example, when a user clicks on a button. Please check the `Publication` section for a live example.

Pages must be an `HTML` file.

### Patents Page
To add a new item to the patents page, you can put the item as a `<li>...</li>` tag below `<!-- Add a new item below this line -->` line in the `pages/patents.html` file.

### Journal Page
You must edit the `pages/journal.html` file to update the contents of the journal page.

To add a new paper, please put the following template below `<!-- Put your paper below this line -->` line in the `pages/journal.html` file:

```
<div class="row stacked-list">
    <div class="col-sm-12 col-md-12 portfolio-block pt-0">
        <div class="certificate-item clearfix mb-0 radius-0">
            <div class="certi-logo radius-0 p-0 width-200">
                <a href="./img/publications/journals/{{PAPER_PHOTO}}" target="_blank"><img src="./img/publications/journals/{{PAPER_PHOTO}}" alt="logo"></a>
            </div>

            <div class="certi-content">
                <div class="certi-title">
                    <h4>{{PAPER_REFERENCE}}</h4>
                </div>
            </div>
        </div>
    </div>
</div>
```

_NOTE1: Edit variables (`{{...}}`) based on your needs._

_NOTE2: `{{PAPER_PHOTO}}` must be equivalent to **full name** of a paper's photo, which is uploaded in the`img/publications/journals/` folder._


### Conferences Page
To add a new item to the conferences page, you can put the item as a `<li>...</li>` tag below `<!-- Add a new item below this line -->` line in the `pages/conferences.html` file.

### Workshops Page
To add a new item to the workshops page, you can put the item as a `<li>...</li>` tag below `<!-- Add a new item below this line -->` line in the `pages/workshops.html` file.

### Invited Papers Page
To add a new item to the invited papers page, you can put the item as a `<li>...</li>` tag below `<!-- Add a new item below this line -->` line in the `pages/invitedpapers.html` file.

### Books and Chapters page
To add a new item to the books and chapters page, you can put the item as a `<li>...</li>` tag below `<!-- Add a new item below this line -->` line in the `pages/bookchapters.html` file.


<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the Apache License 2.0. See the `LICENSE` file for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


## Contact

Project Link: [https://github.com/KiarashS/XLab](https://github.com/KiarashS/XLab)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: img/doc/screenshot.jpeg
