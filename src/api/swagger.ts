export const SWAGGER_DOC = {
  openapi: '3.0.0',
  info: {
    description: 'TODO',
    version: '1.0.0',
    title: 'API Explorer',
    contact: {
      email: 'steveylin@wistron.com',
    },
    license: {
      name: 'Apache 2.0',
    },
  },
  basePath: '/',
  tags: [
    {
      name: 'benefit',
      description: 'Benefit for system',
    },
  ],
  schemes: ['http'],
  paths: {
    '/benefit/send': {
      post: {
        tags: ['benefit'],
        summary: '重新上拋特定時間的所有效益',
        description: '重新上拋特定時間的所有效益',
        operationId: 'sendBenefit',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'timestamp',
            in: 'query',
            description: '重新上拋的時間',
            required: true,
            type: 'number',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'boolean',
                },
              },
            },
          },
          400: {
            description: 'Invalid status value',
          },
        },
      },
    },
    '/specific/benefit/send': {
      post: {
        tags: ['benefit'],
        summary: '重新上拋特定效益',
        description: '重新上拋特定效益',
        operationId: 'sendSpecificBenefit',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'systemId',
            in: 'query',
            description: '系統ID',
            required: true,
            type: 'string',
          },
          {
            name: 'typeId',
            in: 'query',
            description: '效益ID',
            required: true,
            type: 'string',
          },
          {
            name: 'timestamp',
            in: 'query',
            description: '重新上拋的時間',
            required: true,
            type: 'number',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'boolean',
                },
              },
            },
          },
          400: {
            description: 'Invalid status value',
          },
        },
      },
    },
    '/benefit/send/timestamps': {
      post: {
        tags: ['benefit'],
        summary: '重新上拋特定時間區間內的所有效益',
        description: '重新上拋特定時間區間內的所有效益',
        operationId: 'sendBenefitByTimeGroup',
        consumes: ['application/json'],
        produces: ['application/json'],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'number',
                },
                example: [1609430400000, 1609516800000],
              },
            },
          },
        },
        responses: {
          200: {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'boolean',
                },
              },
            },
          },
          400: {
            description: 'Invalid status value',
          },
        },
      },
    },
    '/specific/benefit/send/timestamps': {
      post: {
        tags: ['benefit'],
        summary: '重新上拋特定時間區間內的特定效益',
        description: '重新上拋特定時間區間內的特定效益',
        operationId: 'sendSpecificBenefitByTimeGroup',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'systemId',
            in: 'query',
            description: '系統ID',
            required: true,
            type: 'string',
          },
          {
            name: 'typeId',
            in: 'query',
            description: '效益ID',
            required: true,
            type: 'string',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'number',
                },
                example: [1609430400000, 1609516800000],
              },
            },
          },
        },
        responses: {
          200: {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'boolean',
                },
              },
            },
          },
          400: {
            description: 'Invalid status value',
          },
        },
      },
    },
    '/benefit/backup': {
      post: {
        tags: ['benefit'],
        summary: '重拋上拋失敗的效益',
        description: '重拋上拋失敗的效益',
        operationId: 'sendBackupBenefit',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [],
        responses: {
          200: {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'boolean',
                },
              },
            },
          },
          400: {
            description: 'Invalid status value',
          },
        },
      },
    },
  },
  securityDefinitions: {},
  components: {
    schemas: {
      BenefitPayload: {
        type: 'object',
        properties: {
          url: {
            type: 'string',
            description: 'data destination',
          },
          data: {
            $ref: '#/components/schemas/BenefitSaving',
          },
        },
      },
      BenefitSaving: {
        type: 'object',
        properties: {
          evt_dt: {
            type: 'number',
          },
          plant_code: {
            type: 'string',
          },
          system_id: {
            type: 'string',
          },
          type_id: {
            type: 'string',
          },
          benefit_type: {
            type: 'string',
            enum: ['direct', 'manage'],
          },
          freq: {
            type: 'string',
            example: 'D',
          },
          site: {
            type: 'string',
          },
          company: {
            type: 'string',
          },
          plant: {
            type: 'string',
          },
          params: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/BenefitParams',
            },
          },
        },
      },
      BenefitParams: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          value: {
            type: 'number',
          },
          type: {
            type: 'string',
            enum: ['VAR', 'CONST'],
          },
        },
      },
    },
  },
  definitions: {
    ApiResponse: {
      type: 'object',
      properties: {
        code: {
          type: 'integer',
          format: 'int32',
        },
        type: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
      },
    },
  },
};
