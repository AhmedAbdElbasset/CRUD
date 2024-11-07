const Event=require("../modals/eventModal")


const createEvent=async (eventData)=>{
    const newEvent=new Event(eventData)
    return await newEvent.save()
}

const getAllEvents=async ()=>{
    return await Event.find()
}

const getEventById=async (id)=>{
    return await Event.findById(id)
}

const updateEvent =async (id,eventData)=>{
    return await Event.findByIdAndUpdate(id,eventData)
}

const deleteEvent =async (id,eventData)=>{
    return await Event.findByIdAndDelete(id,eventData)
}


module.exports={
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent
}