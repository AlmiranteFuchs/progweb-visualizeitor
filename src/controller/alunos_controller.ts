import { Aluno, AlunoInterface } from "../models/aluno";
const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");

// Export function 
export function get_alunos_via_xml(xml_path: string, grr_search: string | null = null): Aluno[] {

    let alunos: Aluno[] = [];

    const XMLdata = require("fs").readFileSync(xml_path, "utf8");

    const parser: any = new XMLParser();
    let jObj: any = parser.parse(XMLdata);
    const builder: any = new XMLBuilder();

    let xmlContent: String | String[] = builder.build(jObj);

    xmlContent = (xmlContent as String).split("<ALUNO>");
    xmlContent.shift();


    xmlContent.forEach((aluno: any) => {
        var alunoI: AlunoInterface = {
            ID_CURSO_ALUNO: parseInt(aluno.split("ID_CURSO_ALUNO>")[1].replace("/", "").replace("<", "")),
            MATR_ALUNO: aluno.split("MATR_ALUNO>")[1].replace("/", "").replace("<", ""),
            ID_VERSAO_CURSO: parseInt(aluno.split("ID_VERSAO_CURSO>")[1].replace("/", "").replace("<", "")),
            NOME_ALUNO: aluno.split("NOME_ALUNO>")[1].replace("/", "").replace("<", ""),
            COD_CURSO: aluno.split("COD_CURSO>")[1].replace("/", "").replace("<", ""),
            NOME_CURSO: aluno.split("NOME_CURSO>")[1].replace("/", "").replace("<", ""),
            NUM_VERSAO: parseInt(aluno.split("NUM_VERSAO>")[1].replace("/", "").replace("<", "")),
            ID_CURRIC_ALUNO: parseInt(aluno.split("ID_CURRIC_ALUNO>")[1].replace("/", "").replace("<", "")),
            ID_ATIV_CURRIC: parseInt(aluno.split("ID_ATIV_CURRIC>")[1].replace("/", "").replace("<", "")),
            ANO: parseInt(aluno.split("ANO>")[1].replace("/", "").replace("<", "")),
            MEDIA_FINAL: parseInt(aluno.split("MEDIA_FINAL>")[1].replace("/", "").replace("<", "")),
            SITUACAO_ITEM: aluno.split("SITUACAO_ITEM>")[1].replace("/", "").replace("<", ""),
            PERIODO: aluno.split("PERIODO>")[1].replace("/", "").replace("<", ""),
            SITUACAO: aluno.split("SITUACAO>")[1].replace("/", "").replace("<", ""),
            COD_ATIV_CURRIC: aluno.split("COD_ATIV_CURRIC>")[1].replace("/", "").replace("<", ""),
            NOME_ATIV_CURRIC: aluno.split("NOME_ATIV_CURRIC>")[1].replace("/", "").replace("<", ""),
            CREDITOS: parseInt(aluno.split("CREDITOS>")[1].replace("/", "").replace("<", "")),
            CH_TOTAL: parseInt(aluno.split("CH_TOTAL>")[1].replace("/", "").replace("<", "")),
            ID_LOCAL_DISPENSA: aluno.split("ID_LOCAL_DISPENSA>")[1].replace("/", "").replace("<", ""),
            CONCEITO: aluno.split("CONCEITO>")[1].replace("/", "").replace("<", ""),
            ID_NOTA: parseInt(aluno.split("ID_NOTA>")[1].replace("/", "").replace("<", "")),
            ID_ESTRUTURA_CUR: parseInt(aluno.split("ID_ESTRUTURA_CUR>")[1].replace("/", "").replace("<", "")),
            DESCR_ESTRUTURA: aluno.split("DESCR_ESTRUTURA>")[1].replace("/", "").replace("<", ""),
            FREQUENCIA: parseInt(aluno.split("FREQUENCIA>")[1].replace("/", "").replace("<", "")),
            MEDIA_CREDITO: parseInt(aluno.split("MEDIA_CREDITO>")[1].replace("/", "").replace("<", "")),
            SITUACAO_CURRICULO: aluno.split("SITUACAO_CURRICULO>")[1].replace("/", "").replace("<", ""),
            SIGLA: aluno.split("SIGLA>")[1].replace("/", "").replace("<", ""),
        }

        const alunoObj: Aluno = new Aluno(alunoI);

        alunos.push(alunoObj);
    });


    // Filter by GRR
    if (grr_search) {
        alunos = alunos.filter((aluno: Aluno) => {
            return aluno.MATR_ALUNO === grr_search;
        });
    }


    return alunos;
}