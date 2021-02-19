/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 抽象效益計算範本單元測試
 * @CREATE Fri Jan 22 2021 上午11:26:40
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/* eslint-disable */
import * as should from 'should';
import * as sinon from 'sinon';
import { BenefitQueryModel, Bnft } from './../../src/bnft';
import {
  BnftMock,
  BNFT_CONF,
  BNFT_PARAM1,
  BNFT_PARAM2,
  BNFT_SAVING,
} from './../mock';

/**
 * 抽象效益計算範本單元測試
 */
describe('BnftTemplate', () => {
  /**
   * 效益計算範本
   */
  let bnft: BnftMock;

  /**
   * 測試前準備
   */
  beforeEach(() => {
    bnft = new BnftMock(BNFT_CONF);
  });

  /**
   * 測試建構效益參數資料
   */
  it(`buildPayload: get benefit saving data`, () => {
    // Arrange
    const timestamp = new Date();
    const site = 'WKS';
    const company = 'WSD';
    const plant = 'WKS-P5';
    const plantCode = 'F232';
    const start = new Date();
    const end = new Date();
    const condition: BenefitQueryModel = {
      site,
      company,
      plant,
      plantCode,
      start,
      end,
    };

    const param1 = BNFT_PARAM1;
    const param2 = BNFT_PARAM2;

    const expect = BNFT_SAVING;
    expect.evt_dt = timestamp.getTime();
    expect.params = [param1, param2];

    bnft.config = BNFT_CONF;

    sinon
      .stub(bnft, 'getBenefitParams')
      .withArgs(condition)
      .returns(Promise.resolve([param1, param2]));

    // Act
    const result = bnft.buildPayload(timestamp, condition);

    // Assert
    result.subscribe((benefit) => should(benefit).containDeep(expect));
  });

  /**
   * 測試取得效益參數
   */
  it(`getBenefitParams: get benefit paramters`, async () => {
    // Arrange
    const site = 'WKS';
    const company = 'WSD';
    const plant = 'WKS-P5';
    const plantCode = 'F232';
    const start = new Date();
    const end = new Date();
    const condition: BenefitQueryModel = {
      site,
      company,
      plant,
      plantCode,
      start,
      end,
    };
    const expect: Bnft.Param[] = [BNFT_PARAM1];

    sinon
      .stub(bnft, 'getBenefitParams')
      .withArgs(condition)
      .returns(Promise.resolve(expect));

    // Act
    const result = await bnft.getBenefitParams(condition);

    // Assert
    should(result).containDeep(expect);
  });
});
