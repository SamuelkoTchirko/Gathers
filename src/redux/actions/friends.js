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

export const getRequests = () => {
  return new Promise ((resolve, reject) => {
    FriendService.getRequests().then((data) => {
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
};

export const acceptRequest = (request_id) => {
  return new Promise ((resolve, reject) => {
    FriendService.acceptRequest(request_id).then((data) => {
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
};
  