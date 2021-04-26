# Facebook_Clone_UPDATED_Personal_Project

![gmail](https://gifyu.com/image/tfp4)

# Hosting URL:
https://facebook-clone-personal-6061d.web.app

# TECH used in my Facebook Clone Personal Project build

1) React + React Hooks
2) React context API --> REDUX pattern
3) React flip move
4) Google Authentication (Email + Password)
5) Material UI
6) Flexbox
7) Firebase's Firestore realtime Database
8) Firebase Hosting
9) Firebase Google Authentication (Full login!)

# Steps to deploy my project using firebase

1) npm install -g firebase-tools
2) firebase init (hosting > build > y > n)
3) npm run build
4) firebase use "project id"
5) firebase deploy
6) To rerun the build, repeat step 3 and run step 5 to "firebase deploy --only hosting" (front-end) instead of "firebase deploy" 


# My personal notes in developing this facebook clone project:
## Make use of Widgets.js from facebook clone app

The reason why we delete some files is because we don't actually want anything on our build initially
we want like a clean canvas. Image you're about to paint something, you don't want anything on your
canvas. You want it to be completely clean. That's why we go ahead and delete those files

firebase.js file - we are going to be needing this file and this config file to actually go ahead and
set everything up later on.

## Is it safe to put your firebase config in the frontend?

It is completely safe to do it as firebase has some protective security measures in place

Material-ui - is a library for css and the cool thing about it is that it's one of the most popular
css libraries. It brings really pristine really nice and clean icons that develipers can use. We can
get the snippets of code and then you can start using them on your projects 

flex - It will make everything go into a row

15px 20px; - 15px is top and bottom, 20 on left and right

justify-content: space-between - push all the elements apart from each other 


Bootstrap - it's very good if you have a lot of clients and you just need to get work out. You have
two problems with bootstrap in my opinion, one i tend to wrestle with it when i'm using flexbox.
I just prefer to use straight up flexbox as i can get the exact design i want as opposted to like near
the design that i want. Also the second thing is bootstrap kinda has a look to it like i know when 
a website's built with bootstrap whereas you just built it with just pure flexbox it has like a custom
clean finish to it.

Angular is a framework and React is a library. React is much easier to learn as it's much lighter weight
. It's also very performant and it's very fast. Your entry to get into the career is much easier than
angular and the job market is higher right now in react and the overall salary is higher in react.

## Do i need to make html-css skills super
When i started learning react, my css skills sucked but i focused learning react and sort of the 
fundamentals behind it that's going to be a lot more important. Follow all these builds and my css
will naturally get better through pattern recognition. 

//Props - receive props inside of react, we can pretty much pass in different
//attributes so here if i passed in a title, for example: this one could be
//Instead of saying row what we could do is we could say props.title

/* MuiSvgIcon-root is what the icons get given as a class name by default */
.sidebarRow > .MuiSvgIcon-root

iframe - pulling the information live from facebook and it's actually working dynamically.

"storyReel" - camel casing

make whole page background color - height: 100vh;

flex-direction: column;

iFrame - is simply basically imagine like you had another tab open and you had a website on that tab but imagine
you're basically just rendering that just in a portion of your web page so it's like embedding another web page
into your web page.

<> </>
Whenever there are sibling components, we need to wrap it in either a div or a fragment so this is a jsx fragment.

/* grid is a neat trick to getting anything centered in vertically and horizontally*/

Data layer REDUX VS React Context API
It's the implementation effort. REDUX is extremely powerful but it's much more difficult to implement whereas
react api is extremely easy to implement but they both use the same pattern so there is overlap. 

When we log in every time, we push the user into the data layer then basically what happens is once they're
inside the data layer, we can access them inside of any component.

How do you maintain the user logged in even if we refresh the page?
We have to use the token to keep the persistence of the user

Firebase Collection - Think it this way, a collection is just like an array of objects. This case we have each
document so if i added more here it would resemble a post. 

useEffect - // This is a very powerful piece of code and what this does is by putting 
    // keeping [] empty, what it does is it only runs the code once the feed 
    // component loads 

snapshot is basically like a real time snapshot which means when basically anything is updated, added, changed.
 Anything inside this collection it will give us the real time sort of snapshot Example: you got a camera,
 you take a picture of it at that real time point and then actually go ahead and pull it into the code
 
             {src && <Avatar src = {src} />}
            {/* Render the icon if i parse in an icon */}
            {Icon && <Icon/>}
