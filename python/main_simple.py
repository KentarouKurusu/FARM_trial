from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

# App object
app = FastAPI()

origins = [
  'http://localhost:3000',
  'http://localhost',
  ]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

@app.get("/")
def read_root():
  return {"Hello"}