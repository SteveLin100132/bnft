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
import { BnftTemplate } from 'src/bnft';
/**
 * API服務器
 */
export declare class Server {
    private benefit;
    /**
     * 日誌
     */
    private readonly logger;
    /**
     * API Server
     */
    private readonly server;
    /**
     * @param benefit 效益計算Job
     */
    constructor(benefit: BnftTemplate);
    /**
     * 重新上拋所有效益
     *
     * @method private
     * @param req 請求
     * @param res 回應
     */
    private sendBenefit;
    /**
     * 重新上拋特定時間區間內的所有效益
     *
     * @method private
     * @param req 請求
     * @param res 會應
     */
    private sendBenefitByTimeGroup;
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
     * @param port API端口
     * @return 回傳物件本身
     */
    start(port?: number): Server;
}
