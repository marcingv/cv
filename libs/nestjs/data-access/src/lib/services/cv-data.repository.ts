import { Injectable } from '@nestjs/common';
import { CvDataDto } from '../dtos';
import { EN_CV, LangCode, PL_CV } from '@gv-cv/shared-util-types';

@Injectable()
export class CvDataRepository {
  private readonly DB: CvDataDto[] = [PL_CV, EN_CV];

  public async findAll(): Promise<CvDataDto[]> {
    return this.DB;
  }

  public async findByLang(lang: LangCode): Promise<CvDataDto | undefined> {
    return (await this.findAll()).find(
      (oneCv: CvDataDto) => oneCv.lang === lang,
    );
  }
}
