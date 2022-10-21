# React Router Version 6
#### lesson 04
***


### Description

1. Now we would like to set op links for each of the workshops in the **Workshops** component.
   - import Link and wrap each workshop element in a Link tab.
   - each Link should navigate the user to the workshop id. (Tjek the json object in aps.js if in doubt.)
   - now if you go to the Workshops link in the browser, you should be able to click on each Workshop.
   - if you click on a workshop link you get our newly created error page. That's because we haven't defined the route yet.
2. Do we have to create an individual route for each Workshop??? Luckily we don't have to this. We make use of url parameters.
   - we need to be able to point to the url id for each workshop. Like if you click on the "3D Printing and Design" workshop, your url will
   look something like that, http://localhost:yourPort/workshops/3d-printing-and-design.
   - go to the main.jsx file and replace the path value with a colon and followed by workID.



### Browser Image

<figure>
    <img src ="src/assets/"
         alt ="cras table"
         width ="250"
         height ="250">
    <figcaption><em>Cars Table</em></figcaption>
</figure>

### Hints
- Link tab
- id: "homebuilding-and-3d-printing"
- path=":someID"
- http://localhost:yourPort/workshops/:workID











