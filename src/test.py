import json
import boto3
from fastapi import FastAPI

app = FastAPI()

client = boto3.client('dynamodb')

@app.get("/")

async def first_api():
  data = client.query(
    TableName='fastapireactDB',
    Select='SPECIFIC_ATTRIBUTES',
    AttributesToGet=[
        'string',
    ],
    Limit=1
  )
    return response





#   response = {
#       'statusCode': 200,
#       'body': json.dumps(data),
#       'headers': {
#         'Content-Type': 'application/json',
#         'Access-Control-Allow-Origin': '*'
#       },
#   }

#   return response



