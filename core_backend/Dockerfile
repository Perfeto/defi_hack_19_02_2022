FROM python:3.9.10-bullseye

WORKDIR /app

COPY ./requirements.txt /requirements.txt

RUN pip install --no-cache-dir --upgrade -r /requirements.txt

COPY . .

CMD ["uvicorn", "main:server", "--host", "0.0.0.0", "--port", "8000"]
