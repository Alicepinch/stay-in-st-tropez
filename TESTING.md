# Testing

During the building process of this website I was regularly checking Developer tools and the WS3 code validators to test the responsiveness and performance of the website. I also made sure to check all my Javascript using JShint throughout to ensure no major errors. Below is all the testing I ran and all of the changes that I made to improve on any issues that I encountered. 

### Lighthouse:
---

Throughout the building process I checked my website's performance using lighthouse in the developer tools. To improve the different reports I looked at the google suggestions.

- In order to improve best practices I added rel=noopener to all a links.
- To improve performance I compressed all images using TinyPNG.
- To improve accessibility I added 'aria-lables' to all links and alt attributes to all images. 

[Lighthouse Results](/docs/testing/)

### Link Testing:
---

All links have been tested to ensure for the best UX.

- Navigation links all anchor link to their respective sections on the page. 
- All external links were checked and are opened in a new tab. 
- The 'contact' link within the explore section anchor links to the form at the bottom of the page. 
- Phone numbers were checked and when clicked the option to call the number correctly appeared correctly in browser and on phone.

When testing the instagram, twitter, facebook and pinterest links these all open in a new tab to the social media homepages. This is expected behaviour for now as Stay In St Tropez doesnt have its own pages on these platforms. 

### Button Testing
---

All buttons have been tested and are reacting in the correct way. 

- The 'Scroll to top' CTA displays displays when the user has scrolled down 40px on the page in the bottom right corner. This takes the customer to the top of the page and is reacting in the correct way. 

- The 'Watch Video' CTA displays a youtube video to customers onclick, once open the button text changes to 'Hide Video' and have the 'active' class added. When closed the button goes back to it's original state.

- The 'More Details' CTA's display more details onclick. once opened the button text also changes to 'Hide Details' and has the 'active' class added. When closed the button goes back to it's original state.

- The explore buttons (Beaches, Restaurants, Vineyards and Hotels) when clicked, all display different markers on the map and zoom into different locations. 

When testing I noticed that there was no sign to the customer as to which button was clicked. In order to fix this I added a JS function to add the active class to these buttons on click as well.

``` 
Add code solution here 
```

#### Debugging and checking the console:



#### WS3 Validator:

Throughout the building process of the Stay In St Tropez website, the code was run through the WS3 HTML & CSS validators. When doing the final checks there were no issues with the code. The only errors that will occur if the HTML is passed through will be from the comments used in the code. 

#### JS Hint

I ran my code through the JS Hint validator to check there were no mayjor issues with my Javascript code.

#### Form Testing:

The contact us form has been tested with different scenarios.

- When an empty form was submitted > The webpage promted me to fill in the first mandatory field. 
   - I then filled each form field in one after another with submitting after each one to check that all required form fields were working until a succesful form was submitted. 
- The form was filled in with a invalid email address (missing ".co.uk"). The webpage promted me to enter a real email address.
- When testing the 'subject' field was not mandatory so this was fixed during testing.
- After fixing this, when all form fields were completed correctly the form was submitted succesfully and an alert promted that the form has been submitted.
- The send button also updates to "Message Sent" and the form fields returned to empty when the form was sent.
- To ensure that the emailJS form functionality was working correctly, I linked this to my personal email so that I could check the inquiries that come through.

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

#### Usability Testing:

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

This has also been run through [Ami Responsive](http://ami.responsivedesign.is/)and checked with developer tools regularly to ensure that the website is responsive.

Tthis link has also been sent out to family and friends to check both the UX and responsiveness. 

### User Stories Tested:
---




