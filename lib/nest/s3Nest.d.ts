import { Nest } from "./nest";
import { FileJob } from "./../job/fileJob";
import { Environment } from "../environment/environment";
export declare class S3Nest extends Nest {
    protected client: any;
    protected s3: any;
    protected bucket: string;
    protected keyPrefix: string;
    protected checkEvery: number;
    protected allowCreation: boolean;
    /**
     * Constructor
     * @param e
     * @param bucket            AWS S3 bucket to watch.
     * @param keyPrefix         Optional key prefix (sub-directory) to watch.
     * @param checkEvery        Frequency of bucket checking, in minutes.
     * @param allowCreation     Create the bucket:prefix if it does not exist.
     */
    constructor(e: Environment, bucket: string, keyPrefix?: string, checkEvery?: number, allowCreation?: boolean);
    /**
     * Set hard-coded AWS credentials.
     * @param accessKeyId
     * @param secretAccessKey
     */
    setCredentials(accessKeyId: string, secretAccessKey: string): void;
    /**
     * Verify bucket and handle creation of bucket if need be.
     */
    protected verifyBucket(): void;
    /**
     * Verify that the bucket is available and exists
     * @param callback
     */
    protected headBucket(callback: any): void;
    protected createBucket(callback: any): void;
    load(): void;
    watch(): void;
    /**
     * Nest arrival
     * @param job
     */
    arrive(job: FileJob): void;
    take(): void;
}
