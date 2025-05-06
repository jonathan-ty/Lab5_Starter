// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Expect True for isPhoneNumber
test('Checks if 012-345-6789 is a phone number:', () => {
  expect(isPhoneNumber('012-345-6789')).toBe(true);
});

test('Checks if 111-222-3333 is a phone number:', () => {
  expect(isPhoneNumber('111-222-3333')).toBe(true);
});

// Expect False for isPhoneNumber
test('Checks if ABC is a phone number:', () => {
  expect(isPhoneNumber('ABC')).toBe(false);
});

test('Checks if 12345 is a phone number:', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});

// Expect true for isEmail
test('Checks if name@ucsd.edu is an email:', () => {
  expect(isEmail('name@ucsd.edu')).toBe(true);
});

test('Checks if name123@gmail.com is an email:', () => {
  expect(isEmail('name123@gmail.com')).toBe(true);
});

// Expect false for isEmail
test('Checks if 1@u is an email:', () => {
  expect(isEmail('1@u')).toBe(false);
});

test('Checks if 123.edu is an email:', () => {
  expect(isEmail('123.edu')).toBe(false);
});

// Expect true for isStrongPassword
test('Checks if E12_3p', () => {
  expect(isStrongPassword('E12_3p')).toBe(true);
});

test('Checks if E12_3p', () => {
  expect(isStrongPassword('i_lov3_cak3')).toBe(true);
});


// Expect false for isStrongPassword
test('Checks if 123 isStrongPassword', () => {
  expect(isStrongPassword('123')).toBe(false);
});

test('Checks if plz isStrongPassword', () => {
  expect(isStrongPassword('plz')).toBe(false);
});

// Expect true for isDate
test('Checks if 11/10/2004 isDate', () => {
  expect(isDate('11/10/2004')).toBe(true);
});

test('Checks if 5/5/2025 isDate', () => {
  expect(isDate('5/5/2025')).toBe(true);
});


// Expect false for isDate
test('Checks if 1/2/23 isDate', () => {
  expect(isDate('1/2/23')).toBe(false);
});

test('Checks if December 5th isDate', () => {
  expect(isDate('December 5th')).toBe(false);
});

//Expect true for isHexColor
test('Checks if FFFFFF isHexColor', () => {
  expect(isHexColor('FFFFFF')).toBe(true);
});

test('Checks if 00A782 isHexColor', () => {
  expect(isHexColor('00A782')).toBe(true);
});


//Expect false for isHexColor
test('Checks if 7 isHexColor', () => {
  expect(isHexColor('7')).toBe(false);
});

test('Checks if @123A isHexColor', () => {
  expect(isHexColor('@123A')).toBe(false);
});