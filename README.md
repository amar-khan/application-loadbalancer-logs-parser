# Dashboard

![N|Solid](https://i.ibb.co/QcVg3gb/circle-cropped.png)
# application-loadbalancer-logs-parser

Setup ALB Logs Storage Utility
## Setups Instructions:
1. create a table into database with name prod_alb_logs from given table schema file table.sql
2. Modify 'server.js' file to change command with proper datasource string.

3. now run node server.js filenamepath
   example node server.js samplefile.csv

and here we go you will have your csv file bulk import into database table.

use select query to create custom report or u can add grafana dashboard to point to alb table datasource.


