import FriendService from "../../services/friend.service";


export const createRequest = (id) => {
  return new Promise ((resolve, reject) => {
    FriendService.createRequest(id).then((data) => {
      resolve(true)
    }).catch((err) => {
      reject(err)
    })
  })
};
  