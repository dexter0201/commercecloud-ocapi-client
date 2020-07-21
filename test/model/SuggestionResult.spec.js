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
    instance = new ShopApi.SuggestionResult()
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

describe('SuggestionResultModel', () => {
    it('should create an instance of SuggestionResultModel', () => {
        // uncomment below and update the code to test SuggestionResultModel
        // var instane = new ShopApi.SuggestionResult()
        // expect(instance).to.be.a(ShopApi.SuggestionResult);
    })

    it('should have the property brandSuggestions (base name: "brand_suggestions")', () => {
        // uncomment below and update the code to test the property brandSuggestions
        // var instane = new ShopApi.SuggestionResult()
        // expect(instance).to.be();
    })

    it('should have the property categorySuggestions (base name: "category_suggestions")', () => {
        // uncomment below and update the code to test the property categorySuggestions
        // var instane = new ShopApi.SuggestionResult()
        // expect(instance).to.be();
    })

    it('should have the property contentSuggestions (base name: "content_suggestions")', () => {
        // uncomment below and update the code to test the property contentSuggestions
        // var instane = new ShopApi.SuggestionResult()
        // expect(instance).to.be();
    })

    it('should have the property customSuggestions (base name: "custom_suggestions")', () => {
        // uncomment below and update the code to test the property customSuggestions
        // var instane = new ShopApi.SuggestionResult()
        // expect(instance).to.be();
    })

    it('should have the property productSuggestions (base name: "product_suggestions")', () => {
        // uncomment below and update the code to test the property productSuggestions
        // var instane = new ShopApi.SuggestionResult()
        // expect(instance).to.be();
    })

    it('should have the property query (base name: "query")', () => {
        // uncomment below and update the code to test the property query
        // var instane = new ShopApi.SuggestionResult()
        // expect(instance).to.be();
    })

})
