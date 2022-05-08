from re import template
from flask import Flask, jsonify, request, render_template, json
import gspread
from google.oauth2 import service_account

SCOPES = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive"]
SERVICE_ACCOUNT_FILE = './credentials.json'

credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)

client = gspread.authorize(credentials)
gsheet = client.open("SNU Volleyball").sheet1
sh = client.open("SNU Volleyball")

app = Flask(__name__)

# API Route
@app.route("/", methods=['GET'])
def home():
    return render_template('index.html')

@app.route("/allset", methods=['POST'])
def update_sheet():
    request_data = json.loads(request.data)
    #teamName = request.values.get("TeamName")
    #captainName = request.values.get("CaptainName")
    #membersNum = request.values.get("MembersNum")
    #venmo = request.values.get("Venmo")

    #row = [teamName, captainName, membersNum, venmo]
    #gsheet.insert_row(row, 3)

    #print(row)
    print(request_data)

    return jsonify(gsheet.get_all_values())

if __name__ == "__main__":
    app.run(debug=True)
