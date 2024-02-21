import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CvDataDto, CvDataRepository } from '@gv-cv/nestjs-data-access-cv';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { LangCode, PL_LANG_CODE } from '@gv-cv/shared-util-types';

@Controller('cv')
@ApiTags('Cv Data')
export class CvController {
  public constructor(private readonly cvRepository: CvDataRepository) {}

  @Get(':lang')
  @ApiParam({
    name: 'lang',
    example: PL_LANG_CODE,
  })
  @ApiOkResponse({ type: CvDataDto })
  public async getData(@Param('lang') lang: LangCode): Promise<CvDataDto> {
    const cv: CvDataDto | undefined = await this.cvRepository.findByLang(lang);

    if (!cv) {
      throw new NotFoundException(
        `Could not find cv data for language: ${lang}`,
      );
    }

    return cv;
  }
}
