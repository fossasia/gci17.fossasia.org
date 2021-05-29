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
- The images must be 240 x 240 pixels.
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
- The images must be 240 x 240 pixels.
- If you do not want to include your social media accounts or coordinates, please do not provide empty fields like `facebook:`.
- Avoid using contractions such as *can't, don't,* etc. If there is no choice (e.g. the name has single quote mark) put double quotes (`"`) around that part.


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
- The images must be 240 x 240 pixels. (Don't add any other!)
- Avoid using contractions such as *can't, don't,* etc. If there is no choice (e.g. the name has single quote mark) put double quotes (`"`) around that part.


## Adding a Video

To add a blog open the file `video.yml` in `_data` folder and please maintain the following format *EXACTLY* (replacing values where indicated):

```yaml
- url: URL to the video in YouTube 
  title: Title of the video
  img: Image of the video
  author_name: Name of the creator of the blog (most likely you)
```
**IMPORTANT:**
- All images must be optimized before uploaded to the repository via commit or Pull Request. You may use any image optimizer of your choice.
- All images must be in `img/video`.
- The images must be 240 x 240 pixels. (Don't add any other!)
- Avoid using contractions such as *can't, don't,* etc. If there is no choice (e.g. the name has single quote mark) put double quotes (`"`) around that part.
- Don't add URL to a YouTube channel, the URL must be to a video in YouTube.

## Adding a asciicast

To add a asciicast open the file `asciicast.yml` in `_data` folder and please maintain the following format *EXACTLY* (replacing values where indicated):

```yaml
- url: Add asciicast URL (https://asciinema.org/a/154686/)
  title: Title of asciicast
  imgurl: URL of image for asciicast
  maker: Maker of asciicast
```
**IMPORTANT:**
- Don't add any asciicasts or images about asciicasts into folders of site. You have to add only add URL of asciinema and URL of asciinema's image as above.
- You must use default image of asciicast as following. 
       	<b>" Your asciicast URL + .png " (ex:- https://asciinema.org/a/154686.png)</b>
- Avoid using contractions such as *can't, don't,* etc. If there is no choice (e.g. the name has single quote mark) put double quotes (`"`) around that part.
- Only add real name of asciicast that shows in your profile of `asciinema.org`.

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
- The images must be 240 x 240 pixels.
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

# Adding installation steps files in other languages.

- Copy installation files in English and paste them on same directory.
 The name must be like below,
  You must give same file name of english files with 2 or 3 letters that showing your language that contains in brackets.
  That 2 or 3 letters must be english letters.
  ex:- If it's you adding language is Sinhala you can use 'si' as following, 
  `installation_windows(si).md` 
- After translate (Only translating, the data on english files like URLs must be there as same.) those files to your language save them. 
- Finally add links of those installation files to the `README.md`.  

## Installation Steps:
- Local Setup on Windows 
    - [In English](/installation/installation_windows.md) 
    - [In Sinhala - සිංහලෙන්](/installation/installation_windows(sin).md)
    - [In Polish - Polski](/installation/installation_windows(pl).md)
    - [In French - Français](/installation/installation_windows(fr).md)
- Local Setup on Linux 
    - [In English](/installation/installation_linux.md)
    - [In Sinhala - සිංහලෙන්](/installation/installation_linux(sin).md) 
    - [In Polish - Polski](/installation/installation_linux(pl).md)
    - [In French - Français](/installation/installation_linux(fr).md)
- Local Setup on MacOS 
    - [In English](/installation/installation_macos.md)
    - [In Sinhala - සිංහලෙන්](/installation/installation_macos(sin).md) 
    - [In Polish - Polski](/installation/installation_macos(pl).md)
    - [In French - Français](/installation/installation_macos(fr).mukeshgirish

