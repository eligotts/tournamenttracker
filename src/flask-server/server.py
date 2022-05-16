from re import template
from flask import Flask, jsonify, request, render_template, json
import gspread
from google.oauth2 import service_account
import sys

SCOPES = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive"]
SERVICE_ACCOUNT_FILE = './credentials.json'

credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)

client = gspread.authorize(credentials)
gsheet = client.open("SNU Volleyball").sheet1
sh = client.open("SNU Volleyball")

app = Flask(__name__, static_folder="../build", static_url_path='/')

##WE DONT HAVE BACKEND FOR /REGISTER

# API Route
@app.route('/api')
def index():
    return app.send_static_file('index.html')

@app.route("/api/allset", methods=['POST'])
def update_sheet():

    req = json.loads(request.data)

    try:
        row = [req["teamName"], req["name"], req["phone"], req["venmo"]]  # Create Team
        gsheet.insert_row(row, 2)
    except:
        cell = gsheet.find(req["teamName"])
        row = cell.row
        row_values = gsheet.row_values(row)
        gsheet.update_cell(row,len(row_values)+1,req["name"])

    return {"201": "Success"}

@app.route("/api/join", methods=['GET'])
def join():
    teams = get_teams()
    return jsonify(teams)

def get_teams():
    teams = gsheet.get_all_values()
    if teams:
        teams.pop(0)
    for ii in range(len(teams)):
        teams[ii][0]=str(ii)
        teams[ii] = list(filter(('').__ne__,teams[ii]))

    return teams

if __name__ == "__main__":
    ##change this
    app.run(debug=True)
