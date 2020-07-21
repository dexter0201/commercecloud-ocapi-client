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

import expect from 'expect.js'
import ShopApi from '../../src/index'

let instance

beforeEach(() => {
    instance = new ShopApi.SuggestedTerm()
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') {
        return object[getter]()
    } else {
        return object[property]
    }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') {
        object[setter](value)
    } else {
        object[property] = value
    }
}

describe('SuggestedTermModel', () => {
    it('should create an instance of SuggestedTermModel', () => {
        // uncomment below and update the code to test SuggestedTermModel
        // var instane = new ShopApi.SuggestedTerm()
        // expect(instance).to.be.a(ShopApi.SuggestedTerm);
    })

    it('should have the property completed (base name: "completed")', () => {
        // uncomment below and update the code to test the property completed
        // var instane = new ShopApi.SuggestedTerm()
        // expect(instance).to.be();
    })

    it('should have the property corrected (base name: "corrected")', () => {
        // uncomment below and update the code to test the property corrected
        // var instane = new ShopApi.SuggestedTerm()
        // expect(instance).to.be();
    })

    it('should have the property exactMatch (base name: "exact_match")', () => {
        // uncomment below and update the code to test the property exactMatch
        // var instane = new ShopApi.SuggestedTerm()
        // expect(instance).to.be();
    })

    it('should have the property value (base name: "value")', () => {
        // uncomment below and update the code to test the property value
        // var instane = new ShopApi.SuggestedTerm()
        // expect(instance).to.be();
    })

})
