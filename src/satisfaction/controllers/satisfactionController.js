import Satisfaction from "../models/satisfactionModels.js";

export async function getSatisfaction(req, res) {
  try {
    const satisfactions = await Satisfaction.find();
    res.json(satisfactions);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

export async function getSatisfactionById(req, res) {
  try {
    const foundSatisfaction = await Satisfaction.findById(req.params.id);
    if (foundSatisfaction) {
      res.json(foundSatisfaction);
    } else {
      res.status(404).json({ error: "Questionário de satisfação não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

export async function createSatisfaction(req, res) {
  const satisfaction = new Satisfaction(req.body);
  try {
    await satisfaction.save();
    res.status(200).json(satisfaction);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

export async function updateSatisfaction(req, res) {
  try {
    const updatedSatisfaction = await Satisfaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedSatisfaction) {
      res.json(updatedSatisfaction);
    } else {
      res.status(404).json({ error: "Questionário de satisfação não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

export async function deleteSatisfaction(req, res) {
  try {
    const deletedSatisfaction = await Satisfaction.findByIdAndDelete(req.params.id);
    if (deletedSatisfaction) {
      res.json({ message: "Questionário de satisfação deletado" });
    } else {
      res.status(404).json({ error: "Questionário de satisfação não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
