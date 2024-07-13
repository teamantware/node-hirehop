import { EndpointsBase } from "../EndpointsBase";
import { GetJobResponse } from "./types";

export class JobsEndpoints extends EndpointsBase {
  public async get(id: number) {
    const params = this.paramsFor({ job: id });

    const data = await this.getRequest<GetJobResponse>(
      `/api/job_data.php${params}`,
    );

    // TODO: map the data into a better format that can
    // easily be used.

    return data;
  }
}
