/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2020 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 20.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient'





/**
* The Status model module.
* @module models/Status
* @version 20.4
*/
export default class Status {
    /**
    * Constructs a new <code>Status</code>.
    * Document representing a status of an object.
    * @alias module:models/Status
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>Status</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Status} obj Optional instance to populate.
    * @return {module:models/Status} The populated <code>Status</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Status()





            if (data.hasOwnProperty('code')) {
                obj.code = ApiClient.convertToType(data.code, 'String')
            }
            if (data.hasOwnProperty('message')) {
                obj.message = ApiClient.convertToType(data.message, 'String')
            }
            if (data.hasOwnProperty('status')) {
                obj.status = ApiClient.convertToType(data.status, 'Number')
            }
        }
        return obj
    }

    /**
    * The status code.
    * @member {String} code
    */
    code = undefined;
    /**
    * The status message.
    * @member {String} message
    */
    message = undefined;
    /**
    * The status.    For more information on the status values see dw.system.Status.OK and  dw.system.Status.ERROR.
    * @member {Number} status
    */
    status = undefined;








}


