package models

import (
	"fmt"

	"social-network/utils"
)

func InsertUser(user utils.Regester) error {
	insertuserquery := "INSERT INTO users (first_name, last_name, nickname, email, age, gender, password, avatar, AboutMe)  VALUES(?,?,?,?,?,?,?,?,?)"
	if _, err := Db.Exec(insertuserquery, user.FirstName, user.LastName, user.NickName, user.Email, user.Age, user.Gender, user.Password, user.Avatar, user.About_Me); err != nil {
		fmt.Println(err)
		return err
	}
	return nil
}
func InsertFriends(id int, friendes []string) {
	insertFriend := "INSERT INTO friends (post_id, friend_id) VALUES(?,?)"
	for _, friend := range friendes {
		Db.Exec(insertFriend, id, friend)
	}
}

func InsertPost(post utils.Post) (int, error) {
	insetpostQuery := "INSERT INTO posts (post_privacy, title, content, user_id, imagePath, createdAt) VALUES (?,?,?,?,?,strftime('%s', 'now'))"
	res, err := Db.Exec(insetpostQuery, post.Privacy, post.Title, post.Content, 1, post.Image)
	if err != nil {
		return 0, err
	}
	lastId, _ := res.LastInsertId()
	return int(lastId), nil
}

func InserOrUpdate(follower, followed string) (string, error) {
	privacy, err := IsPrivateProfile(followed)
	if err != nil {
		return "", err
	}
	if privacy {

		if err := insertFollow(follower, followed); err != nil {
			if err := deletfollow(follower, followed); err != nil {
				fmt.Println(err)
				return "", err
			}
			fmt.Println(err)
			return "unfollow seccessfully", nil
		}
		return "following seccessfully", nil
	}
	InsertFollowreq(followed)
	return "follow request sent", nil
}

func insertFollow(follower, followed string) error {
	inserQuery := "INSERT INTO followers (follower_id, followed_id) VALUES (?,?)"
	_, err := Db.Exec(inserQuery, follower, followed)
	return err
}

func InsertFollowreq(followed string) {
}

func InsertSession(userData *utils.User) error {
	_, err := Db.Exec("INSERT INTO sessions ( user_id, token) VALUES (?, ?)", userData.ID, userData.SessionId)
	return err
}

func InsserGroupe(title, description string, creator_id int) error {
	Query := "INSERT INTO groups (title,description,creatorId) VALUES (?,?,?)"
	_, err := Db.Exec(Query, title, description, creator_id)
	return err
}

// InsserMemmberInGroupe(requist.Groupe_id,requist.User_id)
func InsserMemmberInGroupe(Groupe_id, User_id int) error {
	Quirie := "INSERT INTO group_members (groupe_id,user_id) VALUES (?,?)"
	_, err := Db.Exec(Quirie, Groupe_id, User_id)
	return err
}
func SaveInvitation(Groupe_id,sender_id,resever_id int)error{
	Quirie := "INSER INTO invitation (sender_id,recever_id,groupe_id) VALUES(?,?)"
	_,err := Db.Exec(Quirie,sender_id,resever_id,Groupe_id)
	return err
}

