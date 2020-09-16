const db = require(__dirname +'/../database/db.ts')

async function getEquipe(req, res){
    const equipe = await db('equipe').select('*');
    return res.status(200).json(equipe)};

async function postEquipe(req, res){
    const {
        nome,
        email,
        instituicao,
        linkedin,
        foto,
        projetos,
        bio } = req.body;
    
    try{
        await db('equipe').insert({
            nome,
            email,
            instituicao,
            linkedin,
            foto,
            projetos,
            bio});
        return res.status(201).send("recebido");
    }catch (err){
        console.log(err)
        return res.status(400).json({
            erro : "Erro ao cadastrar participante no db"
        });
    }};

async function getParticipante(req,res){
    const participante = req.params.participante;
    const participante_encontrado = await db('equipe').select('*').where('equipe.nome', '=', participante);
    return res.status(200).json(participante_encontrado);
}

async function deleteParticipante(req, res){
    const participante_id = req.params.id
    await db('equipe').where('equipe.id', '=', participante_id).delete()
    return res.status(200).send('deletado com sucesso!');
}

async function updateParticipante(req,res){
    const id = req.params.id
    const {
        nome,
        email,
        instituicao,
        linkedin,
        foto,
        projetos,
        bio } = req.body;
    try{
        await db('equipe').where('equipe.id', '=', id).update({
            nome,
            email,
            instituicao,
            linkedin,
            foto,
            projetos,
            bio
        })
        return res.status(201).send("Participante atualizado com sucesso")
    }catch (err){
        console.log(err)
        return res.status(400).json({error: "Erro ao atualizar participante"})
    }};

module.exports = {getEquipe, postEquipe, getParticipante, deleteParticipante, updateParticipante};