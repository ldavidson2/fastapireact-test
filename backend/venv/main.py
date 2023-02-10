from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import boto3
from boto3.dynamodb.conditions import Key, Attr
from pydantic import BaseModel


app = FastAPI()
dynamodb = boto3.resource('dynamodb', region_name="us-east-2",
         aws_access_key_id="AKIAX3FHVXYSJO3DLKG3",
         aws_secret_access_key= "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")
table = dynamodb.Table('fastapireactDB-staging')



response = table.query(
    KeyConditionExpression=Key('companyID').eq(0)
)

data = str(response['Items'])

app.add_middleware(
    CORSMiddleware,
    allow_origins="http://localhost:3000/",
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["Content-Type","application/xml"],
)

@app.get("/")
async def root():
    return data
