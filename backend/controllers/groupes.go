package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"social-network/models"
	utils "social-network/utils"
)

func Creat_groupe(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {

		utils.WriteJSON(w, map[string]string{"error": "Method Not Allowd"}, http.StatusMethodNotAllowed)
		return

	}
	var Groupe utils.Groupe
	err := json.NewDecoder(r.Body).Decode(&Groupe)
	if err != nil {
		fmt.Println("hoho")
		utils.WriteJSON(w, map[string]string{"error": "Bad Request"}, http.StatusBadRequest)
		return
	}
	if !utils.ValidatNames(Groupe.Title) || !utils.ValidatNames(Groupe.Description) || len(Groupe.Title) < 2 ||
		len(Groupe.Title) > 100 || len(Groupe.Description) < 2 || len(Groupe.Description) > 300 {
		utils.WriteJSON(w, map[string]string{"error": "Bad Request"}, http.StatusBadRequest)

		return
	}
	err = models.InsserGroupe(Groupe.Title, Groupe.Description, Groupe.CreatorId)
	if err != nil {
		utils.WriteJSON(w, map[string]string{"error": "Internal Server Error"}, http.StatusInternalServerError)
		return
	}
	utils.WriteJSON(w, map[string]string{"Groupe": "criete groupe seccesfel"}, http.StatusOK)
	return
}

func Jouind_Groupe(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {

		utils.WriteJSON(w, map[string]string{"error": "Method Not Allowd"}, http.StatusMethodNotAllowed)
		return

	}
	var requist utils.Groupe_member
	err := json.NewDecoder(r.Body).Decode(&requist)
	if err != nil {
		utils.WriteJSON(w, map[string]string{"error": "Bad Request"}, http.StatusBadRequest)
		return
	}
	err = models.InsserMemmberInGroupe(requist.Groupe_id, requist.User_id)
	fmt.Println(err)
	if err != nil {
		utils.WriteJSON(w, map[string]string{"error": "Internal Server Error"}, http.StatusInternalServerError)
		return
	}
	utils.WriteJSON(w, map[string]string{"prossotion": "seccesfel"}, http.StatusOK)
	return
}

func InsertToGroupe(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		utils.WriteJSON(w, map[string]string{"error": "Method Not Allowd"}, http.StatusMethodNotAllowed)
		return
	}
}

// fetch('/api/searchGroups?query=tech')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // Met à jour l'UI avec les résultats
//   });

func SearchGroupsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		utils.WriteJSON(w, map[string]string{"error": "Method Not Allowd"}, http.StatusMethodNotAllowed)
		return
	}
	query := r.URL.Query().Get("query")
	groups, err := models.SearchGroupsInDatabase(query)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(groups)
}

func InviteUser(w http.ResponseWriter, r *http.Request, groupID uint) {
	if r.Method != http.MethodPost {
		utils.WriteJSON(w, map[string]string{"error": "Method Not Allowd"}, http.StatusMethodNotAllowed)
		return
	}
	var invitaion utils.GroupInvitation

	if err := json.NewDecoder(r.Body).Decode(&invitaion); err != nil {
		utils.WriteJSON(w, map[string]string{"error": "Status BadRequest"}, http.StatusBadRequest)
		return
	}
	if !models.IsMember(invitaion.GroupID, invitaion.InvitedBy) {
		utils.WriteJSON(w, map[string]string{"error": "Not allowed "}, http.StatusBadRequest)

		return
	}

	if models.InvitationExists(invitaion.GroupID, invitaion.UserId) {
		utils.WriteJSON(w, map[string]string{"error": "alredy invited"}, 409)
		return
	}
	err := models.SaveInvitation(invitaion.GroupID, invitaion.InvitedBy, invitaion.UserId)
	if err != nil {
		utils.WriteJSON(w, map[string]string{"error": "Internal Server Error"}, http.StatusInternalServerError)
		return
	}


	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "Invitation sent"})
}

func Get_all_post(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		utils.WriteJSON(w, map[string]string{"error": "Method Not Allowd"}, http.StatusMethodNotAllowed)
		return
	}
	groupe_id_str := r.FormValue("groupe_id")
	user_id_str := r.FormValue("user_id")
	groupe_id, err1 := strconv.Atoi(groupe_id_str)
	user_id, err2 := strconv.Atoi(user_id_str)

	if err1 != nil || err2 != nil {

		utils.WriteJSON(w, map[string]string{"error": "Status BadRequest"}, http.StatusBadRequest)
		return

	}

	if !models.IsMember(groupe_id, user_id) {
		utils.WriteJSON(w, map[string]string{"error": "Access denied: you must be a member of the group to view posts."}, 403)
		return

	}

	Posts := models.QueryPosts()
	var Posts_groupe []utils.Post
	for _, v := range Posts {
		if v.Groupe_id == groupe_id {
			Posts_groupe = append(Posts_groupe, v)
		}
	}

	utils.WriteJSON(w, Posts_groupe, http.StatusOK)
}

// func Vreat_Post(w http.ResponseWriter, r *http.Request) {
// 	if r.Method != http.MethodPost {
// 		utils.WriteJSON(w, map[string]string{"error": "Method Not Allowd"}, http.StatusMethodNotAllowed)
// 		return
// 	}
// 	var Post utils.Post
// 	err := json.NewDecoder(r.Body).Decode(&Post)
// 	if err != nil {

// 		utils.WriteJSON(w, map[string]string{"error": "Bad Request"}, http.StatusBadRequest)
// 		return

// 	}
	func AddPost(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			utils.WriteJSON(w, map[string]string{"error": "Method Not allowd"}, http.StatusMethodNotAllowed)
			return
		}
	
		host := r.Host
		postData := r.FormValue("postData")
		filepath, err := utils.UploadImage(r)
		if err != nil {
			utils.WriteJSON(w, map[string]string{"error": err.Error()}, http.StatusInternalServerError)
			fmt.Println("Upload Image error:", err)
			return
		}
	
		var post utils.Post
		fmt.Println("post data", postData)
		err = json.Unmarshal([]byte(postData), &post)
		if err != nil {
			utils.WriteJSON(w, map[string]string{"error": "internal server error\nparsing post"}, http.StatusInternalServerError)
			fmt.Println("unmarshal err:", err)
			return
		}
	
		if filepath != "" {
			post.Image = filepath
		}
	
		post.Id, err = models.InsertPost(post)
		if err != nil {
			utils.WriteJSON(w, map[string]string{"error": "internal server error\ninserting post"}, http.StatusInternalServerError)
			return
		}
	
		if len(post.Friendes) != 0 {
			models.InsertFriends(2, post.Friendes)
			post.Friendes = []string{}
		}
	
		if filepath != "" {
			post.Image = host + filepath
		}
		utils.WriteJSON(w, post, 200)
	}

	func Creat_Event(w http.ResponseWriter, r *http.Request){
		if r.Method != http.MethodPost {
			utils.WriteJSON(w, map[string]string{"error": "Method Not allowd"}, http.StatusMethodNotAllowed)
			return
		}
	


	}


