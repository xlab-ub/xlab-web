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
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#left-menu">Left Menu</a></li>
    <li>
      <a href="#sections">Sections</a>
      <ul>
        <li><a href="#home-section">Home Section</a></li>
        <li><a href="#news-section">News Section</a></li>
        <li><a href="#research-section">Research Section</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<br />


## About The Project

[![Product Name Screen Shot][product-screenshot]](#)

<p align="right">(<a href="#top">back to top</a>)</p>



## Getting Started

This document describes how you may use the website to publish your contents. This project includes three parts: **left menu**, **sections**, and **pages**.

### Prerequisites

- Markdown Guide
  - https://www.markdownguide.org/basic-syntax/#reference-style-links
- Add classes, identifiers and attributes to your markdown
  - https://github.com/arve0/markdown-it-attrs
- Email encoders
  - https://ctrlq.org/encode/
  - https://www.knechtology.com/stop-spam/email_encoder.html
- Using Bootstrap for styling your contents
  - https://getbootstrap.com/docs/


<p align="right">(<a href="#top">back to top</a>)</p>

## Left Menu
You can edit `index.html` to change the left menu.

<p align="right">(<a href="#top">back to top</a>)</p>


## Sections

Sections are the main contents of the website. To edit each section, you must edit the corresponding markdown file in the `sections` folder.

_NOTE: You can use a combination of `HTML` and `MARKDOWN` in the markdown files._



### Home Section

You must edit the `sections/home.md` to update the logo, title, and contents of the home section.


### News Section

You must edit the `sections/news.md` to update the contents of the news section.

Follow up these steps to add a news to your website:

1. Add this template below `<!--Ad your news to here -->` line
```
<div class="timeline timeline-second-style clearfix">
    <div class="timeline-item clearfix">
        <div class="left-part">
            <h5 class="item-period">{DATE}</h5>
            <span class="item-company"><span class="badge bg-success"><i class="fa-regular fa-newspaper"></i> {TYPE}</span></span>
        </div>
        <div class="divider"></div>
        <div class="right-part">
            <h4 class="item-title">{TITLE}</h4>
            <p>{DETAIL}</p>
        </div>
    </div>
</div>
```
2. Replace `{DATE}`, `{TYPE}`, `{TITLE}`, and `{DETAIL}` variables with your own contents.

NOTE: The `{DETAIL}` variable is optional. Therefore, if your news hasn't `{DETAIL}` variable, you must remove `<p>{DETAIL}</p>`.


### Research Section

You must edit the `sections/research.md` to update the contents of the research section.


<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Project Link: [https://github.com/KiarashS/XLab](https://github.com/KiarashS/XLab)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: img/doc/screenshot.jpeg
