const  Track = require('../models/track') 
const express = require('express')
const  router = express.Router()

// create
router.post('/', async(req, res) =>{
    try {
        const createdTrack = await Track.create(req.body)
        return res.status(201).json(createdTrack)
        
    } catch (error) {
        console.log(error)
    }

})

// index

router.get('/', async(req, res) => {
    try{
        const foundTracks = await Track.find()
        res.status(201).json(foundTracks)

    }catch(error){
        console.log(error)
    }
})
// show

router.get('/:trackId', async(req, res) => {
    try {
        const foundTrack = await Track.findById(req.params.trackId)
        res.status(200).json(foundTrack)
    } catch (error) {
        console.log(error)
    }

})
// update
router.put("/:trackId", async(req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
    const updatedTrack = await Track.findByIdAndUpdate(req.params.trackId,req.body,{new: true})
    res.status(200).json(updatedTrack)
})
// Delete

router.delete('/:trackId', async(req, res) => {
    try {
        const deletedTrack = await Track.findByIdAndDelete(req.params.trackId)
        res.status(201).json(deletedTrack)
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router