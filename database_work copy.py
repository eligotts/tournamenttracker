#Flask setup
#import os
#from flask import Flask, jsonify, request, abort
#app = Flask(__name__)

#Google Sheets API setup
import gspread
#from oauth2client.service_account import ServiceAccountCredientials

#credential = ServiceAccountCredientials.from_json_keyfile_name("credentials.json", ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive"])

from google.oauth2 import service_account

#SCOPES = ['https://www.googleapis.com/auth/sqlservice.admin']
SCOPES = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive"]
SERVICE_ACCOUNT_FILE = '/Users/eligottlieb/Documents/snu_website/flask_server/credentials.json'

credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)

client = gspread.authorize(credentials)
gsheet = client.open("SNU Volleyball").sheet1
sh = client.open("SNU Volleyball")

#An example GET route to get all reviews
#@app.route('/all_teams', methods=["GET"])
#def all_teams():
    #return jsonify(gsheet.get_all_records())


#An example POST route to add an entry
#@app.route('/add_team', methods=["POST"])
#def add_team():
    #req = request.get_json()
    #row = [req["name"], req["number"], req["venmo"]]
    #gsheet.insert_row(row, 2)
    #return jsonify(gsheet.get_all_records())



#gsheet.insert_row(["Ava"], 3)

sh.add_worksheet(title = "test", rows = 100, cols = 20)
#print(gsheet.get_all_records())
#cells = gsheet.findall("aa")
#print(cells)
