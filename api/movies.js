import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    // Caminho absoluto para o arquivo .m3u na pasta pública
    const filePath = path.join(process.cwd(), 'public', 'meus-filmes.m3u');
    const data = await fs.readFile(filePath, 'utf8');
    
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao carregar o arquivo' });
  }
}
