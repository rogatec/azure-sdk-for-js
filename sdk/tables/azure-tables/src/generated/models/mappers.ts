/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const TableQueryResponse: coreHttp.CompositeMapper = {
  serializedName: "TableQueryResponse",
  type: {
    name: "Composite",
    className: "TableQueryResponse",
    modelProperties: {
      odataMetadata: {
        serializedName: "odata\\.metadata",
        xmlName: "odata\\.metadata",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        xmlName: "value",
        xmlElementName: "TableResponseProperties",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "TableResponseProperties" }
          }
        }
      }
    }
  }
};

export const TableResponseProperties: coreHttp.CompositeMapper = {
  serializedName: "TableResponseProperties",
  type: {
    name: "Composite",
    className: "TableResponseProperties",
    modelProperties: {
      tableName: {
        serializedName: "TableName",
        xmlName: "TableName",
        type: {
          name: "String"
        }
      },
      odataType: {
        serializedName: "odata\\.type",
        xmlName: "odata\\.type",
        type: {
          name: "String"
        }
      },
      odataId: {
        serializedName: "odata\\.id",
        xmlName: "odata\\.id",
        type: {
          name: "String"
        }
      },
      odataEditLink: {
        serializedName: "odata\\.editLink",
        xmlName: "odata\\.editLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableServiceError: coreHttp.CompositeMapper = {
  serializedName: "TableServiceError",
  type: {
    name: "Composite",
    className: "TableServiceError",
    modelProperties: {
      odataError: {
        serializedName: "odata\\.error",
        xmlName: "odata\\.error",
        type: {
          name: "Composite",
          className: "TableServiceErrorOdataError"
        }
      }
    }
  }
};

export const TableServiceErrorOdataError: coreHttp.CompositeMapper = {
  serializedName: "TableServiceErrorOdataError",
  type: {
    name: "Composite",
    className: "TableServiceErrorOdataError",
    modelProperties: {
      code: {
        serializedName: "code",
        xmlName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        xmlName: "message",
        type: {
          name: "Composite",
          className: "TableServiceErrorOdataErrorMessage"
        }
      }
    }
  }
};

export const TableServiceErrorOdataErrorMessage: coreHttp.CompositeMapper = {
  serializedName: "TableServiceErrorOdataErrorMessage",
  type: {
    name: "Composite",
    className: "TableServiceErrorOdataErrorMessage",
    modelProperties: {
      lang: {
        serializedName: "lang",
        xmlName: "lang",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableProperties: coreHttp.CompositeMapper = {
  serializedName: "TableProperties",
  type: {
    name: "Composite",
    className: "TableProperties",
    modelProperties: {
      tableName: {
        serializedName: "TableName",
        xmlName: "TableName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableEntityQueryResponse: coreHttp.CompositeMapper = {
  serializedName: "TableEntityQueryResponse",
  type: {
    name: "Composite",
    className: "TableEntityQueryResponse",
    modelProperties: {
      odataMetadata: {
        serializedName: "odata\\.metadata",
        xmlName: "odata\\.metadata",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        xmlName: "value",
        xmlElementName: "TableEntityProperties",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const SignedIdentifier: coreHttp.CompositeMapper = {
  serializedName: "SignedIdentifier",
  xmlName: "SignedIdentifier",
  type: {
    name: "Composite",
    className: "SignedIdentifier",
    modelProperties: {
      id: {
        serializedName: "Id",
        required: true,
        xmlName: "Id",
        type: {
          name: "String"
        }
      },
      accessPolicy: {
        serializedName: "AccessPolicy",
        xmlName: "AccessPolicy",
        type: {
          name: "Composite",
          className: "AccessPolicy"
        }
      }
    }
  }
};

export const AccessPolicy: coreHttp.CompositeMapper = {
  serializedName: "AccessPolicy",
  xmlName: "AccessPolicy",
  type: {
    name: "Composite",
    className: "AccessPolicy",
    modelProperties: {
      start: {
        serializedName: "Start",
        required: true,
        xmlName: "Start",
        type: {
          name: "DateTime"
        }
      },
      expiry: {
        serializedName: "Expiry",
        required: true,
        xmlName: "Expiry",
        type: {
          name: "DateTime"
        }
      },
      permission: {
        serializedName: "Permission",
        required: true,
        xmlName: "Permission",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableServiceProperties: coreHttp.CompositeMapper = {
  serializedName: "TableServiceProperties",
  xmlName: "StorageServiceProperties",
  type: {
    name: "Composite",
    className: "TableServiceProperties",
    modelProperties: {
      logging: {
        serializedName: "Logging",
        xmlName: "Logging",
        type: {
          name: "Composite",
          className: "Logging"
        }
      },
      hourMetrics: {
        serializedName: "HourMetrics",
        xmlName: "HourMetrics",
        type: {
          name: "Composite",
          className: "Metrics"
        }
      },
      minuteMetrics: {
        serializedName: "MinuteMetrics",
        xmlName: "MinuteMetrics",
        type: {
          name: "Composite",
          className: "Metrics"
        }
      },
      cors: {
        serializedName: "Cors",
        xmlName: "Cors",
        xmlIsWrapped: true,
        xmlElementName: "CorsRule",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "CorsRule" } }
        }
      }
    }
  }
};

export const Logging: coreHttp.CompositeMapper = {
  serializedName: "Logging",
  xmlName: "Logging",
  type: {
    name: "Composite",
    className: "Logging",
    modelProperties: {
      version: {
        serializedName: "Version",
        required: true,
        xmlName: "Version",
        type: {
          name: "String"
        }
      },
      delete: {
        serializedName: "Delete",
        required: true,
        xmlName: "Delete",
        type: {
          name: "Boolean"
        }
      },
      read: {
        serializedName: "Read",
        required: true,
        xmlName: "Read",
        type: {
          name: "Boolean"
        }
      },
      write: {
        serializedName: "Write",
        required: true,
        xmlName: "Write",
        type: {
          name: "Boolean"
        }
      },
      retentionPolicy: {
        serializedName: "RetentionPolicy",
        xmlName: "RetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const RetentionPolicy: coreHttp.CompositeMapper = {
  serializedName: "RetentionPolicy",
  xmlName: "RetentionPolicy",
  type: {
    name: "Composite",
    className: "RetentionPolicy",
    modelProperties: {
      enabled: {
        serializedName: "Enabled",
        required: true,
        xmlName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      days: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "Days",
        xmlName: "Days",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Metrics: coreHttp.CompositeMapper = {
  serializedName: "Metrics",
  type: {
    name: "Composite",
    className: "Metrics",
    modelProperties: {
      version: {
        serializedName: "Version",
        xmlName: "Version",
        type: {
          name: "String"
        }
      },
      enabled: {
        serializedName: "Enabled",
        required: true,
        xmlName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      includeAPIs: {
        serializedName: "IncludeAPIs",
        xmlName: "IncludeAPIs",
        type: {
          name: "Boolean"
        }
      },
      retentionPolicy: {
        serializedName: "RetentionPolicy",
        xmlName: "RetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const CorsRule: coreHttp.CompositeMapper = {
  serializedName: "CorsRule",
  xmlName: "CorsRule",
  type: {
    name: "Composite",
    className: "CorsRule",
    modelProperties: {
      allowedOrigins: {
        serializedName: "AllowedOrigins",
        required: true,
        xmlName: "AllowedOrigins",
        type: {
          name: "String"
        }
      },
      allowedMethods: {
        serializedName: "AllowedMethods",
        required: true,
        xmlName: "AllowedMethods",
        type: {
          name: "String"
        }
      },
      allowedHeaders: {
        serializedName: "AllowedHeaders",
        required: true,
        xmlName: "AllowedHeaders",
        type: {
          name: "String"
        }
      },
      exposedHeaders: {
        serializedName: "ExposedHeaders",
        required: true,
        xmlName: "ExposedHeaders",
        type: {
          name: "String"
        }
      },
      maxAgeInSeconds: {
        constraints: {},
        serializedName: "MaxAgeInSeconds",
        required: true,
        xmlName: "MaxAgeInSeconds",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TableServiceStats: coreHttp.CompositeMapper = {
  serializedName: "TableServiceStats",
  xmlName: "StorageServiceStats",
  type: {
    name: "Composite",
    className: "TableServiceStats",
    modelProperties: {
      geoReplication: {
        serializedName: "GeoReplication",
        xmlName: "GeoReplication",
        type: {
          name: "Composite",
          className: "GeoReplication"
        }
      }
    }
  }
};

export const GeoReplication: coreHttp.CompositeMapper = {
  serializedName: "GeoReplication",
  xmlName: "GeoReplication",
  type: {
    name: "Composite",
    className: "GeoReplication",
    modelProperties: {
      status: {
        serializedName: "Status",
        required: true,
        xmlName: "Status",
        type: {
          name: "String"
        }
      },
      lastSyncTime: {
        serializedName: "LastSyncTime",
        required: true,
        xmlName: "LastSyncTime",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const TableResponse: coreHttp.CompositeMapper = {
  serializedName: "TableResponse",
  type: {
    name: "Composite",
    className: "TableResponse",
    modelProperties: {
      ...TableResponseProperties.type.modelProperties,
      odataMetadata: {
        serializedName: "odata\\.metadata",
        xmlName: "odata\\.metadata",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableQueryHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_queryHeaders",
  type: {
    name: "Composite",
    className: "TableQueryHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      xMsContinuationNextTableName: {
        serializedName: "x-ms-continuation-nexttablename",
        xmlName: "x-ms-continuation-nexttablename",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableQueryExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_queryExceptionHeaders",
  type: {
    name: "Composite",
    className: "TableQueryExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableCreateHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_createHeaders",
  type: {
    name: "Composite",
    className: "TableCreateHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      preferenceApplied: {
        serializedName: "preference-applied",
        xmlName: "preference-applied",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableCreateExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_createExceptionHeaders",
  type: {
    name: "Composite",
    className: "TableCreateExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableDeleteHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_deleteHeaders",
  type: {
    name: "Composite",
    className: "TableDeleteHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const TableDeleteExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_deleteExceptionHeaders",
  type: {
    name: "Composite",
    className: "TableDeleteExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableQueryEntitiesHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_queryEntitiesHeaders",
  type: {
    name: "Composite",
    className: "TableQueryEntitiesHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      xMsContinuationNextPartitionKey: {
        serializedName: "x-ms-continuation-nextpartitionkey",
        xmlName: "x-ms-continuation-nextpartitionkey",
        type: {
          name: "String"
        }
      },
      xMsContinuationNextRowKey: {
        serializedName: "x-ms-continuation-nextrowkey",
        xmlName: "x-ms-continuation-nextrowkey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableQueryEntitiesExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_queryEntitiesExceptionHeaders",
  type: {
    name: "Composite",
    className: "TableQueryEntitiesExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableQueryEntitiesWithPartitionAndRowKeyHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_queryEntitiesWithPartitionAndRowKeyHeaders",
  type: {
    name: "Composite",
    className: "TableQueryEntitiesWithPartitionAndRowKeyHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      eTag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      xMsContinuationNextPartitionKey: {
        serializedName: "x-ms-continuation-nextpartitionkey",
        xmlName: "x-ms-continuation-nextpartitionkey",
        type: {
          name: "String"
        }
      },
      xMsContinuationNextRowKey: {
        serializedName: "x-ms-continuation-nextrowkey",
        xmlName: "x-ms-continuation-nextrowkey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableQueryEntitiesWithPartitionAndRowKeyExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_queryEntitiesWithPartitionAndRowKeyExceptionHeaders",
  type: {
    name: "Composite",
    className: "TableQueryEntitiesWithPartitionAndRowKeyExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableUpdateEntityHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_updateEntityHeaders",
  type: {
    name: "Composite",
    className: "TableUpdateEntityHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      eTag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableUpdateEntityExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_updateEntityExceptionHeaders",
  type: {
    name: "Composite",
    className: "TableUpdateEntityExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableMergeEntityHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_mergeEntityHeaders",
  type: {
    name: "Composite",
    className: "TableMergeEntityHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      eTag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableMergeEntityExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_mergeEntityExceptionHeaders",
  type: {
    name: "Composite",
    className: "TableMergeEntityExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableDeleteEntityHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_deleteEntityHeaders",
  type: {
    name: "Composite",
    className: "TableDeleteEntityHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const TableDeleteEntityExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_deleteEntityExceptionHeaders",
  type: {
    name: "Composite",
    className: "TableDeleteEntityExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableInsertEntityHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_insertEntityHeaders",
  type: {
    name: "Composite",
    className: "TableInsertEntityHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      eTag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      preferenceApplied: {
        serializedName: "preference-applied",
        xmlName: "preference-applied",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "content-type",
        xmlName: "content-type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableInsertEntityExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_insertEntityExceptionHeaders",
  type: {
    name: "Composite",
    className: "TableInsertEntityExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableGetAccessPolicyHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_getAccessPolicyHeaders",
  type: {
    name: "Composite",
    className: "TableGetAccessPolicyHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const TableGetAccessPolicyExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_getAccessPolicyExceptionHeaders",
  type: {
    name: "Composite",
    className: "TableGetAccessPolicyExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TableSetAccessPolicyHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_setAccessPolicyHeaders",
  type: {
    name: "Composite",
    className: "TableSetAccessPolicyHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const TableSetAccessPolicyExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Table_setAccessPolicyExceptionHeaders",
  type: {
    name: "Composite",
    className: "TableSetAccessPolicyExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceSetPropertiesHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_setPropertiesHeaders",
  type: {
    name: "Composite",
    className: "ServiceSetPropertiesHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceSetPropertiesExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_setPropertiesExceptionHeaders",
  type: {
    name: "Composite",
    className: "ServiceSetPropertiesExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceGetPropertiesHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_getPropertiesHeaders",
  type: {
    name: "Composite",
    className: "ServiceGetPropertiesHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceGetPropertiesExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_getPropertiesExceptionHeaders",
  type: {
    name: "Composite",
    className: "ServiceGetPropertiesExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceGetStatisticsHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_getStatisticsHeaders",
  type: {
    name: "Composite",
    className: "ServiceGetStatisticsHeaders",
    modelProperties: {
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const ServiceGetStatisticsExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "Service_getStatisticsExceptionHeaders",
  type: {
    name: "Composite",
    className: "ServiceGetStatisticsExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};
