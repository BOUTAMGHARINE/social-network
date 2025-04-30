package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
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
	err := models.SaveInvitation(invitaion.GroupID,invitaion.InvitedBy,invitaion.UserId)
	if err != nil {
		utils.WriteJSON(w, map[string]string{"error": "Internal Server Error"}, http.StatusInternalServerError)
		return
	}








	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "Invitation sent"})
}
