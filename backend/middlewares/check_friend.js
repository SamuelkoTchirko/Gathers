const { isNull } = require("util");
const db = require("../models");
const Friend = db.friend;

exports.check_friend = (user1_id, user2_id) => {

    const result = {
        exists: null,
        confirmed: null
    };

    return new Promise ((resolve, reject) => {
        Friend.find({"first_user_id": user1_id, "second_user_id": user2_id}, "confirmed", function (err, data) {
            if(!data.length){
                Friend.find({"first_user_id": user2_id, "second_user_id": user1_id}, "confirmed", function (err, data) {
                    if(!data.length){
                        reject()
                    }else{
                        //console.log("toto su data " + data)
                        resolve(data)
                    }
                })
            }else{
                //console.log("toto su data " + data)
                resolve(data)
            }
        }).lean()
    })
} 

exports.scanArray = (id, array) => {
    return new Promise ((resolve, reject) => {
        array.forEach((item, index, arr) => {
            this.check_friend(id, item._id).then(value => {
                array[index]["confirmed"] = value.confirmed
            }, reason => {
                array[index]["confirmed"] = null
            })
        }, function(err, data) {
            resolve(data)
        })
    })
}