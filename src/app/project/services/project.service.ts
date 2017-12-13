import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import {Project} from '../../projects/interfaces/Project'

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }
  
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
    /** Log a ProjectService message with the MessageService */
    private log(message: string) {
      console.log('ProjectService: ' + message);
    }
  
    private projectsUrl;
  
    /** GET project from the server */
    getProject(id): Observable<Project[]> {
      this.projectsUrl = 'http://localhost:3000/api/project/'+id;
      return this.http.get<Project[]>(this.projectsUrl)
        .pipe(
        tap(projects => this.log(`fetched project`)),
        catchError(this.handleError('getProject', []))
        );
    }

}
