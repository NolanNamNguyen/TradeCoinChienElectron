const fs = require('fs');

// run on node
// specify the file path
const filePath = 'C:\\Users\\nam.nguyenv\\Desktop\\example.txt';
// use the readFileSync method to read the file and get a string output
const fileContent = fs.readFileSync(filePath, 'utf8');

const lines = fileContent.trim().split(/\n/);

lines.shift();
lines.shift();

console.log('lines here', lines);
const jsonArr = [];

for (const line of lines) {
  const [name, tempField, type, type2] = line.trim().split(/\s+/);
  jsonArr.push({ colName: name, nullAble: type2 ? `${tempField} ${type}` : '', dataType: type2 ?? tempField });
}

// Convert the object to JSON
const json = JSON.stringify(jsonArr);

// RUN ON CLIENT BROWSER
const rowArr = document.querySelectorAll(
  'table[data-table-local-id="f7c35314-0212-4214-9ba2-24151fbb8d1c"] tr:not(tr[data-header-row="true"])',
);
const listFilledCol = [];
rowArr.forEach((row) => {
  listFilledCol.push({ colName: row.childNodes[0], nullAble: row.childNodes[3], dataType: row.childNodes[2] });
});
console.log('listFilledCol', listFilledCol);

const listJson = [
  {
    colName: 'CUST_CNT_CD',
    nullAble: 'NOT NULL',
    dataType: 'VARCHAR2(2)',
  },
  {
    colName: 'CUST_SEQ',
    nullAble: 'NOT NULL',
    dataType: 'NUMBER(6)',
  },
  {
    colName: 'CNTR_DIV_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'BLK_DIV_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'CUST_GRP_ID',
    nullAble: '',
    dataType: 'VARCHAR2(20)',
  },
  {
    colName: 'CUST_LGL_ENG_NM',
    nullAble: '',
    dataType: 'VARCHAR2(100)',
  },
  {
    colName: 'CUST_LOCL_LANG_NM',
    nullAble: '',
    dataType: 'VARCHAR2(100)',
  },
  {
    colName: 'CUST_ABBR_NM',
    nullAble: '',
    dataType: 'VARCHAR2(50)',
  },
  {
    colName: 'CNTR_CUST_TP_CD',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'BLK_CUST_TP_CD',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'INDIV_CORP_DIV_CD',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'OFC_CD',
    nullAble: '',
    dataType: 'VARCHAR2(6)',
  },
  {
    colName: 'FNDT_DT',
    nullAble: '',
    dataType: 'VARCHAR2(8)',
  },
  {
    colName: 'CUST_RGST_NO',
    nullAble: '',
    dataType: 'VARCHAR2(20)',
  },
  {
    colName: 'FINC_STS_LVL_CD',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'LOC_CD',
    nullAble: '',
    dataType: 'VARCHAR2(5)',
  },
  {
    colName: 'CAPI_CURR_CD',
    nullAble: '',
    dataType: 'VARCHAR2(3)',
  },
  {
    colName: 'CAPI_AMT',
    nullAble: '',
    dataType: 'NUMBER(18)',
  },
  {
    colName: 'LSTK_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'EMPE_KNT',
    nullAble: '',
    dataType: 'NUMBER(5)',
  },
  {
    colName: 'VNDR_SEQ',
    nullAble: '',
    dataType: 'NUMBER(6)',
  },
  {
    colName: 'CUST_RMK',
    nullAble: '',
    dataType: 'VARCHAR2(500)',
  },
  {
    colName: 'VBS_CLSS_CD',
    nullAble: '',
    dataType: 'VARCHAR2(2)',
  },
  {
    colName: 'NBS_CLSS_CD1',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'NBS_CLSS_CD2',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'NBS_CLSS_CD3',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'CUST_STS_CD',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'CRM_ROW_ID',
    nullAble: '',
    dataType: 'VARCHAR2(20)',
  },
  {
    colName: 'NVOCC_CO_SCAC_CD',
    nullAble: '',
    dataType: 'VARCHAR2(10)',
  },
  {
    colName: 'NVOCC_BD_NO',
    nullAble: '',
    dataType: 'VARCHAR2(20)',
  },
  {
    colName: 'NVOCC_LIC_NO',
    nullAble: '',
    dataType: 'VARCHAR2(20)',
  },
  {
    colName: 'NVOCC_BD_AMT',
    nullAble: '',
    dataType: 'NUMBER(25,13)',
  },
  {
    colName: 'NVOCC_BD_ST_EFF_DT',
    nullAble: '',
    dataType: 'VARCHAR2(8)',
  },
  {
    colName: 'NVOCC_BD_END_EFF_DT',
    nullAble: '',
    dataType: 'VARCHAR2(8)',
  },
  {
    colName: 'INDUS_DESC',
    nullAble: '',
    dataType: 'VARCHAR2(100)',
  },
  {
    colName: 'CRNT_VOL_KNT',
    nullAble: '',
    dataType: 'NUMBER(18,5)',
  },
  {
    colName: 'CMPT_DESC',
    nullAble: '',
    dataType: 'VARCHAR2(1000)',
  },
  {
    colName: 'SPCL_REQ_DESC',
    nullAble: '',
    dataType: 'VARCHAR2(1000)',
  },
  {
    colName: 'PRF_SVC_DESC',
    nullAble: '',
    dataType: 'VARCHAR2(100)',
  },
  {
    colName: 'PRF_SVC_DTL_DESC',
    nullAble: '',
    dataType: 'VARCHAR2(100)',
  },
  {
    colName: 'PRF_GRP_CMDT_CD',
    nullAble: '',
    dataType: 'VARCHAR2(2)',
  },
  {
    colName: 'PRF_CNTR_TPSZ_CD',
    nullAble: '',
    dataType: 'VARCHAR2(4)',
  },
  {
    colName: 'PRF_REP_CMDT_CD',
    nullAble: '',
    dataType: 'VARCHAR2(4)',
  },
  {
    colName: 'SREP_CD',
    nullAble: '',
    dataType: 'VARCHAR2(5)',
  },
  {
    colName: 'CTS_NO',
    nullAble: '',
    dataType: 'VARCHAR2(11)',
  },
  {
    colName: 'FRT_FWRD_FMC_NO',
    nullAble: '',
    dataType: 'VARCHAR2(20)',
  },
  {
    colName: 'KEY_ACCT_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'KEY_ACCT_ST_EFF_DT',
    nullAble: '',
    dataType: 'DATE',
  },
  {
    colName: 'KEY_ACCT_END_EFF_DT',
    nullAble: '',
    dataType: 'DATE',
  },
  {
    colName: 'SUBS_CO_CD',
    nullAble: '',
    dataType: 'VARCHAR2(2)',
  },
  {
    colName: 'MODI_CUST_CNT_CD',
    nullAble: '',
    dataType: 'VARCHAR2(2)',
  },
  {
    colName: 'MODI_CUST_SEQ',
    nullAble: '',
    dataType: 'NUMBER(6)',
  },
  {
    colName: 'RFND_PSDO_VNDR_SEQ',
    nullAble: '',
    dataType: 'NUMBER(6)',
  },
  {
    colName: 'BFR_OFC_CD',
    nullAble: '',
    dataType: 'VARCHAR2(6)',
  },
  {
    colName: 'BFR_OFC_CNG_DT',
    nullAble: '',
    dataType: 'DATE',
  },
  {
    colName: 'CRE_USR_ID',
    nullAble: 'NOT NULL',
    dataType: 'VARCHAR2(100)',
  },
  {
    colName: 'CRE_DT',
    nullAble: 'NOT NULL',
    dataType: 'DATE',
  },
  {
    colName: 'UPD_USR_ID',
    nullAble: 'NOT NULL',
    dataType: 'VARCHAR2(100)',
  },
  {
    colName: 'UPD_DT',
    nullAble: 'NOT NULL',
    dataType: 'DATE',
  },
  {
    colName: 'DELT_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'EAI_EVNT_DT',
    nullAble: '',
    dataType: 'DATE',
  },
  {
    colName: 'KEY_ACCT_MGR_USR_ID',
    nullAble: '',
    dataType: 'VARCHAR2(100)',
  },
  {
    colName: 'KEY_ACCT_MGR_USR_NM',
    nullAble: '',
    dataType: 'VARCHAR2(100)',
  },
  {
    colName: 'SLS_DELT_EFF_DT',
    nullAble: '',
    dataType: 'VARCHAR2(8)',
  },
  {
    colName: 'FLET_MGMT_OWNR_CUST_SEQ',
    nullAble: '',
    dataType: 'NUMBER(4)',
  },
  {
    colName: 'INV_ISS_CURR_TP_CD',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'INV_ISS_TP_CD',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'NMD_CUST_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'BKG_ALT_RSN',
    nullAble: '',
    dataType: 'VARCHAR2(4000)',
  },
  {
    colName: 'BKG_ALT_FM_DT',
    nullAble: '',
    dataType: 'DATE',
  },
  {
    colName: 'BKG_ALT_TO_DT',
    nullAble: '',
    dataType: 'DATE',
  },
  {
    colName: 'BKG_ALT_MSG',
    nullAble: '',
    dataType: 'VARCHAR2(4000)',
  },
  {
    colName: 'BKG_ALT_CRE_USR_ID',
    nullAble: '',
    dataType: 'VARCHAR2(100)',
  },
  {
    colName: 'BKG_ALT_CRE_DT',
    nullAble: '',
    dataType: 'DATE',
  },
  {
    colName: 'EAI_IF_ID',
    nullAble: '',
    dataType: 'VARCHAR2(32)',
  },
  {
    colName: 'MLT_TRD_ACCT_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'CUST_DIV_CD',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'MODI_CUST_CD',
    nullAble: '',
    dataType: 'VARCHAR2(30)',
  },
  {
    colName: 'CNSD_CUST_CNT_CD',
    nullAble: '',
    dataType: 'VARCHAR2(2)',
  },
  {
    colName: 'CNSD_CUST_SEQ',
    nullAble: '',
    dataType: 'NUMBER(6)',
  },
  {
    colName: 'SPRS_PAY_LTR_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'PAY_RQST_LTR_FMT_CD',
    nullAble: '',
    dataType: 'VARCHAR2(3)',
  },
  {
    colName: 'INV_EDI_LVL_CD',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'DFLT_INV_CURR_DIV_CD',
    nullAble: '',
    dataType: 'VARCHAR2(3)',
  },
  {
    colName: 'EDW_UPD_DT',
    nullAble: '',
    dataType: 'DATE',
  },
  {
    colName: 'RAIL_ROAD_PRIO_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'MODI_CUST_CD2',
    nullAble: '',
    dataType: 'VARCHAR2(30)',
  },
  {
    colName: 'SPRT_EML_INV_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'CUST_GRP_HRCHY_CD',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'EDI_INV_NO_REQ_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'MOT_NO',
    nullAble: '',
    dataType: 'VARCHAR2(20)',
  },
  {
    colName: 'MOT_EFF_DT',
    nullAble: '',
    dataType: 'DATE',
  },
  {
    colName: 'MOT_EXP_DT',
    nullAble: '',
    dataType: 'DATE',
  },
  {
    colName: 'CERTI_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'CRM_IF_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'CERTI_SAV_ID',
    nullAble: '',
    dataType: 'VARCHAR2(50)',
  },
  {
    colName: 'BKLST_CUST_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'BKLST_CUST_RSN_CD',
    nullAble: '',
    dataType: 'VARCHAR2(3)',
  },
  {
    colName: 'BKLST_CUST_MSG_TP_CD',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'BKLST_SHPR_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'BKLST_CNEE_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'BKLST_FWRD_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'BKLST_PAYR_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'BKLST_NTFY_PTY_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'SANC_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'SANC_MNL_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'SNT_CRM_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'BKLST_OTR_RSN',
    nullAble: '',
    dataType: 'VARCHAR2(4000)',
  },
  {
    colName: 'XTER_CUST_RQST_NO',
    nullAble: '',
    dataType: 'VARCHAR2(30)',
  },
  {
    colName: 'NON_SDN_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'NON_SDN_MNL_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'AUTO_STL_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'VLD_RETN_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'POTEN_DUP_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'TAX_OFC_NM',
    nullAble: '',
    dataType: 'VARCHAR2(50)',
  },
  {
    colName: 'PSON_EFF_SHP_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'EU_SANC_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'EU_SANC_MNL_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
  {
    colName: 'BRO_PIN_ID',
    nullAble: '',
    dataType: 'VARCHAR2(6)',
  },
  {
    colName: 'CTRT_CUST_FLG',
    nullAble: '',
    dataType: 'VARCHAR2(1)',
  },
];

for (let i = 0; i < listJson.length; i++) {
  listFilledCol[i].colName.childNodes[0].innerHTML = listJson[i].colName;
  listFilledCol[i].dataType.childNodes[0].innerHTML = listJson[i].dataType;
  listFilledCol[i].nullAble.childNodes[0].innerHTML = listJson[i].nullAble;
}

// console.log('rowArr', rowArr.length);
const elm = document.querySelector("td[id='0bbd5653-cd3b-49d0-a1ea-5cc0d84a3083'] p");
elm.innerHTML = 'abc';
