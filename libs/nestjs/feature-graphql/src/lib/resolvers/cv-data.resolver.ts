import { Query, Resolver } from '@nestjs/graphql';
import { CvDataDto } from '../dtos';
import { CvDataRepository } from '@gv-cv/nestjs-data-access';

@Resolver((of: CvDataDto) => CvDataDto)
export class CvDataResolver {
  public constructor(private readonly cvRepository: CvDataRepository) {}

  @Query(() => [CvDataDto])
  async list(): Promise<CvDataDto[]> {
    return this.cvRepository.findAll();
  }
}
