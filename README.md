# Lesson 1: Authentication and Authorization

Authentication identifies the logged-in user through a verified session.

Authorization ensures that the authenticated user can access only permitted data.

The backend must never trust a userId supplied by the browser. It should derive the user identity from the verified session and filter orders using that identity.
