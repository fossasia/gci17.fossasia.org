# FOSSASIA GCI 2017 Site
[![Build Status](https://travis-ci.org/fossasia/gci17.fossasia.org.svg?branch=gh-pages)](https://travis-ci.org/fossasia/gci17.fossasia.org)

## Adding a Mentor

To add a mentor open the file `mentors.yml` in `_data` folder and please maintain the following format *EXACTLY* (replacing values where indicated):

```yaml
- name: Mentor's name
  github: Mentor's Github username
  image: Mentor's image
  twitter: Mentor's Twitter id
  facebook: Mentor's Facebook id
  Linkedin: Mentor's Linkedin Page

  Geolocation (city or country: optional)
  lat: Mentor's latitude
  lng: Mentor's longitude
```
**IMPORTANT:**
- All images must be optimized before uploaded to the repository via commit or Pull Request. You may use any image optimizer of your choice.
- All images must be in `img/mentors`.
- The images should be 240 x 240 pixels.
- If you do not want to include your social media accounts or coordinates , please do not provide empty fields like `facebook:`.
- Avoid using contractions such as *can't, don't,* etc. If there is no choice (e.g. the name has single quote mark) put double quotes (`"`) around that part.

## Adding a Student
To add a student open the file  `students.yml` in `_data` folder and please maintain the following format *EXACTLY* (replacing values where indicated):
```yaml
- name: Student's name
  country: Student's country/region
  github: Student's Github username
  image: Student's image (or representation like a "nick" image)
  twitter: Student's Twitter id

**Optional** (Please ensure parents agree on sharing this data)
* facebook: Student's Facebook id
* Geolocation (Preferably do not share your exact location. If you really want to share it, share city)
  lat: Student's latitude
  lng: Student's longitude
```
**IMPORTANT:**
- All images must be optimized before uploaded to the repository via commit or Pull Request. You may use any image optimizer of your choice.
- All images must be in `img/students`.
- The images should be 240 x 240 pixels.
- If you do not want to include your social media accounts or coordinates , please do not provide empty fields like `facebook:`.
- Avoid using contractions such as *can't, don't,* etc. If there is no choice (e.g. the name has single quote mark) put double quotes (`"`) around that part.
## Adding a Student Project

To add a student project open the file  `student_projects.yml` in `_data` folder and please maintain the following format *EXACTLY* (replacing values where indicated):
```yaml
- name: Name of project
  github: Github repository of the project
  author: Name of the author of the project
  image: Logo of the project
```
**IMPORTANT:**
- All images must be optimized before uploaded to the repository via commit or Pull Request. You may use any image optimizer of your choice.
- All images must be in `img/projects`.
- The images should be 240 x 240 pixels.
- Avoid using contractions such as *can't, don't,* etc. If there is no choice (e.g. the name has single quote mark) put double quotes (`"`) around that part.

# Adding a page

To add a new page:
* Make a new top-level `.html` file (i.e. next to `index.html`) with the following format:
```html
---
permalink: <some permalink>
---
{% include header.html %}

<!-- your html, including any necessary stylesheet links or scripts -->

{% include footer.html %}
```
* Add a link in the nav bar (in `_includes/header.html`)

## Adding a Blog

To add a blog open the file `blogs.yml` in `_data` folder and please maintain the following format *EXACTLY* (replacing values where indicated):

```yaml
- url: URL to the blog
  title: Title of the blog
  img: Image of the blog
  author_name: Name of the author of the blog (most likely you)
```
**IMPORTANT:**
- All images must be optimized before uploaded to the repository via commit or Pull Request. You may use any image optimizer of your choice.
- All images must be in `img/blogs`.
- The images should be 240 x 240 pixels.
- Avoid using contractions such as *can't, don't,* etc. If there is no choice (e.g. the name has single quote mark) put double quotes (`"`) around that part.

## Installation Steps:
- [Local Setup on Windows](/installation_windows.md)
- [Local Setup on Linux](/installation_linux.md)
- [Local Setup on MacOS](/installation_macos.md)