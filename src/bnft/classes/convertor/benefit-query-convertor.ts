/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 效益查詢條件轉換器
 * @CREATE Fri Feb 05 2021 下午4:24:42
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { TimeManager } from './../../../utils';
import { BenefitPlantModel } from './../../api';
import { BenefitQueryModel } from './../../models';

/**
 * 效益查詢條件轉換器
 */
export class BenefitQueryConvertor {
  /**
   * 查詢開始時間
   */
  private _start = TimeManager.getStartTime();
  /**
   * 查詢結束時間
   */
  private _end = TimeManager.getEndTime();

  /**
   * @param plant 廠別資料模型
   */
  constructor(private plant: BenefitPlantModel) {}

  /**
   * 設定查詢開始時間
   *
   * @method public
   * @param start 查詢開始時間
   * @return 回傳物件本身
   */
  public setStartTime(start: Date): BenefitQueryConvertor {
    this._start = start;
    return this;
  }

  /**
   * 設定查詢結束時間
   *
   * @method public
   * @param end 查詢結束時間
   * @return 回傳物件本身
   */
  public setEndTime(end: Date): BenefitQueryConvertor {
    this._end = end;
    return this;
  }

  /**
   * 建構效益查詢條件
   *
   * @method public
   * @return 回傳效益查詢條件
   */
  public build(): BenefitQueryModel {
    return {
      site: this.plant.site,
      company: this.plant.company,
      plant: this.plant.plant,
      plantCode: this.plant.plantcode,
      start: this._start,
      end: this._end,
    };
  }
}
