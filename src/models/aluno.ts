// Class that represents a student 
export interface AlunoInterface {
    ID_CURSO_ALUNO: number;
    MATR_ALUNO: string;
    ID_VERSAO_CURSO: number;
    NOME_ALUNO: string;
    COD_CURSO: string;
    NOME_CURSO: string;
    NUM_VERSAO: Number;
    ID_CURRIC_ALUNO: Number;
    ID_ATIV_CURRIC: Number;
    ANO: Number;
    MEDIA_FINAL: Number;
    SITUACAO_ITEM: string;
    PERIODO: string;
    SITUACAO: string;
    COD_ATIV_CURRIC: string;
    NOME_ATIV_CURRIC: string;
    CREDITOS: number;
    CH_TOTAL: number;
    ID_LOCAL_DISPENSA: string;
    CONCEITO: string;
    ID_NOTA: number;
    ID_ESTRUTURA_CUR: Number;
    DESCR_ESTRUTURA: string;
    FREQUENCIA: Number;
    MEDIA_CREDITO: Number;
    SITUACAO_CURRICULO: string;
    SIGLA: string;
}

export class Aluno implements AlunoInterface {
    ID_CURSO_ALUNO: number;
    MATR_ALUNO: string;
    ID_VERSAO_CURSO: number;
    NOME_ALUNO: string;
    COD_CURSO: string;
    NOME_CURSO: string;
    NUM_VERSAO: Number;
    ID_CURRIC_ALUNO: Number;
    ID_ATIV_CURRIC: Number;
    ANO: Number;
    MEDIA_FINAL: Number;
    SITUACAO_ITEM: string;
    PERIODO: string;
    SITUACAO: string;
    COD_ATIV_CURRIC: string;
    NOME_ATIV_CURRIC: string;
    CREDITOS: number;
    CH_TOTAL: number;
    ID_LOCAL_DISPENSA: string;
    CONCEITO: string;
    ID_NOTA: number;
    ID_ESTRUTURA_CUR: Number;
    DESCR_ESTRUTURA: string;
    FREQUENCIA: Number;
    MEDIA_CREDITO: Number;
    SITUACAO_CURRICULO: string;
    SIGLA: string;

    constructor(aluno: AlunoInterface) {
        this.ID_CURSO_ALUNO = aluno.ID_CURSO_ALUNO;
        this.MATR_ALUNO = aluno.MATR_ALUNO;
        this.ID_VERSAO_CURSO = aluno.ID_VERSAO_CURSO;
        this.NOME_ALUNO = aluno.NOME_ALUNO;
        this.COD_CURSO = aluno.COD_CURSO;
        this.NOME_CURSO = aluno.NOME_CURSO;
        this.NUM_VERSAO = aluno.NUM_VERSAO;
        this.ID_CURRIC_ALUNO = aluno.ID_CURRIC_ALUNO;
        this.ID_ATIV_CURRIC = aluno.ID_ATIV_CURRIC;
        this.ANO = aluno.ANO;
        this.MEDIA_FINAL = aluno.MEDIA_FINAL;
        this.SITUACAO_ITEM = aluno.SITUACAO_ITEM;
        this.PERIODO = aluno.PERIODO;
        this.SITUACAO = aluno.SITUACAO;
        this.COD_ATIV_CURRIC = aluno.COD_ATIV_CURRIC;
        this.NOME_ATIV_CURRIC = aluno.NOME_ATIV_CURRIC;
        this.CREDITOS = aluno.CREDITOS;
        this.CH_TOTAL = aluno.CH_TOTAL;
        this.ID_LOCAL_DISPENSA = aluno.ID_LOCAL_DISPENSA;
        this.CONCEITO = aluno.CONCEITO;
        this.ID_NOTA = aluno.ID_NOTA;
        this.ID_ESTRUTURA_CUR = aluno.ID_ESTRUTURA_CUR;
        this.DESCR_ESTRUTURA = aluno.DESCR_ESTRUTURA;
        this.FREQUENCIA = aluno.FREQUENCIA;
        this.MEDIA_CREDITO = aluno.MEDIA_CREDITO;
        this.SITUACAO_CURRICULO = aluno.SITUACAO_CURRICULO;
        this.SIGLA = aluno.SIGLA;
    }

    
}

/**
 * <xs:element name="ID_CURSO_ALUNO" type="xs:decimal"/>
<xs:element name="MATR_ALUNO" type="xs:string"/>
<xs:element name="ID_VERSAO_CURSO" type="xs:decimal"/>
<xs:element name="NOME_ALUNO" type="xs:string"/>
<xs:element name="COD_CURSO" type="xs:string"/>
<xs:element name="NOME_CURSO" type="xs:string"/>
<xs:element name="NUM_VERSAO" type="xs:string"/>
<xs:element name="ID_CURRIC_ALUNO" type="xs:string"/>
<xs:element name="ID_ATIV_CURRIC" type="xs:string"/>
<xs:element name="ANO" type="xs:string"/>
<xs:element name="MEDIA_FINAL" type="xs:string"/>
<xs:element name="SITUACAO_ITEM" type="xs:string"/>
<xs:element name="PERIODO" type="xs:string"/>
<xs:element name="SITUACAO"/>
<xs:element name="COD_ATIV_CURRIC" type="xs:string"/>
<xs:element name="NOME_ATIV_CURRIC" type="xs:string"/>
<xs:element name="CREDITOS" type="xs:decimal"/>
<xs:element name="CH_TOTAL" type="xs:decimal"/>
<xs:element name="ID_LOCAL_DISPENSA" type="xs:string"/>
<xs:element name="CONCEITO" type="xs:string"/>
<xs:element name="ID_NOTA" type="xs:decimal"/>
<xs:element name="ID_ESTRUTURA_CUR" type="xs:string"/>
<xs:element name="DESCR_ESTRUTURA" type="xs:string"/>
<xs:element name="FREQUENCIA" type="xs:string"/>
<xs:element name="MEDIA_CREDITO" type="xs:string"/>
<xs:element name="SITUACAO_CURRICULO" type="xs:string"/>
<xs:element name="SIGLA" type="xs:string"/>
 */