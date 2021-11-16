export declare const SWAGGER_DOC: {
    openapi: string;
    info: {
        description: string;
        version: string;
        title: string;
        contact: {
            email: string;
        };
        license: {
            name: string;
        };
    };
    basePath: string;
    tags: {
        name: string;
        description: string;
    }[];
    schemes: string[];
    paths: {
        '/benefit/send': {
            post: {
                tags: string[];
                summary: string;
                description: string;
                operationId: string;
                consumes: string[];
                produces: string[];
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                };
                            };
                        };
                    };
                    400: {
                        description: string;
                    };
                };
            };
        };
        '/specific/benefit/send': {
            post: {
                tags: string[];
                summary: string;
                description: string;
                operationId: string;
                consumes: string[];
                produces: string[];
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                };
                            };
                        };
                    };
                    400: {
                        description: string;
                    };
                };
            };
        };
        '/benefit/send/timestamps': {
            post: {
                tags: string[];
                summary: string;
                description: string;
                operationId: string;
                consumes: string[];
                produces: string[];
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: string;
                                items: {
                                    type: string;
                                };
                                example: number[];
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                };
                            };
                        };
                    };
                    400: {
                        description: string;
                    };
                };
            };
        };
        '/specific/benefit/send/timestamps': {
            post: {
                tags: string[];
                summary: string;
                description: string;
                operationId: string;
                consumes: string[];
                produces: string[];
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: string;
                                items: {
                                    type: string;
                                };
                                example: number[];
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                };
                            };
                        };
                    };
                    400: {
                        description: string;
                    };
                };
            };
        };
        '/benefit/backup': {
            post: {
                tags: string[];
                summary: string;
                description: string;
                operationId: string;
                consumes: string[];
                produces: string[];
                parameters: never[];
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                };
                            };
                        };
                    };
                    400: {
                        description: string;
                    };
                };
            };
        };
    };
    securityDefinitions: {};
    components: {
        schemas: {
            BenefitPayload: {
                type: string;
                properties: {
                    url: {
                        type: string;
                        description: string;
                    };
                    data: {
                        $ref: string;
                    };
                };
            };
            BenefitSaving: {
                type: string;
                properties: {
                    evt_dt: {
                        type: string;
                    };
                    plant_code: {
                        type: string;
                    };
                    system_id: {
                        type: string;
                    };
                    type_id: {
                        type: string;
                    };
                    benefit_type: {
                        type: string;
                        enum: string[];
                    };
                    freq: {
                        type: string;
                        example: string;
                    };
                    site: {
                        type: string;
                    };
                    company: {
                        type: string;
                    };
                    plant: {
                        type: string;
                    };
                    params: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            BenefitParams: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    value: {
                        type: string;
                    };
                    type: {
                        type: string;
                        enum: string[];
                    };
                };
            };
        };
    };
    definitions: {
        ApiResponse: {
            type: string;
            properties: {
                code: {
                    type: string;
                    format: string;
                };
                type: {
                    type: string;
                };
                message: {
                    type: string;
                };
            };
        };
    };
};
