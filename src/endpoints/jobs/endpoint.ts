import { EndpointsBase } from "../EndpointsBase";
import { formatJob } from "./functions";
import { GetJobResponse } from "./types";

export class JobsEndpoints extends EndpointsBase {
  public async get(id: number) {
    const params = this.paramsFor({ job: id });

    const data = await this.getRequest<GetJobResponse>(
      `/api/job_data.php${params}`,
    );

    if (!data) {
      return null;
    }

    return formatJob(data);
  }
}
