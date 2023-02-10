import json
import boto3
from fastapi import FastAPI
from boto3.dynamodb.conditions import Key, Attr

app = FastAPI()
dynamodb = boto3.resource('dynamodb', region_name="us-east-2",
         aws_access_key_id="AKIAX3FHVXYSJO3DLKG3",
         aws_secret_access_key= "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")
table = dynamodb.Table('fastapireactDB-staging')



response = table.query(
    KeyConditionExpression=Key('companyID').eq(1)
)
data = response['Items']


@app.get("/")
async def first_api():
   # table.put_item(
   #    Item={
   #       'companyID': 1,
   #       'userID': 2,
   #       'clinicName': 'Another Clinic',
   #       'firstName': 'John',
   #       'lastName': 'Doe',
   #       'password': "***",
   #       'patients': ' ',
   #       'phoneNumber': 14314567890,
   #       'securityLevel': 2,
   #       'speciality': 'Neurologist'
   #    }
   # )
   return data


