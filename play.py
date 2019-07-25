""" import sqlite3 and make the connection to parallelUniverse DB 
    which has our entities and their attributes. Import the required date/time classes to calculate the date range for the emails sent

"""
import sqlite3
from datetime import date
from datetime import time
from datetime import datetime, timedelta


def validateUser(db_file, citizen):
    # connect to sqlite
    connection = sqlite3.connect("parallelUniverse.db")
    cursor = connection.cursor()
    # try to fetch the user without any errors
    try:
        validate_user = """ SELECT * FROM email WHERE citizenID= ?"""
        result = cursor.execute(validate_user, citizen.citizenID)
        today = datetime.now()
        week_ago_date = today - timedelta(days=7)
        email_list = []
        count = 0
        for x in result['sentDate']:
            email_list.append([for x in range(today, week_ago_date)])
        if len(email_list) >= 5:
            emails_left_to_send = 5 - len(email_list)
            return "You have reached your limit of emails for the week."
        else:
            return "You have {} email's left to send this week.".format(emails_left_to_send)

        for x in result['numOfChars']:
            count += x
        if count >= 2000:
            return "You have reached the limit for characters for the week."

        else:
            chars_left = 2000 - count
            return "You have {} characters left to send in your emails for the week.".format(chars_left)
    # raise errors if any. Typically, would redirect to error page depending on the exception that was raised

    except Exception as e:
        raise(e)
finally:
        cursor.close()








