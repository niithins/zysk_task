'use client';

import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define field configurations in an array
const fieldsConfig = [
  { name: 'name', required: true, disabled: false, minLength: 2 },
  { name: 'lastname', required: true, disabled: false },
  { name: 'email', required: true, disabled: false, pattern: 'email' },
  { name: 'phone', required: false, disabled: false, minLength: 10 },
  { name: 'companyname', required: false, disabled: false },
  { name: 'addressline1', required: true, disabled: false },
  { name: 'addressline2', required: false, disabled: true },
  { name: 'postalcode', required: true, disabled: false, minLength: 5, maxLength: 10 },
  { name: 'city', required: true, disabled: false },
  { name: 'state', required: true, disabled: false },
  { name: 'country', required: true, disabled: false },
];

const RegistrationForm = () => {
  const [productOptions] = useState(['management', 'IT', 'event_service']);
  const [initialValues] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    companyname: '',
    addressline1: '',
    addressline2: '',
    postalcode: '',
    city: '',
    state: '',
    country: '',
    products: [],
  });

  // Define filterFields function to exclude disabled fields
  const filterFields = (values) => {
    const filteredValues = {};
    fieldsConfig.forEach(field => {
      if (!field.disabled) {
        filteredValues[field.name] = values[field.name];
      }
    });
    return filteredValues;
  };

  // Build validation schema dynamically
  const buildValidationSchema = () => {
    const schemaFields = {};
    fieldsConfig.forEach(field => {
      if (field.disabled) return; // Skip disabled fields

      let fieldSchema = Yup.string();

      if (field.required) {
        fieldSchema = fieldSchema.required(`${field.name.replace(/([A-Z])/g, ' $1')} is required`);
      }

      if (field.minLength) {
        fieldSchema = fieldSchema.min(field.minLength, `Minimum length is ${field.minLength}`);
      }

      if (field.maxLength) {
        fieldSchema = fieldSchema.max(field.maxLength, `Maximum length is ${field.maxLength}`);
      }

      if (field.pattern === 'email') {
        fieldSchema = fieldSchema.email('Invalid email address');
      }

      schemaFields[field.name] = fieldSchema;
    });

    return Yup.object(schemaFields);
  };

  // Form submission handler
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const filteredValues = filterFields(values);
      console.log('Form Data Before Submission:', filteredValues);

      const response = await fetch('/your-api-endpoint', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...filteredValues,
          product_of_interest: values.products,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response from API:', data);
      resetForm();
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={buildValidationSchema()}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg mx-auto">
          <h2 className="text-xl font-semibold mb-4">Event Registration</h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Conditional Fields Rendering */}
            {fieldsConfig.map(field => {
              if (field.disabled) return null; // Skip fields marked as disabled

              return (
                <div key={field.name} className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    {field.name.replace(/([A-Z])/g, ' ').toUpperCase()}
                  </label>
                  <Field
                    type="text"
                    name={field.name}
                    className="mt-1 block w-full border-b-4 border-gray-300 rounded-md p-2"
                  />
                  <ErrorMessage name={field.name} component="div" className="text-red-500 text-sm" />
                </div>
              );
            })}

            {/* Products Checkbox */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Product of Interest (Multi Select)</label>
              <div className="flex flex-col mt-1">
                {productOptions.map(product => (
                  <div key={product} className="flex items-center mb-2">
                    <Field
                      type="checkbox"
                      name="products"
                      value={product}
                      checked={values.products.includes(product)}
                      onChange={({ target: { checked, value } }) => {
                        setFieldValue(
                          'products',
                          checked ? [...values.products, value] : values.products.filter(item => item !== value)
                        );
                      }}
                      className="mr-2"
                    />
                    <span>{product.replace('_', ' ').toUpperCase()}</span>
                  </div>
                ))}
              </div>
              <ErrorMessage name="products" component="div" className="text-red-500 text-sm" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-red-600 w-2/3 text-white py-2 px-4 rounded-md" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
