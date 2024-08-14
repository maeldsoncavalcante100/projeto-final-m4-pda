import Satisfaction from "../models/satisfactionModels.js"; 

export async function createSatisfaction(req, res) { 
    const satisfaction = new Satisfaction (req.body)
    try {
        await satisfaction.save()
        res.status(200).json(satisfaction)
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

export async function getSatisfaction(req, res) {
    try {
       const satisfaction = await satisfaction.find()
       res.json(satisfaction)
    } catch (error) {
        res.status(500).json({ success: false, error: error.message }); 
    }
}
export async function getSatisfactionById(req, res) {
    try {
        const satisfaction = await satisfaction.findById(req.params.id)
        if (satisfaction){
            res.json(satisfaction) 
        }else {
            res.status(404).json({error:"questionário de satisfação não encontrado"})
        }
     } catch (error) {
        res.status(500).json({ success: false, error: error.message }); 
    }
}
export async function updateSatisfaction(req, res) {
    try {
        const satisfaction = await satisfaction.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (satisfaction){
            res.json(satisfaction) 
        }else {
            res.status(404).json({error:"questionário de satisfação não encontrado"})
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });  
    }
}
export async function deleteSatisfaction(req, res) {
    try {
        const satisfaction = await satisfaction.findByIdAndDelete(req.params.id)
        if (satisfaction){
            res.json({message:"questionário de satisfação deletado"}) 
        }else {
            res.status(404).json({error:"questionário de satisfação não encontrado"})
        }
     } catch (error) {
        res.status(500).json({ success: false, error: error.message }); 
    }
}