import UserService from "../../services/user.service";


export const findByUsername = (query) => {
  return new Promise ((resolve, reject) => {
    UserService.findByUsername(query).then((data) => {
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
};
  