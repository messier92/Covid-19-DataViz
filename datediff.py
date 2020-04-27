import datetime
import csv
import pandas as pd

# import csv using the normal way
#with open("C:\\Users\\Eugene Goh\\Desktop\\MSc Computing\\COVID-Dataset\\COVID19.csv", "rt") as f:
#     data = csv.reader(f)
#      for row in data:
#          print(row)

rdatelist = []
mdatelist = []
ddatelist = []

daysSymptomaticToConfirmationlist = []
daysConfirmationToDischargelist = []

indextopasssymptomatictoconfirmation = []
indextopassconfirmationdischarge = []
indexdeceased = []

data = pd.read_csv("C:\\Users\\Eugene Goh\\Desktop\\MSc Computing\\COVID-Dataset\\COVID19.csv")
noOfRows = len(data)

for i in range(noOfRows):
    if (data['DATE OF SYMPTOMS'][i] == 'ASYMPTOMATIC'):
        indextopasssymptomatictoconfirmation.append(i)
    else:
        rdate = datetime.datetime.strptime(data['DATE OF SYMPTOMS'][i], "%d/%m/%Y").date()
        mdate = datetime.datetime.strptime(data['DATE OF CONFIRMATION'][i], "%d/%m/%Y").date()
        daysSymptomaticToConfirmationlist.append((mdate - rdate).days)

for i in range(noOfRows):
    if (data['DAYS TO RECOVER'][i] == 'NOT YET RECOVERED'):
        indextopassconfirmationdischarge.append(i)
    else:
        mdate = datetime.datetime.strptime(data['DATE OF CONFIRMATION'][i], "%d/%m/%Y").date()
        ddate = datetime.datetime.strptime(data['DATE OF DISCHARGE'][i], "%d/%m/%Y").date()
        daysConfirmationToDischargelist.append((ddate - mdate).days)

for i in range(noOfRows):
    if (data['DAYS TO RECOVER'][i] == 'DECEASED'):
        indexdeceased.append(i)

for i in range(len(indextopasssymptomatictoconfirmation)):
    daysSymptomaticToConfirmationlist.insert(indextopasssymptomatictoconfirmation[i], 'ASYMPTOTIC')

for i in range(len(indextopassconfirmationdischarge)):
    daysConfirmationToDischargelist.insert(indextopassconfirmationdischarge[i], 'NOT YET RECOVERED')
    
for i in range(len(indexdeceased)):
    del[daysConfirmationToDischargelist[indexdeceased[i]]]
    daysConfirmationToDischargelist.insert(indexdeceased[i], 'DECEASED')


daysSymptomaticToConfirmationlist.insert(0, 'SYMPTOMATIC TO CONFIRMATION')
daysConfirmationToDischargelist.insert(0, 'DAYS TO RECOVERY')


with open('days.csv','w')as f:
    writer=csv.writer(f,lineterminator='\n')
    for i in range(len(daysSymptomaticToConfirmationlist)):
        writer.writerow((daysSymptomaticToConfirmationlist[i], daysConfirmationToDischargelist[i])) 

