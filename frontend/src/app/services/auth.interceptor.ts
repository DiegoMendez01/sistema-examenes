import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { LoginService } from "./login.service";
import { inject } from "@angular/core";
import { Observable } from "rxjs";

export const AuthInterceptor: HttpInterceptorFn = (
    request: HttpRequest<any>,
    next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
    const loginService = inject(LoginService);
    const token        = loginService.getToken()

    if(token != null){
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    return next(request)
}