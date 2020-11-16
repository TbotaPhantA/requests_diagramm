import time
from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
import datetime
import json

from clickhouse_driver import Client

app = FastAPI()


@app.get("/data_for_graph")
def read_item(url_pattern, start_date, end_date):
    client = Client('52.29.95.195')

    result = client.execute(
        "SELECT toDate(time) as date, COUNT(url_pattern) as quantity "
        "FROM flypost.flypost_log "
        "WHERE url_pattern = '{0}' BETWEEN {1} AND {2} "
        "GROUP BY date "
        "ORDER BY date;".format(url_pattern, start_date, end_date))

    list_of_dicts = []
    for item in result:
        list_of_dicts.append({"date": str(item[0]), "quantity": str(item[1])})

    return {json.dumps(list_of_dicts)}
