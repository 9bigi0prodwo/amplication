/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CreateService {
  /**
   * the name of the service
   */
  serviceName: string;
  /**
   * the description of the service
   */
  serviceDescription?: string;
  /**
   * the ID of the service in which to create the project
   */
  projectId: string;
  /**
   * the path in the repo where to save the generated files of the admin UI. e.g. 'apps/my-admin'
   */
  adminUIPath: string;
  /**
   * the path in the repo where to save the generated files of the server. e.g. 'apps/my-server'
   */
  serverPath: string;
}
