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
import * as express from 'express';
import { BnftTemplate } from 'src/bnft';
/**
 * API服務器
 */
export declare class Server {
    /**
     * 日誌
     */
    private readonly logger;
    /**
     * API Server
     */
    private readonly server;
    /**
     * API
     */
    private api?;
    /**
     * 效益計算Job
     */
    private benefit;
    /**
     * 單一實例
     */
    static instance: Server;
    private constructor();
    /**
     * 取得效益計算Job清單
     *
     * @method private
     * @return 回傳效益計算Job清單
     */
    private getBenefitList;
    /**
     * 取得效益Key名稱
     *
     * @method private
     * @param req 請求
     * @return 回傳效益Key名稱
     */
    private getBenefitKey;
    /**
     * 重新上拋所有效益
     *
     * @method private
     * @param req 請求
     * @param res 回應
     */
    private sendBenefit;
    /**
     * 重新上拋特定效益
     *
     * @method private
     * @param req 請求
     * @param res 回應
     */
    private sendSpecificBenefit;
    /**
     * 重新上拋特定時間區間內的所有效益
     *
     * @method private
     * @param req 請求
     * @param res 會應
     */
    private sendBenefitByTimeGroup;
    /**
     * 重新上拋特定時間區間內的特定效益
     *
     * @method private
     * @param req 請求
     * @param res 會應
     */
    sendSpecificBenefitByTimeGroup(req: express.Request, res: express.Response): Promise<void>;
    /**
     * 重拋上拋失敗的效益
     *
     * @method private
     * @param req 請求
     * @param res 會應
     */
    private sendBackupBenefit;
    /**
     * 啟動API Server
     *
     * @method public
     * @return 回傳物件本身
     */
    start(): Server;
    /**
     * 終止API Server
     *
     * @method public
     * @return 回傳物件本身
     */
    stop(): Server;
    /**
     * 註冊效益計算Job
     *
     * @method public
     * @param benefit 效益計算Job
     */
    register(benefit: BnftTemplate): void;
}
