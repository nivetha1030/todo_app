const express = require("express");
const router =express.Router();
const Movie = require("../../db/schemas/movieSchema")
router.get("/",async(req,res)=>{
    const movies = await Movie.find();
    res.json(movies);
});
router.get("/",async(req,res)=>{
    const queryParams = res.query;
    const filters = {};
    if(queryPaarams.name){
        filters.name = {
            $regres:`^${queryParams.name}`,
            $options:"i",
        };
        }
        if(queryParams.rating){
            filters.rating = {
                $gte:paraseFloat(queryParams.rating),
            };
        }
        const movies = await Movie.find(filters);
        res.json(movies);
    });
router.post("/",async(req,res)=>{
    try{
    console.log(req.body);
    const moviesData = req.body;
    const newMovie = new Movie(moviesData);
    await newMovie.save();
    res.json({
        message:"Movie added successfully",
    });
   }catch(error){
    console.log(error);
    res.status(500).json({
        message:"Internal server error",
    });
 }
});
router.put("/:id",async(req,res)=>{
    try{
        const movieId = req.params.id;
        const updateMovieData = req.body;
        await Movie.findByIdAndUpdate(movieId,updateMovieData);
        res.json({
            message:"Movie updated successfully",
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server error",
        });
    }
    });
    router.delete("/:id",async(req,res)=>{
        try{
            const movieId = req.params.id;
            const updateMovieData = req.body;
            await Movie.findByIdAndDelete(movieId,updateMovieData);
            res.json({
                message:"Movie deleted successfully",
            });
        }catch(error){
            console.log(error);
            res.status(500).json({
                message:"Internal server error",
            });
        }
        });
        router.get("/:id",async(req,res)=>{
            try{
                const movieId = req.params.id;
                const updateMovieData = req.body;
                await Movie.findById(movieId);
                res.json(movie);
            }catch(error){
                if(error.kind === "ObjectId"){
                    res.status(404).json({message:"Movie not found"})
                }else{
                    res.status(500).json({message:"Internal server error"})
                }
            }
        });
        
module.exports=router;