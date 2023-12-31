const Joi = require("joi");

exports.postAddLoanSchema = {
  body: Joi.object({
    book: Joi.string().required(),
    out_date: Joi.date(),
    due_date: Joi.number().min(0).max(60),
    admin: Joi.string().required(),
    borrower: Joi.string().required(),
  }),
};

exports.getLoansSchema = {
  query: Joi.object({
    page: Joi.object({
      offset: Joi.number().integer(),
      limit: Joi.number().integer().when("offset", {
        is: Joi.exist(),
        then: Joi.required(),
        otherwise: Joi.forbidden(),
      }),
    }),
    sort: Joi.object({
      by: Joi.string().valid("out_date", "due_date"),
      order: Joi.string().valid("asc", "desc"),
    }),
    filters: Joi.object({
      admin: Joi.string(),
      book: Joi.string(),
    }),
  }),
};

exports.showLoanSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

