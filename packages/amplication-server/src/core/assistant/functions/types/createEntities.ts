/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CreateEntities {
  /**
   * a list of name of the entities to create.
   */
  names: string[];
  /**
   * the ID of the service in which the entity is created. If there are multiple services available in the context, show the user a list of services to choose from. If there is no service available, do not use projectId instead
   */
  serviceId: string;
}
