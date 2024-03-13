import { Args, Query, Resolver } from '@nestjs/graphql';
import { CvDataDto } from '../dtos';
import { CvDataRepository } from '@gv-cv/nestjs-data-access-cv';
import { LangCode } from '@gv-cv/shared-util-types';

@Resolver((_of: CvDataDto) => CvDataDto)
export class CvDataResolver {
  public constructor(private readonly cvRepository: CvDataRepository) {}

  @Query(() => [CvDataDto], { name: 'getCvList' })
  async list(): Promise<CvDataDto[]> {
    return this.cvRepository.findAll();
  }

  @Query(() => CvDataDto, { nullable: true, name: 'getCvByLang' })
  async get(
    @Args('lang', { type: () => String }) lang: LangCode,
  ): Promise<CvDataDto | undefined> {
    return this.cvRepository.findByLang(lang);
  }
}
