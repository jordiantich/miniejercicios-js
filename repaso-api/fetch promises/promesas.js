function requestHandle (req, res){

    user.findById(req.userId)
        .then(function(user){
            return tasks.findById(user.tasksId);
        })
        .then(function(tasks){
            tasks.completed = true;
            return tasks.save();
        })
        .then(function(){
            res.send('task completed');
        })
        .catch(function(errors){
            res.send(errors);
        });
        
}