/// <reference types="cypress" />

import { RegisterAPI } from "../models/APIhelpers";

describe("template spec", () => {
  it("Register API", () => {
    RegisterAPI();
  });
});
