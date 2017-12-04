# FOSSASIA GCI 2017 Site

[![Build Status](https://travis-ci.org/fossasia/gci17.fossasia.org.svg)](https://travis-ci.org/fossasia/gci17.fossasia.org)

# Adding a mentor

To add a mentor open the file `mentors.yml` in `_data` folder and please maintain the following format *EXACTLY* (replacing values where indicated):

```yaml
- name: Mentor's name
  github: Mentor's github username
  image: mentor's_image
  twitter: Mentor's twitter id
  facebook: Mentor's facebook id
  lat: Mentor's latitude
  lng: Mentor's longitude
```

**IMPORTANT:**

- All images must be optimized before uploaded to the repo via commit or PR. You may use any image optimizer of your choice.
- The images should be 240 x 240 pixels.
- Avoid using contractions such as *can't, don't,* etc. If there is no choice (e.g. the name has single quote mark) put double quotes (`"`) around that part.
- If you do not know the mentors' location, ask them to go to the official FOSSASIA geolocation website https://fossasia.github.io/geolocation and give you their latitude and longitude.

