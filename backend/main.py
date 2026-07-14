from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://fastapi-poc-04n9.onrender.com", "http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

"""CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls 
whether a web page can make requests to a different domain, port, or protocol.
As the react App and the backend FastAPI server are running on different ports, 
we need to enable CORS in the FastAPI server to allow requests from the React App. 
else it would show error.
"""

issues = [
    {
        "id": 1,
        "title": "Issue 1",
        "description": "This is the first issue"
    },
    {
        "id": 2,
        "title": "Issue 2",
        "description": "This is the second issue"
    },
    {
        "id": 3,
        "title": "Issue 3",
        "description": "This is the third issue"
    }
]

@app.get("/issues")
def get_issues():
    return issues

@app.get("/issues/{issue_id}")
def get_issue_by_id(issue_id: int):
    for issue in issues:
        if issue["id"] == issue_id:
            return issue

    return {"error": "Issue not found"}
