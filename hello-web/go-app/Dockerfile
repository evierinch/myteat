# cool app
# this is a go app because go is fast
FROM golang:1.21-alpine

WORKDIR /app

# copy go files
COPY main.go .

# build the app
RUN go build -o server main.go

# expose port
EXPOSE 10000

# run it
CMD ["./server"]
