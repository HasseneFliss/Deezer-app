# Deezer Music Database Application

[![CircleCI](https://circleci.com/gh/FRossouw/Deezer-app.svg?style=svg)](https://circleci.com/gh/FRossouw/Deezer-app)

## Introduction
This application pulls artist data from the Deezer music database, then displays this information in an easy to understand format.

A user can:
* Search for an artist of their choice.
* Click on an artist to view their details:
    * View the artists top five tracks.
    * View the albums the artist released.

Project assignment details:
https://github.com/DVT/musicdb-app-angular

### Website Hosting URL
Access this application at this website:
https://deezer-6cd6d.firebaseapp.com

### Resources Used
1.  Project CI CD Pipeline:
    * Circle CI
    * https://circleci.com/dashboard

2.  Deezer developers API for data:
    * https://developers.deezer.com
    * Same origin restriction on certain browsers: https://cors-anywhere.herokuapp.com/ 

3. Angular 8 was used as the project scaffolding:

    1.  The styling which was used for the porject: 
        * SCSS

    2.  The models which were used:
        * Album
        * Albums
        * Artist
        * Track
        * Tracklist
    3.  The components which were used:
        * albums
        * artist
        * artists
        * artist-details
        * loading
        * page-not-found
        * track
        * tracklist

    4.  The services which were used:
        * album service
            - Retrieves information about all albums an artist has
        * artist service
            - Retrieves information about various or single artists
        * tracklist service
            - Retrieves the top five tracks of a specific artist

    5.  The pipes which were used:
        * duration-formatter
            - Formats the duration of each track in a time format
        * fan-formatter
            - Formats the amount of fans each artist has to a numerical M, K, or single fan
