import { Query, Resolver } from '@nestjs/graphql';
import { CvDataDto } from '../dtos';
import {
  EN_CV,
  EN_LANG_CODE,
  PL_CV,
  PL_LANG_CODE,
} from '@gv-cv/shared-util-types';

@Resolver((of: CvDataDto) => CvDataDto)
export class CvDataResolver {
  @Query(() => [CvDataDto])
  async list(): Promise<CvDataDto[]> {
    return [
      {
        lang: PL_LANG_CODE,
        ...PL_CV,
      },
      {
        lang: EN_LANG_CODE,
        ...EN_CV,
      },
    ];
  }
}
