# Describing Test Code Assignment

Mobiquity Test Assigment for Juinor Front-end developer
Copyright by Oleksandr Kolva

## Technologies

1. I used React.js to build this single page application.
2. Use Route library to switching page

### What now not implemented but in process

Not implemented additiona information like characters, vehicles, planets, because this points has they're own API link.

My ideas on how I can implement features

<!-- API (https://swapi.dev/api) -->

1. Make one AJAX request for films "/films/" and then do again requests for each element
   in response, example: in film object make request for eacth one character:
   (/people/1/, /people/2/, /people/3/ ...) in characters array, same for vehicles: (/vehicle/1/ ...),
   and planetes: (/planet/1/ ...) etc.
   <!-- Bad decision because it needs send a lot of requests. -->
   
   <!-- ---------------------------------------------------------------------- -->
2. Same as in first point make one AJAX request for films, but make requests for
   characters (/people/1/ ...), vichecles: (/vehicle/1/ ...),
   planets (/planet/1/ ...), at the moment of clicking the link.
  <!-- Again bad desicion because a lot of request as in first point. -->

   <!-- ---------------------------------------------------------------------- -->
3. Make 3 big AJAX requests from API with all I needed information and then use them.
<!-- I think this is good desicion because better get big amount of information than big amount of requests -->
