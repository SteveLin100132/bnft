/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： Axios HTTP服務使用範例
 * @CREATE Thu Jan 21 2021 下午4:49:06
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import axios from 'axios';
import { AxiosHttpService } from '../src';

const axiosHttpService = new AxiosHttpService(axios);

const url =
  'http://benefit-api-wsd.api.10.42.226.2.k8sprd-wks.k8s.wistron.com/api/BenefitActiveSystems';
const filter = { include: 'benefitPlant', where: { system_id: 'accs' } };
axiosHttpService
  .get(`${url}?filter=${JSON.stringify(filter)}`)
  .subscribe((result) => console.log(JSON.stringify(result.data)));
