from flask import Flask, jsonify
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

# Members API Route
@app.route("/")
def members():
    return jsonify(gsheet.get_all_records())

if __name__ == "__main__":
    app.run(debug=True)
