import { Request, Response } from "express"
import { Aluno } from "../models/aluno";
import { get_alunos_via_xml } from "../controller/alunos_controller";
import _ from 'lodash';

class GradesConteroller {
    public Grades(req: Request, res: Response) {
        // Get search parameters
        let grr_search: string = req.query.grr_search as string;

        // Get all grades
        const alunos: Aluno[] = get_alunos_via_xml("src/database/alunos.xml", grr_search);

        // Format to jquery datatable
        let data: any = [];
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

        // This without mysql queries is really bad
        // Using lodash we group by nome_aluno
        var data_new = _.groupBy(data, 'NOME_ALUNO');

        // Then inside the group we group by cod_ativ_curric
        var data_new2 = _.map(data_new, (value, key) => {
            return {
                NOME_ALUNO: key,
                COD_ATIV_CURRIC: _.groupBy(value, 'COD_ATIV_CURRIC')
            }

        });

        // console.log(data_new2[0].COD_ATIV_CURRIC.CI055);
        







        res.json({
            "draw": 1,
            "recordsTotal": alunos.length,
            "recordsFiltered": alunos.length,

            // Data
            "data": data
        });
    }
}
export const grades_controller = new GradesConteroller();