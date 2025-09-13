from fastapi import FastAPI

# Shareable link
'''
frontend:
Create new shareable link -> GET request from frontend to backend, backend generates unique link ex. test.com/l/fhsdjkfhsd
every get request from frontend to unique link -> get request to backend and load data from database in Poll table.
If a user adds an idea, update amount of participants, as well as update data in database to include user idea.

backend: 
Add unique link in row of poll table
Add participants table in database, link participant -> idea, (with name/account)
Ensure only one vote and idea per unique user
'''

app = FastAPI()
