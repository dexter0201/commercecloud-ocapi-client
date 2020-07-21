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
import Product from './Product'





/**
* The BundledProduct model module.
* @module models/BundledProduct
* @version 20.4
*/
export default class BundledProduct {
    /**
    * Constructs a new <code>BundledProduct</code>.
    * Document representing a bundled product within a product bundle.
    * @alias module:models/BundledProduct
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>BundledProduct</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/BundledProduct} obj Optional instance to populate.
    * @return {module:models/BundledProduct} The populated <code>BundledProduct</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BundledProduct()





            if (data.hasOwnProperty('id')) {
                obj.id = ApiClient.convertToType(data.id, 'String')
            }
            if (data.hasOwnProperty('product')) {
                obj.product = Product.constructFromObject(data.product)
            }
            if (data.hasOwnProperty('quantity')) {
                obj.quantity = ApiClient.convertToType(data.quantity, 'Number')
            }
        }
        return obj
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * The product being bundled.
    * @member {module:models/Product} product
    */
    product = undefined;
    /**
    * For the product being bundled, the quantity added to the bundle.
    * @member {Number} quantity
    */
    quantity = undefined;








}


