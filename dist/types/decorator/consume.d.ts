import { ComponentInterface } from '@stencil/core';
import { Request } from '../utils/request';
/**
 * Consume decorator, denotes state store which has to be provided to property.
 *
 * @param {string} name Name of the store to consume.
 */
export declare function Consume(name: string): any;
/**
 * Get all requests for state stores by given component instance.
 */
export declare function getStoreRequests(instance: ComponentInterface): Request[];
