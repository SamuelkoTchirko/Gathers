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

export const deleteEvent = (id) => {
  return new Promise ((resolve, reject) => {
    EventService.deleteEvent(id).then(() => {
      resolve(true)
    }).catch((err) => {
      reject(err)
    })
  })
};

export const getMyEvents = () => {
  return new Promise ((resolve, reject) => {
    EventService.getMyEvents().then((data) => {
      console.log(data)
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
};
  