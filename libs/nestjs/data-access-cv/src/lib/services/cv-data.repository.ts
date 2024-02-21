import { Injectable } from '@nestjs/common';
import { CvData, EN_CV, LangCode, PL_CV } from '@gv-cv/shared-util-types';

@Injectable()
export class CvDataRepository {
  private readonly DB: CvData[] = [PL_CV, EN_CV];

  public async findAll(): Promise<CvData[]> {
    return this.DB;
  }

  public async findByLang(lang: LangCode): Promise<CvData | undefined> {
    return (await this.findAll()).find((oneCv: CvData) => oneCv.lang === lang);
  }
}
