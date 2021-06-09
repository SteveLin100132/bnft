# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.2] - 2021-06-09

### Changed

- 效益範本設定添加開發模式，啟動開發模式不會送出效益僅打印日誌

## [1.1.0] - 2021-06-08

### Changed

- 效益設定資料提供客製設定欄位

## [1.0.9] - 2021-06-08

### Changed

- 上拋效益後，可以監聽拋後結果是否成功

## [1.0.8] - 2021-03-16

### Changed

- 匯出

## [1.0.7] - 2021-03-16

### Added

#### BnftTemplate

- 添加```enabledPlant```實作項目，來決定那些廠別是否要計算

## [1.0.6] - 2021-02-24

### Changed

#### BnftTemplate

- ```execute```方法添加log模式，執行時僅印出上拋參數，不進行數據拋送

## [1.0.5] - 2021-02-23

### Changed

- 更改Package跟目錄路徑

## [1.0.4] - 2021-02-22

### Changed

- 匯出

## [1.0.3] - 2021-02-22

### Added

- 效益背景API可終止

#### Resend Benefit API

## [1.0.2] - 2021-02-19

### Fixed

#### Resend Benefit API

- 效益背景API實現單例操作，避免多個效益服務產生多個後台API

#### Dependencies

- 將```swagger-jsdoc```, ```swagger-ui-express```加到```package.json```

## [1.0.1] - 2021-02-17

### Added

#### Resend Benefit API

- 提供重新上拋特定效益的API
- 提供重新上拋特定時間區間內的特定效益的API

### Changed

#### Resend Benefit API

- 支援多種效益在同一Job下執行API

## [1.0.0] - 2021-02-17

### Added

#### BnftTemplate

- 提供效益計算實作範本
- 設定效益計算排程
- 可查詢最新的IDL或ID人員工時
- 效益上拋具備重拋及保存機制

#### Resend Benefit API

- 提供重新上拋特定時間的所有效益的API
- 提供重新上拋特定時間區間內的所有效益的API
- 提供重拋上拋失敗的效益的API

