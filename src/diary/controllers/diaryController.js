import mongoose from 'mongoose';
import Diary from '../models/diaryModel.js';

class DiaryControllers {
  // Obtém todas as entradas do diário
  async getDiaries(req, res) {
    try {
      const diaries = await Diary.find({});
      res.status(200).json({ success: true, data: diaries });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  // Obtém uma entrada específica do diário por ID
  async getDiary(req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, error: "ID inválido" });
    }

    try {
      const diary = await Diary.findById(id);
      if (!diary) {
        return res.status(404).json({ success: false, error: "Diário não encontrado" });
      }
      res.status(200).json({ success: true, data: diary });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  // Cria uma nova entrada no diário
  async createDiary(req, res) {
    try {
      const diaryData = req.body;
      const diary = await Diary.create(diaryData);
      res.status(201).json({ success: true, data: diary });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  // Atualiza uma entrada existente no diário
  async updateDiary(req, res) {
    const { id } = req.params;

    try {
      const diary = await Diary.findByIdAndUpdate(id, req.body, { new: true });
      if (!diary) {
        return res.status(404).json({ success: false, error: "Diário não encontrado" });
      }
      res.status(200).json({ success: true, data: diary });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  // Exclui uma entrada do diário
  async deleteDiary(req, res) {
    const { id } = req.params;

    try {
      const diary = await Diary.findByIdAndDelete(id);
      if (!diary) {
        return res.status(404).json({ success: false, error: "Diário não encontrado" });
      }
      res.status(200).json({ success: true, message: "Diário excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}

export default DiaryControllers;
