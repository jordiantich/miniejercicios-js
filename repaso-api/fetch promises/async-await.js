async function requestHandle(req,res){
    try{
        var usuario = await user.findById(req.userId);
        var tarea = await tasks.findById(usuario.taskId);
        tarea.completed = true;
        await tarea.save();
        res.send('Tarea completada');
    }
    catch(error){
        res.send(error);
    }
}