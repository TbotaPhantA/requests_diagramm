from fastapi import FastAPI, Response
from starlette.middleware.cors import CORSMiddleware
import json
from clickhouse_driver import Client
from .adresses import db_address


app = FastAPI()
origins = [
    '*'
]
app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["GET"],
                   allow_headers=["*"], )
client = Client(db_address)


@app.get("/data_for_graph")
def get_quantity_of_urls(url_pattern: str, start_date: str, end_date: str):

    result = client.execute(
        "SELECT toDate(time) as date, COUNT(url_pattern) as quantity "
        "FROM flypost.flypost_log "
        "WHERE url_pattern = '{0}' AND date BETWEEN '{1}' AND '{2}' "
        "GROUP BY date "
        "ORDER BY date;".format(url_pattern, start_date, end_date))

    list_of_dicts = []
    for item in result:
        list_of_dicts.append({"date": str(item[0]), "quantity": int(item[1])})
    return Response(content=json.dumps(list_of_dicts), media_type="application/json")
