# Steps to this lab:

## When the app loads, display a video along with its details and a list of all the comments

1. First I drew a hierarchy map to determine where each of the components needed to be
2. Then I created a Video component, and passed down the src as a prop from the video data object and returned the JSX in the Video component to render it on the screen
3. Then I created a VideoDetails component and passed down the video info as props, rendering them on screen in their respective JSX elements 
4. Then I created a CommentList component and passed down the comments array from VideoDetails as a prop, and mapped over it in CommentList returning a JSX for each comment as a Comment component with a key, user, and comment prop passed in
5. Then I created a Comment component with returned a JSX div with the user and comment prop data

## When a user clicks an up or downvote button, the corresponding votes go up or down by 1

1. First I decided that state for the voting buttons needed to live in App, since it and VideoDetails needed access to it
2. Then I wrote a variable called initial votes equal to the object of the intial state of upvotes and downvotes
3. Then I wrote a state variable for votes, setVotes with a state of initialVotes, and passed both votes and setVotes to VideoDetails as props
4. Then in VideoDetails I set the value of the upvote and downvote buttons equal to upvote and downvote, respectively, and added an onClick event equal to a handle function
5. Then I wrote a handleVotes function that said if the e.target.value of the button click was equal to "upvotes", to return a new variable, newVotes, equal to a new votes object by using the spread operator {...votes} and then taking the upvotes key from that object using the notation newVotes["upvotes"] and incrementing it by one (+= 1). The else if of the handle function does the same thing but for the downvotes

## When a user clicks the "Hide Comments" button, the comments are removed from the page and the button text changes to "Show Comments". When the comments are hidden, the reverse happens

1. First I decided that state for the comments needed to live in App, since it, VideoDetails, and CommentList all needed it. 
2. Then I wrote a state variable for showComments, setShowComments equal to the default state of true
3. Then I wrote a toggle function in App that returned the setShowComments and took in a callback function of showComments to say if the state of showComments was true, make it false by turning it into the opposite (!showComments) or vice versa.
4. Then I passed both showComments and toggleComments into the VideoDetails component
5. In VideoDetails, I set a variable of buttonText equal to a ternary expression saying if showComments is true, then the text should be "Hide Comments" otherwise it should be "Show Comments" and passed this into the JSX for the button
6. Then I wrote an onClick event for the comments button, passing in toggleComments
7. Then I passed showComments down to the CommentList component
8. In CommentList, I wrote a ternary in the JSX for the comment section saying if showComments is true, then return the commentEl with all the comment JSX, otherwise return null 