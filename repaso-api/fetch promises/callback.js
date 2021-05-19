function requestHandle (req, res){
    
    user.findById(req.userId, function(err, user){
        if(err){
            res.send(err);
        }else{
            tasks.findById(user.tasksId, function(err, tasks){
                if(err){
                    return res.send(err);
                }else{
                    tasks.completed = true;
                    tasks.save(function(err){
                        if(err){
                            return res.send(err);
                        }else{
                            res.send("task completed");
                        }
                    });
                }
            });
        }
    });
}

// YA NO SE UTILIZA EL METODO ANTERIOR, APRA ESO ESTAN LAS PROMESAS




