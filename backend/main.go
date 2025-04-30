package main

import (
	"fmt"
	"net/http"

	_ "github.com/golang-migrate/migrate/v4/database/sqlite3"

	"social-network/controllers"
	"social-network/db"
	"social-network/midleware"
	"social-network/models"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	models.Db = db.InitDB()
	defer models.Db.Close()
	mux := http.NewServeMux()

	mux.Handle("/login", midleware.WithCORS(http.HandlerFunc(controllers.Login)))
	mux.Handle("/register", midleware.WithCORS(http.HandlerFunc(controllers.Register)))
	// mux.Handle("POST /addPost", midleware.WithCORS(http.HandlerFunc(controllers.AddPost)))
	mux.Handle("POST /followReq", midleware.WithCORS(http.HandlerFunc(controllers.HandleFollow)))
	mux.Handle("POST /updatePrivacy", midleware.WithCORS(http.HandlerFunc(controllers.UpdatePrivacy)))
	// mux.Handle("POST /creategroup", midleware.WithCORS(http.HandlerFunc(controllers.CreateGroup)))
	// mux.Handle("POST /joinReq", midleware.WithCORS(http.HandlerFunc(controllers.JoinReq)))
	mux.HandleFunc("GET /uploads/", controllers.HandelPics)
	// mux.HandleFunc("/api/posts", controllers.Posts)
	// mux.HandleFunc("GET /group/{GroupName}", controllers.Group)
	mux.HandleFunc("/ws", controllers.Websocket)
	http.HandleFunc("/login", controllers.Login)
	http.HandleFunc("/register", controllers.Register)
	// http.HandleFunc(" POST /addPost", controllers.AddPost)
	http.HandleFunc("/uploads/", controllers.HandelPics)
	// http.HandleFunc("/api/posts", controllers.Posts)
	http.HandleFunc("/followReq", controllers.HandleFollow)
	http.HandleFunc("/updatePrivacy", controllers.UpdatePrivacy)
	// http.HandleFunc("GET /api/getProfilePosts/{userid}", controllers.GetProfilePosts)
	http.HandleFunc("POST /api/logout", controllers.LogoutHandler)
	http.HandleFunc("/CreatGroupe", controllers.Creat_groupe)
	http.HandleFunc("/JouindGroupe", controllers.Jouind_Groupe)
	fmt.Println("server runing at http://localhost:8080")
	http.ListenAndServe(":8080", nil)

	http.ListenAndServe(":8080", mux)
}
