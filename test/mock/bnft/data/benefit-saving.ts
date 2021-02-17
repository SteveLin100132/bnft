/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 假資料
 * @CREATE Fri Jan 22 2021 下午2:39:17
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Bnft } from '../../../../src/bnft';

/**
 * 假資料
 */
export const BNFT_SAVING: Bnft.BenefitSaving = {
  evt_dt: 1609430400000,
  freq: 'D',
  site: 'WKS',
  company: 'WSD',
  plant: 'WKS-P5',
  plant_code: 'F232',
  system_id: 'test',
  type_id: 'cost_idl',
  benefit_type: 'direct',
  params: [
    {
      name: 'param1',
      value: 10,
      type: 'VAR',
    },
    {
      name: 'param1',
      value: 20,
      type: 'CONST',
    },
  ],
};
