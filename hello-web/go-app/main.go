package main

import (
	"fmt"
	"net/http"
	"os"
	"time"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "10000"
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		html := `<!DOCTYPE html><html><head><title>Cool App</title></head><body><h1>Cool App</h1><p>Time: %s</p></body></html>`
		w.Header().Set("Content-Type", "text/html")
		fmt.Fprintf(w, html, time.Now().Format("2006-01-02 15:04:05"))
	})

	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		fmt.Fprintf(w, `{"status":"ok"}`)
	})

	fmt.Printf("Starting on port %s\n", port)
	http.ListenAndServe("0.0.0.0:"+port, nil)
}
