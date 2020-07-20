import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { WorkflowService } from './workflow.service';

@Injectable()
export class WorkflowGuard implements CanActivate {
  constructor(
    private router: Router,
    private workflowService: WorkflowService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let path: string = route.routeConfig.path;

    return this.verifyWorkFlow(path);
  }

  verifyWorkFlow(path): boolean {
    console.log("Path '" + path + "'");

    // If a step is invalid, go back to the first step
    let firstPath = this.workflowService.getFirstInvalidStep(path);
    if (firstPath.length > 0) {
      console.log("Redirected to '" + firstPath + "' - first step.");
      let url = `/${firstPath}`;
      this.router.navigate([url]);
      return false;
    }

    return true;
  }
}
