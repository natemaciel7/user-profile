import { db } from "../database/db.js";

export const getUsuarios = (req, res) => {
  db.query("SELECT * FROM usuarios", (err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

export const createOrUpdateUsuario = (req, res) => {
  const { id, nome, idade, rua, bairro, estado, biografia, imagem } = req.body;
  if (id) {
    // Atualizar
    const sql = `UPDATE usuarios SET nome=?, idade=?, rua=?, bairro=?, estado=?, biografia=?, imagem=? WHERE id=?`;
    db.query(
      sql,
      [nome, idade, rua, bairro, estado, biografia, imagem, id],
      (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Usuário atualizado com sucesso" });
      }
    );
  } else {
    // Inserir novo
    const sql = `INSERT INTO usuarios (nome, idade, rua, bairro, estado, biografia, imagem) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(
      sql,
      [nome, idade, rua, bairro, estado, biografia, imagem],
      (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Usuário criado com sucesso" });
      }
    );
  }
};

export const deleteUsuario = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM usuarios WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Usuário deletado com sucesso" });
  });
};
