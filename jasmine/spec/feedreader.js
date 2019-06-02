// feedreader.js

$(document).ready(function () {


    describe('RSS Feeds', function () {

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* check each feed in allFeeds array to have url define and not empty
         */

        it('url defined', function () {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toEqual(0);
            });
        });


        /* check each feed in allFeeds array to have name define and not empty
         */

        it('name defined', function () {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toEqual(0);
            });
        });
    });


    describe('The menu', function () {

        var menuElement;
        var pageBody;

        // this function will get all the elements needed in this suite using DOM
        beforeEach(function () {
            menuElement = document.getElementsByClassName('slide-menu');
            pageBody = document.getElementsByTagName("body")[0];
            menuIcon = $('.menu-icon-link');
        });


        /* check the page's body element to have menu-hidden class by default which will 
         * ensure that the menu is hidden
         */
        it('menu hidden', function () {
            expect(pageBody.classList.contains('menu-hidden')).toBe(true);
        })

        /* test to check if the menu is hidden/shown when the menu icon is clicked 
         */

        it('menu changes', function () {
            //click the button
            menuIcon.trigger('click');
            // make sure the body doesn't have "menu-hidden" class
            expect(pageBody.classList.length).toBe(0);
            expect(pageBody.classList.contains('menu-hidden')).toBe(false);

            // click the button again
            menuIcon.trigger('click');
            // make sure the body has "menu-hidden" class
            expect(pageBody.classList.length).toBe(1);
            expect(pageBody.classList.contains('menu-hidden')).toBe(true);

        });
    });

    describe('Initial Entries', function () {

        var feedElement;

        beforeEach(function () {
            feedElement = $('.feed');
            feedEntry = document.querySelectorAll('.entry-link');
            console.log(feedEntry);
        });

        /* making sure that the feed container has at least one feed loaded
         */
        it('feed is not empty', function () {
            expect(feedEntry.length).not.toEqual(0);
        });

    });

    describe('New Feed Selection', function () {

    
        //load the first feed and save it before the test
        beforeEach(function(done) {
            //called the async function to save the first feed
            loadFeed(0, function() {
              //first feed saved
              firstFeed = $(".feed .entry")[0].innerText;
              loadFeed(1, function() {
                changedFeed = $(".feed .entry")[0].innerText;
                done();
              });
            });
          });
    

        it('new feed is loaded', function () {
            //checking if the two feeds are different
            expect(firstFeed).not.toBe(changedFeed);
        });
    });



});