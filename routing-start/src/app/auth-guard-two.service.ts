import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export const AuthGuardTwo: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  
    const router: Router = inject(Router);
    const authService: AuthService = inject(AuthService);
  
    return authService.isAuthenticated()
            .then(
                (authenticated: boolean | unknown) => {
                    if(authenticated) {
                        return true;
                    } else {
                        router.navigate(['/']);
                        return false;
                    }
                }
            );
  
  }
