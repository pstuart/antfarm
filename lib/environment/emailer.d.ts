import { EmailOptions } from "./emailOptions";
import { EmailCredentials } from "./emailCredentials";
import { Environment } from "./environment";
import { Job } from "../job/job";
import { Transporter } from "nodemailer";
/**
 * Emailing service
 */
export declare class Emailer {
    protected e: Environment;
    protected nodemailerTransport: Transporter;
    protected credentials: any;
    constructor(e: Environment, credentials: EmailCredentials);
    /**
     * Collects options a executes nodemailer.
     * @param options {EmailOptions}
     * @param job: {Job}
     */
    sendMail(options: EmailOptions, job?: Job): void;
    /**
     * Send an email with nodemailer.
     * @param nodemailerOptions
     */
    protected executeSend(nodemailerOptions: any): void;
    /**
     * This finds and compiles a _path to a jade template and returns HTML in the callback.
     * @param filePath {string}     The _path to the file.
     * @param job {Job}             The job object which is passed into Jade.
     * @param callback              returns the complied jade template as html
     */
    protected compileJade(filePath: string, job: Job, callback: any): void;
}
