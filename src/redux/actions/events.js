import EventService from "../../services/event.service";

  
export const create = (title, date_start, date_end, public_event) => {
  return new Promise ((resolve, reject) => {
    EventService.create(title, date_start, date_end, public_event).then(() => {
      resolve(true)
    }).catch((err) => {
      reject(err)
    })
  })
};
  