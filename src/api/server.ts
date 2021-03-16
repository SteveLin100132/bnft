/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： API服務器
 * @CREATE Mon Feb 08 2021 下午2:56:08
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as fs from 'fs';
import * as http from 'http';
import { Bnft, BnftTemplate } from 'src/bnft';
import { ProducePayloadModel } from 'src/retry';
import * as swaggerUi from 'swagger-ui-express';
import { Log4js } from './../logger';
import { SWAGGER_DOC } from './swagger';

/**
 * API服務器
 */
export class Server {
  /**
   * 日誌
   */
  private readonly logger = new Log4js('api');
  /**
   * API Server
   */
  private readonly server = express();
  /**
   * API
   */
  private api?: http.Server;
  /**
   * 效益計算Job
   */
  private benefit = new Map<string, BnftTemplate>();
  /**
   * 單一實例
   */
  public static instance = new Server();

  private constructor() {
    // 啟動API Server
    this.start();
  }

  /**
   * 取得效益計算Job清單
   *
   * @method private
   * @return 回傳效益計算Job清單
   */
  private getBenefitList(): BnftTemplate[] {
    return Array.from(this.benefit).map((benefit) => benefit[1]);
  }

  /**
   * 取得效益Key名稱
   *
   * @method private
   * @param req 請求
   * @return 回傳效益Key名稱
   */
  private getBenefitKey(req: express.Request): string {
    const systemId = req.query.systemId;
    const typeId = req.query.typeId;
    return `${systemId}.${typeId}`;
  }

  /**
   * 重新上拋所有效益
   *
   * @method private
   * @param req 請求
   * @param res 回應
   */
  private async sendBenefit(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    const timestamp = new Date(parseInt(req.query.timestamp as string, 10));
    timestamp.setDate(timestamp.getDate() + 1);
    const result = await Promise.all(
      this.getBenefitList().map((benefit) =>
        benefit.execute(timestamp).toPromise()
      )
    );
    res.send(result);
  }

  /**
   * 重新上拋特定效益
   *
   * @method private
   * @param req 請求
   * @param res 回應
   */
  private async sendSpecificBenefit(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    const key = this.getBenefitKey(req);
    const timestamp = new Date(parseInt(req.query.timestamp as string, 10));
    timestamp.setDate(timestamp.getDate() + 1);
    const benefit = this.benefit.get(key);
    if (benefit) {
      const result = await benefit.execute(timestamp).toPromise();
      res.send(result);
    } else {
      res.send(null);
    }
  }

  /**
   * 重新上拋特定時間區間內的所有效益
   *
   * @method private
   * @param req 請求
   * @param res 會應
   */
  private async sendBenefitByTimeGroup(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    if (Array.isArray(req.body) && req.body.length > 0) {
      const resultList: ProducePayloadModel<Bnft.BenefitSaving>[] = [];
      await Promise.all(
        req.body.map(async (date) => {
          const timestamp = new Date(parseInt(date, 10));
          timestamp.setDate(timestamp.getDate() + 1);
          const result = await Promise.all(
            this.getBenefitList().map((benefit) =>
              benefit.execute(timestamp).toPromise()
            )
          );
          resultList.push(...result);
        })
      );
      res.send(resultList);
    } else {
      res.send('body format error');
    }
  }

  /**
   * 重新上拋特定時間區間內的特定效益
   *
   * @method private
   * @param req 請求
   * @param res 會應
   */
  public async sendSpecificBenefitByTimeGroup(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    if (Array.isArray(req.body) && req.body.length > 0) {
      const key = this.getBenefitKey(req);
      const resultList: ProducePayloadModel<Bnft.BenefitSaving>[] = [];
      await Promise.all(
        req.body.map(async (date) => {
          const timestamp = new Date(parseInt(date, 10));
          timestamp.setDate(timestamp.getDate() + 1);
          const benefit = await this.benefit.get(key);
          if (benefit) {
            const result = await benefit.execute(timestamp).toPromise();
            resultList.push(result);
          }
        })
      );
      res.send(resultList);
    } else {
      res.send('body format error');
    }
  }

  /**
   * 重拋上拋失敗的效益
   *
   * @method private
   * @param req 請求
   * @param res 會應
   */
  private async sendBackupBenefit(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    const files = fs.readdirSync('backup');
    const result = await Promise.all(
      files.map((file) => {
        const benefit = fs.readFileSync(`backup/${file}`, { encoding: 'utf8' });
        try {
          if (this.getBenefitList().length > 0) {
            this.getBenefitList()[0].send(JSON.parse(benefit));
            fs.unlinkSync(`backup/${file}`);
          }
        } catch (error) {
          this.logger.warn('Send backup benefit failed');
          this.logger.warn(benefit);
        }
        return JSON.parse(benefit);
      })
    );
    res.send(result);
  }

  /**
   * 啟動API Server
   *
   * @method public
   * @return 回傳物件本身
   */
  public start(): Server {
    const port = 3000;
    this.server.use(bodyParser.json());
    this.server.post('/benefit/send', this.sendBenefit.bind(this));
    this.server.post(
      '/specific/benefit/send',
      this.sendSpecificBenefit.bind(this)
    );
    this.server.post(
      '/benefit/send/timestamps',
      this.sendBenefitByTimeGroup.bind(this)
    );
    this.server.post(
      '/specific/benefit/send/timestamps',
      this.sendSpecificBenefitByTimeGroup.bind(this)
    );
    this.server.post('/benefit/backup', this.sendBackupBenefit.bind(this));
    this.server.use('/', swaggerUi.serve, swaggerUi.setup(SWAGGER_DOC));
    this.logger.info(`Listen api port ${port}`);
    this.api = this.server.listen(port);
    return this;
  }

  /**
   * 終止API Server
   *
   * @method public
   * @return 回傳物件本身
   */
  public stop(): Server {
    if (this.api) {
      this.api.close();
      this.logger.warn('api close');
    }
    return this;
  }

  /**
   * 註冊效益計算Job
   *
   * @method public
   * @param benefit 效益計算Job
   */
  public register(benefit: BnftTemplate): void {
    const key = `${benefit.config.systemId}.${benefit.config.typeId}`;
    this.benefit.set(key, benefit);
  }
}
