# React Router Version 6
#### lesson 05
***


### Description

1. In lesson 4 we created a route to match URLs like workshop/education-and-training or workshop/keynote using 
the workID param in our nested route. You can use that information to perform various actions within the Workshop
component. Like find and display the workshop name and sessions. So how do we access this dynamic portion of the 
URL from inside the workshop component? Just like React, react-router also has some hooks at his disposal. Like useParams().
   - go to the workshop component and import the useParams into the "react-router-dom".
   - the useParams() returns an object. Create a constant variable to pass the useParam object into. 
   - use the console.log to see the object in the browser developer tool when clicking on a Workshop Category.
2. With the information we're getting from the useParam hook, we are now able to show the user a description for each
of the workshops.
   - Import the getWorkshop() function from the api.js file into the Workshop component.
   - Have a look at the getWorkshop() function, what parameters does it expect to receive?
   - use the return value from the function to replace the h2 tag with the workshop name.
3. Underneath the h2 tag create a unsorted list inclusive the className="workshop-list". Here we want to display
a list with two paragraph tags. The first one showing the workshop name and the other one the speaker name 
and speaker organisation. Again, have a look at the json objects in api.js if in doubt!
   - look at the object from the getWorkshop() function. There you will find an array.
   - loop through the array, to create a list with the above-mentioned information.



### Browser Image

<figure>
    <img src ="src/assets/"
         alt ="cras table"
         width ="250"
         height ="250">
    <figcaption><em>Cars Table</em></figcaption>
</figure>

### Hints
- export function getWorkshop(workId) 
- remember each list needs a unique key
- ul, li, p
- map()











