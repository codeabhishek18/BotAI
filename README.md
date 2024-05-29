* How to use application
------------------------

1. BotAI is an application where the user can chat with an AI model. 
   Beyond this, the user can also rate, like and give some feedback at each stage of the conversation.

2. This is a single page application that includes a chatwindow and a sidebar.
   Chatwindow is where user can query AI model and recieve instant response.
   Like said, user can also like or dislike chats on hovering response of AI.
   In addition, star rating and feedbacks can be submitted and user can save conversations to view later.

3. Sidebar has a newchat, past conversations and rating/feedback options.
   Newchat just erases recent conversation if not saved and user can begin with fresh query.
   All saved conversation get saved under past conversations. Which folds and unfolds on click.
   Onclick of any conversation, that particular conversation history is displayed on chatwindow, which has recorded response, ratings, feedback.

4. Rating/feedback section has listed ratings and feedback table. The data can be filtered and sorted based on 
   ratings. Also clear button to clear filters and sort.

5. Supports all screen sizes

6. Supoorts light and dark theme

---------------------------------------------------------------------------------------------------------------------

* Major tech used
-----------------

1. Context API is one of the major used hook for global data manipulation and updation in this project.

2. Localstorage is used to store currentChat, chatHistory. Upon which operations are done.

---------------------------------------------------------------------------------------------------------------------

* Tradeoffs

Although I've tried to fit in all given edge cases and test cases, I would have loved to implement authentication with extra time.
   
