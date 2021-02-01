# Testing

During the building process of this website I was regularly checking Developer tools, WS3 code validators to test the responsiveness and performance of the website and JShint to check for any mayjor errors in my Javascript. Below is all the testing I ran and all of the changes that I made to improve on any issues that I encountered. 

### Info Window
--- 

When building the Google Map API's and adding the markers, I was having an issue where the info window would remain open when another marker was selected. This wasnt the best UX for the customers so to fix this I added the below code into the event listener.

```
 google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
                if (currWindow != null) {
                    currWindow.close();
                }
                infoWindow.open(map, marker);
                currWindow = infoWindow;
            });

            var currWindow = null;

```

### Lighthouse:
---

Throughout the building process the website's performance was checked using lighthouse in the developer tools. To improve the different reports I looked at the google suggestions.

- In order to improve best practices I added rel=noopener to all a links.
- To improve performance I compressed all images using TinyPNG.
- To improve accessibility I added aria-lables and alt attributes to all links and images. 

[Lighthouse Results](/docs/testing/)

### Debugging and checking the console:
---

Throught the building process the console was checked to ensure no errors were displaying.

### Link Testing:
---

All links have been tested to ensure for the best UX.

- Navigation links all anchorlink to their respective sections on the page. 
- All external links are opened in a new tab. 
- The 'contact' link within the explore section anchor links to the form at the bottom of the page. 
- Phone numbers all give the option to call the numbers directly on phone and desktop.

When testing the instagram, twitter, facebook and pinterest links these all open in a new tab to the social media homepages. This is expected behaviour for now as Stay In St Tropez doesnt have its own pages on these platforms.  

### Button Testing
---

All buttons have been tested: 

- The 'Scroll to top' CTA displays displays when the user has scrolled down 40px on the page in the bottom right corner. This takes the customer to the top of the page and is reacting in the correct way. 

- The 'Watch Video' CTA displays a youtube video to customers onclick, once open the button text changes to 'Hide Video' and have the 'active' class added. When closed the button goes back to it's original state.

- The 'More Details' CTA's display more details onclick. once opened the button text also changes to 'Hide Details' and has the 'active' class added. When closed the button goes back to it's original state.

- The explore buttons (Beaches, Restaurants, Vineyards and Hotels) when clicked, all display different markers on the map and zoom into different locations. 

When testing I noticed that there was no sign to the customer as to which button was clicked. In order to fix this I added a focus style for the .map-button class.

``` 
.map-button:focus {
    background-color: #897261;
    color: #fff;
}

```

### External Tests:
---

#### WS3 Validator:

Throughout the building process of the Stay In St Tropez website, the code was run through the WS3 HTML & CSS validators. When doing the final checks there were no issues with the code. The only errors that will occur if the HTML is passed through will be from the comments used in the code. 

#### JS Hint

Javascript was ran through the JS Hint validator to check there were no mayjor issues with the code. No major issues were found.

### Form Testing:
---

The contact us form has been tested with different scenarios.

- When an empty form was submitted > The webpage promted me to fill in the first mandatory field. 
   - Each form field was filled in one after another with submitting after each one to check that all required form fields were working until a succesful form was submitted. 
- The form was filled in with a invalid email address (missing ".co.uk"). The webpage promted me to enter a real email address.
- When testing the 'subject' field was not mandatory so this was fixed during testing.
- After fixing this, when all form fields were completed correctly the form was submitted succesfully and an alert promted that the form has been submitted.
- The send button also updates to "Message Sent" and the form fields returned to empty when the form was sent.
- To ensure that the emailJS form functionality was working correctly, the form was linked to my personal email to check the inquiries that come through.

When testing the form I noticed that the form fields were still populated when pressing submit. In order to fix this I added in the following JS code to clear form fields:

``` 
    document.getElementById("subject").value = "";
    document.getElementById("email").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";  

```
- [Form submitted alert](docs/readme/stay-in-st-tropez-form-alert.png)
- [Form submit after](docs/readme/stay-in-st-tropez-form-after-submit.png)
- [emailJS form in inbox](docs/readme/stay-in-st-tropez-form-in-inbox.png)

### Usability Testing:
---

This website has been cross checked on the below devices and browsers to test responsiveness:
- Safari 
- Google Chrome
- Firefox 
- iPhone max
- iPhone 8
- iPad 
- 27inch screen
- Macbook Pro 13inch 
- Internet explorer
- Imac
- Microsoft edge

This has also been run through [Ami Responsive](http://ami.responsivedesign.is/)and checked with developer tools regularly to ensure that the website is responsive.

This link has also been sent out to family and friends to check both the UX and responsiveness. 

### User Stories Tested:
---

#### New User

- As a user I would like to explore the different Restaurants I can visit. 
 - A user is able to view a selection of different Restaurants when clicking on the 'Restaurants' CTA in the Explore section of the website. They will also be able to view our Top recommendation Restaurant in the section below. 
- As a user I would like to explore the different Beachs I can visit.

- As a user I would like to explore the different Vineyards I can visit.
- As a user I would like to explore the different Hotels I can stay if I visit.
- As a user I would like to be able to get in contact in case of further questions/information.
- As a user I would like to get a vibe of the area and gain some basic background information.

#### Returning User:

- As a returning user I would like to be able to get in contact for further information.
- As a returning user I would like to be able to view all of the current locations on the map/ and any new ones that may have been added. 
- As a returning user I would like to be able to access the details for different places to eat, visit or stay.




