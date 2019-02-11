MGN 2.1.7

Pronounced: "EM-JEN"

MGN is a web based utility used to ease the initial communication between the retreatants prayer partner and contact person (spouse, father, mother, son, daughter, etc). form letters for ACTS Retreat team members who are prayer partners with a retreatant.

This version is built using CSS grids for readability and consists of three files:

    1. mgn.html
    2. mgn.css
    3. mgn.js
    
Combined weight of all 3 files is approximately 20 Kilobytes.

Features:

    1. Small size (downloads fast).
    3. Displays form in English or Spanish.
    2. Built-in help in English or Spanish.
    4. Editable email response link.
    5. "Copy & Paste" message & email link.
    6. Outputs generic or personalized messages.
    7. Retreat dates can be edited.
    8. Runs on client side only.
    9. No server-side data collection.

When opened MGN is rendered in the language listed in the data array located in the javascript file.

The "retreats" array is arranged in the following manner:

    var retreats=[
    ["Gender","Retreat Date","Language"],
    ["Gender","Retreat Date","Language"]
    ];

Each element in the "retreats" array contains an inner array that holds three pieces of information. 

Each inner array element contains:

    1. The "Gender" of the retreatants -> "MEN" or "WOMEN"
    2. The "Date" of the retreat -> "Month Day, YEAR"
    3. The "Language" of the retreatants -> "SP" or "EN".

Example:

    var retreats=[
    ["Women","August 1, 2019","EN"],
    ["Men","April 25, 2019","EN"],
    ["Women","February 21, 2019","SP"],
    ["Men","December 6, 2018","SP"],
    ["Women","August 9, 2018","EN"],
    ["Men","April 26, 2018","EN"]
    ]

Retreat "Dates" must be entered in the following format:
    
    "Month Day, Year"
              ^Don't forget the comma!

Do not forget the comma between the DAY and the YEAR!

"Gender" and "Retreat Date" are used in specific areas of the generated text message.

To add dates to the array, pay close attention to each of the "Retreat" entries formatting, and MGN should perform properly.

