/**
 * 專案名稱： @wistroni40/bnft
 * 部門代號： ML8100
 * 檔案說明： 基本資料模型匯出點
 * @CREATE Thu Jan 21 2021 下午6:01:27
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
/**
 * 基本資料模型匯出點
 */
export declare namespace BaseModel {
    /**
     * 查詢過濾項目
     */
    interface Filter {
        /**
         * 選定欄位
         */
        fields?: any;
        /**
         * 關聯
         */
        include?: any;
        /**
         * 筆數限制
         */
        limit?: any;
        /**
         * 排序
         */
        order?: any;
        /**
         * 忽略特定筆數的資料
         */
        skip?: any;
        /**
         * 查詢條件
         */
        where?: any;
    }
}
