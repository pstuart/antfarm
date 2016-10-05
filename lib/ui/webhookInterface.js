"use strict";
var shortid = require("shortid"), _ = require("lodash");
var WebhookInterface = (function () {
    /**
     * Constructor
     * @param {Environment} e
     * @param {WebhookNest} nest
     */
    function WebhookInterface(e, nest) {
        this.e = e;
        this.nest = nest;
        this.sessionId = shortid.generate();
        this.steps = [];
        this.fields = [];
    }
    WebhookInterface.prototype.getSessionId = function () {
        return this.sessionId;
    };
    /**
     * Get the nest
     * @returns {WebhookNest}
     */
    WebhookInterface.prototype.getNest = function () {
        return this.nest;
    };
    /**
     * Adds an interface field to the interface.
     * @param {FieldOptions} field
     */
    WebhookInterface.prototype.addField = function (field) {
        var wi = this;
        var existingField = _.find(wi.fields, function (f) { return f.id === field.id; });
        if (existingField) {
            wi.e.log(3, "Field id \"" + field.id + "\" already exists. It cannot be added again.", wi);
            return false;
        }
        this.fields.push(field);
    };
    /**
     * Overwrites fields with a clone.
     * @param fields
     */
    WebhookInterface.prototype.setFields = function (fields) {
        var newFields = [];
        fields.forEach(function (field) {
            // Clone field
            var newField = {};
            newField.description = field.description;
            newField.id = field.id;
            newField.value = field.value;
            newField.required = field.required;
            newField.max_length = field.max_length;
            newField.tooltip = field.tooltip;
            newField.valueList = field.valueList;
            newField.name = field.name;
            newField.type = field.type;
            newFields.push(newField);
        });
        this.fields = newFields;
    };
    WebhookInterface.prototype.getFields = function () {
        return this.fields;
    };
    /**
     * Returns the interface for transport.
     * @returns {{fields: Array}}
     */
    WebhookInterface.prototype.getTransportInterface = function () {
        var jobs = this.getJobs();
        var jobsArray = [];
        jobs.forEach(function (job) {
            jobsArray.push({
                id: job.getId(),
                name: job.getName(),
                path: job.getPath()
            });
        });
        // console.log(jobs as JobsInterface[]);
        return {
            sessionId: this.sessionId,
            fields: this.fields,
            jobs: jobsArray,
            steps: this.getSteps()
        };
    };
    /**
     * Adds pending jobs to the interfaces job list.
     * @param nest
     */
    WebhookInterface.prototype.checkNest = function (nest) {
        this.checkpointNest = nest;
    };
    WebhookInterface.prototype.getJobs = function () {
        if (this.checkpointNest) {
            return this.checkpointNest.getUnwatchedJobs();
        }
        else {
            return [];
        }
    };
    /**
     * Adds a user interface step
     * @param stepName
     * @param callback
     */
    WebhookInterface.prototype.addStep = function (stepName, callback) {
        var step = {};
        step.name = stepName;
        step.callback = callback;
        step.complete = false;
        this.steps.push(step);
    };
    /**
     *
     * @returns {Step[]}
     */
    WebhookInterface.prototype.getSteps = function () {
        return this.steps;
    };
    WebhookInterface.prototype.setSteps = function (steps) {
        var newSteps = [];
        steps.forEach(function (step) {
            var newStep = {};
            newStep.name = step.name;
            newStep.callback = step.callback;
            newStep.complete = false;
            newSteps.push(newStep);
        });
        this.steps = newSteps;
    };
    return WebhookInterface;
}());
exports.WebhookInterface = WebhookInterface;