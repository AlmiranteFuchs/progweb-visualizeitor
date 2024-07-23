import { Request, Response } from "express"
import { Aluno, AlunoInterface } from "../models/aluno";
import { get_alunos_via_xml } from "../controller/alunos_controller";
import _ from 'lodash';



class GradesConteroller {
    // Constructor
    constructor() {
        // Cache the data
        this.cached_data = [];
    }

    // Cache the data
    public cached_data: [string, string, _.Dictionary<AlunoInterface[]>][] = [];

    // Looks for the info on a code and grr
    public GradeInfo(req: Request, res: Response): any {
        // Get search parameters
        let grr_search: string = req.params.id;
        let code: string = req.params.code;

        // Validate
        if (grr_search == undefined || code == undefined) {
            return res.status(400).send("Invalid search parameters");
        }

        

        return res.render("grades_info", { data: parse_grades(grr_search, code), code: code });
    }

    // Looks for the data on grr, returns all codes
    public GradesData(req: Request, res: Response): any {
        // Get search parameters
        let grr_search: string = req.params.id;

        // Validate
        if (grr_search == undefined) {
            return res.status(400).send("Invalid search parameters")
        }

        return res.json(parse_grades(grr_search));
    }
}

export const grades_controller = new GradesConteroller();



function parse_grades(grr_search: string, code: string | false = false): _.Dictionary<AlunoInterface[]> {
    // Check if the data is cached
    let cached_data = grades_controller.cached_data.find((v) => v[0] == grr_search && v[1] == code);
    if (cached_data) {
        return cached_data[2];
    }
    
    
    // Get all grades of grr
    let data: AlunoInterface[] = (_get_all_grades(grr_search));

    // Then inside the group we group by cod_ativ_curric, filter by code 
    var data_new2 = _.groupBy(data, 'COD_ATIV_CURRIC');

    // If code is defined, filter by code
    if (code) {
        data_new2 = _.pickBy(data_new2, (v, k) => k == code);

        // Cache the data
        grades_controller.cached_data.push([grr_search, code, data_new2]);
    }else{
        // Cache for each code in the data
        for (let key in data_new2) {
            grades_controller.cached_data.push([grr_search, key, _.pickBy(data_new2, (v, k) => k == key)]);
        }
    }


    return data_new2;
}


function _get_all_grades(grr_search: string): AlunoInterface[] {
    // Get all grades
    const alunos: Aluno[] = get_alunos_via_xml("src/database/alunos.xml", grr_search);

    // Format to jquery datatable
    let data: AlunoInterface[] = [];
    alunos.forEach((aluno: Aluno) => {
        data.push({
            "ID_CURSO_ALUNO": aluno.ID_CURSO_ALUNO,
            "MATR_ALUNO": aluno.MATR_ALUNO,
            "ID_VERSAO_CURSO": aluno.ID_VERSAO_CURSO,
            "NOME_ALUNO": aluno.NOME_ALUNO,
            "COD_CURSO": aluno.COD_CURSO,
            "NOME_CURSO": aluno.NOME_CURSO,
            "NUM_VERSAO": aluno.NUM_VERSAO,
            "ID_CURRIC_ALUNO": aluno.ID_CURRIC_ALUNO,
            "ID_ATIV_CURRIC": aluno.ID_ATIV_CURRIC,
            "ANO": aluno.ANO,
            "MEDIA_FINAL": aluno.MEDIA_FINAL,
            "SITUACAO_ITEM": aluno.SITUACAO_ITEM,
            "PERIODO": aluno.PERIODO,
            "SITUACAO": aluno.SITUACAO,
            "COD_ATIV_CURRIC": aluno.COD_ATIV_CURRIC,
            "NOME_ATIV_CURRIC": aluno.NOME_ATIV_CURRIC,
            "CREDITOS": aluno.CREDITOS,
            "CH_TOTAL": aluno.CH_TOTAL,
            "ID_LOCAL_DISPENSA": aluno.ID_LOCAL_DISPENSA,
            "CONCEITO": aluno.CONCEITO,
            "ID_NOTA": aluno.ID_NOTA,
            "ID_ESTRUTURA_CUR": aluno.ID_ESTRUTURA_CUR,
            "DESCR_ESTRUTURA": aluno.DESCR_ESTRUTURA,
            "FREQUENCIA": aluno.FREQUENCIA,
            "MEDIA_CREDITO": aluno.MEDIA_CREDITO,
            "SITUACAO_CURRICULO": aluno.SITUACAO_CURRICULO,
            "SIGLA": aluno.SIGLA
        });
    });

    return data;
}