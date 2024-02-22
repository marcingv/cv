import { inject, Injectable } from '@angular/core';
import { CvDataApi } from './cv-data-api';
import { CvData, LangCode } from '@gv-cv/shared-util-types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface GetCvByLangResponsePayload {
  data: {
    getCvByLang: CvData;
  };
}

@Injectable({
  providedIn: 'root',
})
export class CvDataGraphqlService extends CvDataApi {
  private http: HttpClient = inject(HttpClient);

  public override fetchData(lang: LangCode): Observable<CvData> {
    return this.http
      .post<GetCvByLangResponsePayload>(
        `/graphql`,
        {
          query: `
        {
          getCvByLang(lang: "${lang}") {
            lang
            employee {
              firstName
              lastName
              specialization
              contact {
                country
                city
                phone
                email
              }
              about
              skills {
                name
                description
                category
                advancementLevel
              }
              additionalSkills {
                name
                description
                category
                advancementLevel
              }
              hobbies {
                name
              }
            }
            education {
              name
              description
              from
              to
            }
            jobs {
              from
              to
              company
              role
              description
              usedSkills {
                name
                description
                category
                advancementLevel
              }
            }
            projects {
              name
              companyName
              role
              description
              responsibilities
              from
              to
              usedSkills {
                name
                description
                category
                advancementLevel
              }
            }
            languages {
              name
              advancementDescription
            }
          }
        }
    `,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .pipe(map((response) => response.data.getCvByLang));
  }
}
