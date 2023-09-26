import Datastore from "nedb";

const pessoasDB = new Datastore();
const organizacoesDB = new Datastore();

export default { pessoasDB, organizacoesDB };
