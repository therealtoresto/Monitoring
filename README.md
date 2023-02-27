## Network Device Communication Management Tool

|[RU](README.ru.md)|

[1. Description](#description)

[2. Instructions](#instruction)

[3. Installation](#install)

[4. Running](#run)

[5. Author](#author)

### <a id='description'></a>Description

This guide explains how to set up a system for monitoring communication with 1000 network devices.

The system includes two scripts:

1. `trni.js` - a script that sends the person's "Full Name" to a network slot (hostname = 'localhost', port = 2222) using the UDP protocol. The script sends a message every 6 seconds (10 times per minute).

2. `rcv.js` - a script that "listens" to the port and detects if the `trni.js` script has not been running for more than one minute. If there is no communication with `trni.js`, the script outputs the message "No communication with the script..." to the console.

### <a id='instruction'></a>Instructions

#### <a id='install'></a>Installation

To install, you need to install [Node.js](https://nodejs.org/en/download/) on your computer.

Clone the repository to your local computer.
```
git clone https://github.com/therealtoresto/Monitoring.git
```

#### <a id='run'></a>Running

Open a terminal and navigate to the project directory.
Run the `rcv.js` script using the command node `rcv.js`.
Open another terminal and run the `trni.js` script using the command node `trni.js`.
You can run multiple copies of the `trni.js` script, specifying different names in the name variable in each script.

### <a id='author'></a>Author

Author: therealtoresto

Email: therealtoresto@gmail.com

GitHub: https://github.com/therealtoresto